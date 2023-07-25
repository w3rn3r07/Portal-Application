import { useEffect, useState } from "react";
import apiClient from "../services/api-client";

export interface Games {
    id: number;
    name: string;
    background_image: string;
  }
  
  interface Fetch {
    count: number;
    results: Games[];
  }
const GameFetch = () => {
    const [listOfGames, setListOfGames] = useState<Games[]>([]);
    const [error, setError] = useState("");
  
    useEffect(() => {
      apiClient
        .get<Fetch>("/games")
        .then((response) => setListOfGames(response.data.results))
        .catch((error) => setError(error.message));
    
    },[]);

    return ({listOfGames, error})
  
}

export default GameFetch;