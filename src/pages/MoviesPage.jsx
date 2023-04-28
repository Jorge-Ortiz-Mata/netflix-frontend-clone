import MoviesList from "../components/movies/MoviesList";

const MoviesPage = () => {

  return(
    <main className="flex flex-col p-10 gap-10 mb-20">
      <div className="flex flex-col gap-2">
        <h2 className="font-black text-5xl mb-10">2023 - New Movies available</h2>
        <p className="font-medium text-lg">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>
        <p className="font-medium text-lg">
          Aspernatur odio quo cumque quos sed cupiditate, a blanditiis dolorum fugit corporis nostrum rerum.
          Ipsa sit autem natus neque velit laudantium reprehenderit!
        </p>
      </div>
      <MoviesList />
    </main>
  )
}

export default MoviesPage;
