import axios from 'axios';

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000/api';

const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

api.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error('API Error:', error);
    return Promise.reject(error);
  }
);

export const productsApi = {
  getAll: () => api.get('/products'),
  getById: (id: string) => api.get(`/products/${id}`),
  getByCategory: (category: string) => api.get(`/products/category/${category}`),
  create: (data: any) => api.post('/products', data),
  update: (id: string, data: any) => api.put(`/products/${id}`, data),
  delete: (id: string) => api.delete(`/products/${id}`),
};

export const customOrdersApi = {
  create: (data: any) => api.post('/custom-orders', data),
  getAll: () => api.get('/custom-orders'),
  getById: (id: string) => api.get(`/custom-orders/${id}`),
  updateStatus: (id: string, status: string) => api.patch(`/custom-orders/${id}`, { status }),
  delete: (id: string) => api.delete(`/custom-orders/${id}`),
};

export const contactApi = {
  submit: (data: any) => api.post('/contacts', data),
  getAll: () => api.get('/contacts'),
  delete: (id: string) => api.delete(`/contacts/${id}`),
};

export default api;