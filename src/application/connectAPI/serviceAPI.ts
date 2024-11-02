import baseAPI from "./baseAPI";
import handleTryCatch from "./handleTryCatch";

type HttpMethod = 'GET' | 'POST' | 'PUT' | 'DELETE';

export interface ApiResponse<T> {
    data: T;
}

export const apiService = async <T>(url: string, method: HttpMethod, data?: unknown): Promise<T | void> => {
    return handleTryCatch(async () => {
        let response: ApiResponse<T>;

        switch (method) {
            case 'GET':
                response = await baseAPI.get(url);
                break;
            case 'POST':
                response = await baseAPI.post(url, data);
                break;
            case 'PUT':
                response = await baseAPI.put(url, data);
                break;
            case 'DELETE':
                response = await baseAPI.delete(url);
                break;
            default:
                throw new Error('Unsupported HTTP method');
        }
        return response.data; // Return data
    });
};