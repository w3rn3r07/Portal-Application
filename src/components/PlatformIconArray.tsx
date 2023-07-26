import { GamePlatform } from "../hooks/GameFetch";
import { Text, Icon } from "@chakra-ui/react";
import { IconType } from "react-icons";
import {
  FaPlaystation,
  FaXbox,
  FaWindows,
  FaLinux,
  FaApple,
} from "react-icons/fa";
interface IconProps {
  platforms: GamePlatform[];
}
const platformText = "Available platforms";
const PlatformIconArray = ({ platforms }: IconProps) => {
  const iconMap: { [key: string]: IconType } = {
    pc: FaWindows,
    playstation: FaPlaystation,
    xbox: FaXbox,
    mac: FaApple,
    linux: FaLinux,
  };
  return (
    <>
      <Text>{platformText}</Text>
      {platforms.map((platform) => (
        <Icon as={iconMap[platform.slug]} color={"black.100"} margin={1} />
      ))}
    </>
  );
};

export default PlatformIconArray;
