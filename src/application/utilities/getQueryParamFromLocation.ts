// import queryString from "query-string";
// import { useLocation } from "react-router-dom";

// export const getQueryParamFromLocation = (paramKey: string) => {
//     const location = useLocation();
//     console.log(typeof queryString?.parse(location.search)?.[paramKey], 50000);
//     return queryString?.parse(location.search)?.[paramKey];
// }


import { useLocation } from 'react-router-dom';
import queryString from 'query-string';

export const getQueryParamFromLocation = (paramKey: string) => {
    const location = useLocation();
    const parsedParams = queryString.parse(location.search);

    // Check if the parameter is an array or a string and return appropriately
    const paramValue = parsedParams[paramKey];

    // If paramValue is an array, return the first item or default to empty string
    return Array.isArray(paramValue) ? paramValue[0] : paramValue ?? '';
};
