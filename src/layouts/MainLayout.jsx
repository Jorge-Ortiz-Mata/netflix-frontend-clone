import { Outlet } from 'react-router-dom';
import Navbar from '../components/common/Navbar';
import Footer from '../components/common/Footer';

const MainLayout = () => {

  return(
    <section id='landing-page'>
      <Navbar />
      <Outlet />
      <Footer color='main' />
    </section>
  )
}

export default MainLayout;
