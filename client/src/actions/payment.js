import axios from 'axios';
import { fetchUser } from './auth';

const handleToken = (token) => {
  return async (dispatch) => {
    const res = await axios.post('/api/stripe', token);
    dispatch(fetchUser(res.data));
  };
};

export { handleToken };
