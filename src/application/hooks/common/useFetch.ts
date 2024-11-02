import { useQuery, UseQueryOptions } from "@tanstack/react-query";
import { useLocation } from "react-router-dom";

const useFetch = <T>(
    queryKey: any[],
    queryFn: () => Promise<T>,
    options: Omit<UseQueryOptions<T, Error, T>, 'queryKey'> = {}
) => {
    const location = useLocation();
    const finalQueryKey = [...queryKey, location.pathname, location.search];

    return useQuery<T>({
        queryKey: finalQueryKey,
        queryFn,
        staleTime: Infinity,
        refetchOnWindowFocus: false,
        refetchOnMount: false,
        ...options,
    });
};

export default useFetch;