import { Grid, GridItem } from "@chakra-ui/react";
import GameGrid from "./components/GameGrid";
import Genre from "./components/Genre";
function App() {
  return (
    <Grid templateAreas={`"nav nav" "aside main"`}>
      <GridItem area="nav" bg="pink">
        Nav
      </GridItem>
      <GridItem area="aside">
        <Genre />
      </GridItem>
      <GridItem area="main">
        <GameGrid />
      </GridItem>
    </Grid>
  );
}

export default App;
