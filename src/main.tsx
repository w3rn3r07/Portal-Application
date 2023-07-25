import React from "react";
import ReactDOM from "react-dom/client";
import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";
import App from "./App";
import background from "./Background";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ChakraProvider theme={background}>
      <ColorModeScript initialColorMode={background.config.initialColorMode} />
      <App />
    </ChakraProvider>
  </React.StrictMode>
);
