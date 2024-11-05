import queryString from "query-string";
import { useLocation } from "react-router-dom";

export const getQueryParamFromLocation = (paramKey: string) => {
    const location = useLocation();
    return queryString?.parse(location.search)?.[paramKey];
}
