import { useState, useEffect } from "react";
import apiClient from "../services/api-client";
import { AxiosRequestConfig } from "axios";

export interface FetchDataProps<T>{
    count: number;
    results: T[];
}
const DataFetch = <T>(dataFetch: string, requestConfig?: AxiosRequestConfig, deps?: any[]) => {
    const [data, setdata] = useState<T[]>([]);
    const [error, setError] = useState("");
  
    useEffect(() => {
      apiClient
        .get<FetchDataProps<T>>(dataFetch,{...requestConfig})
        .then((response) => setdata(response.data.results))
        .catch((error) => setError(error.message));
    
    }, deps ? [...deps] : []);

    return ({data, error})
};

export default DataFetch;