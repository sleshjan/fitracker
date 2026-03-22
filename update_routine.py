import sys
import re

path = r"c:\Users\acer\Documents\react projs\fitracker\src\components\WorkoutPlanPanel.jsx"

with open(path, "r", encoding="utf-8") as f:
    text = f.read()

# 1. weeklySplit
weekly_split_new = """    const weeklySplit = [
        { day: 'Sun', focus: 'PULL + Core (Anti-Rotation)', muscles: 'Back, Biceps, Rear Delts', icon: Target, color: '#FF8800' },
        { day: 'Mon', focus: 'LEGS + Plyos + Core', muscles: 'Quads, Glutes, Hams', icon: Zap, color: '#00D2FF' },
        { day: 'Tue', focus: 'PUSH + Handstand + Core', muscles: 'Chest, Shoulders, Triceps', icon: Dumbbell, color: '#FF4D4D' },
        { day: 'Wed', focus: 'PULL + HIIT + Core', muscles: 'Back, Biceps', icon: Flame, color: '#00FF88' },
        { day: 'Thu', focus: 'LEGS (Volume) + Skill + Core', muscles: 'Legs, Endurance', icon: Timer, color: '#9D00FF' },
        { day: 'Fri', focus: 'PUSH + Full Core Circuit', muscles: 'Chest, Shoulders, Triceps', icon: Activity, color: '#FF00FF' },
        { day: 'Sat', focus: 'LONG RUN + Active Recovery', muscles: 'Full Body, Cardio', icon: Heart, color: '#FFFFFF' },
    ]"""
text = re.sub(r"    const weeklySplit = \[\s*\{[\s\S]*?\}\s*\]\n", weekly_split_new + "\n", text, count=1)
if weekly_split_new not in text:
    text = re.sub(r"    const weeklySplit = \[[\s\S]*?    \]", weekly_split_new, text, count=1)

