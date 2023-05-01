import { Link } from "react-router-dom";
import MovieAvatar from "../movies/MovieAvatar";
import MovieDescription from "./MovieDescription";
import MovieDuration from "./MovieDuration";
import MovieTitle from "./MovieTitle";
import MovieYear from "./MovieYear";

const MovieDetails = ({movie}) => {

  return(
    <div className="flex flex-col p-20 rounded shadow bg-black/80 gap-10">
       <div className="flex items-center gap-5 justify-end">
        <Link to='/' className="py-2 px-4 bg-sky-800 font-semibold rounded">Go back</Link>
        <Link to='edit' className="py-2 px-4 bg-green-800 font-semibold rounded">Edit movie</Link>
      </div>
      <div className="flex items-center gap-10">
        {
          movie.avatar && <div className="w-1/3 border">
            <MovieAvatar avatar={movie.avatar} />
          </div>
        }
        <div className="flex flex-col">
          <MovieTitle name={movie.name} />
          <MovieDescription description={movie.description} />
          <div className="flex items-center mt-10 gap-5">
            <MovieYear year={movie.year} />
            <MovieDuration duration={movie.duration} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default MovieDetails;
