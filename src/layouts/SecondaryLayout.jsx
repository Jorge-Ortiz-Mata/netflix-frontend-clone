import { Outlet } from 'react-router-dom';
import SecondaryNavbar from '../components/common/SecondaryNavbar';
import Footer from '../components/common/Footer';

const SecondaryLayout = () => {

  return(
    <section id='sign-in-page'>
      <SecondaryNavbar />
      <Outlet />
      <Footer color='black' />
    </section>
  )
}

export default SecondaryLayout;
