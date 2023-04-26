import axios from 'axios';

export const signUpWithEmail = async (email) => {

  try {
    const response = await axios.get('http://localhost:3001/api/v1/sessions/validate/email');
    console.log(response)
    return response;
  } catch (error) {
    console.log('The custom error was:')
    console.log(error)
  }
}
