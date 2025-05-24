import {useMutation} from '@tanstack/react-query';
import axios from 'axios';
import {useNavigate} from 'react-router-dom';
import {Bounce, Slide, toast} from 'react-toastify';
import {URLS} from '../utils/urls';

const login = async (data) => {
  return await axios.post(URLS.login, data);
};

const signup = async (data) => {
  return await axios.post(URLS.signup, data);
};

export const isLoggedIn = () => +localStorage.getItem('isLoggedIn');

export const useRegister = (key) => {
  const navigate = useNavigate();
  return useMutation({
    mutationFn: (data) => (key === 'login' ? login(data) : signup(data)),
    onSuccess: (res) => {
      if (res.status === 200) {
        localStorage.setItem('isLoggedIn', res.data.serialNumber);
        navigate(`/home/${res.data.serialNumber}`, {replace: true});
      }
    },
    onError: (error) => {
      toast.error(error.response.data, {
        position: 'top-center',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'colored',
        transition: Slide,
      });
    },
  });
};
