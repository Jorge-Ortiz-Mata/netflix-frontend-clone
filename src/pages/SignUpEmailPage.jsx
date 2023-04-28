import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { signUpWithEmail } from "../hooks/useAuth";
import { userRegistrationActions } from "../store/user-registration.-slice";

import TextInput from "../components/common/TextInput";
import FormButton from "../components/common/FormButton";
import LoaderSpin from "../components/common/LoaderSpin";

const SignUpEmailPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const email = useSelector(state => state.userRegistration.email);
  const [isLoading, setIsLoading] = useState(false);

  const handleEmail = (value, name) => {
    dispatch(userRegistrationActions.handleEmail({value, name}));
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    setIsLoading(true);
    const { data } = await signUpWithEmail(email);
    setIsLoading(false);

    if(data.is_present){
      navigate('reg');
    } else {
      navigate('new/reg');
    }
  }

  if(isLoading) return <LoaderSpin />

  return(
    <form className="flex flex-col gap-5 w-2/6 py-10" method="post" onSubmit={handleSubmit}>
      <h2 className='font-semibold my-5 text-3xl text-black'>Enter your email account</h2>
      <TextInput
        name='email'
        id='email'
        type='email'
        placeholder='Email or phone number'
        required={true}
        onChange={handleEmail}
      />
      <FormButton label='Create an account' />
    </form>
  )
}

export default SignUpEmailPage;