# 2. workoutDays
workout_days_new = """    const workoutDays = [
        {
            day: 'SUNDAY',
            title: 'PULL DAY 1 + CORE (Anti-Rotation)',
            sections: [
                {
                    name: 'Warm-up (10 min)',
                    items: ['Arm circles, band pull-aparts', 'Dead hangs x20s', 'Thoracic rotations', 'Scapula shrugs x12', 'Cat-cow x10']
                },
                {
                    name: 'A. PULL STRENGTH – VERTICAL FOCUS (35 min)',
                    items: [
                        'Pull-ups / Chin-ups (or Assisted): 4x6-10 (RIR 1-2, Rest 90s)',
                        'Inverted Rows (under table): 4x10-12 (RIR 1-2, Rest 60s)',
                        'Face Pulls (band/towel): 3x15-20 (RIR 1, Rest 45s)',
                        'Bicep Curls (dumbbell/cylinder): 3x10-12 each arm (3s down, Rest 60s)',
                        'Scapula Pull-ups: 3x10-12 (Rest 45s)'
                    ]
                },
                {
                    name: 'B. CORE – ANTI-ROTATION (15 min) — Circuit x3',
                    items: [
                        'Pallof Press (band/towel resistance) x12 each side',
                        'Russian Twists (weighted) x30 total',
                        'Dead Bug (opposite arm/leg) x20 total',
                        'Plank with shoulder taps x20 total'
                    ]
                },
                {
                    name: 'C. FINISHER – LAT PUMP (10 min) — Superset x2',
                    items: [
                        'Wide-grip dead hang x20-30s',
                        'Straight arm pulldowns (band) x15',
                        'Rest 60s'
                    ]
                }
            ]
        },
        {
            day: 'MONDAY',
            title: 'LEGS DAY 1 + PLYOS + CORE (Hip Flexors)',
            sections: [
                {
                    name: 'Warm-up (10 min)',
                    items: ['Leg swings x15 each', 'Glute bridges x15', 'Bodyweight squats x15', 'Walking lunges x10/leg', 'Hip circles']
                },
                {
                    name: 'A. LEG STRENGTH – QUAD/GLUTE DOMINANT (40 min)',
                    items: [
                        'Super 1: Goblet Squats 4x10-15 & Jump Squats 4x8-10 (Rest 90s)',
                        'Super 2: Bulgarian Split Squats 4x10-12/leg & Single-Leg Glute Bridges 4x12-15/leg (Rest 60s)',
                        'Single-Leg RDLs: 3x10-12/leg (Hold weight opposite hand, Rest 60s)',
                        'Calf Raises (on step, weighted): 3x15-20 (Rest 45s)'
                    ]
                },
                {
                    name: 'B. PLYOMETRIC POWER (15 min) — Circuit x3',
                    items: [
                        'Box Jumps (or step jumps) x8',
                        'Broad Jumps x6',
                        'Lateral Skater Hops x10 each side',
                        'Jumping Lunges x12 total'
                    ]
                },
                {
                    name: 'C. CORE – HIP FLEXOR/LOWER ABS (15 min) — Circuit x3',
                    items: [
                        'Hanging Leg Raises (or lying) x12-15',
                        'V-Ups x12',
                        'Hollow Body Hold x20-30s',
                        'Mountain Climbers x20 total'
                    ]
                }
            ]
        },
        {
            day: 'TUESDAY',
            title: 'PUSH DAY 1 + HANDSTAND + CORE (Anti-Extension)',
            sections: [
                {
                    name: 'Warm-up (10 min)',
                    items: ['Arm circles, wrist drills', 'Scapula push-ups x10', 'Cat-cow x10', 'Band pull-aparts x15', 'Plank walkouts x8']
                },
                {
                    name: 'A. HANDSTAND SKILL WORK (12 min)',
                    items: [
                        'Wall Handstand Hold: 3x30-40s',
                        'Wall Walks: 3x5 reps',
                        'Handstand Shoulder Taps: 3x8-10 taps',
                        'Rest 90s'
                    ]
                },
                {
                    name: 'B. PUSH STRENGTH – SHOULDER DOMINANT (40 min)',
                    items: [
                        'Pike Push-ups (or Elevated): 4x8-12',
                        'Regular Push-ups: 4x12-15 (Tempo: 2s down, explode up)',
                        'Tricep Dips: 3x10-12',
                        'Lateral Raises: 3x12-15',
                        'Pseudo Planche Push-ups: 3x6-8'
                    ]
                },
                {
                    name: 'C. CORE – ANTI-EXTENSION (15 min) — Circuit x3',
                    items: [
                        'Plank (perfect form) x45-60s',
                        'Ab Wheel Rollouts (or walkouts) x10',
                        'Dead Bug x15',
                        'Bird Dog x10 each side'
                    ]
                },
                {
                    name: 'D. FINISHER – SHOULDER BURNOUT (8 min) — Circuit x2',
                    items: [
                        'Diamond push-ups x10',
                        'Overhead press (bag/cylinder) x12',
                        'Front raises x12',
                        'Plank to downward dog x10'
                    ]
                }
            ]
        },
        {
            day: 'WEDNESDAY',
            title: 'PULL DAY 2 + HIIT METCON + CORE (Rotation)',
            sections: [
                {
                    name: 'Warm-up (10 min)',
                    items: ['Jump rope/high knees 2 min', 'Arm swings, band rows', 'Thoracic rotations', 'Inchworms x8']
                },
                {
                    name: 'A. PULL STRENGTH – HORIZONTAL FOCUS (30 min)',
                    items: [
                        'Bent-Over Rows (bag/cylinder, both arms): 4x10-12',
                        'Single-Arm Rows (towel/bag): 3x12-15 each arm',
                        'Hammer Curls (dumbbell/cylinder): 3x10-12',
                        'Reverse Flyes (bent over): 3x15-20'
                    ]
                },
                {
                    name: 'B. HIIT METCON – STAMINA (25 min) — 4-5 Rounds',
                    items: [
                        '10 Jump Squats',
                        '15 Push-ups',
                        '20 Mountain Climbers',
                        '15 Bent-Over Rows (bag/cylinder)',
                        '10 Burpees',
                        'Rest 90-120s (Goal: 4-6 min/round)'
                    ]
                },
                {
                    name: 'C. CORE – ROTATIONAL POWER (15 min) — Circuit x3',
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
                        'Block 1: High knees (20s on, 10s off) x8',
                        'Block 2: Burpees (20s on, 10s off) x8'
                    ]
                }
            ]
        },
        {
            day: 'THURSDAY',
            title: 'LEGS DAY 2 (Volume) + SKILL + CORE (Anti-Lateral)',
            sections: [
                {
                    name: 'Warm-up (10 min)',
                    items: ['Light jog x2 min', 'Leg swings x15', 'Glute activation', 'Bodyweight squats x20']
                },
                {
                    name: 'A. CALISTHENICS SKILL WORK (15 min)',
                    items: [
                        'L-Sit Progression: 3x15-20s',
                        'Frog Stand Hold: 3x20-30s',
                        'Crow Pose: 5 attempts',
                        'Pistol Squat Progression: 3x5 each leg'
                    ]
                },
                {
                    name: 'B. LEG VOLUME – ENDURANCE FOCUS (35 min)',
                    items: [
                        'Tempo Squats (bodyweight/light): 4x12-15 (5s down, 2s pause)',
                        'Walking Lunges (loaded backpack): 4x20 steps total',
                        'Step-Ups (box/chair): 3x15/leg',
                        'Nordic Hamstring Curls (or lying slides): 3x6-10',
                        'Single-Leg Calf Raises: 3x12-15/leg'
                    ]
                },
                {
                    name: 'C. CORE – ANTI-LATERAL FLEXION (15 min) — Circuit x3',
                    items: [
                        'Side Plank x30-45s each side',
                        'Copenhagen Plank (or modified) x15-20s each side',
                        'Suitcase Carries (heavy bag one side) x30m each side',
                        'Windshield Wipers (lying) x10 total'
                    ]
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
                        'Decline Push-ups (feet elevated): 4x10-12',
                        'Wide Push-ups: 3x12-15',
                        'Pike Push-ups (lighter than Tue): 3x8-10',
                        'Tricep Extensions (overhead with weight): 3x12-15'
                    ]
                },
                {
                    name: 'B. FULL CORE CIRCUIT (15 min) — Circuit x3',
                    items: [
                        'Plank x45s',
                        'Side Plank (R&L) x30s each',
                        'Hollow Body Hold x20-30s',
                        'V-Ups x12',
                        'Russian Twists x30',
                        'Bicycle Crunches x20',
                        'Dead Bug x15'
                    ]
                },
                {
                    name: 'COOLDOWN/STRETCH (15 min)',
                    items: ['Walk x5 min', 'Hip flexors x90s', 'Quads x60s', 'Hamstrings x60s', 'Calves x60s', 'Glutes x90s', 'IT band, Child\\'s pose']
                }
            ]
        },
        {
            day: 'SATURDAY',
            title: 'LONG RUN + ACTIVE RECOVERY',
            sections: [
                {
                    name: 'A. LONG RUN – ZONE 2 AEROBIC (35 min)',
                    items: [
                        'Pace: Conversational (130-150 bpm)',
                        'Distance: 5-7 km',
                        'First 5 min: warm-up / Next 25-30 min: Zone 2 / Last 5 min: cool down'
                    ]
                },
                {
                    name: 'B. ACTIVE RECOVERY / MOBILITY',
                    items: [
                        'Option A: Yoga Flow (45 min)',
                        'Option B: Light Movement + Stretching (walk/swim)',
                        'Option C: Foam Rolling + Deep Stretching',
                        'Option D: Breathwork + Meditation'
                    ]
                },
                {
                    name: 'FOCUS AREAS',
                    items: [
                        'Hips & glutes',
                        'Shoulders & lats',
                        'Thoracic spine',
                        'Ankles & wrists',
                        'Calves & hamstrings'
                    ]
                }
            ]
        }
    ]"""
