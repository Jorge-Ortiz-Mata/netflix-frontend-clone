import TextInput from '../common/TextInput';
import FormButton from '../common/FormButton';

const SignInForm = () => {

  return(
    <form className='flex flex-col gap-5 bg-black' method='post'>
      <h2 className='font-semibold my-5 text-3xl'>Sign In</h2>
      <TextInput name='email' id='email' placeholder='Email or phone number' />
      <TextInput name='password' id='password' placeholder='Password' />
      <FormButton label='Sign In' />
    </form>
  )
}

export default SignInForm;
