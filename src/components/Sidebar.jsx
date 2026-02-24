import {
    LayoutDashboard,
    History,
    PlusCircle,
    LogOut,
    User,
    ClipboardList
} from 'lucide-react'
import supabase from '../utils/supabase-client'
import Logo from './Logo'

export default function Sidebar({ activeTab, setActiveTab, userEmail }) {
    const handleLogout = async () => {
        await supabase.auth.signOut()
        // ProtectedRoute handles the redirect
    }

    const navItems = [
        { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
        { id: 'history', label: 'History', icon: History },
        { id: 'add', label: 'Add Workout', icon: PlusCircle },
        { id: 'workout-plan', label: 'Workout Plan', icon: ClipboardList }
    ]

    return (
        <aside style={{
            width: '260px',
            height: '100vh',
            background: 'var(--card-bg)',
            borderRight: '1px solid var(--glass-border)',
            display: 'flex',
            flexDirection: 'column',
            position: 'fixed',
            left: 0,
            top: 0
        }}>
            {/* Logo Area */}
            <div style={{
                padding: '1.5rem',
                borderBottom: '1px solid var(--glass-border)'
            }}>
                <Logo />
            </div>

            {/* Navigation Links */}
            <div style={{ flex: 1, padding: '1.5rem 1rem', overflowY: 'auto' }}>
                <nav style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                    {navItems.map((item) => {
                        const Icon = item.icon
                        const isActive = activeTab === item.id

                        return (
                            <button
                                key={item.id}
                                onClick={() => setActiveTab(item.id)}
                                style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '0.5rem',
                                    padding: '0.75rem 1rem',
                                    borderRadius: '8px',
                                    border: 'none',
                                    background: isActive ? 'rgba(0, 210, 255, 0.1)' : 'transparent',
                                    color: isActive ? 'var(--primary)' : 'var(--text-dim)',
                                    cursor: 'pointer',
                                    textAlign: 'left',
                                    fontSize: '1rem',
                                    fontWeight: isActive ? '600' : '400',
                                    transition: 'all 0.2s ease'
                                }}
                                onMouseEnter={(e) => {
                                    if (!isActive) e.currentTarget.style.background = 'rgba(255,255,255,0.05)'
                                }}
                                onMouseLeave={(e) => {
                                    if (!isActive) e.currentTarget.style.background = 'transparent'
                                }}
                            >
                                <Icon size={20} />
                                {item.label}
                            </button>
                        )
                    })}
                </nav>
            </div>

            {/* User Info & Logout */}
            <div style={{
                padding: '1rem',
                borderTop: '1px solid var(--glass-border)',
                display: 'flex',
                flexDirection: 'column',
                gap: '0.75rem'
            }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                    <div style={{
                        width: '36px',
                        height: '36px',
                        borderRadius: '50%',
                        background: 'var(--glass-border)',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}>
                        <User size={18} color="var(--text-dim)" />
                    </div>
                    <div style={{ overflow: 'hidden' }}>
                        <p style={{ margin: 0, fontSize: '0.85rem', color: 'var(--text-dim)', textOverflow: 'ellipsis', whiteSpace: 'nowrap', overflow: 'hidden' }}>
                            {userEmail}
                        </p>
                        <p style={{ margin: 0, fontSize: '0.75rem', color: 'var(--primary)', fontWeight: '600' }}>User Mode</p>
                    </div>
                </div>

                <button
                    onClick={handleLogout}
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '0.5rem',
                        padding: '0.75rem',
                        borderRadius: '8px',
                        border: '1px solid var(--glass-border)',
                        background: 'transparent',
                        color: 'var(--text)',
                        cursor: 'pointer',
                        transition: 'background 0.2s',
                        fontSize: '0.9rem'
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(255,50,50,0.1)'}
                    onMouseLeave={(e) => e.currentTarget.style.background = 'transparent'}
                >
                    <LogOut size={16} />
                    Sign Out
                </button>
            </div>
        </aside>
    )
}
