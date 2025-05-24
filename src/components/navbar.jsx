import {Link, useNavigate} from 'react-router-dom';
import {HeartBeat} from './heart-beat';

export function Navbar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate('/login');
    localStorage.clear();
  };

  return (
    <nav className='bg-[#e6e6e6] shadow-md fixed z-10 right-0 w-full'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex justify-between h-16 items-center'>
          <Link
            to='/'
            className='text-xl font-semibold text-gray-800 flex items-center gap-2.5 text-neutral-600'>
            Heartino
            <HeartBeat />
          </Link>
          <div className='space-x-4'>
            <span
              onClick={handleLogout}
              className='text-gray-700 hover:text-red-500'>
              Logout
            </span>
          </div>
        </div>
      </div>
    </nav>
  );
}
