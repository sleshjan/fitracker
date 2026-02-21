import { useEffect, useState } from 'react'
import supabase from '../utils/supabase-client'
import Logo from '../components/Logo'

export default function AdminDashboard() {
    const [totalUsers, setTotalUsers] = useState(0)
    const [loading, setLoading] = useState(true)
    const [user, setUser] = useState(null)

    useEffect(() => {
        let isMounted = true

        async function fetchAdminData() {
            const { data: { session } } = await supabase.auth.getSession()
            if (!isMounted) return

            setUser(session?.user)

            // Only admins should ideally be able to count all profiles depending on RLS.
            // If RLS blocks this, you might need a backend function, but for now we try.
            const { count, error } = await supabase
                .from('profiles')
                .select('*', { count: 'exact', head: true })

            if (!error && isMounted) {
                setTotalUsers(count || 0)
            }
            setLoading(false)
        }

        fetchAdminData()

        return () => {
            isMounted = false
        }
    }, [])

    const handleLogout = async () => {
        await supabase.auth.signOut()
        // ProtectedRoute handles the redirect
    }

    if (loading) {
        return (
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', background: 'var(--bg)' }}>
                <p className="floating" style={{ color: 'var(--primary)', fontSize: '1.2rem' }}>Loading Admin Panel...</p>
            </div>
        )
    }

    return (
        <div className="container">
            <nav>
                <div className="logo-container">
                    <Logo />
                </div>
                <div className="nav-links">
                    <span style={{ color: '#ff4b4b', alignSelf: 'center', marginRight: '1rem', fontWeight: 'bold' }}>
                        Admin Mode
                    </span>
                    <button onClick={handleLogout} className="cta-button" style={{ padding: '0.4rem 1.2rem', fontSize: '0.9rem', background: 'transparent', border: '1px solid #ff4b4b', color: '#ff4b4b' }}>
                        Logout
                    </button>
                </div>
            </nav>

            <main style={{ padding: '2rem 0' }}>
                <h1 style={{ marginBottom: '0.5rem' }}>Admin Dashboard</h1>
                <p style={{ color: 'var(--text-dim)', marginBottom: '3rem' }}>Manage the Fitracker platform.</p>

                <div className="features">
                    <div className="feature-card" style={{ borderColor: 'rgba(255, 75, 75, 0.3)' }}>
                        <span className="feature-icon">👥</span>
                        <h3>Total Users</h3>
                        <p style={{ fontSize: '2rem', color: '#fff', fontWeight: 'bold', marginTop: '1rem' }}>
                            {totalUsers}
                        </p>
                    </div>
                    <div className="feature-card" style={{ borderColor: 'rgba(255, 75, 75, 0.3)' }}>
                        <span className="feature-icon">⚙️</span>
                        <h3>System Status</h3>
                        <p style={{ fontSize: '1.2rem', color: '#51cf66', fontWeight: 'bold', marginTop: '1rem' }}>
                            Online
                        </p>
                    </div>
                </div>
            </main>
        </div>
    )
}
