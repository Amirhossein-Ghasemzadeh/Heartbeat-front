import {Link} from 'react-router-dom';
import {HeartBeat} from '../components/heart-beat';
import {useRegister} from '../hooks/useRegister';

export const LoginPage = () => {
  const register = useRegister('login');

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = {
      username: formData.get('username'),
      password: formData.get('password'),
      serialNumber: formData.get('serialNumber'),
    };
    register.mutate(data);
  };
  return (
    <div className='h-[100vh] grid items-center p-12 justify-center'>
      <div className='flex min-h flex-col justify-center px-6 py-12 lg:px-8 border border-neutral-300 shadow-md rounded-lg w-[300px]'>
        <div className='sm:mx-auto sm:w-full sm:max-w-sm flex justify-center'>
          <span className='text-xl font-semibold text-gray-800 flex items-center gap-2.5 text-neutral-800'>
            Heartino
            <HeartBeat />
          </span>
        </div>
        <div className='mt-10 sm:mx-auto sm:w-full sm:max-w-sm'>
          <form className='space-y-4' onSubmit={handleSubmit}>
            <div>
              <label
                htmlFor='username'
                className='block text-sm/6 font-medium text-gray-900'>
                Username
              </label>
              <div className='mt-1.5'>
                <input
                  id='username'
                  name='username'
                  type='text'
                  required
                  autoComplete='username'
                  className='block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6'
                />
              </div>
            </div>
            <div>
              <div className='flex items-center justify-between'>
                <label
                  htmlFor='password'
                  className='block text-sm/6 font-medium text-gray-900'>
                  Password
                </label>
              </div>
              <div className='mt-1.5'>
                <input
                  id='password'
                  name='password'
                  type='password'
                  required
                  autoComplete='current-password'
                  className='block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6'
                />
              </div>
            </div>
            <button
              disabled={register.isPaused}
              type='submit'
              className='flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 !mt-6'>
              Login
            </button>
          </form>
          <Link
            to='/register'
            className='mt-3 block text-center text-sm/6 text-gray-500 underline'>
            New here? Create an account!
          </Link>
        </div>
      </div>
    </div>
  );
};
