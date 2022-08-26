import axios from 'axios';
import { Products } from '../types';

const baseApi = axios.create({
  baseURL: 'http://localhost:3004',
});

export const getProducts = async (): Promise<Products[]> => {
  try {
    const response = await baseApi.get('/products');
    return response.data;
  } catch (error) {
    return Promise.reject(error);
  }
};
