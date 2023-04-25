import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import HomePage from "./pages/HomePage";
import ErrorPage from './pages/ErrorPage';

const router = createBrowserRouter([
  {
    index: true,
    element: <HomePage />,
    errorElement: <ErrorPage />,
  }
])

function App() {
  return <RouterProvider router={router} />
}

export default App;
