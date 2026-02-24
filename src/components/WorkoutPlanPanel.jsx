import {
    Flame,
    Clock,
    Dumbbell,
    Zap,
    Target,
    Timer,
    Utensils,
    Info,
    CheckCircle2,
    Calendar,
    ChevronRight,
    ArrowRight
} from 'lucide-react'

export default function WorkoutPlanPanel() {
    const weeklySplit = [
        { day: 'Mon', focus: 'Strength + Skill', icon: Dumbbell, color: '#FF4D4D' },
        { day: 'Tue', focus: 'Conditioning (Stamina + HIIT)', icon: Flame, color: '#FF8800' },
        { day: 'Wed', focus: 'Calisthenics Progressions + Core', icon: Zap, color: '#00D2FF' },
        { day: 'Thu', focus: 'Strength + Plyometrics + Sprint', icon: Target, color: '#FF00FF' },
        { day: 'Fri', focus: 'Endurance Run + Core', icon: Timer, color: '#00FF88' },
        { day: 'Sat', focus: 'Full Body Functional + Skill', icon: Dumbbell, color: '#9D00FF' },
        { day: 'Sun', focus: 'Active Recovery / Mobility', icon: ArrowRight, color: '#FFFFFF' },
    ]

    const workoutDays = [
        {
            day: 'MONDAY',
            title: 'STRENGTH + HANDSTAND PROGRESSION',
            sections: [
                {
                    name: 'Warm-up',
                    items: ['Arm circles, jumping jacks, wrist prep', 'Scapula pushups x10', 'Hip circles, leg swings']
                },
                {
                    name: 'Handstand Practice (Wall/Free)',
                    items: ['Wall Handstand Hold: 3x30s', 'Wall Walks: 3x5', 'Shoulder taps (wall): 3x6–8']
                },
                {
                    name: 'Strength (Push + Pull Focus)',
                    items: [
                        'Pike Pushups / Handstand Push-up Negatives: 4x6–8',
                        'Pull-ups (or rows using bag/gas cylinder): 4x6–10',
                        'Deep Push-ups (elevate with books): 3x8–12',
                        'Bicep curls with cylinder/dumbbell/bag: 3x8–12'
                    ]
                },
                {
                    name: 'Core Finisher',
                    items: ['Lying leg raises x15', 'Plank shoulder taps x20', 'Side plank (30s each side)', '3 Rounds']
                }
            ]
        },
        {
            day: 'TUESDAY',
            title: 'STAMINA + METCON (HIIT)',
            sections: [
                {
                    name: 'Warm-up',
                    items: ['Dynamic mobility, fast feet drills']
                },
                {
                    name: 'METCON (Metabolic Conditioning)',
                    items: [
                        '(4 rounds, as fast but controlled as possible)',
                        '10 Jump squats',
                        '15 Push-ups',
                        '20 Mountain climbers',
                        '15 Bent-over rows (bag/cylinder)',
                        '10 Burpees',
                        'Rest 1 min after each round.'
                    ]
                },
                {
                    name: 'HIIT Finish (Tabata Style) – 4 min',
                    items: ['20s work, 10s rest x 8', 'Alternate high knees / shadow boxing']
                },
                {
                    name: 'Cooldown',
                    items: ['Stretch quads, hamstrings, back']
                }
            ]
        },
        {
            day: 'WEDNESDAY',
            title: 'CALISTHENICS PROGRESSIONS + CORE',
            sections: [
                {
                    name: 'Skill Practice',
                    items: ['L-sit (on blocks/chairs): 3x15s', 'Pseudo Planche Pushups: 3x8', 'Frog Stand Hold: 3x20s', 'Handstand kickups x10']
                },
                {
                    name: 'Foundation Calisthenics',
                    items: ['Dips (chair): 3x12', 'Chin-ups or body rows: 3xMax', 'Bulgarian Split Squats (weight optional): 3x10/leg']
                },
                {
                    name: 'Killer Core',
                    items: ['Hanging knee raises (if bar) or V-ups: 3x15', 'Russian twists (weighted): x30', 'Plank hold: x1 min', 'Repeat circuit 2x']
                }
            ]
        },
        {
            day: 'THURSDAY',
            title: 'STRENGTH + PLYOMETRICS + SPRINTS',
            sections: [
                {
                    name: 'Warm-up',
                    items: ['High knees, butt kicks, A-skips, hip mobility']
                },
                {
                    name: 'Explosive Strength & Legs',
                    items: ['Box jumps (use safe height): 3x5', 'Jumping lunges: 3x10', 'Weighted squats (bag/gas cylinder): 4x8–10', 'Single leg glute bridges: 3x10/leg']
                },
                {
                    name: 'Sprints',
                    items: ['10–15 meter sprints x 6', 'Walk back for recovery']
                },
                {
                    name: 'Cooldown',
                    items: ['Hip flexor & hamstring stretches']
                }
            ]
        },
        {
            day: 'FRIDAY',
            title: 'ENDURANCE RUN + CORE',
            sections: [
                {
                    name: 'Long Run (Zone 2 ~ 130–150 bpm HR)',
                    items: ['30–40 minutes at conversational pace', 'This builds mitochondria, aerobic base, recovery ability']
                },
                {
                    name: 'Core & Mobility (30 min)',
                    items: ['Dead bug x20', 'Side plank thread-through x10', 'Hanging leg raises or flutter kicks', 'Happy baby, hamstring & glute stretches']
                }
            ]
        },
        {
            day: 'SATURDAY',
            title: 'FULL BODY FUNCTIONAL + SKILL',
            sections: [
                {
                    name: 'Skill Refresh',
                    items: ['Practice kickups to handstand', 'Try ninja moves like wall-spiderman climb, crow pose progression, etc.']
                },
                {
                    name: 'Full Body Circuit (3 rounds)',
                    items: ['Wall Walks x5', 'Squat to press (use bag): x10', 'Dips (on chair): x12', 'Sprawls x10', 'Renegade Rows (dumbbell): x8/arm', 'Hollow Body Hold: 20s']
                },
                {
                    name: 'Cool Down Stretch',
                    items: ['Wrist/Neck Mobility']
                }
            ]
        },
        {
            day: 'SUNDAY',
            title: 'ACTIVE RECOVERY / MOBILITY',
            sections: [
                {
                    name: '30 mins light movement',
                    items: ['Walking / light jog', 'Qigong-style flow / yoga / foam rolling']
                },
                {
                    name: 'Stretch major muscle groups',
                    items: ['Hip flexors, glutes, hamstrings', 'Shoulders, lats, wrists']
                }
            ]
        }
    ]

    return (
        <div style={{ padding: '2rem', maxWidth: '1200px', margin: '0 auto' }}>
            <div style={{ marginBottom: '3rem' }}>
                <h1 className="brand-name" style={{ fontSize: '3rem', marginBottom: '0.5rem' }}>Athlete Workout Plan</h1>
                <p style={{ color: 'var(--text-dim)', fontSize: '1.1rem' }}>Your detailed weekly training split for peak performance.</p>
            </div>

            {/* Weekly Snapshot */}
            <section style={{ marginBottom: '4rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2rem' }}>
                    <Calendar size={28} color="var(--primary)" />
                    <h2 style={{ fontSize: '1.8rem', fontWeight: '700' }}>Weekly Split</h2>
                </div>
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))',
                    gap: '1rem'
                }}>
                    {weeklySplit.map((day, ix) => (
                        <div key={ix} className="glass-card" style={{
                            padding: '1.5rem',
                            textAlign: 'center',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            gap: '1rem',
                            borderTop: `4px solid ${day.color}`
                        }}>
                            <span style={{ fontWeight: '800', fontSize: '1.2rem', color: day.color }}>{day.day}</span>
                            <day.icon size={24} color={day.color} />
                            <p style={{ fontSize: '0.85rem', fontWeight: '500', lineHeight: '1.3' }}>{day.focus}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* General Structure */}
            <section style={{ marginBottom: '4rem' }} className="glass-card">
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
                    <Clock size={24} color="var(--primary)" />
                    <h2 style={{ fontSize: '1.5rem' }}>General Routine Structure</h2>
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2rem' }}>
                    {[
                        { name: 'Warm-up', time: '10-15 mins' },
                        { name: 'Skill / Tech', time: '10 mins' },
                        { name: 'Main Work', time: '45-50 mins' },
                        { name: 'Core / Finish', time: '10 mins' },
                        { name: 'Cooldown', time: '5-10 mins' },
                    ].map((step, ix) => (
                        <div key={ix} style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
                            <span style={{ fontSize: '0.85rem', color: 'var(--text-dim)', textTransform: 'uppercase' }}>{step.name}</span>
                            <span style={{ fontSize: '1.2rem', fontWeight: '700', color: 'var(--primary)' }}>{step.time}</span>
                        </div>
                    ))}
                </div>
            </section>

            {/* Detailed Days */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
                {workoutDays.map((day, ix) => (
                    <section key={ix}>
                        <div style={{
                            display: 'flex',
                            alignItems: 'baseline',
                            gap: '1rem',
                            marginBottom: '1.5rem',
                            borderBottom: '1px solid var(--glass-border)',
                            paddingBottom: '0.5rem'
                        }}>
                            <h3 style={{ fontSize: '2rem', fontWeight: '900', color: 'var(--primary)', opacity: 0.8 }}>{day.day}</h3>
                            <span style={{ fontSize: '1.2rem', fontWeight: '600' }}>{day.title}</span>
                        </div>
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
                            {day.sections.map((section, six) => (
                                <div key={six} className="feature-card" style={{ height: '100%' }}>
                                    <h4 style={{ color: 'var(--primary)', marginBottom: '1rem', fontSize: '1rem', textTransform: 'uppercase', letterSpacing: '1px' }}>{section.name}</h4>
                                    <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                                        {section.items.map((item, iix) => (
                                            <li key={iix} style={{ display: 'flex', gap: '0.75rem', fontSize: '0.95rem', color: 'var(--text)' }}>
                                                <ChevronRight size={16} style={{ marginTop: '3px', flexShrink: 0 }} color="var(--primary)" />
                                                <span>{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </section>
                ))}
            </div>

            {/* Nutrition */}
            <section style={{ marginTop: '5rem', marginBottom: '4rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2rem' }}>
                    <Utensils size={28} color="#00FF88" />
                    <h2 style={{ fontSize: '1.8rem', fontWeight: '700' }}>Nutrition Strategies</h2>
                </div>
                <div className="glass-card" style={{ padding: '2.5rem' }}>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem' }}>
                        <div>
                            <h3 style={{ marginBottom: '1.5rem', color: '#00FF88' }}>Budget-Friendly Priorities</h3>
                            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                                {[
                                    { t: 'Protein daily', d: 'Aim for 1g per kg bodyweight (Soya chunks, curd, eggs, dal)' },
                                    { t: 'Carbs for fuel', d: 'Rice, roti, potatoes, bananas' },
                                    { t: 'Healthy Fats', d: 'Ghee or oil for hormone support' },
                                    { t: 'Micros & Hydration', d: 'Seasonal veggies, citrus (Vit C), salt + lemon water' },
                                ].map((item, ix) => (
                                    <li key={ix} style={{ display: 'flex', gap: '1rem' }}>
                                        <CheckCircle2 size={20} color="#00FF88" style={{ flexShrink: 0 }} />
                                        <div>
                                            <strong style={{ display: 'block' }}>{item.t}</strong>
                                            <span style={{ fontSize: '0.9rem', color: 'var(--text-dim)' }}>{item.d}</span>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div style={{ background: 'rgba(0, 255, 136, 0.05)', padding: '2rem', borderRadius: '16px', border: '1px dashed #00FF88' }}>
                            <h3 style={{ marginBottom: '1rem' }}>Budget Recovery Shake</h3>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                                <div style={{ display: 'flex', justifyContent: 'space-between' }}><span>1 Banana</span> <ArrowRight size={14} /></div>
                                <div style={{ display: 'flex', justifyContent: 'space-between' }}><span>Handful soaked peanuts</span> <ArrowRight size={14} /></div>
                                <div style={{ display: 'flex', justifyContent: 'space-between' }}><span>1 tsp jaggery</span> <ArrowRight size={14} /></div>
                                <div style={{ display: 'flex', justifyContent: 'space-between' }}><span>Water</span> <ArrowRight size={14} /></div>
                                <div style={{ marginTop: '1rem', paddingTop: '1rem', borderTop: '1px solid rgba(0, 255, 136, 0.2)', fontWeight: '700', color: '#00FF88' }}>
                                    Blend & Drink Post-Workout
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Science & Principles */}
            <section style={{ marginBottom: '4rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2rem' }}>
                    <Info size={28} color="var(--primary)" />
                    <h2 style={{ fontSize: '1.8rem', fontWeight: '700' }}>Science & Principles</h2>
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.5rem' }}>
                    {[
                        { t: 'Concurrent Training', d: 'Strength + endurance can coexist with smart programming.' },
                        { t: 'Calisthenics Transfer', d: 'Improves body control and neuromuscular efficiency.' },
                        { t: 'Zone 2 Benefits', d: 'Improves mitochondrial function and recovery ability.' },
                        { t: 'Plyometrics', d: 'Improves speed, power, and tendon resilience.' },
                    ].map((item, ix) => (
                        <div key={ix} className="feature-card">
                            <h4 style={{ marginBottom: '0.5rem', color: 'var(--primary)' }}>{item.t}</h4>
                            <p style={{ fontSize: '0.9rem' }}>{item.d}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Footer Tips */}
            <footer className="glass-card" style={{ padding: '2rem', background: 'linear-gradient(135deg, rgba(0, 210, 255, 0.1), rgba(0, 0, 0, 0.2))' }}>
                <h3 style={{ marginBottom: '1rem' }}>Key Pro Tips</h3>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2rem' }}>
                    <p style={{ fontSize: '0.9rem', color: 'var(--text-dim)' }}>📈 Track progress weekly (reps, skill hold times, rest).</p>
                    <p style={{ fontSize: '0.9rem', color: 'var(--text-dim)' }}>🔄 Rotate handstand/skill focus every few weeks.</p>
                    <p style={{ fontSize: '0.9rem', color: 'var(--text-dim)' }}>🔋 Listen to fatigue - adjust volume if needed.</p>
                    <p style={{ fontSize: '0.9rem', color: 'var(--text-dim)' }}>💧 Stay hydrated, especially on hot run days.</p>
                </div>
            </footer>
        </div>
    )
}
