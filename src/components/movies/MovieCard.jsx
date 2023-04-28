const MovieCard = ({movie}) => {

  return(
    <div className="flex flex-col rounded border shadow gap-2 p-5">
      <span className="text-2xl font-bold">{movie.name}</span>
      <span className="text-sm font-semibold">{movie.description}</span>
      <span className="text-lg font-bold">{movie.year}</span>
      <span className="text-lg font-bold">{movie.duration} min</span>
    </div>
  )

}

export default MovieCard;
