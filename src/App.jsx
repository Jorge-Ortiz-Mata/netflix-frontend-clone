import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import MainLayout from './layouts/MainLayout';
import HomePage from "./pages/HomePage";
import ErrorPage from './pages/ErrorPage';
import SignInPage from './pages/SignInPage';
import SecondaryLayout from './layouts/SecondaryLayout';

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
  }
])

function App() {
  return <RouterProvider router={router} />
}

export default App;
