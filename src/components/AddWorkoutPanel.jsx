import { useState } from 'react'
import supabase from '../utils/supabase-client'
import Papa from 'papaparse'
import * as XLSX from 'xlsx'
import { Upload, Plus, FileSpreadsheet, CheckCircle, AlertCircle } from 'lucide-react'

export default function AddWorkoutPanel({ user, onWorkoutAdded }) {
    const [activeTab, setActiveTab] = useState('manual') // 'manual' | 'import'

    // Manual Form State
    const [exerciseName, setExerciseName] = useState('')
    const [type, setType] = useState('push')
    const [sets, setSets] = useState('')
    const [reps, setReps] = useState('')
    const [weight, setWeight] = useState('')
    const [date, setDate] = useState(new Date().toISOString().split('T')[0])

    // Status State
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)
    const [success, setSuccess] = useState(null)
    const [stagedData, setStagedData] = useState(null)

    const handleManualSubmit = async (e) => {
        e.preventDefault()
        setLoading(true)
        setError(null)
        setSuccess(null)

        if (!user) return

        const newWorkout = {
            user_id: user.id,
            exercise_name: exerciseName,
            type: type,
            sets: parseInt(sets),
            reps: parseInt(reps),
            weight: weight,
            date: date
        }

        const { data, error: insertError } = await supabase
            .from('workouts')
            .insert([newWorkout])
            .select()

        setLoading(false)

        if (insertError) {
            setError(insertError.message)
        } else if (data && data.length > 0) {
            setSuccess("Workout added successfully!")
            onWorkoutAdded(data[0])

            // Reset form
            setExerciseName('')
            setSets('')
            setReps('')
            setWeight('')
        }
    }

    const parseAndStageData = async (parsedData) => {
        setLoading(true)
        setError(null)
        setSuccess(null)

        try {
            // Validate and format rows
            const formattedRows = parsedData.map((row, index) => {
                // Handle different possible header names
                const exName = row.exercise_name || row.Exercise || row.Name
                const exType = (row.type || row.Type || 'full').toLowerCase()
                const exSets = row.sets || row.Sets
                const exReps = row.reps || row.Reps
                const exWeight = row.weight || row.Weight
                const exDate = row.date || row.Date

                if (!exName || !exSets || !exReps || !exWeight || !exDate) {
                    throw new Error(`Row ${index + 1} is missing required columns. Ensure you have exercise_name, type, sets, reps, weight, and date.`)
                }

                const validTypes = ['push', 'pull', 'legs', 'endurance', 'upper', 'lower', 'full']
                if (!validTypes.includes(exType)) {
                    throw new Error(`Row ${index + 1} has invalid type: ${exType}. Must be one of: ${validTypes.join(', ')}`)
                }

                let dateString;
                const exDateStr = String(exDate).trim();

                // 1. If it's already YYYY-MM-DD
                if (/^\d{4}-\d{2}-\d{2}$/.test(exDateStr)) {
                    dateString = exDateStr;
                } else if (typeof exDate === 'number') {
                    // 2. Excel serial number date
                    // 25569 is the offset from 1900 to 1970 UNIX epoch.
                    const jsDate = new Date(Math.round((exDate - 25569) * 86400 * 1000));
                    const y = jsDate.getUTCFullYear();
                    const m = String(jsDate.getUTCMonth() + 1).padStart(2, '0');
                    const d = String(jsDate.getUTCDate()).padStart(2, '0');
                    dateString = `${y}-${m}-${d}`;
                } else {
                    // 3. String like "2/21/2026" or "2026/02/21"
                    if (exDateStr.includes('/')) {
                        const parts = exDateStr.split('/');
                        if (parts[2] && parts[2].length === 4) {
                            // MM/DD/YYYY
                            dateString = `${parts[2]}-${parts[0].padStart(2, '0')}-${parts[1].padStart(2, '0')}`;
                        } else if (parts[0] && parts[0].length === 4) {
                            // YYYY/MM/DD
                            dateString = `${parts[0]}-${parts[1].padStart(2, '0')}-${parts[2].padStart(2, '0')}`;
                        } else {
                            throw new Error(`Row ${index + 1} has an invalid date format: ${exDate}.`);
                        }
                    } else {
                        // Fallback parsing
                        const parsedDate = new Date(exDateStr);
                        if (isNaN(parsedDate.getTime())) {
                            throw new Error(`Row ${index + 1} has an invalid date format: ${exDate}. Please use YYYY-MM-DD.`);
                        }
                        const y = parsedDate.getFullYear();
                        const m = String(parsedDate.getMonth() + 1).padStart(2, '0');
                        const d = String(parsedDate.getDate()).padStart(2, '0');
                        dateString = `${y}-${m}-${d}`;
                    }
                }

                return {
                    user_id: user.id,
                    exercise_name: String(exName),
                    type: exType,
                    sets: parseInt(exSets),
                    reps: parseInt(exReps),
                    weight: String(exWeight),
                    date: dateString
                }
            })

            if (formattedRows.length === 0) {
                throw new Error("No valid data found in the file.")
            }

            // Stage data instead of inserting
            setStagedData(formattedRows)

        } catch (err) {
            setError(err.message || "Failed to process the file.")
        } finally {
            setLoading(false)
        }
    }

    const handleStagedChange = (index, field, value) => {
        const newData = [...stagedData]
        newData[index][field] = value
        setStagedData(newData)
    }

    const confirmImport = async () => {
        setLoading(true)
        setError(null)
        setSuccess(null)

        try {
            const { data, error: insertError } = await supabase
                .from('workouts')
                .insert(stagedData)
                .select()

            if (insertError) throw insertError

            setSuccess(`Successfully imported ${stagedData.length} workouts!`)
            setStagedData(null) // Clear staging
            if (data) {
                onWorkoutAdded(null, true) // trigger full refresh
            }

        } catch (err) {
            setError(err.message || "Failed to import data.")
        } finally {
            setLoading(false)
        }
    }

    const handleFileUpload = (e) => {
        const file = e.target.files[0]
        if (!file) return

        const fileName = file.name.toLowerCase()

        if (fileName.endsWith('.csv')) {
            Papa.parse(file, {
                header: true,
                skipEmptyLines: true,
                complete: (results) => {
                    if (results.errors.length > 0) {
                        setError("Error parsing CSV: " + results.errors[0].message)
                        return
                    }
                    parseAndStageData(results.data)
                }
            })
        } else if (fileName.endsWith('.xlsx') || fileName.endsWith('.xls')) {
            const reader = new FileReader()
            reader.onload = (evt) => {
                try {
                    const bstr = evt.target.result
                    const wb = XLSX.read(bstr, { type: 'binary' })
                    // Get first worksheet
                    const wsname = wb.SheetNames[0]
                    const ws = wb.Sheets[wsname]
                    // Convert array of arrays to JSON
                    const data = XLSX.utils.sheet_to_json(ws)
                    parseAndStageData(data)
                } catch (err) {
                    setError("Failed to read Excel file. Please ensure it is correctly formatted.")
                }
            }
            reader.readAsBinaryString(file)
        } else {
            setError("Unsupported file format. Please upload a .csv or .xlsx file.")
        }

        // Reset file input
        e.target.value = null
    }

    return (
        <div style={{ padding: '2rem', height: '100%', display: 'flex', flexDirection: 'column', maxWidth: '800px', margin: '0 auto' }}>
            <header style={{ marginBottom: '2rem' }}>
                <h1 style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>Add Workout</h1>
                <p style={{ color: 'var(--text-dim)' }}>Log a single session or import your entire history.</p>
            </header>

            {/* Internal Tabs */}
            <div style={{ display: 'flex', gap: '1rem', marginBottom: '2rem', borderBottom: '1px solid var(--glass-border)' }}>
                <button
                    onClick={() => setActiveTab('manual')}
                    style={{
                        padding: '1rem 2rem',
                        background: 'transparent',
                        border: 'none',
                        borderBottom: activeTab === 'manual' ? '2px solid var(--primary)' : '2px solid transparent',
                        color: activeTab === 'manual' ? 'var(--primary)' : 'var(--text-dim)',
                        fontSize: '1rem',
                        fontWeight: activeTab === 'manual' ? '600' : '400',
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.5rem',
                        transition: 'all 0.2s'
                    }}
                >
                    <Plus size={18} />
                    Manual Entry
                </button>
                <button
                    onClick={() => setActiveTab('import')}
                    style={{
                        padding: '1rem 2rem',
                        background: 'transparent',
                        border: 'none',
                        borderBottom: activeTab === 'import' ? '2px solid var(--primary)' : '2px solid transparent',
                        color: activeTab === 'import' ? 'var(--primary)' : 'var(--text-dim)',
                        fontSize: '1rem',
                        fontWeight: activeTab === 'import' ? '600' : '400',
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.5rem',
                        transition: 'all 0.2s'
                    }}
                >
                    <FileSpreadsheet size={18} />
                    Bulk Import
                </button>
            </div>

            {error && (
                <div style={{ padding: '1.2rem', background: 'rgba(255, 50, 50, 0.1)', border: '1px solid rgba(255, 50, 50, 0.3)', borderRadius: '8px', color: '#ff6b6b', display: 'flex', alignItems: 'flex-start', gap: '0.8rem', marginBottom: '2rem' }}>
                    <AlertCircle size={20} style={{ flexShrink: 0, marginTop: '2px' }} />
                    <p style={{ margin: 0, lineHeight: 1.5 }}>{error}</p>
                </div>
            )}

            {success && (
                <div style={{ padding: '1.2rem', background: 'rgba(50, 255, 100, 0.1)', border: '1px solid rgba(50, 255, 100, 0.3)', borderRadius: '8px', color: '#51cf66', display: 'flex', alignItems: 'center', gap: '0.8rem', marginBottom: '2rem' }}>
                    <CheckCircle size={20} />
                    <p style={{ margin: 0 }}>{success}</p>
                </div>
            )}

            {activeTab === 'manual' ? (
                <div className="glass-card" style={{ padding: '2.5rem' }}>
                    <form onSubmit={handleManualSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                        <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}>
                            <div style={{ flex: 2, minWidth: '200px' }}>
                                <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-dim)' }}>Exercise Name</label>
                                <input
                                    type="text"
                                    required
                                    value={exerciseName}
                                    onChange={e => setExerciseName(e.target.value)}
                                    placeholder="e.g. Barbell Squats"
                                    style={{ width: '100%', padding: '1rem', borderRadius: '12px', border: '1px solid var(--glass-border)', background: 'rgba(0,0,0,0.2)', color: 'white', fontSize: '1rem' }}
                                />
                            </div>
                            <div style={{ flex: 1, minWidth: '150px' }}>
                                <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-dim)' }}>Type</label>
                                <select
                                    value={type}
                                    onChange={e => setType(e.target.value)}
                                    style={{ width: '100%', padding: '1rem', borderRadius: '12px', border: '1px solid var(--glass-border)', background: 'rgba(0,0,0,0.75)', color: 'white', fontSize: '1rem', cursor: 'pointer' }}
                                >
                                    <option value="push">Push</option>
                                    <option value="pull">Pull</option>
                                    <option value="legs">Legs</option>
                                    <option value="endurance">Endurance</option>
                                    <option value="upper">Upper</option>
                                    <option value="lower">Lower</option>
                                    <option value="full">Full Body</option>
                                </select>
                            </div>
                        </div>

                        <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}>
                            <div style={{ flex: 1, minWidth: '120px' }}>
                                <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-dim)' }}>Sets</label>
                                <input
                                    type="number"
                                    required min="1"
                                    value={sets}
                                    onChange={e => setSets(e.target.value)}
                                    style={{ width: '100%', padding: '1rem', borderRadius: '12px', border: '1px solid var(--glass-border)', background: 'rgba(0,0,0,0.2)', color: 'white', fontSize: '1rem' }}
                                />
                            </div>
                            <div style={{ flex: 1, minWidth: '120px' }}>
                                <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-dim)' }}>Reps / Time</label>
                                <input
                                    type="number"
                                    required min="1"
                                    value={reps}
                                    onChange={e => setReps(e.target.value)}
                                    style={{ width: '100%', padding: '1rem', borderRadius: '12px', border: '1px solid var(--glass-border)', background: 'rgba(0,0,0,0.2)', color: 'white', fontSize: '1rem' }}
                                />
                            </div>
                        </div>

                        <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}>
                            <div style={{ flex: 1, minWidth: '150px' }}>
                                <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-dim)' }}>Metric (e.g. 100kg, 5km) </label>
                                <input
                                    type="text"
                                    required
                                    value={weight}
                                    onChange={e => setWeight(e.target.value)}
                                    placeholder="e.g. 100kg"
                                    style={{ width: '100%', padding: '1rem', borderRadius: '12px', border: '1px solid var(--glass-border)', background: 'rgba(0,0,0,0.2)', color: 'white', fontSize: '1rem' }}
                                />
                            </div>
                            <div style={{ flex: 1, minWidth: '150px' }}>
                                <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-dim)' }}>Date completed</label>
                                <input
                                    type="date"
                                    required
                                    value={date}
                                    onChange={e => setDate(e.target.value)}
                                    style={{ width: '100%', padding: '1rem', borderRadius: '12px', border: '1px solid var(--glass-border)', background: 'rgba(0,0,0,0.2)', color: 'white', colorScheme: 'dark', fontSize: '1rem' }}
                                />
                            </div>
                        </div>

                        <button type="submit" className="cta-button" style={{ marginTop: '1rem', padding: '1.2rem', fontSize: '1.1rem' }} disabled={loading}>
                            {loading ? 'Adding...' : 'Save Workout'}
                        </button>
                    </form>
                </div>
            ) : stagedData ? (
                <div className="glass-card" style={{ padding: '2rem', display: 'flex', flexDirection: 'column', height: '100%', maxHeight: '500px' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
                        <h2 style={{ fontSize: '1.5rem', margin: 0 }}>Review Data ({stagedData.length} records)</h2>
                        <div style={{ display: 'flex', gap: '1rem' }}>
                            <button
                                onClick={() => setStagedData(null)}
                                style={{ padding: '0.8rem 1.5rem', borderRadius: '8px', background: 'transparent', border: '1px solid var(--glass-border)', color: 'var(--text)', cursor: 'pointer' }}
                            >
                                Cancel
                            </button>
                            <button
                                onClick={confirmImport}
                                disabled={loading}
                                style={{ padding: '0.8rem 1.5rem', borderRadius: '8px', background: 'var(--primary)', border: 'none', color: '#000', fontWeight: 'bold', cursor: loading ? 'not-allowed' : 'pointer' }}
                            >
                                {loading ? 'Importing...' : 'Confirm Import'}
                            </button>
                        </div>
                    </div>

                    <div style={{ flex: 1, overflowY: 'auto', paddingRight: '0.5rem' }}>
                        {stagedData.map((row, i) => (
                            <div key={i} style={{ display: 'flex', gap: '0.5rem', marginBottom: '0.5rem', padding: '0.5rem', background: 'rgba(255,255,255,0.02)', borderRadius: '8px', alignItems: 'center' }}>
                                <input
                                    style={{ flex: 2, minWidth: '120px', padding: '0.5rem', borderRadius: '4px', border: '1px solid var(--glass-border)', background: 'transparent', color: 'var(--text)' }}
                                    value={row.exercise_name}
                                    onChange={e => handleStagedChange(i, 'exercise_name', e.target.value)}
                                    title="Exercise Name"
                                />
                                <select
                                    style={{ flex: 1, minWidth: '90px', padding: '0.5rem', borderRadius: '4px', border: '1px solid var(--glass-border)', background: 'var(--bg)', color: 'var(--text)' }}
                                    value={row.type}
                                    onChange={e => handleStagedChange(i, 'type', e.target.value)}
                                >
                                    <option value="push">Push</option>
                                    <option value="pull">Pull</option>
                                    <option value="legs">Legs</option>
                                    <option value="endurance">Endur</option>
                                    <option value="upper">Upper</option>
                                    <option value="lower">Lower</option>
                                    <option value="full">Full</option>
                                </select>
                                <input
                                    type="number" style={{ width: '60px', padding: '0.5rem', borderRadius: '4px', border: '1px solid var(--glass-border)', background: 'transparent', color: 'var(--text)' }}
                                    value={row.sets}
                                    onChange={e => handleStagedChange(i, 'sets', parseInt(e.target.value) || 0)}
                                    title="Sets"
                                />
                                <input
                                    type="number" style={{ width: '60px', padding: '0.5rem', borderRadius: '4px', border: '1px solid var(--glass-border)', background: 'transparent', color: 'var(--text)' }}
                                    value={row.reps}
                                    onChange={e => handleStagedChange(i, 'reps', parseInt(e.target.value) || 0)}
                                    title="Reps"
                                />
                                <input
                                    style={{ flex: 1, minWidth: '70px', padding: '0.5rem', borderRadius: '4px', border: '1px solid var(--glass-border)', background: 'transparent', color: 'var(--text)' }}
                                    value={row.weight}
                                    onChange={e => handleStagedChange(i, 'weight', e.target.value)}
                                    title="Metric (e.g. 100kg)"
                                />
                                <input
                                    type="date" style={{ width: '130px', padding: '0.5rem', borderRadius: '4px', border: '1px solid var(--glass-border)', background: 'transparent', color: 'var(--text)', colorScheme: 'dark' }}
                                    value={row.date}
                                    onChange={e => handleStagedChange(i, 'date', e.target.value)}
                                    title="Date"
                                />
                            </div>
                        ))}
                    </div>
                </div>
            ) : (
                <div className="glass-card" style={{ padding: '3rem', textAlign: 'center', borderStyle: 'dashed', borderWidth: '2px', borderColor: 'var(--glass-border)' }}>
                    <Upload size={48} color="var(--primary)" style={{ marginBottom: '1.5rem', opacity: 0.8 }} />
                    <h2 style={{ marginBottom: '1rem' }}>Upload CSV or XLSX Data</h2>
                    <p style={{ color: 'var(--text-dim)', marginBottom: '2rem', maxWidth: '400px', margin: '0 auto 2rem auto', lineHeight: 1.6 }}>
                        Quickly import past workout logs. Ensure your file has the following column headers exactly:
                        <br /><br />
                        <code style={{ background: 'rgba(255,255,255,0.1)', padding: '0.3rem 0.6rem', borderRadius: '4px', color: 'var(--primary)' }}>exercise_name, type, sets, reps, weight, date</code>
                        <br /><br />
                        (Date format should be YYYY-MM-DD)
                    </p>

                    <label
                        style={{
                            display: 'inline-block',
                            background: 'var(--primary)',
                            color: '#000',
                            padding: '1rem 2.5rem',
                            borderRadius: '50px',
                            fontWeight: '600',
                            transition: 'all 0.3s',
                            cursor: loading ? 'not-allowed' : 'pointer',
                            opacity: loading ? 0.7 : 1
                        }}
                    >
                        {loading ? 'Processing...' : 'Select File'}
                        <input
                            type="file"
                            accept=".csv, .xlsx, .xls"
                            onChange={handleFileUpload}
                            style={{ display: 'none' }}
                            disabled={loading}
                        />
                    </label>
                </div>
            )}
        </div>
    )
}
