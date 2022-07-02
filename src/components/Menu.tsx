import { Flex } from "@chakra-ui/react";
import { MenuItem } from "./MenuItem";

export function Menu() {
  return (
    <Flex
      margin="0 auto"
      maxWidth="1440px"
      justifyContent={["space-around", "space-between"]}
      p="0 9.72% 0 9.72%"
      marginTop={["36px", "70px", "114px"]}
      flexWrap="wrap"
    >
      <MenuItem
        src="/assets/img/cocktail 1.svg"
        alt="cocktail icon"
        title="vida noturna"
      ></MenuItem>

      <MenuItem
        src="/assets/img/surf 1.png"
        alt="surf icon"
        title="praia"
      ></MenuItem>

      <MenuItem
        src="/assets/img/building 1.svg"
        alt="building icon"
        title="moderno"
      ></MenuItem>

      <MenuItem
        src="/assets/img/museum 1.svg"
        alt="museum icon"
        title="clássico"
      ></MenuItem>

      <MenuItem
        src="/assets/img/earth 1.svg"
        alt="earth icon"
        title="e mais..."
      ></MenuItem>
    </Flex>
  );
}
