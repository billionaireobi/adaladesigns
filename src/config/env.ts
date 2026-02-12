/**
 * Environment configuration
 * All environment variables should be accessed through this file
 */

export const env = {
  // Backend API base URL
  apiUrl: import.meta.env.VITE_API_URL || 'http://localhost:5000/api',
  
  // Backend base URL (for images and static files)
  apiBaseUrl: import.meta.env.VITE_API_BASE_URL || 'http://localhost:5000',
  
  // Environment
  isDevelopment: import.meta.env.DEV,
  isProduction: import.meta.env.PROD,
} as const;
