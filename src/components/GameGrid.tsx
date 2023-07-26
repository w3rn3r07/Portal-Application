import { Text, SimpleGrid } from "@chakra-ui/react";
import GameFetch from "../hooks/GameFetch";
import GameView from "./GameView";
import Genre from "./Genre";

const GameGrid = () => {
  const { listOfGames, error } = GameFetch();
  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid columns={4} spacing={10}>
        {listOfGames.map((game) => (
          <GameView key={game.id} game={game} />
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
