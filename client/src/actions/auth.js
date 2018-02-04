import axios from 'axios';

const fetchUser = (user) => {
  return {
    type: 'FETCH_USER',
    payload: user
  };
};

const startFetchUser = () => {
  return async (dispatch) => {
    const res = await axios.get('/api/current_user');
    dispatch(fetchUser(res.data));
  };
};

export { startFetchUser };
