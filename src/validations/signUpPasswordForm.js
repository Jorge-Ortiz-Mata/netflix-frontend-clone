export const formValidation = (password) => {
  if(password.length < 4){
    return { error: true, message: 'Password must have at least 4 characters' }
  }

  return { error: false, message: '' }
}
