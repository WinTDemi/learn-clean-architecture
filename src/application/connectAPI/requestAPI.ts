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
            // url: `mock.httpstatus.io/${path}`,
            method: method,
            headers: {
                'Content-Type': 'application/json',
                ...headers,
            },
            data: body,
            timeout: timeout,
        });

        switch (response.status) {
            case 201:
                alert('201 created success');
                break;
            case 202:
                alert('202 accepted success');
                break;
            case 203:
                alert('203 non-authoritative information success');
                break;
            case 204:
                alert('204 no content success');
                break;
            case 205:
                alert('205 reset content success');
                break;
            case 206:
                alert('206 partial content success');
                break;
            case 207:
                alert('207 multi-status success');
                break;
            case 208:
                alert('208 already reported success');
                break;
            default:
                break;
        }

        // console.log(response)
        return response.data as T;
    } catch (error) {
        if (axios.isAxiosError(error)) {
            // try good but error response from server
            // console.error('Error in axios error');
            // console.error(error.response?.data);
            // throw error message from server or default message back to TanStack Query
            // Ném lỗi để TanStack Query có thể nhận diện
            switch (error.response?.status) {
                case 400:
                    throw new Error(error.response?.status + ' ' + error.response?.data?.message || "Bad Request");
                case 401:
                    throw new Error(error.response?.status + ' ' + error.response?.data?.message || "Unauthorized");
                case 403:
                    throw new Error(error.response?.status + ' ' + error.response?.data?.message || "Forbidden");
                case 404:
                    throw new Error(error.response?.status + ' ' + error.response?.data?.message || "Not Found haha");
                case 500:
                    throw new Error(error.response?.status + ' ' + error.response?.data?.message || "Internal Server Error");
                case 502:
                    throw new Error(error.response?.status + ' ' + error.response?.data?.message || "Bad Gateway");
                case 503:
                    throw new Error(error.response?.status + ' ' + error.response?.data?.message || "Service Unavailable");
                case 504:
                    throw new Error(error.response?.status + ' ' + error.response?.data?.message || "Gateway Timeout");
                case 422:
                    throw new Error(error.response?.status + ' ' + error.response?.data?.message || "Unprocessable Entity");
                case 429:
                    throw new Error(error.response?.status + ' ' + error.response?.data?.message || "Too Many Requests");
                case 409:
                    throw new Error(error.response?.status + ' ' + error.response?.data?.message || "Conflict");
                default:
                    throw new Error(error.response?.status + ' ' + error.response?.data?.message || error.message || "Unknown API error");
            }
        }
        // console.log('Error out axios error');
        console.error('Unexpected Error:', error);
        throw new Error("An unexpected error occurred");
    }
};

export default requestAPI;
