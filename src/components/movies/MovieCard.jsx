import { Link } from "react-router-dom";
import MovieAvatar from "./MovieAvatar";

const MovieCard = ({movie}) => {

  return(
    <li className="flex items-center">
      <Link to={`movies/${movie.id}`} className="flex items-center gap-5 p-5 bg-black/75 hover:bg-sky-950 rounded border shadow">
        <div className="flex w-1/3">
        { movie.avatar && <MovieAvatar avatar={movie.avatar} /> }
        </div>
        <div className="flex flex-col w-2/3 gap-3">
          <span className="text-2xl font-bold">{movie?.name}</span>
          <span className="text-sm font-semibold">{movie?.description}</span>
          <span className="text-lg font-bold">{movie?.year}</span>
          <span className="text-lg font-bold">{movie?.duration} min</span>
        </div>
      </Link>
    </li>
  )

}

export default MovieCard;
