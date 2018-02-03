import axios from 'axios';

const fetchUser = (user) => {
  return {
    type: 'FETCH_USER',
    user
  };
};

const startFetchUser = () => {
  return (dispatch) => {
    axios.get('/api/current_user').then((res) => {
      dispatch(fetchUser(res));
    });
  };
};

export { startFetchUser };
