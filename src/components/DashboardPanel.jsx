import { useMemo, useState, useEffect } from 'react'
import {
    BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip as RechartsTooltip, ResponsiveContainer,
    LineChart, Line, Legend, PieChart, Pie, Cell
} from 'recharts'
import { Activity, LayoutList, Target } from 'lucide-react'

export default function DashboardPanel({ workouts }) {
    // Safe width: sidebar is 260px, padding ~96px. Always valid from first render.
    const getWidth = () => Math.max(300, window.innerWidth - 260 - 96)
    const [chartWidth, setChartWidth] = useState(getWidth)

    useEffect(() => {
        const onResize = () => setChartWidth(getWidth())
        window.addEventListener('resize', onResize)
        return () => window.removeEventListener('resize', onResize)
    }, [])

    // Quick stats
    const totalWorkouts = workouts.length

    // Calculate unique exercises
    const uniqueExercises = useMemo(() => {
        const exercises = new Set(workouts.map(w => w.exercise_name?.toLowerCase().trim()))
        return exercises.size
    }, [workouts])

    // Process data for Volume by Date Chart (Sets * Reps per day)
    const volumeData = useMemo(() => {
        const dataMap = {}

        // Sort ascending for chronological chart
        const sortedWorkouts = [...workouts].sort((a, b) => new Date(a.date) - new Date(b.date))

        sortedWorkouts.forEach(workout => {
            if (!dataMap[workout.date]) {
                dataMap[workout.date] = { date: workout.date, volume: 0, sessions: 0 }
            }
            // DB column is "reps/time", not "reps"
            const s = Number(workout.sets) || 0;
            const r = Number(workout['reps']) || 0;
            dataMap[workout.date].volume += (s * r)
            dataMap[workout.date].sessions += 1
        })

        return Object.values(dataMap)
    }, [workouts])

    // Process data for Workout Type Pie Chart
    const typeData = useMemo(() => {
        const typeDays = {}
        workouts.forEach(workout => {
            const type = workout.type || 'unknown'
            const date = workout.date || 'unknown'

            if (!typeDays[type]) {
                typeDays[type] = new Set()
            }
            typeDays[type].add(date)
        })

        return Object.entries(typeDays).map(([name, dateSet]) => ({ name, value: dateSet.size }))
    }, [workouts])

    // Process data for Stacked Bar Chart (Exercises per day)
    const barChartData = useMemo(() => {
        const dataMap = {}
        const exerciseNames = new Set()

        const sortedWorkouts = [...workouts].sort((a, b) => new Date(a.date) - new Date(b.date))

        sortedWorkouts.forEach(workout => {
            const date = workout.date
            const name = workout.exercise_name || 'Unknown'
            exerciseNames.add(name)

            if (!dataMap[date]) {
                dataMap[date] = { date }
            }
            if (!dataMap[date][name]) {
                dataMap[date][name] = 0
            }
            dataMap[date][name] += 1
        })

        return {
            data: Object.values(dataMap),
            keys: Array.from(exerciseNames)
        }
    }, [workouts])

    // Colors for Charts
    const COLORS = [
        '#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#a288ff', '#ff88c2',
        '#88ffb1', '#ffc658', '#8dd1e1', '#a4de6c', '#d0ed57', '#ffc0cb', '#8a2be2'
    ]

    // Custom Tooltip for dark mode
    const CustomTooltip = ({ active, payload, label }) => {
        if (active && payload && payload.length) {
            const data = payload[0].payload;
            return (
                <div style={{
                    background: 'var(--card-bg)',
                    border: '1px solid var(--glass-border)',
                    backdropFilter: 'blur(20px)',
                    padding: '1.25rem',
                    borderRadius: '12px',
                    color: '#ffffff',
                    boxShadow: '0 8px 32px rgba(0,0,0,0.5)',
                    zIndex: 1000
                }}>
                    <p style={{ margin: '0 0 0.75rem 0', fontWeight: 'bold', fontSize: '1.1rem', color: '#ffffff' }}>{label}</p>
                    {payload.filter(entry => entry.value > 0).map((entry, index) => {
                        // For the BarChart, the color we want is the stroke color
                        // We can find its index in barChartData.keys to match it to COLORS
                        const keyIndex = barChartData.keys.findIndex(k => k === entry.name);
                        const displayColor = keyIndex !== -1 ? COLORS[keyIndex % COLORS.length] : entry.color;
                        return (
                            <div key={index} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', margin: '0.3rem 0' }}>
                                <span style={{ fontSize: '0.95rem', fontWeight: '600', color: displayColor, textShadow: '0px 1px 3px rgba(0,0,0,0.8)' }}>
                                    {entry.name}: {entry.value}
                                </span>
                            </div>
                        )
                    })}
                    {/* Add extra info if this is the LineChart (indicated by 'volume' presence in payload) */}
                    {payload.some(p => p.dataKey === 'volume') && data.sessions > 0 && (
                        <p style={{ color: 'var(--primary)', margin: '0.75rem 0 0 0', fontSize: '0.95rem', fontWeight: 'bold', paddingTop: '0.75rem', borderTop: '1px solid rgba(255,255,255,0.15)' }}>
                            Total Exercises: <span style={{ color: '#ffffff' }}>{data.sessions}</span>
                        </p>
                    )}
                </div>
            )
        }
        return null
    }

    if (workouts.length === 0) {
        return (
            <div style={{ padding: '2rem', height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', opacity: 0.6 }}>
                <Activity size={48} color="var(--primary)" style={{ marginBottom: '1rem' }} />
                <h2>Setup Complete!</h2>
                <p style={{ color: 'var(--text-dim)' }}>Log some workouts to see your analytics here.</p>
            </div>
        )
    }

    return (
        <div style={{ padding: '2rem' }}>
            <header style={{ marginBottom: '3rem' }}>
                <h1 style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>Dashboard Overview</h1>
                <p style={{ color: 'var(--text-dim)' }}>Your fitness journey at a glance.</p>
            </header>

            {/* Stat Cards */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.5rem', marginBottom: '3rem' }}>
                <div className="glass-card" style={{ padding: '1.5rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
                    <div style={{ background: 'rgba(0, 210, 255, 0.1)', padding: '1rem', borderRadius: '12px' }}>
                        <Activity size={24} color="var(--primary)" />
                    </div>
                    <div>
                        <p style={{ color: 'var(--text-dim)', fontSize: '0.9rem', margin: 0 }}>Total Activities</p>
                        <p style={{ fontSize: '1.5rem', fontWeight: 'bold', margin: '0.2rem 0 0 0' }}>{totalWorkouts}</p>
                    </div>
                </div>

                <div className="glass-card" style={{ padding: '1.5rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
                    <div style={{ background: 'rgba(50, 255, 100, 0.1)', padding: '1rem', borderRadius: '12px' }}>
                        <LayoutList size={24} color="#51cf66" />
                    </div>
                    <div>
                        <p style={{ color: 'var(--text-dim)', fontSize: '0.9rem', margin: 0 }}>Unique Exercises</p>
                        <p style={{ fontSize: '1.5rem', fontWeight: 'bold', margin: '0.2rem 0 0 0' }}>{uniqueExercises}</p>
                    </div>
                </div>

                <div className="glass-card" style={{ padding: '1.5rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
                    <div style={{ background: 'rgba(255, 150, 50, 0.1)', padding: '1rem', borderRadius: '12px' }}>
                        <Target size={24} color="#ffa500" />
                    </div>
                    <div>
                        <p style={{ color: 'var(--text-dim)', fontSize: '0.9rem', margin: 0 }}>Recent Session</p>
                        <p style={{ fontSize: '1.1rem', fontWeight: 'bold', margin: '0.2rem 0 0 0' }}>
                            {workouts[0]?.date || 'None'}
                        </p>
                    </div>
                </div>
            </div>

            {/* Charts Array */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '2rem' }}>

                {/* Line Chart: Volume over time */}
                <div className="glass-card" style={{ padding: '2rem', minWidth: 0 }}>
                    <h3 style={{ marginBottom: '2rem' }}>Total Rep Volume Over Time</h3>
                    <div style={{ width: '100%', height: '300px' }}>
                        <LineChart
                            width={chartWidth}
                            height={300}
                            data={volumeData}
                            margin={{ top: 10, right: 30, left: 10, bottom: 0 }}
                        >
                            <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.08)" vertical={false} />
                            <XAxis
                                dataKey="date"
                                stroke="#a0a0a0"
                                fontSize={11}
                                tickMargin={10}
                                axisLine={{ stroke: '#333' }}
                                tickLine={{ stroke: '#333' }}
                            />
                            <YAxis
                                stroke="#a0a0a0"
                                fontSize={11}
                                axisLine={{ stroke: '#333' }}
                                tickLine={{ stroke: '#333' }}
                            />
                            <RechartsTooltip content={<CustomTooltip />} />
                            <Legend iconType="circle" />
                            <Line
                                type="monotone"
                                name="Total Reps (Sets × Reps)"
                                dataKey="volume"
                                stroke="#00d2ff"
                                strokeWidth={3}
                                activeDot={{ r: 6, fill: '#00d2ff', strokeWidth: 0 }}
                                dot={{ fill: '#00d2ff', r: 3, strokeWidth: 0 }}
                                isAnimationActive={false}
                                connectNulls
                            />
                        </LineChart>
                    </div>
                </div>

                {/* Bar Chart: Sessions per day */}
                <div className="glass-card" style={{ padding: '2rem', minWidth: 0 }}>
                    <h3 style={{ marginBottom: '2rem' }}>Exercises Logged Per Day</h3>
                    <div style={{ width: '100%', height: '300px', minWidth: 0 }}>
                        {chartWidth > 0 && (
                            <ResponsiveContainer width="100%" height="100%">
                                <BarChart data={barChartData.data} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                                    <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" vertical={false} />
                                    <XAxis
                                        dataKey="date"
                                        stroke="#a0a0a0"
                                        fontSize={11}
                                        tickMargin={10}
                                        axisLine={{ stroke: '#333' }}
                                        tickLine={{ stroke: '#333' }}
                                    />
                                    <YAxis
                                        stroke="#a0a0a0"
                                        fontSize={11}
                                        allowDecimals={false}
                                        axisLine={{ stroke: '#333' }}
                                        tickLine={{ stroke: '#333' }}
                                    />
                                    <RechartsTooltip content={<CustomTooltip />} cursor={{ fill: 'rgba(255,255,255,0.05)' }} />
                                    {barChartData.keys.map((key, index) => (
                                        <Bar
                                            key={key}
                                            name={key}
                                            dataKey={key}
                                            stackId="a"
                                            fill="transparent"
                                            stroke={COLORS[index % COLORS.length]}
                                            strokeWidth={3}
                                            radius={[0, 0, 0, 0]}
                                        />
                                    ))}
                                </BarChart>
                            </ResponsiveContainer>
                        )}
                    </div>
                </div>

                {/* Pie Chart: Workout Types */}
                <div className="glass-card" style={{ padding: '2rem' }}>
                    <h3 style={{ marginBottom: '2rem' }}>Workout Type Distribution</h3>
                    <div style={{ height: '300px', width: '100%', minWidth: 0 }}>
                        {chartWidth > 0 && (
                            <ResponsiveContainer width="100%" height="100%">
                                <PieChart>
                                    <Pie
                                        data={typeData}
                                        cx="50%"
                                        cy="50%"
                                        innerRadius={60}
                                        outerRadius={100}
                                        paddingAngle={5}
                                        dataKey="value"
                                        stroke="none"
                                    >
                                        {typeData.map((entry, index) => (
                                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                        ))}
                                    </Pie>
                                    <RechartsTooltip
                                        contentStyle={{ background: 'var(--card-bg)', border: '1px solid var(--glass-border)', borderRadius: '8px' }}
                                        itemStyle={{ color: 'var(--text)' }}
                                    />
                                    <Legend />
                                </PieChart>
                            </ResponsiveContainer>
                        )}
                    </div>
                </div>

            </div>
        </div>
    )
}
