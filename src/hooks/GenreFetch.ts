import { useState, useEffect } from "react";
import apiClient from "../services/api-client";
import { Games } from "./GameFetch";

interface FetchGenre{
    id:number
    name:string
}
const GenreFetch = () => {
    const [listOfGenres, setListOfGenres] = useState<Games[]>([]);
    const [error, setError] = useState("");
  
    useEffect(() => {
      apiClient
        .get<FetchGenre>("/genres")
        .then((response) => setListOfGenres(response.data.results))
        .catch((error) => setError(error.message));
    
    },[]);

    return ({listOfGenres, error})
};

export default GenreFetch;