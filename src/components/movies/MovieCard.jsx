import { Link } from "react-router-dom";
import MovieAvatar from "./MovieAvatar";

const MovieCard = ({movie}) => {
  let detailsDivClasses;

  if(movie.avatar) {
    detailsDivClasses = 'w-2/3';
  } else {
    detailsDivClasses = 'w-full';
  }

  return(
    <li className="flex items-center">
      <Link to={`movies/${movie.id}`} className="flex items-center gap-5 p-5 bg-black/75 hover:bg-sky-950 rounded border shadow">
        {
        movie.avatar && <div className="flex w-1/3">
            <MovieAvatar avatar={movie.avatar} />
          </div>
        }
        <div className={'flex flex-col gap-3 ' + detailsDivClasses}>
          <span className="text-2xl font-bold">{movie?.name}</span>
          <span className="text-sm font-semibold">{movie?.description.substring(0, 100)}...</span>
          <span className="text-lg font-bold">{movie?.year}</span>
          <span className="text-lg font-bold">{movie?.duration} min</span>
        </div>
      </Link>
    </li>
  )

}

export default MovieCard;
