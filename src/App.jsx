import { RouterProvider } from 'react-router-dom';
import { router as routerWithoutUser } from './routes/without-user';
import { router as routerWithUser } from './routes/with-user';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

function App() {
  const userToken = useSelector(state => state.userAccessToken.userToken);
  const [currentUser, setCurrentUser] = useState(userToken)

  useEffect(() => {
    setCurrentUser(userToken)
  }, [userToken])

  if(currentUser) return <RouterProvider router={routerWithUser} />

  return <RouterProvider router={routerWithoutUser} />
}

export default App;
