import DataFetch from "./DataFetch";

export interface ListGenre{
    id:number;
    name:string;
    image_background: string;
}

const GenreFetch = () => DataFetch<ListGenre>('/genres')

export default GenreFetch;