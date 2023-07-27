import { GamePlatform } from "../hooks/GameFetch";
import { Text, Icon, Heading } from "@chakra-ui/react";
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
const platformText = "Available platforms:";
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
      <Heading fontSize={"1xl"} paddingTop={2}>
        {platformText}
      </Heading>
      {platforms.map((platform) => (
        <Icon
          key={platform.id}
          as={iconMap[platform.slug]}
          color={"black.100"}
          margin={1}
        />
      ))}
    </>
  );
};

export default PlatformIconArray;
