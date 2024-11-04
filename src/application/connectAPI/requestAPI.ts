import axios, { AxiosRequestHeaders, Method } from "axios";

interface RequestAPIParams {
    path: string;
    method: Method;
    headers?: AxiosRequestHeaders;
    body?: any;
    timeout?: number;
}

const requestAPI = async <T>({ path, method, headers = {} as AxiosRequestHeaders, body = null, timeout = 5000 }: RequestAPIParams): Promise<T> => {
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
        console.log('response', response);
        return response.data as T;
    } catch (error) {
        // Ném lỗi để TanStack Query có thể nhận diện
        if (axios.isAxiosError(error)) {
            console.log('Error axios');
            console.log(error.response?.data);
            throw new Error(error.response?.data?.message || error.message || "Unknown API error");
        }
        console.log('Error out axios error');
        throw new Error("An unexpected error occurred");
    }
};

export default requestAPI;
