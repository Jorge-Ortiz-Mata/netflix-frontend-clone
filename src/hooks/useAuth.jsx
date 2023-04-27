import axios from 'axios';
import Cookies from 'universal-cookie';

const cookies = new Cookies();

export const signUpWithEmail = async (email) => {
  const params = { email: JSON.stringify(email) }
  const headers = { 'Content-Type': 'application/json' }

  try {
    const response = await axios.get(`${process.env.REACT_APP_BASE_URL}/sessions/validate/email`, { params: params }, { headers: headers });
    return response;
  } catch (error) {
    console.log(error);
  }
}

export const signUpWithEmailAndNewPassword = async (user) => {
  const headers = { 'Content-Type': 'application/json' }

  try {
    const response = await axios.post(`${process.env.REACT_APP_BASE_URL}/users/`, { user: JSON.stringify(user) }, { headers: headers });
    return response;
  } catch (error) {
    console.log(error);
  }
}

export const signIn = async (user) => {
  const headers = { 'Content-Type': 'application/json' }

  try {
    const response = await axios.post(`${process.env.REACT_APP_BASE_URL}/sessions/create`, {user: JSON.stringify(user)}, { headers: headers });
    return response;
  } catch (error) {
    console.log(error);
  }
}

export const Logout = async () => {
  const userToken = cookies.get('user_access_token')
  const headers = {
    'Content-Type': 'application/json',
    'Authorization': userToken
  }

  try {
    const response = await axios.delete(`${process.env.REACT_APP_BASE_URL}/access_token/delete`, { headers: headers }, {});
    return response;
  } catch (error) {
    console.log(error);
  }

}
