import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import { getMovie } from "../services/http-movies";

import LoaderSpin from "../components/common/LoaderSpin";
import MovieDetails from "../components/movie/MovieDetails";

const MoviePage = () => {
  const { movieId } = useParams();
  const [ isLoading, setIsLoading ] = useState(true);
  const [movie, setMovie] = useState(undefined);

  useEffect(() => {
    const retrieveMovie = async () => {
      try {
        const response = await getMovie(movieId);
        setMovie(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error)
      }
    }

    retrieveMovie();
  }, [movieId])

  if(isLoading){
    return <main className="flex flex-col p-10 gap-10 mb-20 justify-center items-center">
      <LoaderSpin />
    </main>
  }

  return(
    <main className="flex flex-col p-10 gap-10 mb-20">
      <MovieDetails movie={movie} />
    </main>
  )
}

export default MoviePage;
