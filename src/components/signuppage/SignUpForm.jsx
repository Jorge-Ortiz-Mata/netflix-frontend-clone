import FormButton from "../common/FormButton";
import TextInput from "../common/TextInput";

const SignUpForm = () => {

  return(
    <form className="flex flex-col gap-5 w-2/6 py-10">
      <h2 className='font-semibold my-5 text-3xl text-black'>Create an account</h2>
      <TextInput
        name='email'
        id='email'
        placeholder='Email or phone number'
      />
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

export default SignUpForm;
