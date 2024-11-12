import axios from 'axios';

const API_BASE_URL = process.env.API_BASE_URL;

/** Product type definition for API responses */
export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
}

/**
 * Fetches all products from the external API.
 * @returns {Promise<Product[]>} - A promise that resolves to an array of products.
 * @throws {Error} - Throws an error if the request fails.
 */
export const getProducts = async (): Promise<Product[]> => {
  const response = await axios.get<Product[]>(`${API_BASE_URL}/products`);
  return response.data;
};

/**
 * Fetches a single product by its ID.
 * @param {string} id - The ID of the product to fetch.
 * @returns {Promise<Product>} - A promise that resolves to the product data.
 * @throws {Error} - Throws an error if the request fails.
 */
export const getProductById = async (id: string): Promise<Product> => {
  const response = await axios.get<Product>(`${API_BASE_URL}/products/${id}`);
  return response.data;
};
