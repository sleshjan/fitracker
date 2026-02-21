import mainLogo from '../assets/mainlogo.jpg'

export default function Logo() {
    return (
        <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.75rem'
        }}>
            <img
                src={mainLogo}
                alt="Fitracker Logo"
                style={{
                    width: '32px',
                    height: '32px',
                    borderRadius: '8px',
                    objectFit: 'cover'
                }}
            />
            <span className="brand-name" style={{ fontSize: '1.25rem', margin: 0, backgroundImage: 'linear-gradient(to right, #fff, var(--primary))', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                Fitracker
            </span>
        </div>
    )
}
