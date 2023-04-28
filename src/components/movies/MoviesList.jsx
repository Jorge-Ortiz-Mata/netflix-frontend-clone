import { useLoaderData } from "react-router-dom";
import MovieCard from "./MovieCard";

const MoviesList = () => {
  const response = useLoaderData();
  const movies = response.data;


  return(
    <ul className="flex items-center gap-5">
      {
        movies.map((movie) => {
          return <MovieCard key={movie.id} movie={movie} />
        })
      }
    </ul>
  )
}

export default MoviesList;
