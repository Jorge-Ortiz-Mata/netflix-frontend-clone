const MovieAvatar = ({avatar}) => {

  return(
    <img src={`http://localhost:3001/${avatar}`} className=" object-cover" />
  )
}

export default MovieAvatar;
