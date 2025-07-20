import axios from 'axios';

const API_BASE_URL = import.meta.env.VITE_API_URL;


const apiClient = axios.create({
  baseURL: API_BASE_URL,
  timeout: 10000, // Timeout 10 detik
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
  },
});

// --- Menambahkan Request Interceptor ---
apiClient.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('authToken'); // Ambil token dari local storage atau Zustand store
    if (token) {
      config.headers.Authorization = `Bearer ${token}`; // Tambahkan token ke header
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// --- Menambahkan Response Interceptor ---
apiClient.interceptors.response.use(
  (response) => response,
  async (error) => {
    if (error.response && error.response.status === 401) {
      // Anda bisa menambahkan logika refresh token di sini
      // Atau langsung logout user jika token sudah tidak valid
      // import useUserStore from '../store/userStore';
      // useUserStore.getState().logout();
      alert('Sesi Anda telah berakhir. Silakan login kembali.');
      window.location.href = '/login'; // Redirect ke halaman login
    }
    return Promise.reject(error); 
  }
);

export default apiClient;