import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createMovie } from "../services/http-movies";

import NewMovieTitle from "../components/newMovie/NewMovieTitle";
import MovieForm from "../components/movie/MovieForm";
import ErrorsList from "../components/common/ErrorsList";

const MovieNewPage = () => {
  const navigate = useNavigate();
  const [errors, setErrors] = useState([]);
  const movieParams = { name: '', year: 0, duration: 0, description: '' }

  const handleFormSubmit = async (movie) => {
     try {
      await createMovie(movie);
      navigate('/');
    } catch (error) {
      const errors = error.response.data.errors;
      setErrors(errors);
    }
  }

  return(
    <main className="flex flex-col p-10 gap-10 mb-20 items-center justify-center">
      <div className='bg-black w-4/6 rounded p-10 shadow'>
        <NewMovieTitle />
        { errors.length > 0 && <ErrorsList errors={errors} /> }
        <MovieForm
          movieParams={movieParams}
          textBtn='Create movie'
          handleFormSubmit={handleFormSubmit}
        />
      </div>
    </main>
  )
}

export default MovieNewPage;
