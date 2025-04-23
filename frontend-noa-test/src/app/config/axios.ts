import axios, { AxiosInstance } from 'axios';

export const axiosFree: AxiosInstance = axios.create({
    baseURL: process.env.NEXT_PUBLIC_BACKEND_API,
    withCredentials: true,
    headers: { 'content-type': 'application/json' },
});
