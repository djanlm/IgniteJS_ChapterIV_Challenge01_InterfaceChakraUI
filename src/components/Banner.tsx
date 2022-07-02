import { Box, Heading, Image, Text } from "@chakra-ui/react";
//import Image from "next/image";

export function Banner() {
  return (
    <Box
      maxWidth="1440px"
      width="100%"
      margin="0 auto"
      position="relative"
      height={["163px", "250px", "335px"]}
      //height={["43.47%", "40%", "50%", "23.26%"]}
      bgColor="red"
    >
      <Image
        src="/assets/img/Background.jpg"
        alt="banner"
        objectFit="cover"
        width="100%"
        height="100%"
      />
      <Box
        maxWidth="524px"
        width={["100%", "100%", "46.11%"]}
        position="absolute"
        paddingLeft={["4.27%", "4.27%", "9.7%"]}
        marginTop={["7.47%", "7.47%", "5.55%"]}
        top="0"
      >
        <Heading
          fontSize={["20px", "26px", "36px"]}
          fontWeight="medium"
          color="white"
        >
          5 Continentes,
          <br /> infinitas possibilidades.
        </Heading>
        <Text
          fontSize={["14px", "17px", "20px"]}
          fontWeight="regular"
          color="#DADADA"
          marginTop="20px"
        >
          Chegou a hora de tirar do papel a viagem que você sempre sonhou.
        </Text>
      </Box>

      <Image
        src="/assets/img/Airplane.svg"
        alt="airplane"
        //width="28.96%"
        width={["0%", "0%", "36%", "28.96%"]}
        position="absolute"
        //marginTop="5.55%"
        marginBottom="-2.3%"
        marginRight="9.72%"
        bottom="0"
        right="0"
        display={["none", "none", "block"]}
      />
    </Box>
  );
}
