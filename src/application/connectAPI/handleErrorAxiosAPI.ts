import axios from "axios";

export const handleErrorAxiosAPI = (error: any) => {
    if (axios.isAxiosError(error)) {
        // try good but error response from server
        // console.error('Error in axios error');
        // console.error(error.response?.data);
        // throw error message from server or default message back to TanStack Query
        // Ném lỗi để TanStack Query có thể nhận diện
        const status = error.response?.status;
        const message = error.response?.data?.message || "Unknown API error";

        switch (status) {
            case 400:
                return `${status} Bad Request: ${message}`;
            case 401:
                return `${status} Unauthorized: ${message}`;
            case 403:
                return `${status} Forbidden: ${message}`;
            case 404:
                return `${status} Not Found: ${message}`;
            case 500:
                return `${status} Internal Server Error: ${message}`;
            case 502:
                return `${status} Bad Gateway: ${message}`;
            case 503:
                return `${status} Service Unavailable: ${message}`;
            case 504:
                return `${status} Gateway Timeout: ${message}`;
            case 422:
                return `${status} Unprocessable Entity: ${message}`;
            case 429:
                return `${status} Too Many Requests: ${message}`;
            case 409:
                return `${status} Conflict: ${message}`;
            default:
                return `${status || "Unknown status"} ${message}`;
        }
    }
    console.error('Unexpected Error:', error);
    return "An unexpected error occurred";
}
// console.log('Error out axios error');
// throw new Error("An unexpected error occurred");