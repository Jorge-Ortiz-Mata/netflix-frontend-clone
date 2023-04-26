import TextInput from "../components/common/TextInput";
import FormButton from "../components/common/FormButton";
import { signUpWithEmail } from "../hooks/useAuth";
import { useDispatch, useSelector } from "react-redux";
import { userRegistrationActions } from "../store/user-registration.-slice";
import { useNavigate } from "react-router-dom";

const SignUpEmailPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const email = useSelector(state => state.userRegistration.email)

  const handleEmail = (value, name) => {
    dispatch(userRegistrationActions.handleEmail({value, name}));
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { data } = await signUpWithEmail(email);

    if(data.is_present){
      navigate('reg');
    } else {
      navigate('new/reg');
    }
  }

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
