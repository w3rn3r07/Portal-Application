import { ThemeConfig, extendTheme } from "@chakra-ui/react";

const config: ThemeConfig = {
  initialColorMode: "light",
};

const background = extendTheme({ config });

export default background;