text = re.sub(r"    const workoutDays = \[[\s\S]*?    \]\n\n    const nutritionTiming", workout_days_new + "\n\n    const nutritionTiming", text, count=1)

# 3. nutritionTiming
nutrition_timing_new = """    const nutritionTiming = [
        { day: 'PULL DAYS (Sun/Wed)', pre: 'Rice + dal (90 min before)', post: 'Soya chunks + curd + veggies (within 60m)' },
        { day: 'LEG DAYS (Mon/Thu)', pre: 'Rice + dal + veg (2 hours before)', post: 'Egg/soya + banana + shake (within 60m)' },
        { day: 'PUSH DAYS (Tue/Fri)', pre: 'Banana + peanuts (60 min before)', post: 'Egg + rice + dal (within 60m)' },
        { day: 'LONG RUN (Sat)', pre: 'Banana/dates/poha (60-90m before)', post: 'Hydration + fruit → full meal within 90m' },
    ]"""
text = re.sub(r"    const nutritionTiming = \[[\s\S]*?    \]", nutrition_timing_new, text, count=1)

# 4. recoveryChart
recovery_chart_new = """    const recoveryChart = [
        { muscle: 'Back / Biceps', trained: 'Sun, Wed', next: '3 days', rest: '3 days' },
        { muscle: 'Quads / Glutes / Hams', trained: 'Mon, Thu', next: '3 days', rest: '3 days' },
        { muscle: 'Chest / Shoulders / Triceps', trained: 'Tue, Fri', next: '3 days', rest: '3 days' },
        { muscle: 'Core', trained: 'Daily', next: '24h', rest: 'Varied focus' },
    ]"""
