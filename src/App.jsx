import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import MainLayout from './layouts/MainLayout';
import HomePage from "./pages/HomePage";
import ErrorPage from './pages/ErrorPage';
import SignInPage from './pages/SignInPage';
import SecondaryLayout from './layouts/SecondaryLayout';
import WhiteLayout from './layouts/WhiteLayout';
import SignUpEmailPage from './pages/SignUpEmailPage';
import SignUpPasswordPage from './pages/SignUpPasswordPage';

const router = createBrowserRouter([
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
        path: 'reg',
        element: <SignUpPasswordPage />
      }
    ]
  }
]);

function App() {
  return <RouterProvider router={router} />
}

export default App;
