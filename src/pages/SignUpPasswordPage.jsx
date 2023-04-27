import Cookies from "universal-cookie";
import { useSelector, useDispatch } from "react-redux";
import TextInput from "../components/common/TextInput";
import FormButton from "../components/common/FormButton";
import { userRegistrationActions } from "../store/user-registration.-slice";
import { formValidation } from "../validations/signUpPasswordForm";
import { signIn } from "../hooks/useAuth";
import { useState } from "react";
import LoaderSpin from "../components/common/LoaderSpin";
import { userAccessTokenActions } from "../store/user-access-token";
import { useNavigate } from "react-router-dom";

const cookies = new Cookies();

const SignUpPasswordPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);
  const { email, password } = useSelector(state => state.userRegistration);

  const handleInput = (value, name) => {
    dispatch(userRegistrationActions.handlePassword({value, name}))
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { error, message } = formValidation(password);
    if(error) return alert(message);

    setIsLoading(true);
    const response = await signIn({email, password});

    if(response.status === 200) {
      navigate('/');
      cookies.set('user_access_token', response.data.access_token);
      dispatch(userAccessTokenActions.updateUserToken(response.data.access_token));
    } else {}

    setIsLoading(false);
  }

  if(isLoading) return <LoaderSpin />;

  return(
    <form className="flex flex-col gap-5 w-2/6 py-10" onSubmit={handleSubmit}>
      <h2 className='font-semibold my-5 text-3xl text-black'>
        Hello again! {email} <br />
        Please, enter your password to get started.
      </h2>
      <TextInput
        type='password'
        name='password'
        id='password'
        required={true}
        placeholder='Password'
        onChange={handleInput}
      />
      <FormButton label='Sign in' />
    </form>
  )
}

export default SignUpPasswordPage;
