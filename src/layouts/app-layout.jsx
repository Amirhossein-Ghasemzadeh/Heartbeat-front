import {Navigate, Outlet, useParams} from 'react-router-dom';
import {Navbar} from '../components/navbar';
import {Footer} from '../components/footer';

export const AppLayout = () => {
  const {id} = useParams();
  if (!id) {
    return <Navigate to='/login' replace />;
  }

  return (
    <div className='flex flex-col min-h-screen'>
      <Navbar />
      <main className='flex-grow bg-[#f4f4f4]'>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};
