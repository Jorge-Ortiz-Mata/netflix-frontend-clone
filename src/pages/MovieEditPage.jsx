import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { updateMovie } from "../services/http-movies";

import { getMovie } from "../services/http-movies";
import LoaderSpin from "../components/common/LoaderSpin";
import EditMovieTitle from "../components/editMovie/EditMovieTitle";
import MovieForm from "../components/movie/MovieForm";
import ErrorsList from "../components/common/ErrorsList";

const MovieEditPage = () => {
  const navigate = useNavigate();
  const { movieId } = useParams();
  const [params, setParams] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [errors, setErrors] = useState([]);

  useEffect(() => {
    const fetchMovie = async () => {
      const response = await getMovie(movieId);
      setParams(response.data);
      setIsLoading(false);
    }

    fetchMovie();
  }, [movieId])

  const handleFormSubmit = async (movie) => {
    setIsLoading(true);
    console.log(movie);
    try {
      await updateMovie(movieId, movie);
      navigate(`/movies/${movieId}`)
    } catch (error) {
      const errors = error.response.data.errors;
      setErrors(errors);
    }
    setIsLoading(false);
  }

  return(
    <main className="flex flex-col p-10 gap-10 mb-20 items-center justify-center">
      <div className='bg-black w-4/6 rounded p-10 shadow'>
        <EditMovieTitle />
        { errors.length > 0 && <ErrorsList errors={errors} /> }
        {
          isLoading
          ? <LoaderSpin />
          : <MovieForm
            movieParams={params}
            textBtn='Update movie'
            handleFormSubmit={handleFormSubmit}
          />
        }
      </div>
    </main>
  )
}

export default MovieEditPage;
