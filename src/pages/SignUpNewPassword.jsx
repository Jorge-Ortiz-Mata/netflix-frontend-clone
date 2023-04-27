import { useState, useEffect } from "react";
import Cookies from "universal-cookie";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { userAccessTokenActions } from "../store/user-access-token";

import { signUpWithEmailAndNewPassword } from "../hooks/useAuth";
import { userRegistrationActions } from "../store/user-registration.-slice";
import { formValidation } from "../validations/signUpNewPasswordForm";

import TextInput from "../components/common/TextInput";
import FormButton from "../components/common/FormButton";
import LoaderSpin from "../components/common/LoaderSpin";

const cookies = new Cookies();

const SignUpNewPasswordPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const { email, password, password_confirmation } = useSelector(state => state.userRegistration)

  useEffect(() => {
    if(!email) navigate('/signup');
  }, [email, navigate])

  const handleInput = (value, name) => {
    if(name === 'password-confirmation'){
      dispatch(userRegistrationActions.handlePasswordConfirmation({value, name}))
    } else {
      dispatch(userRegistrationActions.handlePassword({value, name}))
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    const {error, message} = formValidation(password, password_confirmation);
    if(error) return alert(message);

    setIsLoading(true);
    const response = await signUpWithEmailAndNewPassword({email, password, password_confirmation})
    navigate('/');
    cookies.set('user_access_token', response.data.access_token);
    dispatch(userAccessTokenActions.updateUserToken(response.data.access_token));
    setIsLoading(false);
  }

  if(isLoading) return <LoaderSpin />;

  return(
    <form className="flex flex-col gap-5 w-2/6 py-10" onSubmit={handleSubmit} method='post'>
      <h2 className='font-semibold my-5 text-3xl text-black'>Create your password</h2>
      <TextInput
        type='password'
        name='password'
        id='password'
        required={true}
        placeholder='Password'
        onChange={handleInput}
      />
      <TextInput
        type='password'
        name='password-confirmation'
        id='password-confirmation'
        required={true}
        placeholder='Password Confirmation'
        onChange={handleInput}
      />
      <FormButton label='Create an account' />
    </form>
  )
}

export default SignUpNewPasswordPage;
