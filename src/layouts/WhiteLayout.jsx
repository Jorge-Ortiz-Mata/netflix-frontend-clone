import { Outlet } from 'react-router-dom';
import WhiteNavbar from '../components/common/WhiteNavbar';
import Footer from '../components/common/Footer';

const WhiteLayout = () => {

  return(
    <>
      <WhiteNavbar />
      <Outlet />
      <Footer color={'light'} />
    </>
  )
}

export default WhiteLayout;
