import { Link } from 'react-router-dom';

const SignUpLink = () => {

  return(
    <div className='flex items-center gap-1'>
      <span className='text-gray-400'>
        New to Netflix?
      </span>
      <Link to='/signup'>
        Sign up now.
      </Link>
    </div>
  )
}

export default SignUpLink;
