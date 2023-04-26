import { Outlet } from 'react-router-dom';
import WhiteNavbar from '../components/common/WhiteNavbar';

const WhiteLayout = () => {

  return(
    <>
      <WhiteNavbar />
      <Outlet />
    </>
  )
}

export default WhiteLayout;
