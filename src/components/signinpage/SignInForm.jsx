import Cookies from 'universal-cookie';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { signIn } from '../../hooks/useAuth';
import { userAccessTokenActions } from '../../store/user-access-token';
import { userRegistrationActions } from '../../store/user-registration.-slice';
import { formValidation } from '../../validations/signUpPasswordForm';

import TextInput from '../common/TextInput';
import FormButton from '../common/FormButton';
import LoaderSpin from '../common/LoaderSpin';

const cookies = new Cookies();

const SignInForm = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();
  const { email, password } = useSelector(state => state.userRegistration);

  const handleChange = (value, name) => {
    if(name === 'email'){
      dispatch(userRegistrationActions.handleEmail({value, name}));
    } else {
      dispatch(userRegistrationActions.handlePassword({value, name}));
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { error, message } = formValidation(password);
    if(error) return alert(message);
    setIsLoading(true);

    try {
      const response = await signIn({email, password});
      navigate('/');
      cookies.set('user_access_token', response.data.access_token);
      dispatch(userAccessTokenActions.updateUserToken(response.data.access_token));
    } catch(error) {
      console.log(error)
    } finally {
      setIsLoading(false);
    }
  }

  if(isLoading) return <LoaderSpin />;

  return(
    <form className='flex flex-col gap-5 bg-black' method='post' onSubmit={handleSubmit}>
      <h2 className='font-semibold my-5 text-3xl'>Sign In</h2>
      <TextInput
        name='email'
        id='email'
        type='email'
        placeholder='Email or phone number'
        required={true}
        onChange={handleChange}
      />
     <TextInput
        name='password'
        id='password'
        type='password'
        placeholder='Password'
        required={true}
        onChange={handleChange}
      />
      <FormButton label='Sign In' />
    </form>
  )
}

export default SignInForm;
