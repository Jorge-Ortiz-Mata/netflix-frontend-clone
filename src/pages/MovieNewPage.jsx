import NewMovieTitle from "../components/newMovie/NewMovieTitle";
import NewMovieForm from "../components/newMovie/NewMovieForm";

const MovieNewPage = () => {

  return(
    <main className="flex flex-col p-10 gap-10 mb-20 items-center justify-center">
      <div className='bg-black w-4/6 rounded p-10 shadow'>
        <NewMovieTitle />
        <NewMovieForm />
      </div>
    </main>
  )
}

export default MovieNewPage;
