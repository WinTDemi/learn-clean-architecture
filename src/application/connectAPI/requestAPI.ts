import axios, { AxiosRequestHeaders, Method } from "axios";

interface ApiRequestParams {
    path: string;
    method: Method;
    headers?: AxiosRequestHeaders;
    body?: any;
    timeout?: number;
}

const apiRequest = async <T>({ path, method, headers = {} as AxiosRequestHeaders, body = null, timeout = 5000 }: ApiRequestParams): Promise<T> => {
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
        // Ném lỗi để TanStack Query có thể nhận diện
        if (axios.isAxiosError(error)) {
            throw new Error(error.response?.data?.message || error.message || "Unknown API error");
        }
        throw new Error("An unexpected error occurred");
    }
};

export default apiRequest;