text = re.sub(r"    const recoveryChart = \[[\s\S]*?    \]", recovery_chart_new, text, count=1)

# 5. progressTracking
progress_tracking_new = """    const progressTracking = [
        { phase: 'Week 1-2', goal: 'Establish baseline reps and hold times' },
        { phase: 'Week 3-4', goal: 'Increase reps by 1-2 or weight by 1-2kg' },
        { phase: 'Week 5-6', goal: 'Increase hold times by 5s and drop 5K time' },
        { phase: 'Deload (Week 7-8)', goal: 'Reduce volume by 40%, focus on recovery' },
    ]"""
text = re.sub(r"    const progressTracking = \[[\s\S]*?    \]", progress_tracking_new, text, count=1)

# 6. JSX headers
h1_old = '''<h1 className="brand-name" style={{ fontSize: '3rem', marginBottom: '0.5rem' }}>Push / Pull / Legs Plan</h1>'''
h1_new = '''<h1 className="brand-name" style={{ fontSize: '3rem', marginBottom: '0.5rem' }}>Ultimate PPL-Core Athlete Plan</h1>'''
text = text.replace(h1_old, h1_new)

p_old = '''<p style={{ color: 'var(--text-dim)', fontSize: '1.1rem' }}>Skills, cardio & plyometrics integrated — 48-72h recovery between same muscle groups.</p>'''
p_new = '''<p style={{ color: 'var(--text-dim)', fontSize: '1.1rem' }}>PULL → LEGS → PUSH split hitting each muscle 2x/week, daily core, and a Saturday run.</p>'''
text = text.replace(p_old, p_new)

# 7. Daily Baseline items
daily_baseline_old = """                            {[
                                { t: 'Breakfast', d: 'Poha/upma with peanuts OR eggs + roti' },
                                { t: 'Lunch', d: 'Rice + dal + seasonal veg + curd' },
                                { t: 'Snack', d: 'Fruit + roasted chana OR peanut butter' },
                                { t: 'Dinner', d: 'Roti + sabzi + soya OR lighter rice meal' },
                                { t: 'Protein target', d: '1.2-1.6g per kg bodyweight (e.g. 60kg → aim 70-95g daily)' },
                            ].map((item, ix) => ("""
daily_baseline_new = """                            {[
                                { t: 'Breakfast', d: 'Poha/upma with peanuts OR 2 eggs + 2 roti' },
                                { t: 'Mid-morning', d: 'Fruit + roasted chana (10g protein)' },
                                { t: 'Lunch', d: 'Rice + dal + seasonal veg + curd' },
                                { t: 'Snack', d: 'Banana + peanut butter OR soya chunks' },
                                { t: 'Dinner', d: '2-3 roti + sabzi + protein source (soya/egg/dal)' },
                                { t: 'Before bed', d: 'Curd (optional - casein for overnight recovery)' },
                                { t: 'Protein target', d: '1.6-2g per kg bodyweight (e.g. 60kg → aim 96-120g daily)' },
                            ].map((item, ix) => ("""
text = text.replace(daily_baseline_old, daily_baseline_new)

# 8. Metrics tracker
text = text.replace(
    "{['Pushup max', 'Pull-up max', 'Handstand hold time', 'L-sit hold time', 'Sprint time (50m)', '5K run time'].map((metric, ix) => (",
    "{['Pull-ups', 'Push-ups', 'Goblet Squat (kg)', 'Handstand hold time', 'L-sit hold time', '5K run time'].map((metric, ix) => ("
)

with open(path, "w", encoding="utf-8") as f:
    f.write(text)

print("Done replacing.")
