import axios, { AxiosResponse, AxiosError, AxiosRequestConfig } from 'axios';
import { Config } from './constants';
import AuthService from '../services/Auth.service';

const axiosClient = axios.create({
    baseURL: Config.BASE_URL,
    timeout: 5000,
    headers: {
        'Content-Type': 'application/json',
    },
});

// Request Interceptor
axiosClient.interceptors.request.use(
    (config: AxiosRequestConfig<any>) => {
        const user = AuthService.getUser();
        if (user && user.token) {
            config.headers = config.headers || {};
            config.headers.Authorization = `Bearer ${user.token}`;
        }
        return config;
    },
    (error: AxiosError) => {
        console.error('Request error:', error);
        return Promise.reject(error);
    }
);

// Response Interceptor
axiosClient.interceptors.response.use(
    (response: AxiosResponse) => {
        return response;
    },
    (error: AxiosError) => {
        if (error.response && error.response.status === 401) {
            if (typeof window !== 'undefined' && window.location.pathname !== '/login') {
                window.location.href = '/login';
            }
        }
        return Promise.reject(error);
    }
);

export default axiosClient;