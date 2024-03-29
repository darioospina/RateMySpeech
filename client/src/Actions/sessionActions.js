import Axios from 'axios';
import { useNavigate } from 'react-router';

export const setCurrentUser = user => ({
  type: 'SET_CURRENT_USER',
  payload: user
});

export const login = credentials => dispatch => {

  return Axios.post(`${process.env.REACT_APP_API_URL}/usersRoutes/authentication`, credentials)
  .then((res) => {
        if(res.data.length != 0) {
            const { token, user } = res.data[0];
            localStorage.setItem('id', res.data[0]._id);
            localStorage.setItem('name', res.data[0].name);
            localStorage.setItem('email', res.data[0].email);
            localStorage.setItem('phone', res.data[0].phone);
            localStorage.setItem('role', res.data[0].role);
            dispatch(setCurrentUser(user));
            return { type: 'NAVIGATE_TO_DASHBOARD' };
        } else {
            return { type: 'USER_NOT_FOUND'}
        }

    }).catch((err) => {
        console.log(err)
    })
};

export const logout = () => dispatch => {
  console.log("Checking if the dispatch is working")
  localStorage.clear()
  dispatch(setCurrentUser(null));
};