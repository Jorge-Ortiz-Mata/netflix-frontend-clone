import { Link } from "react-router-dom";

const MovieCard = ({movie}) => {

  return(
    <li className="flex items-center">
      <Link to={`movies/${movie.id}`} className="flex flex-col gap-2 p-5  rounded border shadow ">
        <span className="text-2xl font-bold">{movie.name}</span>
        <span className="text-sm font-semibold">{movie.description}</span>
        <span className="text-lg font-bold">{movie.year}</span>
        <span className="text-lg font-bold">{movie.duration} min</span>
      </Link>
    </li>
  )

}

export default MovieCard;
