import { Box, Image, Text } from "@chakra-ui/react";

interface ContinentBannerProps {
  src: string;
  continentName: string;
}
export function ContinentBanner({ src, continentName }: ContinentBannerProps) {
  return (
    <Box position="relative">
      <Image
        src={src}
        alt="banner"
        objectFit="cover"
        width="100%"
        height={["150px", "300px", "500px"]}
      />
      <Box
        position="absolute"
        top={["50%", "50%", "74%"]}
        left={["50%", "50%", "9.72%"]}
        transform={[
          "translate(-50%, -50%)",
          "translate(-50%, -50%)",
          "translate(0, 0)",
        ]}
      >
        <Text
          fontWeight="semibold"
          fontSize={["28px", "38px", "48px"]}
          color="#F5F8FA"
        >
          {continentName}
        </Text>
      </Box>
    </Box>
  );
}
