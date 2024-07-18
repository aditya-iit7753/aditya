import axios from 'axios';
import { USER_LOGIN_SUCCESS, USER_LOGOUT, USER_REGISTER_SUCCESS } from './types';

export const register = (userData) => async (dispatch) => {
  try {
    const res = await axios.post('/api/auth/register', userData);
    dispatch({ type: USER_REGISTER_SUCCESS, payload: res.data });
  } catch (error) {
    console.error(error);
  }
};

export const login = (userData) => async (dispatch) => {
  try {
    const res = await axios.post('/api/auth/login', userData);
    dispatch({ type: USER_LOGIN_SUCCESS, payload: res.data });
  } catch (error) {
    console.error(error);
  }
};

export const logout = () => (dispatch) => {
  dispatch({ type: USER_LOGOUT });
};
