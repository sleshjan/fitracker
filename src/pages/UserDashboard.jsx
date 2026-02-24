import { useState, useEffect, useCallback } from 'react'
import supabase from '../utils/supabase-client'
import Sidebar from '../components/Sidebar'
import DashboardPanel from '../components/DashboardPanel'
import HistoryPanel from '../components/HistoryPanel'
import AddWorkoutPanel from '../components/AddWorkoutPanel'
import WorkoutPlanPanel from '../components/WorkoutPlanPanel'

export default function UserDashboard() {
    const [activeTab, setActiveTab] = useState('dashboard') // 'dashboard' | 'history' | 'add'
    const [workouts, setWorkouts] = useState([])
    const [loading, setLoading] = useState(true)
    const [user, setUser] = useState(null)

    const fetchWorkouts = useCallback(async (userId) => {
        // Only fetch if we have a user
        if (!userId) return

        setLoading(true)
        const { data: userWorkouts, error: fetchError } = await supabase
            .from('workouts')
            .select('*')
            .eq('user_id', userId)
            .order('date', { ascending: false })
            .order('created_at', { ascending: false })

        if (fetchError) {
            console.error("Error fetching workouts:", fetchError)
        } else {
            setWorkouts(userWorkouts || [])
        }
        setLoading(false)
    }, [])

    useEffect(() => {
        let isMounted = true

        async function init() {
            const { data: { session } } = await supabase.auth.getSession()
            if (!isMounted) return

            if (session?.user) {
                setUser(session.user)
                fetchWorkouts(session.user.id)
            } else {
                setLoading(false)
            }
        }

        init()

        return () => {
            isMounted = false
        }
    }, [fetchWorkouts])

    // Handler passed to AddWorkoutPanel to immediately update UI state
    const handleWorkoutAdded = (newWorkout, needsFullRefresh = false) => {
        if (needsFullRefresh && user) {
            fetchWorkouts(user.id)
        } else if (newWorkout) {
            setWorkouts(prev => [newWorkout, ...prev].sort((a, b) => new Date(b.date) - new Date(a.date)))
        }
    }

    // Handle rendering the main content area based on the active tab
    const renderContent = () => {
        if (loading) {
            return (
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%', opacity: 0.7 }}>
                    <p className="floating" style={{ color: 'var(--primary)', fontSize: '1.2rem' }}>Loading data...</p>
                </div>
            )
        }

        switch (activeTab) {
            case 'dashboard':
                return <DashboardPanel workouts={workouts} />
            case 'history':
                return <HistoryPanel workouts={workouts} />
            case 'add':
                return <AddWorkoutPanel user={user} onWorkoutAdded={handleWorkoutAdded} />
            case 'workout-plan':
                return <WorkoutPlanPanel />
            default:
                return <DashboardPanel workouts={workouts} />
        }
    }

    return (
        <div style={{ display: 'flex', minHeight: '100vh', background: 'var(--bg)' }}>
            {/* Fixed Sidebar */}
            <Sidebar
                activeTab={activeTab}
                setActiveTab={setActiveTab}
                userEmail={user?.email || 'Loading...'}
            />

            {/* Main Content Area - Scrollable */}
            <main style={{
                flex: 1,
                minWidth: 0, // CRITICAL for ResponsiveContainer in flex
                marginLeft: '260px', // Offset by sidebar width
                height: '100vh',
                overflowY: 'auto',
                background: 'radial-gradient(ellipse at top right, rgba(26, 32, 44, 0.4), var(--bg))'
            }}>
                {renderContent()}
            </main>
        </div>
    )
}
