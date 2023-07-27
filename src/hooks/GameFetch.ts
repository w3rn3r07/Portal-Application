import DataFetch from "./DataFetch";
import { ListGenre } from "./GenreFetch";
import GameGrid from "../components/GameGrid";

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
  
const GameFetch = (selectedGenre: ListGenre | null) => DataFetch<Games>('/games', {params: {genres: selectedGenre?.id}}, [selectedGenre?.id])

export default GameFetch;