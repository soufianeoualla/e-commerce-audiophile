import { Link } from "react-router-dom"

const NavLinks = () => {
    
  return (
    <nav>
            <ul className='text-xs font-medium tracking-widest flex justify-between items-center gap-6 text-white'>
              <Link to={'/'} >
                <li className=' hover:text-brown'>HOME</li>
              </Link>

              <Link to={'/headphones'}>
              <li className=' hover:text-brown'>HEADPHONES</li>
              </Link>

              <Link to={'/speakers'}>
              <li className=' hover:text-brown'>SPEAKERS</li>
              </Link>

              <Link to={'/earphones'}>
              <li className=' hover:text-brown'>EARPHONES</li>
              </Link>
            </ul>
        </nav>
  )
}

export default NavLinks