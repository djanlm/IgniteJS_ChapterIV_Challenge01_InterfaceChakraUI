import { Box, Center } from "@chakra-ui/react";

export function Divider() {
  return (
    <Center mt={["36px", "80px"]} mb={["24px", "52px"]}>
      <Box
        height="5px"
        width="90px"
        borderBottom={["1px solid #47585B", "2px solid #47585B"]}
      ></Box>
    </Center>
  );
}
