import axios from 'axios';
import type { Design, AuthResponse } from '../types';

const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

class ApiService {
  private api = axios.create({
    baseURL: API_BASE_URL,
    headers: {
      'Content-Type': 'application/json',
    },
  });

  constructor() {
    // Add request interceptor to include auth token
    this.api.interceptors.request.use((config) => {
      const token = localStorage.getItem('token');
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
      return config;
    });

    // Add response interceptor to handle auth errors
    this.api.interceptors.response.use(
      (response) => response,
      (error) => {
        if (error.response?.status === 401) {
          localStorage.removeItem('token');
          window.location.href = '/admin/login';
        }
        return Promise.reject(error);
      }
    );
  }

  // Auth endpoints
  async login(username: string, password: string): Promise<AuthResponse> {
    const response = await this.api.post('/auth/login', { username, password });
    return response.data;
  }

  async register(username: string, password: string): Promise<void> {
    await this.api.post('/auth/register', { username, password });
  }

  // Design endpoints
  async getDesigns(category?: string): Promise<Design[]> {
    const params = category ? { category } : {};
    const response = await this.api.get('/designs', { params });
    return response.data;
  }

  async getDesign(id: number): Promise<Design> {
    const response = await this.api.get(`/designs/${id}`);
    return response.data;
  }

  async createDesign(formData: FormData): Promise<Design> {
    const response = await this.api.post('/designs', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    return response.data;
  }

  async updateDesign(id: number, formData: FormData): Promise<void> {
    await this.api.put(`/designs/${id}`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
  }

  async deleteDesign(id: number): Promise<void> {
    await this.api.delete(`/designs/${id}`);
  }

  async getCategories(): Promise<string[]> {
    const response = await this.api.get('/designs/categories');
    return response.data;
  }

  // Utility methods
  isAuthenticated(): boolean {
    return !!localStorage.getItem('token');
  }

  logout(): void {
    localStorage.removeItem('token');
  }
}

export const apiService = new ApiService();

