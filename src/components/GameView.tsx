import { Games } from "../hooks/GameFetch";
import { Card, Image, CardBody, Heading } from "@chakra-ui/react";
interface GameProps {
  game: Games;
}
const GameView = ({ game }: GameProps) => {
  return (
    <Card
      color="black.200"
      borderRadius={20}
      borderWidth={3}
      overflow={"hidden"}
    >
      <Image src={game.background_image} sizes={"50px"} objectFit={"cover"} />
      <CardBody>
        <Heading fontSize={"2xl"}>{game.name}</Heading>
      </CardBody>
    </Card>
  );
};

GameView.propTypes = {};

export default GameView;
