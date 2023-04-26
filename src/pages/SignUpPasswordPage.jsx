import TextInput from "../components/common/TextInput";
import FormButton from "../components/common/FormButton";

const SignUpPasswordPage = () => {

  return(
    <form className="flex flex-col gap-5 w-2/6 py-10">
      <h2 className='font-semibold my-5 text-3xl text-black'>Enter a password</h2>
      <TextInput
        name='password'
        id='password'
        placeholder='Password'
      />
      <TextInput
        name='password-confirmation'
        id='password-confirmation'
        placeholder='Password Confirmation'
      />
      <FormButton label='Create an account' />
    </form>
  )
}

export default SignUpPasswordPage;