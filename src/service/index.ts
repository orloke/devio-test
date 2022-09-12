import axios from 'axios';
import { Produto } from '../types';

const baseApi = axios.create({
	baseURL: 'https://orlokefood.vercel.app',
});

export const getProducts = async (search: string): Promise<Produto[]> => {
	try {
		const response = await baseApi.get(`/api`);
		const { products } = response.data;

		if (search === '') {
			return products;
		}

		const productsFilter = products.filter((item: Produto) =>
			item.title.toLowerCase().includes(search),
		);

		return productsFilter;
	} catch (error) {
		return Promise.reject(error);
	}
};

export const getProductsCategory = async (
	search: string,
): Promise<Produto[]> => {
	try {
		const response = await baseApi.get(`/api`);
		const { products } = response.data;

		if (search === '') {
			return products;
		}

		const productsFilter = products.filter((item: Produto) =>
			item.category.includes(search),
		);

		return productsFilter;
	} catch (error) {
		return Promise.reject(error);
	}
};
