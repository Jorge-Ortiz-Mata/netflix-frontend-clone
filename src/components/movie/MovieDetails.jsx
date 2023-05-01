import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";

import { modalActions } from "../../store/modal-slice";

import CustomButton from "../common/CustomButton";
import MovieAvatar from "../movies/MovieAvatar";
import MovieDescription from "./MovieDescription";
import MovieDuration from "./MovieDuration";
import MovieTitle from "./MovieTitle";
import MovieYear from "./MovieYear";

const MovieDetails = ({movie}) => {
  const dispatch = useDispatch();

  const handlePress = () => {
    dispatch(modalActions.toggleModal({
      title: `Are you sure you want to the delete the movie: ${movie?.name}`,
      description: 'This action will not be reverted. Once you click on the "Delete movie" button, this movie will be deleted from the database'
    }));
  }

  return(
    <div className="flex flex-col p-20 rounded shadow bg-black/80 gap-10">
       <div className="flex items-center gap-5 justify-between">
        <div className="flex items-center gap-5">
          <Link to='/' className="py-2 px-4 bg-sky-800 font-semibold rounded">Go back</Link>
        </div>
        <div className="flex items-center gap-5">
          <Link to='edit' className="py-2 px-4 bg-green-800 font-semibold rounded">Edit movie</Link>
          <CustomButton
            label='Delete movie'
            disabled={false}
            color='red'
            onPress={handlePress}
          />
        </div>
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
