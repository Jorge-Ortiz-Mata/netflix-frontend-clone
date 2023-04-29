import MainLayout from "../layouts/MainLayout";
import HomePage from '../pages/HomePage';
import ErrorPage from '../pages/ErrorPage';
import SignInPage from '../pages/SignInPage';
import SecondaryLayout from '../layouts/SecondaryLayout';
import WhiteLayout from '../layouts/WhiteLayout';
import SignUpEmailPage from '../pages/SignUpEmailPage';
import SignUpPasswordPage from '../pages/SignUpPasswordPage';
import SignUpNewPasswordPage from '../pages/SignUpNewPassword';
import MoviesPage from '../pages/MoviesPage';
import MoviePage from '../pages/MoviePage';

export const userAuthenticatedRoutes = [
  {
    path: '/',
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <MoviesPage />
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
]

export const userNoAuthenticatedRoutes = [
  {
    path: '/',
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <HomePage />
      },
    ]
  },
  {
    path: '/login',
    element: <SecondaryLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <SignInPage />
      }
    ]
  },
  {
    path: '/signup',
    element: <WhiteLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <SignUpEmailPage />
      },
      {
        path: 'new/reg',
        element: <SignUpNewPasswordPage />
      },
      {
        path: 'reg',
        element: <SignUpPasswordPage />
      }
    ]
  }
]

