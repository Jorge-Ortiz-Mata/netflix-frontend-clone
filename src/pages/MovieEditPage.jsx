import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { getMovie } from "../services/http-movies";
import LoaderSpin from "../components/common/LoaderSpin";
import EditMovieTitle from "../components/editMovie/EditMovieTitle";
import MovieForm from "../components/movie/MovieForm";

const MovieEditPage = () => {
  const { movieId } = useParams();
  const [params, setParams] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchMovie = async () => {
      const response = await getMovie(movieId);
      setParams(response.data);
      setIsLoading(false);
    }

    fetchMovie();
  }, [movieId])

  const handleFormSubmit = async (movie) => {
    console.log(movie);

    // try {

    // } catch {

    // }
  }

  return(
    <main className="flex flex-col p-10 gap-10 mb-20 items-center justify-center">
      <div className='bg-black w-4/6 rounded p-10 shadow'>
        <EditMovieTitle />
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
