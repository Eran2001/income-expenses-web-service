
import { create } from 'zustand';
import { User } from '../types/dto';
import { setAccessToken } from '../lib/axios';

interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  setAuth: (user: User, token: string) => void;
  logout: () => void;
}

export const useAuth = create<AuthState>((set) => ({
  user: null,
  isAuthenticated: false,
  setAuth: (user, token) => {
    setAccessToken(token);
    set({ user, isAuthenticated: true });
  },
  logout: () => {
    setAccessToken(null);
    set({ user: null, isAuthenticated: false });
  },
}));
