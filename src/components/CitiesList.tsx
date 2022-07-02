import { Flex, Text } from "@chakra-ui/react";
import { CityCard } from "./CityCard";

interface CityProps {
  name: string;
  país: string;
  flagCode: string;
  srcPicture: string;
}

interface CitiesListProps {
  cities: CityProps[];
}

export function CitiesList({ cities }: CitiesListProps) {
  return (
    <>
      <Text
        fontWeight="medium"
        fontSize={["24px", "30px", "36px"]}
        color="#47585B"
      >
        Cidades +100
      </Text>
      <Flex
        flexWrap="wrap"
        alignItems={["center"]}
        justifyContent={["center", "center", "space-between"]}
      >
        {cities.map((city) => (
          <CityCard
            key={city.flagCode}
            srcImage={city.srcPicture}
            altImage={city.name}
            cityName={city.name}
            countryName={city.país}
            countryFlagCode={city.flagCode}
          ></CityCard>
        ))}
      </Flex>
    </>
  );
}
