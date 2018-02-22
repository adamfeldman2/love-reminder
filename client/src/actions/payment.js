import axios from 'axios';
import { fetchUser } from './auth';

const handleToken = (token) => {
  return async (dispatch) => {
    const res = await axios.post('/api/stripe', token);
    const { user } = res.data;

    // dispatch updated user to fetchUser()
    dispatch(fetchUser(user));
  };
};

export { handleToken };
