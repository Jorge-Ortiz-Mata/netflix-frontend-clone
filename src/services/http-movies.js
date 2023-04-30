import Cookies from "universal-cookie";
import axios from "axios";

const cookies = new Cookies();

export const getMovies = async () => {
  const userToken = cookies.get('user_access_token')
  const headers = {
    // 'Content-Type': 'application/json',
    'Authorization': userToken
  }

  const response = await axios.get(`${process.env.REACT_APP_BASE_URL}/movies.json`, { headers: headers }, {});
  return response;
}

export const getMovie = async (id) => {
  const userToken = cookies.get('user_access_token')
  const headers = {
    'Content-Type': 'application/json',
    'Authorization': userToken
  }

  const response = await axios.get(`${process.env.REACT_APP_BASE_URL}/movies/${id}.json`, { headers: headers }, {});
  return response;
}

export const createMovie = async (movie) => {
  const userToken = cookies.get('user_access_token')
  const headers = {
    'Content-Type': 'multipart/form-data',
    'Authorization': userToken
  }

  const response = await axios.post(`${process.env.REACT_APP_BASE_URL}/movies/`, { movie: movie }, { headers: headers });
  return response;
}
