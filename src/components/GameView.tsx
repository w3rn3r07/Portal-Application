import { Games } from "../hooks/GameFetch";
import { Text, Card, Image, CardBody, Heading } from "@chakra-ui/react";
import PlatformIconArray from "./PlatformIconArray";
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
        <PlatformIconArray
          platforms={game.parent_platforms.map((p) => p.platform)}
        ></PlatformIconArray>
      </CardBody>
    </Card>
  );
};

GameView.propTypes = {};

export default GameView;
