export const formValidation = (password, passwordConfirmation) => {
  if(password.length < 4){
    return { error: true, message: 'Password must have at least 4 characters' }
  }

  if(passwordConfirmation.length < 4){
    return { error: true, message: 'Password confirmation must have at least 4 characters' }
  }

  if(password !== passwordConfirmation){
    return {error: true, message: 'Password and password confirmation are different'}
  }

  return { error: false, message: '' }
}
