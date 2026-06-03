import { Link } from '@tanstack/react-router'

export default function Navbar() {
  return (
    <nav style={styles.nav}>
      <h2 style={styles.logo}>MyApp</h2>

      <div style={styles.links}>
        <Link to="/" style={styles.link}>
          Home
        </Link>

        <Link to="/about" style={styles.link}>
          About
        </Link>

        <Link to="/dashboard" style={styles.link}>
          Dashboard
        </Link>
      </div>
    </nav>
  )
}

const styles: Record<string, React.CSSProperties> = {
  nav: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '12px 20px',
    background: '#111',
    color: '#fff',
  },
  logo: {
    margin: 0,
    fontSize: '18px',
  },
  links: {
    display: 'flex',
    gap: '15px',
  },
  link: {
    color: '#fff',
    textDecoration: 'none',
  },
}