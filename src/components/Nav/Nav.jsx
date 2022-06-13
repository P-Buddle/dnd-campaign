import './nav.css'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <nav>
        <Link className='navBarLink' to='/'>Home</Link>
        <Link className='navBarLink' to='/places'>Places</Link>
        <Link className='navBarLink' to='/people'>People</Link>
        <Link className='navBarLink' to='/factions'>Factions</Link>
        <Link  className='navBarLink'to='/history'>Lore</Link>
        <Link  className='navBarLink'to='/story'>Story</Link>
    </nav>
  )
}

export default Nav