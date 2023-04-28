import { Link } from "react-router-dom";
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
      <div className="flex flex-col py-20 px-40 bg-sky-900 rounded shadow">
        <MovieTitle name={movie.name} />
        <MovieDescription description={movie.description} />
        <div className="flex items-center mt-10 gap-5">
          <MovieYear year={movie.year} />
          <MovieDuration duration={movie.duration} />
        </div>
      </div>
    </>
  )
}

export default MovieDetails;
