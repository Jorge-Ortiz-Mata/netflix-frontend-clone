import NetflixLogo from '../../assets/Netflix.png';
import NavbarOptions from './NavbarOptions';

const Navbar = () => {

  return(
    <header className="flex items-center w-full">
      <nav className="flex items-center w-full justify-between py-6 px-12">
        <div>
          <img src={NetflixLogo} alt="netflix-log" className='h-10' />
        </div>
        <NavbarOptions />
      </nav>
    </header>
  )
}

export default Navbar;
