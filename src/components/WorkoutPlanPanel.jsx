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
    ArrowRight,
    Heart,
    TrendingUp,
    BarChart3,
    Activity,
    Brain
} from 'lucide-react'

export default function WorkoutPlanPanel() {
    const weeklySplit = [
        { day: 'Mon', focus: 'PUSH + Handstand Skill', muscles: 'Chest, Shoulders, Triceps', icon: Dumbbell, color: '#FF4D4D' },
        { day: 'Tue', focus: 'PULL + Core', muscles: 'Back, Biceps, Abs', icon: Target, color: '#FF8800' },
        { day: 'Wed', focus: 'LEGS + Plyometrics', muscles: 'Quads, Glutes, Hams, Calves', icon: Zap, color: '#00D2FF' },
        { day: 'Thu', focus: 'Endurance Run + Mobility', muscles: 'Cardiovascular, Recovery', icon: Heart, color: '#FF00FF' },
        { day: 'Fri', focus: 'PUSH + Skill Holds', muscles: 'Chest, Shoulders, Triceps', icon: Flame, color: '#00FF88' },
        { day: 'Sat', focus: 'PULL + Sprint Intervals', muscles: 'Back, Biceps, Conditioning', icon: Timer, color: '#9D00FF' },
        { day: 'Sun', focus: 'Active Recovery / Yoga', muscles: 'Full Body Mobility', icon: ArrowRight, color: '#FFFFFF' },
    ]

    const workoutDays = [
        {
            day: 'MONDAY',
            title: 'PUSH + HANDSTAND SKILL',
            sections: [
                {
                    name: 'Warm-up (10 min)',
                    items: ['Arm circles, wrist mobility', 'Scapula pushups x10', 'Cat-cow stretches', 'Band pull-aparts (or towel)']
                },
                {
                    name: 'A. Handstand Skill Work (12 min – Fresh CNS)',
                    items: [
                        'Wall Handstand Hold: 3x30-40s',
                        'Wall Walks: 3x5 reps',
                        'Shoulder Taps (against wall): 3x8-10 taps',
                        'Rest 90s between sets'
                    ]
                },
                {
                    name: 'B. Push Strength (40 min)',
                    items: [
                        'Pike Pushups (Shoulder focus): 4x8-10 → progress to elevated pike / HSPU negatives',
                        'Regular Pushups (Chest): 4x12-15 — Tempo: 2s down, explode up',
                        'Tricep Dips (chair/parallel): 3x10-12',
                        'Lateral Raises (water bottles/light weight): 3x12-15',
                        'Pseudo Planche Pushups (lean forward): 3x6-8 — builds shoulder/chest strength for holds'
                    ]
                },
                {
                    name: 'C. Finisher (8 min) — Burnout Circuit x2 Rounds',
                    items: [
                        'Diamond pushups x10',
                        'Overhead press (bag/cylinder) x12',
                        'Plank to downward dog x10',
                        'Cooldown: Chest, shoulder, tricep stretches'
                    ]
                }
            ]
        },
        {
            day: 'TUESDAY',
            title: 'PULL + CORE',
            sections: [
                {
                    name: 'Warm-up (10 min)',
                    items: ['Arm swings, band rows', 'Dead hangs x20s (if bar available)', 'Thoracic rotations']
                },
                {
                    name: 'A. Pull Strength (45 min)',
                    items: [
                        'Pull-ups / Inverted Rows (table/sturdy surface): 4x6-10 — add backpack weight if too easy',
                        'Towel Rows / Bag Rows: 4x10-12 each arm',
                        'Bicep Curls (dumbbell/cylinder): 3x10-12',
                        'Face Pulls (resistance band or towel): 3x15 — great for posture + rear delts',
                        'Scapula Pulls (bar or table edge): 3x12 — builds back strength for handstand/calisthenics'
                    ]
                },
                {
                    name: 'B. Core Crusher (20 min) — Circuit x3 Rounds, Minimal Rest',
                    items: [
                        'Hanging Leg Raises (or lying): x12-15',
                        'Russian Twists (weighted): x30',
                        'Plank Shoulder Taps: x20',
                        'Bicycle Crunches: x20',
                        'Hollow Body Hold: x20-30s',
                        'Cooldown: Cat-cow, child\'s pose, lat stretches'
                    ]
                }
            ]
        },
        {
            day: 'WEDNESDAY',
            title: 'LEGS + PLYOMETRICS',
            sections: [
                {
                    name: 'Warm-up (10 min)',
                    items: ['Leg swings (forward/side)', 'Bodyweight squats x15', 'Hip circles, ankle bounces']
                },
                {
                    name: 'A. Leg Strength (40 min)',
                    items: [
                        'Weighted Squats (bag/cylinder on shoulders): 4x10-12 — go deep, controlled',
                        'Bulgarian Split Squats (each leg): 3x10 — add weight in backpack if needed',
                        'Single-Leg Romanian Deadlifts: 3x10 each leg — use dumbbell or bag',
                        'Jump Squats (Explosive): 3x12 — focus on soft landings',
                        'Calf Raises (on step, weighted): 3x15-20'
                    ]
                },
                {
                    name: 'B. Plyometric Power (20 min) — Circuit x3 Rounds, 60s Rest',
                    items: [
                        'Box Jumps (or step jumps): x8',
                        'Broad Jumps: x6',
                        'Jumping Lunges: x10 (5 each leg)',
                        'Skater Hops: x12 (6 each side)'
                    ]
                },
                {
                    name: 'C. Finisher — Tabata Legs (4 min)',
                    items: [
                        '20s work / 10s rest x8 rounds',
                        'Alternate: Jump squats & high knees',
                        'Cooldown: Quad, hamstring, glute, calf stretches'
                    ]
                }
            ]
        },
        {
            day: 'THURSDAY',
            title: 'ENDURANCE RUN + MOBILITY',
            sections: [
                {
                    name: 'A. Zone 2 Run (35-40 min)',
                    items: [
                        'Conversational pace (you can talk but not sing)',
                        'Heart rate ~130-150 bpm',
                        'Focus on breathing rhythm',
                        'If no HR monitor: "Talk test" — speak sentences comfortably'
                    ]
                },
                {
                    name: 'B. Mobility & Flexibility (30 min) — Yoga-Style Flow',
                    items: [
                        'Sun salutations x5',
                        'Pigeon pose (2 min each side)',
                        'Lizard lunge stretch',
                        'Thread the needle (thoracic mobility)',
                        'Downward dog to cobra transitions',
                        'Happy baby pose, spinal twists'
                    ]
                },
                {
                    name: 'Wrist & Ankle Mobility',
                    items: [
                        'Wrist circles, finger stretches',
                        'Ankle ABCs (write alphabet with toes)'
                    ]
                },
                {
                    name: 'METCON — 4 Rounds (Fast but Controlled)',
                    items: [
                        '10 Jump squats',
                        '15 Push-ups',
                        '20 Mountain climbers',
                        '15 Bent-over rows (bag/cylinder)',
                        '10 Burpees'
                    ]
                },
                {
                    name: 'C. Light Core (Optional, 10 min)',
                    items: ['Dead bugs x15', 'Bird dogs x10 each side', 'Cat-cow x10']
                }
            ]
        },
        {
            day: 'FRIDAY',
            title: 'PUSH + SKILL HOLDS',
            sections: [
                {
                    name: 'Warm-up (10 min)',
                    items: ['Arm circles, wrist mobility', 'Scapula pushups x10', 'Cat-cow stretches', 'Band pull-aparts']
                },
                {
                    name: 'A. Calisthenics Skill Holds (15 min)',
                    items: [
                        'Frog Stand Hold: 3x20-30s',
                        'L-Sit Progression (floor/parallel bars): 3x15-20s',
                        'Crow Pose Attempts: 5 attempts, hold max time',
                        'Planche Lean Holds: 3x15-20s'
                    ]
                },
                {
                    name: 'B. Push Strength — Volume Day (40 min)',
                    items: [
                        'Decline Pushups (feet elevated): 4x10-12',
                        'Wide Pushups: 3x12-15',
                        'Arnold Press (dumbbells/bottles): 3x10',
                        'Overhead Tricep Extension: 3x12',
                        'Push-up to Side Plank: 3x8 each side'
                    ]
                },
                {
                    name: 'C. Shoulder Burnout (10 min) — Circuit x2 Rounds',
                    items: [
                        'Front Raises x12',
                        'Lateral Raises x12',
                        'Rear Delt Flyes x12',
                        'Pike Pushups x8',
                        'Cooldown: Shoulder and chest stretches'
                    ]
                }
            ]
        },
        {
            day: 'SATURDAY',
            title: 'PULL + SPRINT INTERVALS',
            sections: [
                {
                    name: 'Warm-up (10 min)',
                    items: ['Dynamic stretches', 'Light jog, high knees, butt kicks']
                },
                {
                    name: 'A. Pull Strength — Volume (35 min)',
                    items: [
                        'Chin-ups / Assisted Chin-ups: 4x8-10',
                        'Wide Grip Rows (towel/bag): 3x12',
                        'Hammer Curls: 3x10-12',
                        'Reverse Flyes (bent over): 3x15',
                        'Farmers Carry (heavy bags): 3x30-40 meters'
                    ]
                },
                {
                    name: 'B. Sprint Intervals (25 min)',
                    items: [
                        'Warm-up jog: 5 min',
                        '10 rounds: 30s sprint (80-90% effort) + 90s walk/jog recovery',
                        'Cool-down jog: 5 min',
                        'Builds explosive speed, anaerobic capacity & burns fat'
                    ]
                },
                {
                    name: 'C. Core Finisher (10 min)',
                    items: [
                        'Plank variations (front/side): 3 sets, 45s each',
                        'V-ups x15',
                        'Flutter kicks x30',
                        'Cooldown: Full body stretch'
                    ]
                }
            ]
        },
        {
            day: 'SUNDAY',
            title: 'ACTIVE RECOVERY',
            sections: [
                {
                    name: 'Pick 1-2 Activities (45-60 min total)',
                    items: [
                        '✅ Light walk or hike',
                        '✅ Yoga flow / Yin yoga',
                        '✅ Swimming (if accessible)',
                        '✅ Foam rolling + deep stretching',
                        '✅ Breathing exercises + meditation'
                    ]
                },
                {
                    name: 'Focus Areas',
                    items: [
                        'Hips, glutes, lower back',
                        'Shoulders, lats',
                        'Hamstrings, calves'
                    ]
                }
            ]
        }
    ]

    const nutritionTiming = [
        { day: 'Push Days (Mon/Fri)', pre: 'Banana + handful peanuts (60 min before)', post: 'Egg + rice + dal within 1 hour' },
        { day: 'Pull Days (Tue/Sat)', pre: 'Light carbs (rice/roti) 90 min before', post: 'Soya chunks + curd + veggies' },
        { day: 'Leg Day (Wed)', pre: 'Larger carb meal 2-3 hours before (rice + dal)', post: 'Protein + carbs (egg/soya + banana + jaggery shake)' },
        { day: 'Run Day (Thu)', pre: 'Light snack (banana)', post: 'Hydration + fruit' },
    ]

    const recoveryChart = [
        { muscle: 'Chest / Shoulders / Triceps', trained: 'Mon', next: 'Fri', rest: '4 days' },
        { muscle: 'Back / Biceps', trained: 'Tue', next: 'Sat', rest: '4 days' },
        { muscle: 'Legs', trained: 'Wed', next: 'Next Wed', rest: '7 days' },
        { muscle: 'Core', trained: 'Tue, scattered', next: 'Throughout', rest: 'Active daily OK' },
        { muscle: 'Cardio', trained: 'Thu, Sat', next: 'Multiple', rest: 'Non-interfering' },
    ]

    const progressTracking = [
        { phase: 'Week 1-2', goal: 'Learn movements, focus on form' },
        { phase: 'Week 3-4', goal: 'Increase reps/sets by 10%' },
        { phase: 'Week 5-6', goal: 'Add weight or progress to harder variations' },
        { phase: 'Week 7-8', goal: 'Test max reps, hold times, run times' },
    ]

    return (
        <div style={{ padding: '2rem', maxWidth: '1200px', margin: '0 auto' }}>
            <div style={{ marginBottom: '3rem' }}>
                <h1 className="brand-name" style={{ fontSize: '3rem', marginBottom: '0.5rem' }}>Push / Pull / Legs Plan</h1>
                <p style={{ color: 'var(--text-dim)', fontSize: '1.1rem' }}>Skills, cardio & plyometrics integrated — 48-72h recovery between same muscle groups.</p>
            </div>

            {/* Weekly Snapshot */}
            <section style={{ marginBottom: '4rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2rem' }}>
                    <Calendar size={28} color="var(--primary)" />
                    <h2 style={{ fontSize: '1.8rem', fontWeight: '700' }}>Weekly Split</h2>
                </div>
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
                    gap: '1rem'
                }}>
                    {weeklySplit.map((day, ix) => (
                        <div key={ix} className="glass-card" style={{
                            padding: '1.5rem',
                            textAlign: 'center',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            gap: '0.75rem',
                            borderTop: `4px solid ${day.color}`
                        }}>
                            <span style={{ fontWeight: '800', fontSize: '1.2rem', color: day.color }}>{day.day}</span>
                            <day.icon size={24} color={day.color} />
                            <p style={{ fontSize: '0.85rem', fontWeight: '600', lineHeight: '1.3' }}>{day.focus}</p>
                            <p style={{ fontSize: '0.75rem', color: 'var(--text-dim)', lineHeight: '1.3' }}>{day.muscles}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Muscle Recovery Chart */}
            <section style={{ marginBottom: '4rem' }} className="glass-card">
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
                    <Activity size={24} color="var(--primary)" />
                    <h2 style={{ fontSize: '1.5rem' }}>Muscle Group Recovery</h2>
                </div>
                <div style={{ overflowX: 'auto' }}>
                    <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.9rem' }}>
                        <thead>
                            <tr style={{ borderBottom: '2px solid var(--glass-border)' }}>
                                {['Muscle Group', 'Trained On', 'Next Training', 'Rest Days'].map(h => (
                                    <th key={h} style={{ padding: '0.75rem 1rem', textAlign: 'left', color: 'var(--primary)', fontWeight: '700', textTransform: 'uppercase', fontSize: '0.8rem', letterSpacing: '1px' }}>{h}</th>
                                ))}
                            </tr>
                        </thead>
                        <tbody>
                            {recoveryChart.map((row, ix) => (
                                <tr key={ix} style={{ borderBottom: '1px solid var(--glass-border)' }}>
                                    <td style={{ padding: '0.75rem 1rem', fontWeight: '600' }}>{row.muscle}</td>
                                    <td style={{ padding: '0.75rem 1rem', color: 'var(--text-dim)' }}>{row.trained}</td>
                                    <td style={{ padding: '0.75rem 1rem', color: 'var(--text-dim)' }}>{row.next}</td>
                                    <td style={{ padding: '0.75rem 1rem', color: '#00FF88', fontWeight: '600' }}>{row.rest}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
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

            {/* Nutrition Timing */}
            <section style={{ marginTop: '5rem', marginBottom: '4rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2rem' }}>
                    <Utensils size={28} color="#00FF88" />
                    <h2 style={{ fontSize: '1.8rem', fontWeight: '700' }}>Optimized Nutrition Timing</h2>
                </div>
                <div className="glass-card" style={{ padding: '2.5rem' }}>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '2rem' }}>
                        {nutritionTiming.map((item, ix) => (
                            <div key={ix} style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                                <h4 style={{ color: '#00FF88', fontSize: '1rem', fontWeight: '700' }}>{item.day}</h4>
                                <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'flex-start' }}>
                                    <span style={{ fontSize: '0.8rem', color: '#FF8800', fontWeight: '700', minWidth: '35px' }}>PRE</span>
                                    <span style={{ fontSize: '0.9rem', color: 'var(--text-dim)' }}>{item.pre}</span>
                                </div>
                                <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'flex-start' }}>
                                    <span style={{ fontSize: '0.8rem', color: '#00D2FF', fontWeight: '700', minWidth: '35px' }}>POST</span>
                                    <span style={{ fontSize: '0.9rem', color: 'var(--text-dim)' }}>{item.post}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div style={{ marginTop: '2.5rem', borderTop: '1px solid var(--glass-border)', paddingTop: '2rem' }}>
                        <h3 style={{ marginBottom: '1.5rem', color: '#00FF88' }}>Daily Baseline</h3>
                        <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                            {[
                                { t: 'Breakfast', d: 'Poha/upma with peanuts OR eggs + roti' },
                                { t: 'Lunch', d: 'Rice + dal + seasonal veg + curd' },
                                { t: 'Snack', d: 'Fruit + roasted chana OR peanut butter' },
                                { t: 'Dinner', d: 'Roti + sabzi + soya OR lighter rice meal' },
                                { t: 'Protein target', d: '1.2-1.6g per kg bodyweight (e.g. 60kg → aim 70-95g daily)' },
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
                </div>
            </section>

            {/* Progress Tracking */}
            <section style={{ marginBottom: '4rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2rem' }}>
                    <TrendingUp size={28} color="#FF8800" />
                    <h2 style={{ fontSize: '1.8rem', fontWeight: '700' }}>Progress Tracking</h2>
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.5rem' }}>
                    {progressTracking.map((item, ix) => (
                        <div key={ix} className="feature-card">
                            <h4 style={{ marginBottom: '0.5rem', color: '#FF8800' }}>{item.phase}</h4>
                            <p style={{ fontSize: '0.9rem' }}>{item.goal}</p>
                        </div>
                    ))}
                </div>
                <div className="glass-card" style={{ marginTop: '1.5rem', padding: '2rem' }}>
                    <h4 style={{ marginBottom: '1rem', color: 'var(--primary)' }}>Key Metrics to Track</h4>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: '1rem' }}>
                        {['Pushup max', 'Pull-up max', 'Handstand hold time', 'L-sit hold time', 'Sprint time (50m)', '5K run time'].map((metric, ix) => (
                            <div key={ix} style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
                                <BarChart3 size={16} color="var(--primary)" />
                                <span style={{ fontSize: '0.9rem' }}>{metric}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Science & Principles */}
            <section style={{ marginBottom: '4rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2rem' }}>
                    <Brain size={28} color="var(--primary)" />
                    <h2 style={{ fontSize: '1.8rem', fontWeight: '700' }}>Science Backing This Split</h2>
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.5rem' }}>
                    {[
                        { t: 'Muscle Protein Synthesis', d: 'Peaks 24-48h post-training — hence 3-4 day gap between same muscle groups. (Damas et al., 2016)' },
                        { t: 'Concurrent Training', d: 'Strength + endurance coexist when separated properly — Thu endurance doesn\'t interfere with Fri push. (Wilson et al., 2012)' },
                        { t: 'Skill Acquisition', d: 'Requires fresh CNS, not fatigued muscles — handstand/holds done early in session. (Schmidt & Lee, 2011)' },
                        { t: 'Plyometrics', d: 'Enhance power without hypertrophy interference — Wed jumps build explosiveness. (Behm & Sale, 1993)' },
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
                <h3 style={{ marginBottom: '1rem' }}>Final Tips</h3>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '2rem' }}>
                    <p style={{ fontSize: '0.9rem', color: 'var(--text-dim)' }}>🔸 Sleep 7-8 hours – this is where you actually grow.</p>
                    <p style={{ fontSize: '0.9rem', color: 'var(--text-dim)' }}>🔸 Hydrate 3-4 liters daily, more on run/leg days.</p>
                    <p style={{ fontSize: '0.9rem', color: 'var(--text-dim)' }}>🔸 Listen to your body – if sore, do mobility instead.</p>
                    <p style={{ fontSize: '0.9rem', color: 'var(--text-dim)' }}>🔸 Progressive overload – add 1 rep, 1 second, or 1 kg every week.</p>
                    <p style={{ fontSize: '0.9rem', color: 'var(--text-dim)' }}>🔸 Deload every 4-6 weeks – reduce volume by 40% for recovery.</p>
                </div>
            </footer>
        </div>
    )
}
