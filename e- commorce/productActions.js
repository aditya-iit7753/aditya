import axios from 'axios';
import { GET_PRODUCTS, GET_PRODUCT, ADD_PRODUCT, UPDATE_PRODUCT, DELETE_PRODUCT } from './types';

export const getProducts = () => async (dispatch) => {
  try {
    const res = await axios.get('/api/products');
    dispatch({ type: GET_PRODUCTS, payload: res.data });
  } catch (error) {
    console.error(error);
  }
};

export const getProduct = (id) => async (dispatch) => {
  try {
    const res = await axios.get(`/api/products/${id}`);
    dispatch({ type: GET_PRODUCT, payload: res.data });
  } catch (error) {
    console.error(error);
  }
};

export const addProduct = (productData) => async (dispatch) => {
  try {
    const res = await axios.post('/api/products', productData);
    dispatch({ type: ADD_PRODUCT, payload: res.data });
  } catch (error) {
    console.error(error);
  }
};

export const updateProduct = (id, productData) => async (dispatch) => {
  try {
    const res = await axios.put(`/api/products/${id}`, productData);
    dispatch({ type: UPDATE_PRODUCT, payload: res.data });
  } catch (error) {
    console.error(error);
  }
};

export const deleteProduct = (id) => async (dispatch) => {
  try {
    await axios.delete(`/api/products/${id}`);
    dispatch({ type: DELETE_PRODUCT, payload: id });
  } catch (error) {
    console.error(error);
  }
};
