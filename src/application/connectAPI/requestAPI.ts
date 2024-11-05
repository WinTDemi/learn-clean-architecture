import axios, { AxiosRequestHeaders, Method } from "axios";
import { handleSuccessAPI } from "./handleSuccessAPI";
import { handleErrorAxiosAPI } from "./handleErrorAxiosAPI";

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

        // handleSuccessAPI(response?.status);
        response?.status !== 200 && handleSuccessAPI(response?.status);

        // console.log(response)
        return response.data as T;
    } catch (error) {
        throw new Error(handleErrorAxiosAPI(error));
    }
};

export default requestAPI;
