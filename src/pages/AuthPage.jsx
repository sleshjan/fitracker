import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import supabase from '../utils/supabase-client'
import Logo from '../components/Logo'

export default function AuthPage() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [authError, setAuthError] = useState(null)
    const [authMessage, setAuthMessage] = useState(null)
    const [isLoading, setIsLoading] = useState(false)
    const navigate = useNavigate()

    const handleSignUp = async (e) => {
        e.preventDefault()
        setAuthError(null)
        setAuthMessage(null)
        setIsLoading(true)

        const { data, error } = await supabase.auth.signUp({
            email,
            password,
        })

        setIsLoading(false)

        if (error) {
            setAuthError(error.message)
        } else if (data.user && data.user.identities && data.user.identities.length === 0) {
            setAuthError("This email is already registered. Please log in.")
        } else {
            setAuthMessage('Account created! Please log in.')
            // Optional: automatically log them in or wait for email verification if enabled in Supabase
        }
    }

    const handleLogin = async (e) => {
        e.preventDefault()
        setAuthError(null)
        setAuthMessage(null)
        setIsLoading(true)

        const { data, error } = await supabase.auth.signInWithPassword({
            email,
            password,
        })

        if (error) {
            setIsLoading(false)
            setAuthError(error.message)
        } else if (data.user) {
            // Fetch role before navigating to prevent loops or jumping
            const { data: profile } = await supabase
                .from('profiles')
                .select('role')
                .eq('id', data.user.id)
                .single()

            setIsLoading(false)
            if (profile?.role === 'admin') {
                navigate('/admin')
            } else {
                navigate('/dashboard')
            }
        } else {
            setIsLoading(false)
        }
    }

    return (
        <div className="container" style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', justifyContent: 'center' }}>
            <nav style={{ position: 'absolute', top: 0, width: '100%', padding: '1.5rem 0' }}>
                <div className="logo-container" style={{ display: 'flex', justifyContent: 'center' }}>
                    <Logo />
                </div>
            </nav>

            <main className="hero" style={{ paddingTop: '80px', minHeight: 'auto' }}>
                <h1 className="floating">Fuel Your Fitness Journey</h1>
                <p>Log in or create an account to start tracking your progress.</p>

                <div className="glass-card" style={{ maxWidth: '400px', width: '100%', padding: '2.5rem' }}>
                    <form style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>

                        {authError && (
                            <div style={{ padding: '1rem', background: 'rgba(255, 50, 50, 0.1)', border: '1px solid rgba(255, 50, 50, 0.3)', borderRadius: '8px', color: '#ff6b6b', fontSize: '0.9rem' }}>
                                {authError}
                            </div>
                        )}

                        {authMessage && (
                            <div style={{ padding: '1rem', background: 'rgba(50, 255, 100, 0.1)', border: '1px solid rgba(50, 255, 100, 0.3)', borderRadius: '8px', color: '#51cf66', fontSize: '0.9rem' }}>
                                {authMessage}
                            </div>
                        )}

                        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', textAlign: 'left' }}>
                            <label htmlFor="email" style={{ color: 'var(--text-dim)', fontSize: '0.9rem' }}>Email address</label>
                            <input
                                id="email"
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="you@example.com"
                                style={{
                                    padding: '0.8rem 1rem',
                                    borderRadius: '12px',
                                    border: '1px solid var(--glass-border)',
                                    background: 'rgba(0,0,0,0.2)',
                                    color: 'white',
                                    outline: 'none',
                                    fontSize: '1rem'
                                }}
                                required
                            />
                        </div>

                        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', textAlign: 'left' }}>
                            <label htmlFor="password" style={{ color: 'var(--text-dim)', fontSize: '0.9rem' }}>Password</label>
                            <input
                                id="password"
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder="••••••••"
                                style={{
                                    padding: '0.8rem 1rem',
                                    borderRadius: '12px',
                                    border: '1px solid var(--glass-border)',
                                    background: 'rgba(0,0,0,0.2)',
                                    color: 'white',
                                    outline: 'none',
                                    fontSize: '1rem'
                                }}
                                required
                            />
                        </div>

                        <div style={{ display: 'flex', gap: '1rem', marginTop: '1rem' }}>
                            <button
                                className="cta-button"
                                onClick={handleLogin}
                                style={{ flex: 1, padding: '0.8rem' }}
                                type="button"
                                disabled={isLoading}
                            >
                                {isLoading ? '...' : 'Log In'}
                            </button>
                            <button
                                className="cta-button"
                                onClick={handleSignUp}
                                style={{ flex: 1, padding: '0.8rem', background: 'transparent', border: '1px solid var(--primary)', color: 'var(--primary)' }}
                                type="button"
                                disabled={isLoading}
                            >
                                Sign Up
                            </button>
                        </div>
                    </form>
                </div>
            </main>
        </div>
    )
}
