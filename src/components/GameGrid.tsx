import { Text, SimpleGrid } from "@chakra-ui/react";
import GameFetch from "../hooks/GameFetch";
import GameView from "./GameView";
import { ListGenre } from "../hooks/GenreFetch";

interface GameGridProps {
  activeGenre: ListGenre | null;
}
const GameGrid = ({ activeGenre }: GameGridProps) => {
  const { data, error } = GameFetch(activeGenre);
  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid columns={4} spacing={5} marginTop={5}>
        {data.map((game) => (
          <GameView key={game.id} game={game} />
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
