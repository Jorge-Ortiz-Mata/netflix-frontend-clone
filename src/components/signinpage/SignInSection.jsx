import SignInForm from '../signinpage/SignInForm';
import SignUpLink from './SignUpLink';
import SignUpReCAPTCHA from './SignUpReCAPTCHA';

const SignUpSection = () => {

  return(
    <div className='p-20 bg-black gap-10 w-6/12 xl:w-3/12 flex flex-col'>
      <SignInForm />
      <SignUpLink />
      <SignUpReCAPTCHA />
    </div>
  )
}

export default SignUpSection;
