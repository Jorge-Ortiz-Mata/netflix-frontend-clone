import { Link } from 'react-router-dom';
import NetflixLogo from '../../assets/Netflix.png';

const Navbar = () => {

  return(
    <header className="flex items-center w-full">
      <nav className="flex items-center w-full justify-between py-6 px-12">
        <div>
          <img src={NetflixLogo} alt="netflix-log" className='h-10' />
        </div>

        <Link
          to='/login'
          className='text-sm font-semibold text-white py-2 px-3 rounded bg-red-600'
        >
          Sign In
        </Link>
      </nav>
    </header>
  )
}

export default Navbar;
