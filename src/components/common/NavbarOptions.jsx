import Cookies from 'universal-cookie';
import { Link } from 'react-router-dom';

const cookies = new Cookies();

const NavbarOptions = () => {
  const user = cookies.get('user_access_token');

  if(user){
    return(
      <ul className='flex items-center gap-5'>
        <li>
          <Link to='/'>Movies</Link>
        </li>

        <li>
          <Link to='/'>Create Movie</Link>
        </li>

        <li>
          <Link to='/'>Edit Movie</Link>
        </li>

        <li>
          <Link to='/'>Logout</Link>
        </li>
      </ul>
    )
  }

  return(
    <Link
      to='/login'
      className='text-sm font-semibold text-white py-2 px-3 rounded bg-red-600'
    >
      Sign In
    </Link>
  )
}

export default NavbarOptions;
