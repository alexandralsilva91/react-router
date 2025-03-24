import { Link } from 'react-router'
import Button from './Button/Button'

function NavBar() {
    return (
    <nav style={{ marginBottom: '120px' }}>
      <ul className="nav-bar">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/country">Country</Link>
          </li>
          <li>
            <Link to="/continents">Continents</Link>
          </li>
          <li>
            <Link to="/currencies">Currencies</Link>
          </li>
      </ul>
        <Button>
          <h2>Click Here</h2>
        </Button> 
    </nav> )
}

export default NavBar