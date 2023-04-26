import { Outlet } from 'react-router-dom';
import SecondaryNavbar from '../components/common/SecondaryNavbar';

const SecondaryLayout = () => {

  return(
    <section id='sign-in-page'>
      <SecondaryNavbar />
      <Outlet />
    </section>
  )
}

export default SecondaryLayout;
