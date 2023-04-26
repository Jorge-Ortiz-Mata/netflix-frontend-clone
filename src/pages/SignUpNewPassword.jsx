import TextInput from "../components/common/TextInput";
import FormButton from "../components/common/FormButton";

const SignUpNewPasswordPage = () => {
  return(
    <form className="flex flex-col gap-5 w-2/6 py-10">
      <h2 className='font-semibold my-5 text-3xl text-black'>Create your password</h2>
      <TextInput
        name='password'
        id='password'
        placeholder='Password'
        required={true}
        onChange={() => {}}
      />
      <TextInput
        name='password-confirmation'
        id='password-confirmation'
        placeholder='Password Confirmation'
        required={true}
        onChange={() => {}}
      />
      <FormButton label='Create an account' />
    </form>
  )
}

export default SignUpNewPasswordPage;
