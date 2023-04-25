import NetflixLogo from '../../assets/Netflix.png';

const Navbar = () => {

  return(
    <header className="flex items-center w-full">
      <nav className="flex items-center w-full justify-between py-6 px-12">
        <div>
          <img src={NetflixLogo} alt="netflix-log" className='h-10' />
        </div>

        <div>
          <button>Sign In</button>
        </div>
      </nav>
    </header>
  )
}

export default Navbar;
