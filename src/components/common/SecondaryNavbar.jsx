import { Link } from 'react-router-dom';
import NetflixLogo from '../../assets/Netflix.png';

const SecondaryNavbar = () => {

  return(
    <header className="flex items-center w-full">
      <nav className="flex items-center w-full justify-between py-6 px-12">
        <Link
          to='/'
        >
          <img src={NetflixLogo} alt="netflix-log" className='h-10' />
        </Link>
      </nav>
    </header>
  )
}

export default SecondaryNavbar;
