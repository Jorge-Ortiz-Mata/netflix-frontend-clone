import { createBrowserRouter } from 'react-router-dom';

import { getMovies } from '../services/http-services';

import ErrorPage from '../pages/ErrorPage';
import MainLayout from '../layouts/MainLayout';
import MoviesPage from '../pages/MoviesPage';

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
      }
    ]
  }
])
