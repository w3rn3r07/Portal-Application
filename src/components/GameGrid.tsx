import React, { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { Text } from "@chakra-ui/react";

interface Games {
  id: number;
  name: string;
}

interface Fetch {
  count: number;
  results: Games[];
}

const GameGrid = () => {
  const [listOfGames, setListOfGames] = useState<Games[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    apiClient
      .get<Fetch>("/games")
      .then((response) => setListOfGames(response.data.results))
      .catch((error) => setError(error.message));
  });

  return (
    <>
      {error && <Text>{error}</Text>}
      <ul>
        {listOfGames.map((game) => (
          <li key={game.id}>{game.name}</li>
        ))}
      </ul>
    </>
  );
};

export default GameGrid;
