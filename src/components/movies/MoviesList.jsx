import { useEffect, useState } from "react";

import { getMovies } from "../../services/http-movies";
import MovieCard from "./MovieCard";

const MoviesList = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await getMovies();
      setMovies(response.data);
    }

    fetchData();
  }, []);


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
