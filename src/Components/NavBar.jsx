import { Link } from 'react-router'
import Button from './Button/Button'

function NavBar() {
    return (
    <nav style={{ marginBottom: '120px' }}>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/country">country 🌺</Link>
        </li>
        <li>
          <Link to="/continents">Continents</Link>
        </li>
        <li>
          <Link to="/currencies">Currencies</Link>
        </li>
        <Button>
          <h2>Click Here</h2>
        </Button> 
    </nav> )
}

export default NavBar