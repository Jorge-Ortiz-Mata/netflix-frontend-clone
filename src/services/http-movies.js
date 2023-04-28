import Cookies from "universal-cookie";
import axios from "axios";

const cookies = new Cookies();

export const getMovies = async () => {
  const userToken = cookies.get('user_access_token')
  const headers = {
    'Content-Type': 'application/json',
    'Authorization': userToken
  }

  const response = await axios.get(`${process.env.REACT_APP_BASE_URL}/movies/`, { headers: headers }, {});
  return response;
}

export const getMovie = async (id) => {
  const userToken = cookies.get('user_access_token')
  const headers = {
    'Content-Type': 'application/json',
    'Authorization': userToken
  }

  const response = await axios.get(`${process.env.REACT_APP_BASE_URL}/movies/${id}`, { headers: headers }, {});
  return response;
}
