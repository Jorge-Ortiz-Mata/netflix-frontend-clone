import axios from 'axios';

export const signUpWithEmail = async (email) => {
  const params = { email: JSON.stringify(email) }
  const headers = { 'Content-Type': 'application/json' }

  try {
    const response = await axios.get( `${process.env.REACT_APP_BASE_URL}/sessions/validate/email`, { params: params }, { headers: headers });
    return response;
  } catch (error) {
    console.log('The custom error was:')
    console.log(error)
  }
}

export const signUpWithEmailAndNewPassword = async (user) => {
  const headers = { 'Content-Type': 'application/json' }

  try {
    const response = await axios.post( `${process.env.REACT_APP_BASE_URL}/users/`, { user: JSON.stringify(user) }, { headers: headers });
    return response;
  } catch (error) {
    console.log('The custom error was:')
    console.log(error)
  }
}
