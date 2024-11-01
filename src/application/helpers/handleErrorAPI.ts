import axios, { AxiosError } from 'axios';
import { useNavigate } from 'react-router-dom';

export const handleErrorAPI = (error: unknown) => {
    const navigate = useNavigate();

    if (axios.isAxiosError(error)) {
        const axiosError = error as AxiosError;
        const statusCode = axiosError.response?.status;
        const errorMessage = (axiosError.response?.data as { message?: string })?.message || 'Failed to fetch data from server';
        const url = axiosError.config?.url || 'Unknown URL';

        navigate('/error');

        throw new Error(`[API Error ${statusCode || ''}] ${errorMessage} (URL: ${url})`);
    } else {
        const errorDetails = typeof error === 'object' && error !== null
            ? JSON.stringify(error)
            : String(error);

        navigate('/error');

        throw new Error(`An unexpected error occurred. Details: ${errorDetails}.`);
    }
};