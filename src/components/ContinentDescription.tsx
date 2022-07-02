import { Box, Text } from "@chakra-ui/react";

interface ContinentDescriptionProps {
  description: string;
}
export function ContinentDescription({
  description,
}: ContinentDescriptionProps) {
  return (
    <Box mr={["0", "0", "70px"]}>
      <Text
        fontWeight="regular"
        fontSize={["14px", "19px", "24px"]}
        color="#47585B"
        textAlign="justify"
        maxWidth={["auto", "auto", "600px"]}
        width="100%"
      >
        {description}
      </Text>
    </Box>
  );
}
