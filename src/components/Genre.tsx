import { HStack, List, ListItem, Image, Button, Box } from "@chakra-ui/react";
import GenreFetch, { ListGenre } from "../hooks/GenreFetch";

interface GenreProps {
  activeGenre: (genre: ListGenre) => void;
}

const Genre = ({ activeGenre }: GenreProps) => {
  const { data } = GenreFetch();
  return (
    <List>
      {data.map((genre) => (
        <ListItem key={genre.id} paddingTop={1}>
          <HStack>
            <Image
              src={genre.image_background}
              boxSize={47}
              border="1px solid black"
              borderWidth="small"
              borderRadius="15px"
              borderColor="black"
            />
            <Button
              border="1px solid black"
              borderWidth="small"
              borderRadius="15px"
              borderColor="black"
              onClick={() => activeGenre(genre)}
            >
              {genre.name}
            </Button>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default Genre;
