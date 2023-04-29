import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { userAuthenticatedRoutes, userNoAuthenticatedRoutes } from './routes/app-routes';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

function App() {
  const userToken = useSelector(state => state.userAccessToken.userToken);
  const [currentUser, setCurrentUser] = useState(userToken)

  useEffect(() => {
    setCurrentUser(userToken)
  }, [userToken])

  const router = createBrowserRouter(currentUser ? userAuthenticatedRoutes : userNoAuthenticatedRoutes);

  return <RouterProvider router={router} />
}

export default App;
