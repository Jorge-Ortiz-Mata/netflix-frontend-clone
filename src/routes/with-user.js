import { createBrowserRouter } from 'react-router-dom';

import { getMovies } from '../services/http-movies';

import ErrorPage from '../pages/ErrorPage';
import MainLayout from '../layouts/MainLayout';
import MoviesPage from '../pages/MoviesPage';
import MoviePage from '../pages/MoviePage';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <MoviesPage />,
        loader: getMovies
      },
      {
        path: 'movies',
        children: [
          {
            path: ':movieId',
            element: <MoviePage />,
          }
        ]
      }
    ]
  }
])
