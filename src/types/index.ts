export interface Design {
  id?: number;
  title: string;
  description?: string;
  category: string;
  price?: number;
  currency: string;
  image_url?: string;
  created_at?: string;
  updated_at?: string;
}

export interface AuthResponse {
  token: string;
  user: {
    id: number;
    username: string;
    role: string;
  };
}
