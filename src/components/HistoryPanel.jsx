import { useState, useMemo } from 'react'
import { Calendar, Search } from 'lucide-react'

export default function HistoryPanel({ workouts }) {
    const [filterDate, setFilterDate] = useState('')
    const [searchQuery, setSearchQuery] = useState('')

    const filteredWorkouts = useMemo(() => {
        return workouts.filter(w => {
            const matchDate = filterDate ? w.date === filterDate : true
            const matchQuery = searchQuery
                ? w.exercise_name?.toLowerCase().includes(searchQuery.toLowerCase())
                : true
            return matchDate && matchQuery
        })
    }, [workouts, filterDate, searchQuery])

    return (
        <div style={{ padding: '2rem', height: '100%', display: 'flex', flexDirection: 'column' }}>
            <header style={{ marginBottom: '2rem' }}>
                <h1 style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>Workout History</h1>
                <p style={{ color: 'var(--text-dim)' }}>Review and filter your past logs.</p>
            </header>

            {/* Filters */}
            <div className="glass-card" style={{ padding: '1.5rem', marginBottom: '2rem', display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <div style={{ flex: 1, minWidth: '200px', position: 'relative' }}>
                    <Search size={18} color="var(--text-dim)" style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)' }} />
                    <input
                        type="text"
                        placeholder="Search exercises..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        style={{
                            width: '100%',
                            padding: '0.8rem 1rem 0.8rem 2.8rem',
                            borderRadius: '8px',
                            border: '1px solid var(--glass-border)',
                            background: 'rgba(0,0,0,0.2)',
                            color: 'var(--text)',
                            outline: 'none'
                        }}
                    />
                </div>

                <div style={{ flex: 1, minWidth: '200px', position: 'relative' }}>
                    <Calendar size={18} color="var(--text-dim)" style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)' }} />
                    <input
                        type="date"
                        value={filterDate}
                        onChange={(e) => setFilterDate(e.target.value)}
                        style={{
                            width: '100%',
                            padding: '0.8rem 1rem 0.8rem 2.8rem',
                            borderRadius: '8px',
                            border: '1px solid var(--glass-border)',
                            background: 'rgba(0,0,0,0.2)',
                            color: 'var(--text)',
                            colorScheme: 'dark',
                            outline: 'none'
                        }}
                    />
                    {filterDate && (
                        <button
                            onClick={() => setFilterDate('')}
                            style={{ position: 'absolute', right: '1rem', top: '50%', transform: 'translateY(-50%)', background: 'transparent', border: 'none', color: 'var(--text-dim)', cursor: 'pointer' }}
                        >
                            Clear
                        </button>
                    )}
                </div>
            </div>

            {/* List */}
            <div className="glass-card" style={{ flex: 1, padding: '2rem', overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
                    <h2 style={{ fontSize: '1.25rem', margin: 0 }}>Results</h2>
                    <span style={{ color: 'var(--text-dim)', fontSize: '0.9rem' }}>{filteredWorkouts.length} records found</span>
                </div>

                <div style={{ flex: 1, overflowY: 'auto', paddingRight: '0.5rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                    {filteredWorkouts.length === 0 ? (
                        <div style={{ textAlign: 'center', color: 'var(--text-dim)', marginTop: '3rem' }}>
                            <p>No workouts match your filters.</p>
                        </div>
                    ) : (
                        filteredWorkouts.map(workout => (
                            <div key={workout.id} style={{
                                padding: '1.5rem',
                                background: 'rgba(255,255,255,0.02)',
                                borderRadius: '12px',
                                border: '1px solid rgba(255,255,255,0.05)',
                                display: 'flex',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                                flexWrap: 'wrap',
                                gap: '1rem'
                            }}>
                                <div>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.5rem' }}>
                                        <h3 style={{ fontSize: '1.2rem', color: 'var(--primary)', margin: 0 }}>{workout.exercise_name}</h3>
                                        {workout.type && (
                                            <span style={{
                                                fontSize: '0.7rem',
                                                padding: '0.2rem 0.5rem',
                                                borderRadius: '4px',
                                                background: 'rgba(255,255,255,0.1)',
                                                color: 'var(--text)',
                                                textTransform: 'uppercase',
                                                letterSpacing: '0.5px'
                                            }}>
                                                {workout.type}
                                            </span>
                                        )}
                                    </div>
                                    <div style={{ display: 'flex', gap: '1.5rem', fontSize: '0.95rem', color: 'var(--text-dim)' }}>
                                        <span><strong>Sets:</strong> {workout.sets}</span>
                                        <span><strong>Reps:</strong> {workout.reps}</span>
                                        <span><strong>Weight:</strong> {workout.weight}</span>
                                    </div>
                                </div>
                                <div style={{ background: 'rgba(255,255,255,0.05)', padding: '0.5rem 1rem', borderRadius: '20px', fontSize: '0.9rem', color: 'var(--text)' }}>
                                    {workout.date}
                                </div>
                            </div>
                        ))
                    )}
                </div>
            </div>
        </div>
    )
}
