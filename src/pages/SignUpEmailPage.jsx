import TextInput from "../components/common/TextInput";
import FormButton from "../components/common/FormButton";

const SignUpEmailPage = () => {

  return(
    <form className="flex flex-col gap-5 w-2/6 py-10">
      <h2 className='font-semibold my-5 text-3xl text-black'>Enter your email account</h2>
      <TextInput
        name='email'
        id='email'
        placeholder='Email or phone number'
      />
      <FormButton label='Create an account' />
    </form>
  )
}

export default SignUpEmailPage;
