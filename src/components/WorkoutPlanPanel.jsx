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
        { day: 'Sun', focus: 'PULL + Core (Anti-Rotation)', muscles: 'Back, Biceps, Rear Delts', icon: Target, color: '#FF8800' },
        { day: 'Mon', focus: 'LEGS + Plyos + Core', muscles: 'Quads, Glutes, Hams', icon: Zap, color: '#00D2FF' },
        { day: 'Tue', focus: 'PUSH + Handstand + Core', muscles: 'Chest, Shoulders, Triceps', icon: Dumbbell, color: '#FF4D4D' },
        { day: 'Wed', focus: 'PULL + HIIT + Core', muscles: 'Back, Biceps', icon: Flame, color: '#00FF88' },
        { day: 'Thu', focus: 'LEGS (Volume) + Skill + Core', muscles: 'Legs, Endurance', icon: Timer, color: '#9D00FF' },
        { day: 'Fri', focus: 'PUSH + Full Core Circuit', muscles: 'Chest, Shoulders, Triceps', icon: Activity, color: '#FF00FF' },
        { day: 'Sat', focus: 'LONG RUN + Active Recovery', muscles: 'Full Body, Cardio', icon: Heart, color: '#FFFFFF' },
    ]

    const workoutDays = [
        {
            day: 'SUNDAY',
            title: 'PULL DAY 1 + CORE (Anti-Rotation)',
            sections: [
                {
                    name: 'Warm-up (10 min)',
                    items: ['Arm circles, band pull-aparts', 'Dead hangs x20s (if available)', 'Thoracic rotations x10 each side', 'Scapula shrugs x12', 'Cat-cow x10']
                },
                {
                    name: 'A. PULL STRENGTH – VERTICAL FOCUS (35 min)',
                    items: [
                        'Pull-ups / Chin-ups (or Assisted): 4x6-10 (RIR 1-2, Rest 90s)',
                        'Inverted Rows (under table/sturdy surface): 4x10-12 (RIR 1-2, Rest 60s)',
                        'Face Pulls (band/towel on door): 3x15-20 (RIR 1, Rest 45s)',
                        'Bicep Curls (dumbbell/cylinder alternating): 3x10-12 each arm (3s down, Rest 60s)',
                        'Scapula Pull-ups: 3x10-12 (Rest 45s)'
                    ]
                },
                {
                    name: 'B. CORE – ANTI-ROTATION (15 min) — Circuit x3 Rounds, 45s Rest',
                    items: [
                        'Pallof Press (band/towel resistance) x12 each side',
                        'Russian Twists (weighted) x30 total',
                        'Dead Bug (opposite arm/leg) x20 total',
                        'Plank with shoulder taps x20 total'
                    ]
                },
                {
                    name: 'C. FINISHER – LAT PUMP (10 min) — Superset x2 Rounds',
                    items: [
                        'Wide-grip dead hang x20-30s',
                        'Straight arm pulldowns (band) x15',
                        'Rest 60s'
                    ]
                },
                {
                    name: 'COOLDOWN (10 min)',
                    items: ['Lat stretches (doorway, child\'s pose)', 'Bicep stretches', 'Thoracic mobility', 'Cat-cow x10']
                }
            ]
        },
        {
            day: 'MONDAY',
            title: 'LEGS DAY 1 + PLYOS + CORE (Hip Flexors)',
            sections: [
                {
                    name: 'Warm-up (10 min)',
                    items: ['Leg swings x15 each direction', 'Glute bridges x15', 'Bodyweight squats x15', 'Walking lunges x10 each leg', 'Hip circles, ankle bounces']
                },
                {
                    name: 'A. LEG STRENGTH – QUAD/GLUTE DOMINANT (40 min)',
                    items: [
                        'Superset 1: Goblet Squats 4x10-15 & Jump Squats 4x8-10 (Rest 90s between rounds)',
                        'Superset 2: Bulgarian Split Squats 4x10-12/leg & Single-Leg Glute Bridges 4x12-15/leg (Rest 60s)',
                        'Single-Leg RDLs: 3x10-12/leg (Hold weight opposite hand, Rest 60s)',
                        'Calf Raises (on step, weighted): 3x15-20 (2s up, 1s squeeze, 3s down, Rest 45s)'
                    ]
                },
                {
                    name: 'B. PLYOMETRIC POWER (15 min) — Circuit x3 Rounds, 90s Rest',
                    items: [
                        'Box Jumps (or step) x8',
                        'Broad Jumps x6',
                        'Lateral Skater Hops x10 each side',
                        'Jumping Lunges x12 total'
                    ]
                },
                {
                    name: 'C. CORE – HIP FLEXOR/LOWER ABS (15 min) — Circuit x3 Rounds, 45s Rest',
                    items: [
                        'Hanging Leg Raises (or lying) x12-15',
                        'V-Ups x12',
                        'Hollow Body Hold x20-30s',
                        'Mountain Climbers x20 total'
                    ]
                },
                {
                    name: 'COOLDOWN (10 min)',
                    items: ['Quad stretches x60s each', 'Hamstring stretches x60s each', 'Hip flexor stretches x90s each', 'Pigeon pose x90s each side']
                }
            ]
        },
        {
            day: 'TUESDAY',
            title: 'PUSH DAY 1 + HANDSTAND + CORE (Anti-Extension)',
            sections: [
                {
                    name: 'Warm-up (10 min)',
                    items: ['Arm circles, wrist mobility drills', 'Scapula push-ups x10', 'Cat-cow x10', 'Band pull-aparts x15', 'Plank walkouts x8']
                },
                {
                    name: 'A. HANDSTAND SKILL WORK (12 min)',
                    items: [
                        'Wall Handstand Hold: 3x30-40s',
                        'Wall Walks: 3x5 reps',
                        'Handstand Shoulder Taps (against wall): 3x8-10 taps',
                        'Rest 90s between sets'
                    ]
                },
                {
                    name: 'B. PUSH STRENGTH – SHOULDER DOMINANT (40 min)',
                    items: [
                        'Pike Push-ups (or Elevated Pike): 4x8-12 (Rest 90s)',
                        'Regular Push-ups (chest focus): 4x12-15 (Tempo: 2s down, explode up, Rest 60s)',
                        'Tricep Dips (on chair/parallel bars): 3x10-12 (Rest 60s)',
                        'Lateral Raises (water bottles/light weight): 3x12-15 (Rest 45s)',
                        'Pseudo Planche Push-ups: 3x6-8 (Rest 75s)'
                    ]
                },
                {
                    name: 'C. CORE – ANTI-EXTENSION (15 min) — Circuit x3 Rounds, 45s Rest',
                    items: [
                        'Plank (perfect form) x45-60s',
                        'Ab Wheel Rollouts (or plank walkouts) x10',
                        'Dead Bug x15',
                        'Bird Dog x10 each side'
                    ]
                },
                {
                    name: 'D. FINISHER – SHOULDER BURNOUT (8 min) — Circuit x2 Rounds',
                    items: [
                        'Diamond push-ups x10',
                        'Overhead press (bag/cylinder) x12',
                        'Front raises x12',
                        'Plank to downward dog x10'
                    ]
                },
                {
                    name: 'COOLDOWN (10 min)',
                    items: ['Chest doorway stretch x60s', 'Shoulder stretches x45s each', 'Tricep stretches x45s each', 'Wrist mobility']
                }
            ]
        },
        {
            day: 'WEDNESDAY',
            title: 'PULL DAY 2 + HIIT METCON + CORE (Rotation)',
            sections: [
                {
                    name: 'Warm-up (10 min)',
                    items: ['Jump rope or high knees x2 min', 'Arm swings, band rows', 'Thoracic rotations', 'Inchworms x8']
                },
                {
                    name: 'A. PULL STRENGTH – HORIZONTAL FOCUS (30 min)',
                    items: [
                        'Bent-Over Rows (bag/cylinder, both arms): 4x10-12 (Rest 75s)',
                        'Single-Arm Rows (towel/bag): 3x12-15 each arm (Rest 60s)',
                        'Hammer Curls (dumbbell/cylinder): 3x10-12 (Rest 45s)',
                        'Reverse Flyes (bent over, light weight): 3x15-20 (Rest 45s)'
                    ]
                },
                {
                    name: 'B. HIIT METCON – STAMINA BUILDER (25 min) — 4-5 Rounds',
                    items: [
                        '10 Jump Squats',
                        '15 Push-ups',
                        '20 Mountain Climbers',
                        '15 Bent-Over Rows (bag/cylinder)',
                        '10 Burpees',
                        'Rest 90-120s between rounds (Goal: 4-6 min/round)'
                    ]
                },
                {
                    name: 'C. CORE – ROTATIONAL POWER (15 min) — Circuit x3 Rounds, 45s Rest',
                    items: [
                        'Russian Twists (weighted) x40 total',
                        'Bicycle Crunches x30 total',
                        'Side Plank with Hip Dips x10 each side',
                        'Woodchoppers (band/weight) x12 each side'
                    ]
                },
                {
                    name: 'D. TABATA FINISHER (8 min)',
                    items: [
                        'Block 1: High knees (20s max effort, 10s rest) x8 rounds. Rest 90s.',
                        'Block 2: Burpees (20s max reps, 10s rest) x8 rounds.'
                    ]
                },
                {
                    name: 'COOLDOWN (12 min)',
                    items: ['Walk/jog to lower HR', 'Lat stretches', 'Hamstring stretches', 'Spinal twists', 'Deep breathing']
                }
            ]
        },
        {
            day: 'THURSDAY',
            title: 'LEGS DAY 2 (Volume / Endurance) + SKILL + CORE (Anti-Lateral)',
            sections: [
                {
                    name: 'Warm-up (10 min)',
                    items: ['Light jog in place x2 min', 'Leg swings x15 each', 'Glute activation (clams, fire hydrants)', 'Bodyweight squats x20']
                },
                {
                    name: 'A. CALISTHENICS SKILL WORK (15 min)',
                    items: [
                        'L-Sit Progression (on floor/parallel bars): 3x15-20s',
                        'Frog Stand Hold: 3x20-30s',
                        'Crow Pose Attempts: 5 attempts, max hold',
                        'Pistol Squat Progression: 3x5 each leg'
                    ]
                },
                {
                    name: 'B. LEG VOLUME – ENDURANCE FOCUS (35 min)',
                    items: [
                        'Tempo Squats (bodyweight/light load): 4x12-15 (Tempo: 5s down, 2s pause, explode up, Rest 60s)',
                        'Walking Lunges (loaded backpack): 4x20 steps total (Rest 60s)',
                        'Step-Ups (box/chair): 3x15/leg (Rest 45s)',
                        'Nordic Hamstring Curls (or lying slides): 3x6-10 (Rest 90s)',
                        'Single-Leg Calf Raises: 3x12-15/leg (Rest 45s)'
                    ]
                },
                {
                    name: 'C. CORE – ANTI-LATERAL FLEXION (15 min) — Circuit x3 Rounds, 45s Rest',
                    items: [
                        'Side Plank x30-45s each side',
                        'Copenhagen Plank (or modified) x15-20s each side',
                        'Suitcase Carries (heavy bag one side) x30m each side',
                        'Windshield Wipers (lying) x10 total'
                    ]
                },
                {
                    name: 'D. MOBILITY/STRETCH (15 min)',
                    items: ['Hip flexor x90s each', 'Quad x60s each', 'Hamstring x60s each', 'IT band foam roll', 'Calf x45s each', 'Glute (pigeon pose) x90s each']
                }
            ]
        },
        {
            day: 'FRIDAY',
            title: 'PUSH DAY 2 + CORE (Full Circuit)',
            sections: [
                {
                    name: 'Warm-up (10 min)',
                    items: ['Arm circles, wrist prep', 'Scapula push-ups x10', 'Light jog x3 min', 'Dynamic stretches']
                },
                {
                    name: 'A. PUSH STRENGTH – CHEST/TRICEP FOCUS (30 min)',
                    items: [
                        'Decline Push-ups (feet elevated): 4x10-12 (Rest 60s)',
                        'Wide Push-ups: 3x12-15 (Rest 60s)',
                        'Pike Push-ups (lighter than Tue): 3x8-10 (Rest 60s)',
                        'Tricep Extensions (overhead with weight): 3x12-15 (Rest 45s)'
                    ]
                },
                {
                    name: 'B. FULL CORE CIRCUIT (15 min) — Circuit x3 Rounds, 60s Rest',
                    items: [
                        'Plank x45s',
                        'Side Plank (R) x30s',
                        'Side Plank (L) x30s',
                        'Hollow Body Hold x20-30s',
                        'V-Ups x12',
                        'Russian Twists x30',
                        'Bicycle Crunches x20',
                        'Dead Bug x15'
                    ]
                },
                {
                    name: 'COOLDOWN/STRETCH (15 min)',
                    items: ['Walk x5 min', 'Hip flexors x90s each', 'Quads x60s each', 'Hamstrings x60s each', 'Calves x60s each', 'Glutes x90s each', 'IT band, Spinal twists', 'Child\'s pose x2 min']
                }
            ]
        },
        {
            day: 'SATURDAY',
            title: 'LONG RUN + ACTIVE RECOVERY / MOBILITY',
            sections: [
                {
                    name: 'A. LONG RUN – ZONE 2 AEROBIC (35 min)',
                    items: [
                        'Pace: Conversational (you can speak sentences)',
                        'Heart Rate: 130-150 bpm',
                        'Distance: 5-7 km (adjust to fitness)',
                        'First 5 min: Easy warm-up / Next 25-30 min: Steady Zone 2 / Last 5 min: Cool down jog'
                    ]
                },
                {
                    name: 'B. ACTIVE RECOVERY / MOBILITY (Choose 1-2 Options)',
                    items: [
                        'Option A: Yoga Flow (45 min) — Sun salutations, pigeon, hip openers',
                        'Option B: Light Movement + Stretching — Easy walk/swim + 20 min stretch',
                        'Option C: Foam Rolling + Deep Stretching (50 min)',
                        'Option D: Breathwork + Meditation + Gentle Movement (45 min)'
                    ]
                },
                {
                    name: 'FOCUS AREAS',
                    items: [
                        'Hips & glutes (squats + running)',
                        'Shoulders & lats (push/pull)',
                        'Thoracic spine',
                        'Ankles & wrists',
                        'Hip flexors & calves'
                    ]
                }
            ]
        }
    ]

    const nutritionTiming = [
        { day: 'PULL DAYS (Sun/Wed)', pre: 'Rice + dal (90 min before)', post: 'Soya chunks + curd + veggies (within 60m)' },
        { day: 'LEG DAYS (Mon/Thu)', pre: 'Rice + dal + veg (2 hours before)', post: 'Egg/soya + banana + jaggery shake (within 60m)' },
        { day: 'PUSH DAYS (Tue/Fri)', pre: 'Banana + handful peanuts (60 min before)', post: 'Egg + rice + dal (within 60m)' },
        { day: 'LONG RUN (Sat)', pre: 'Banana + dates or small poha (60-90m before)', post: 'Hydration + fruit → full meal within 90m' },
    ]

    const recoveryChart = [
        { muscle: 'Back / Biceps', trained: 'Sun, Wed', next: '3 days', rest: '3 days' },
        { muscle: 'Quads / Glutes / Hams', trained: 'Mon, Thu', next: '3 days', rest: '3 days' },
        { muscle: 'Chest / Shoulders / Triceps', trained: 'Tue, Fri', next: '3 days', rest: '3 days' },
        { muscle: 'Core', trained: 'Daily', next: '24h', rest: 'Varied focus' },
        { muscle: 'Cardio', trained: 'Thu, Sat', next: 'Multiple', rest: 'Non-interfering' },
    ]

    const progressTracking = [
        { phase: 'Week 1-2', goal: 'Establish baseline reps and hold times' },
        { phase: 'Week 3-4', goal: 'Increase reps by 1-2 or weight by 1-2kg' },
        { phase: 'Week 5-6', goal: 'Increase hold times by 5s and drop 5K time' },
        { phase: 'Deload (Week 7-8)', goal: 'Reduce volume by 40%, focus on recovery' },
    ]

    return (
        <div style={{ padding: '2rem', maxWidth: '1200px', margin: '0 auto' }}>
            <div style={{ marginBottom: '3rem' }}>
                <h1 className="brand-name" style={{ fontSize: '3rem', marginBottom: '0.5rem' }}>Ultimate PPL-Core Athlete Plan</h1>
                <p style={{ color: 'var(--text-dim)', fontSize: '1.1rem' }}>PULL → LEGS → PUSH split hitting each muscle 2x/week, daily core, and a Saturday run.</p>
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
                                { t: 'Breakfast', d: 'Poha/upma with peanuts OR 2 eggs + 2 roti' },
                                { t: 'Mid-morning', d: 'Fruit + roasted chana (10g protein)' },
                                { t: 'Lunch', d: 'Rice + dal + seasonal veg + curd' },
                                { t: 'Snack', d: 'Banana + peanut butter OR soya chunks' },
                                { t: 'Dinner', d: '2-3 roti + sabzi + protein source (soya/egg/dal)' },
                                { t: 'Before bed', d: 'Curd (optional - casein for overnight recovery)' },
                                { t: 'Protein target', d: '1.6-2g per kg bodyweight (e.g. 60kg → aim 96-120g daily)' },
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
                        {['Pull-ups', 'Push-ups', 'Goblet Squat (kg)', 'Handstand hold time', 'L-sit hold time', '5K run time'].map((metric, ix) => (
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
                        { t: 'Frequency (2x/week)', d: 'Training each muscle 2x/week is superior to 1x/week for hypertrophy. Perfect distribution. (Schoenfeld et al., 2016)' },
                        { t: 'Daily Core Training', d: 'Core can be trained daily with varied stimulus (rotation, anti-rotation, extension). (McGill, 2010)' },
                        { t: 'Skill Acquisition', d: 'Skills (handstands, holds) are best learned when the CNS is fresh before fatigue. (Schmidt & Lee, 2011)' },
                        { t: 'Plyometrics', d: 'Plyos after strength work develop power without interfering with hypertrophy. (Cormie et al., 2011)' },
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
                    <p style={{ fontSize: '0.9rem', color: 'var(--text-dim)' }}>🔸 Sleep 7-9 hours – non-negotiable for recovery.</p>
                    <p style={{ fontSize: '0.9rem', color: 'var(--text-dim)' }}>🔸 Hydrate 3-4 liters daily, more on Tue/Thu/Sat.</p>
                    <p style={{ fontSize: '0.9rem', color: 'var(--text-dim)' }}>🔸 Protein timing: Within 2 hours post-workout.</p>
                    <p style={{ fontSize: '0.9rem', color: 'var(--text-dim)' }}>🔸 Sunday is sacred: Actually recover, don't go hard.</p>
                    <p style={{ fontSize: '0.9rem', color: 'var(--text-dim)' }}>🔸 Deload every 6-8 weeks – reduce volume by 40%.</p>
                </div>
            </footer>
        </div>
    )
}
