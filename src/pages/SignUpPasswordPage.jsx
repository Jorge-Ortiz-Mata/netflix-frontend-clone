import { useSelector } from "react-redux";
import TextInput from "../components/common/TextInput";
import FormButton from "../components/common/FormButton";

const SignUpPasswordPage = () => {
  const email = useSelector(state => state.userRegistration.email);

  return(
    <form className="flex flex-col gap-5 w-2/6 py-10">
      <h2 className='font-semibold my-5 text-3xl text-black'>
        Hello again! {email} <br />
        Please, enter your password to get started.
      </h2>
      <TextInput
        name='password'
        id='password'
        placeholder='Password'
        required={true}
        onChange={() => {}}
      />
      <FormButton label='Sign in' />
    </form>
  )
}

export default SignUpPasswordPage;
