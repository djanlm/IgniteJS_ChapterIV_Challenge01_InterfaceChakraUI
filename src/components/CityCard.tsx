import {
  Avatar,
  Box,
  Flex,
  FlexProps,
  Heading,
  Image,
  Text,
} from "@chakra-ui/react";

interface CityCardProps extends FlexProps {
  srcImage: string;
  altImage: string;
  cityName: string;
  countryName: string;
  countryFlagCode: string;
}
export function CityCard({
  srcImage,
  altImage,
  cityName,
  countryName,
  countryFlagCode,
  ...rest
}: CityCardProps) {
  return (
    <Box
      maxWidth={["256px"]}
      borderRadius="4px"
      mt={["20px", "20px", "40px"]}
      mr="5px"
      {...rest}
    >
      <Image
        src={srcImage}
        alt={altImage}
        width="100%"
        height="173px"
        borderRadius="4px 4px 0 0"
        objectFit="cover"
      />
      <Flex
        alignItems="center"
        justifyContent="space-between"
        p="16px 24px 25px 24px"
        borderWidth="1px"
        borderStyle="solid"
        borderColor="rgba(255,186,8,0.5)"
        borderTop="0"
      >
        <Flex flexDir="column">
          <Heading fontWeight="semibold" fontSize={["20px"]} color="brand.gray">
            {cityName}
          </Heading>
          <Text
            fontWeight="medium"
            fontSize={["16px"]}
            color="#999999"
            mt="12px"
          >
            {countryName}
          </Text>
        </Flex>
        <Box>
          <Avatar
            width={["30px"]}
            height={["30px"]}
            src={`https://flagcdn.com/${countryFlagCode}.svg`}
          />
        </Box>
      </Flex>
    </Box>
  );
}
