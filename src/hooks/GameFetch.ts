import { useEffect, useState } from "react";
import apiClient from "../services/api-client";

export interface GamePlatform{
    id: number;
    name: string;
    slug: string;
}

export interface Games {
    id: number;
    name: string;
    parent_platforms: {platform: GamePlatform}[];
    background_image: string;
  }
  
  interface FetchGame {
    count: number;
    results: Games[];
  }
const GameFetch = () => {
    const [listOfGames, setListOfGames] = useState<Games[]>([]);
    const [error, setError] = useState("");
  
    useEffect(() => {
      apiClient
        .get<FetchGame>("/games")
        .then((response) => setListOfGames(response.data.results))
        .catch((error) => setError(error.message));
    
    },[]);

    return ({listOfGames, error})
  
}

export default GameFetch;