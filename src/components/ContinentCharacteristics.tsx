import { Flex, Heading, Icon, Spacer, Text, Tooltip } from "@chakra-ui/react";
import { AiOutlineInfoCircle } from "react-icons/ai";

interface ContinentCharacteristicsProps {
  numberOfCountries: string;
  numberOfLanguages: string;
  numberOfCities: string;
}
export function ContinentCharacteristics({
  numberOfCities,
  numberOfCountries,
  numberOfLanguages,
}: ContinentCharacteristicsProps) {
  return (
    <Flex
      justifyContent="space-between"
      flexWrap="wrap"
      flex="1"
      p={["16px 0 0 0", "16px 0 0 0", "0"]}
    >
      <Flex flexDir="column" mr="16px">
        <Heading
          color="brand.yellow"
          fontWeight="semibold"
          fontSize={["24px", "36px", "48px"]}
        >
          {numberOfCountries}
        </Heading>
        <Text
          color="brand.gray"
          fontWeight={["regular", "semibold", "semibold"]}
          fontSize={["18px", "21px", "24px"]}
        >
          países
        </Text>
      </Flex>
      <Spacer />
      <Flex flexDir="column" mr="16px">
        <Heading
          color="brand.yellow"
          fontWeight="semibold"
          fontSize={["24px", "36px", "48px"]}
        >
          {numberOfLanguages}
        </Heading>
        <Text
          color="brand.gray"
          fontWeight={["regular", "semibold", "semibold"]}
          fontSize={["18px", "21px", "24px"]}
        >
          línguas
        </Text>
      </Flex>
      <Spacer />
      <Flex flexDir="column">
        <Heading
          color="brand.yellow"
          fontWeight="semibold"
          fontSize={["24px", "36px", "48px"]}
        >
          {numberOfCities}
        </Heading>
        <Flex alignItems="center">
          <Text
            color="brand.gray"
            fontWeight={["regular", "semibold", "semibold"]}
            fontSize={["18px", "21px", "24px"]}
            marginRight="5px"
          >
            cidades +100
          </Text>
          <Tooltip
            label="Veja mais informações sobre as cidades, abaixo."
            fontSize="md"
            maxWidth="175px"
          >
            <span>
              <Icon
                as={AiOutlineInfoCircle}
                width={["10px", "16px"]}
                height={["10px", "16px"]}
                color="#aaaaaa"
              ></Icon>
            </span>
          </Tooltip>
        </Flex>
      </Flex>
    </Flex>
  );
}
