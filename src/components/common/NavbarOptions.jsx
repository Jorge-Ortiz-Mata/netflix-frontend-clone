import Cookies from 'universal-cookie';
import { Link, useNavigate } from 'react-router-dom';
import CustomButton from './CustomButton';
import { useDispatch } from 'react-redux';
import { userAccessTokenActions } from '../../store/user-access-token';
import { Logout } from '../../hooks/useAuth';

const cookies = new Cookies();

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
          <Link to='/'>Movies</Link>
        </li>

        <li>
          <Link to='/'>Create Movie</Link>
        </li>

        <li>
          <Link to='/'>Edit Movie</Link>
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
    <Link
      to='/login'
      className='text-sm font-semibold text-white py-2 px-3 rounded bg-red-600'
    >
      Sign In
    </Link>
  )
}

export default NavbarOptions;
