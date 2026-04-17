
import { Link } from 'react-router-dom'

export const Home = () => {
  return (
    <div>
      Home Components
      <div>
        <nav>
          <Link to="/about">About</Link>
        </nav>
      </div>

    </div>
  )
}

