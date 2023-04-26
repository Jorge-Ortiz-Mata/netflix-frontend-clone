import { Outlet } from 'react-router-dom';
import WhiteNavbar from '../components/common/WhiteNavbar';
import Footer from '../components/common/Footer';

const WhiteLayout = () => {

  return(
    <>
      <WhiteNavbar />
      <main className="flex items-center justify-center pb-24 bg-white">
        <Outlet />
      </main>
      <Footer color={'light'} />
    </>
  )
}

export default WhiteLayout;
