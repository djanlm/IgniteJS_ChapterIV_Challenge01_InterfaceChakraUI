import { Box, Flex } from "@chakra-ui/react";
import { GetStaticPaths, GetStaticProps } from "next";
import Head from "next/head";
import { CitiesList } from "../../components/CitiesList";
import { ContinentBanner } from "../../components/ContinentBanner";
import { ContinentCharacteristics } from "../../components/ContinentCharacteristics";
import { ContinentDescription } from "../../components/ContinentDescription";
import { Header } from "../../components/Header";
import data from "../../../continents.json";
import { useEffect, useState } from "react";

interface ContinentPageProps {
  name: string;
}
interface ContinentProps {
  name: string;
  description: string;
  about: string;
  srcHeroImage: string;
  generalInfo: {
    numberOfCountries: string;
    numberOfLanguages: string;
    numberOfCities: string;
  };
  cities: {
    name: string;
    país: string;
    flagCode: string;
    srcPicture: string;
  }[];
}

export default function ContinentPage({ name }: ContinentPageProps) {
  const [continent, setContinent] = useState<ContinentProps | undefined>(
    {} as ContinentProps
  );
  useEffect(() => {
    const continentFound = data.continents.find((continent) => {
      return continent.name === name;
    });

    setContinent(continentFound);
  }, [name]);

  if (continent?.generalInfo) {
    //Só parou de dar erro após colocar essa condição
    return (
      <div>
        <Head>
          <title>World Trip</title>
          <meta name="Home" content="Home page" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Box
          bgColor="white"
          maxWidth="1440px"
          margin="0 auto"
          p={["0 0 1px 0"]}
        >
          <Header></Header>
          <ContinentBanner
            src={continent.srcHeroImage}
            continentName={continent.name}
          ></ContinentBanner>
          <Box
            p={[
              "24px 16px 16px 16px",
              "24px 16px 16px 16px",
              "80px 70px 80px 70px",
              "80px 140px 80px 140px",
            ]}
          >
            <Flex
              flexDir={["column", "column", "row"]}
              justifyContent={["space-between"]}
              alignItems={["space-between", "space-between", "center"]}
              mb={["32px"]}
            >
              <ContinentDescription description={continent.about} />
              <ContinentCharacteristics
                numberOfCities={continent.generalInfo.numberOfCities}
                numberOfCountries={continent.generalInfo.numberOfCountries}
                numberOfLanguages={continent.generalInfo.numberOfLanguages}
              />
            </Flex>
            <CitiesList cities={continent.cities} />
          </Box>
        </Box>
      </div>
    );
  } else {
    return <div>Erro</div>;
  }
}

export const getStaticPaths: GetStaticPaths = () => {
  const paths = data.continents.map((continent) => {
    return {
      params: {
        name: continent.name,
      },
    };
  });
  return {
    paths,
    fallback: "blocking",
  };

  // return { paths: [], fallback: "blocking" };
};
export const getStaticProps: GetStaticProps = async ({ params }) => {
  if (params) {
    const { name } = params;
    return {
      props: {
        name,
      },
    };
  } else {
    return {
      props: {},
    };
  }
};
