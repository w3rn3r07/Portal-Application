import React from "react";
import GenreFetch from "../hooks/GenreFetch";

const Genre = () => {
  const { listOfGenres } = GenreFetch();
  return (
    <ul>
      {listOfGenres.map((genre) => (
        <li key={genre.id}>{genre.name}</li>
      ))}
    </ul>
  );
};

export default Genre;
