import {useQuery} from '@tanstack/react-query';
import {useParams} from 'react-router-dom';
import {URLS} from '../utils/urls';
import axios from 'axios';

const getUser = async (serialnumber) => {
  const res = await axios.get(`${URLS.user}/${serialnumber}`);
  return res.data;
};

export const useGetUser = () => {
  const {id} = useParams();

  return useQuery({
    queryFn: () => getUser(id),
    queryKey: ['user', id],
    enabled: !!id,
  });
};
