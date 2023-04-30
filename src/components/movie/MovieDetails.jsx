import { Link } from "react-router-dom";
import MovieAvatar from "../movies/MovieAvatar";
import MovieDescription from "./MovieDescription";
import MovieDuration from "./MovieDuration";
import MovieTitle from "./MovieTitle";
import MovieYear from "./MovieYear";

const MovieDetails = ({movie}) => {

  return(
    <>
      <div>
        <Link to='/' className="py-2 px-4 bg-red-800 font-semibold rounded">Go back</Link>
      </div>
      <div className="flex items-center gap-10 p-20 bg-black/80 rounded shadow">
        <div className="w-1/3">
          <MovieAvatar avatar={movie.avatar} />
        </div>
        <div className="flex flex-col">
          <MovieTitle name={movie.name} />
          <MovieDescription description={movie.description} />
          <div className="flex items-center mt-10 gap-5">
            <MovieYear year={movie.year} />
            <MovieDuration duration={movie.duration} />
          </div>
        </div>
      </div>
    </>
  )
}

export default MovieDetails;
