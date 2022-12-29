// Chakra imports
import { Flex, useColorModeValue } from "@chakra-ui/react";
import Image from "next/image";

// Custom components
import { HorizonLogo } from "components/icons/Icons";
import { HSeparator } from "components/separator/Separator";
import PrimaproLogo from "img/dashboards/primapro.png";

export function SidebarBrand() {
  //   Chakra color mode
  let logoColor = useColorModeValue("navy.700", "white");

  return (
    <Flex alignItems="center" flexDirection="column">
      <Image src={PrimaproLogo} width={"100%"} height={"100%"} alt="primapro" />
      <HSeparator mb="20px" />
    </Flex>
  );
}

export default SidebarBrand;
