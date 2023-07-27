import { Grid, GridItem } from "@chakra-ui/react";
import GameGrid from "./components/GameGrid";
import Genre from "./components/Genre";
import { ListGenre } from "./hooks/GenreFetch";
import { useState } from "react";
import { GamePlatform } from "./hooks/GameFetch";
import TopPanel from "./components/TopPanel";

document.body.style.backgroundColor = "#343232";

//Homepage for the application
function App() {
  const [activeGenre, setActiveGenre] = useState<ListGenre | null>(null);

  return (
    // Grid elements used to divide page into 3 sections being search bar, list of genres and list of games
    <Grid templateAreas={`"nav nav " "aside main"`}>
      <GridItem area="nav" padding="2% 50% 0 17.5%">
        <TopPanel />
      </GridItem>
      <GridItem area="aside" paddingLeft={4} paddingTop={7}>
        <Genre activeGenre={(genre) => setActiveGenre(genre)} />
      </GridItem>
      <GridItem area="main" paddingTop={4}>
        <GameGrid activeGenre={activeGenre} />
      </GridItem>
    </Grid>
  );
}

export default App;
