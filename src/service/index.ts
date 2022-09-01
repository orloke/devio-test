import axios from 'axios';
import { Produto } from '../types';

const baseApi = axios.create({
  baseURL: 'http://localhost:3004',
});

export const getProducts = async (search: string): Promise<Produto[]> => {
  try {
    if (search === undefined) {
      search = '';
    }
    const response = await baseApi.get(`/products?q=${search}`);
    return response.data;
  } catch (error) {
    return Promise.reject(error);
  }
};
