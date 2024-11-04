import axios, { AxiosRequestHeaders, Method } from "axios";

interface RequestAPIParams {
    path: string;
    method: Method;
    headers?: AxiosRequestHeaders;
    body?: any;
    timeout?: number;
}

const requestAPI = async <T>({ path, method, headers = {} as AxiosRequestHeaders, body = null, timeout = 1000 }: RequestAPIParams): Promise<T> => {
    try {
        const response = await axios({
            url: `${import.meta.env.VITE_BASE_API_URL}${path}`,
            method: method,
            headers: {
                'Content-Type': 'application/json',
                ...headers,
            },
            data: body,
            timeout: timeout,
        });
        return response.data as T;
    } catch (error) {
        if (axios.isAxiosError(error)) {
            // try good but error response from server
            console.error('Error in axios error');
            console.error(error.response?.data);
            // throw error message from server or default message back to TanStack Query
            // Ném lỗi để TanStack Query có thể nhận diện
            throw new Error(error.response?.data?.message || error.message || "Unknown API error");
        }
        console.log('Error out axios error');
        throw new Error("An unexpected error occurred");
    }
};

export default requestAPI;
