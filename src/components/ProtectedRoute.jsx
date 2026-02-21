import { useEffect, useState } from 'react'
import { Navigate } from 'react-router-dom'
import supabase from '../utils/supabase-client'

export default function ProtectedRoute({ children, allowedRoles }) {
    const [loading, setLoading] = useState(true)
    const [session, setSession] = useState(null)
    const [role, setRole] = useState(null)

    useEffect(() => {
        let isMounted = true

        async function checkUser() {
            // 1. Get the session
            const { data: { session: currentSession } } = await supabase.auth.getSession()

            if (!isMounted) return

            if (!currentSession) {
                setSession(null)
                setRole(null)
                setLoading(false)
                return
            }

            // Only fetch role if we don't already have the role for this user
            if (session?.user?.id !== currentSession.user.id || !role) {
                setSession(currentSession)

                const { data: profile, error } = await supabase
                    .from('profiles')
                    .select('role')
                    .eq('id', currentSession.user.id)
                    .single()

                if (isMounted) {
                    if (!error && profile) {
                        setRole(profile.role)
                    } else {
                        console.error("Error fetching user profile:", error)
                        setRole('user')
                    }
                }
            }

            if (isMounted) setLoading(false)
        }

        checkUser()

        // Listen for auth changes to recheck session
        const { data: { subscription } } = supabase.auth.onAuthStateChange(async (event, newSession) => {
            if (!isMounted) return

            if (event === 'SIGNED_OUT') {
                setSession(null)
                setRole(null)
                setLoading(false)
                return
            }

            // If a session occurs and the user changed, we need to trigger a re-fetch
            if (newSession && (session?.user?.id !== newSession.user.id)) {
                // We just call checkUser again to handle the state correctly
                checkUser()
            }
        })

        return () => {
            isMounted = false
            subscription.unsubscribe()
        }
    }, [session?.user?.id, role]) // Added dependencies here so checkUser has stable closures if needed, but [] works too since checkUser uses state updater or refs ideally. We'll stick to mostly empty to prevent loops, relying on the listener.

    if (loading) {
        return (
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', background: 'var(--bg)' }}>
                <p className="floating" style={{ color: 'var(--primary)', fontSize: '1.2rem' }}>Verifying Access...</p>
            </div>
        )
    }

    // If no session exists, redirect to login
    if (!session) {
        return <Navigate to="/" replace />
    }

    // If role is loaded but not in allowed list, redirect (basic role-based redirection)
    if (role && allowedRoles && !allowedRoles.includes(role)) {
        // If they are an admin trying to access a user page, redirect to admin
        if (role === 'admin') {
            return <Navigate to="/admin" replace />
        }
        // If they are a user trying to access an admin page, redirect to dashboard
        if (role === 'user') {
            return <Navigate to="/dashboard" replace />
        }

        // Fallback for safety
        return <Navigate to="/" replace />
    }

    return children
}
