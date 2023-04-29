import Cookies from 'universal-cookie';
import { NavLink, useNavigate } from 'react-router-dom';
import CustomButton from './CustomButton';
import { useDispatch } from 'react-redux';
import { userAccessTokenActions } from '../../store/user-access-token';
import { Logout } from '../../hooks/useAuth';

const cookies = new Cookies();
const classActiveLink = "font-semibold border-b-2 border-sky-200 text-sky-300";

const NavbarOptions = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = cookies.get('user_access_token');

  const handleLogout = async () => {
    navigate('/');
    await Logout();
    cookies.remove('user_access_token');
    dispatch(userAccessTokenActions.updateUserToken(undefined));
  }

  if(user){
    return(
      <ul className='flex items-center gap-5'>
        <li>
          <NavLink to='/' className={({isActive}) => isActive ? classActiveLink : '' } >Movies</NavLink>
        </li>

        <li>
          <NavLink to='/movies/new' className={({isActive}) => isActive ? classActiveLink : '' }>Create Movie</NavLink>
        </li>

        <li>
          <CustomButton
            label='Logout'
            disabled={false}
            color='red'
            onPress={handleLogout}
          />
        </li>
      </ul>
    )
  }

  return(
    <NavLink
      to='/login'
      className='text-sm font-semibold text-white py-2 px-3 rounded bg-red-600'
    >
      Sign In
    </NavLink>
  )
}

export default NavbarOptions;
