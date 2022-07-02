import { Box, Flex } from "@chakra-ui/react";
import Head from "next/head";
import { CitiesList } from "../components/CitiesList";
import { ContinentBanner } from "../components/ContinentBanner";
import { ContinentCharacteristics } from "../components/ContinentCharacteristics";
import { ContinentDescription } from "../components/ContinentDescription";
import { Header } from "../components/Header";

export default function europa() {
  return (
    <div>
      <Head>
        <title>World Trip</title>
        <meta name="Home" content="Home page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Box bgColor="white" maxWidth="1440px" margin="0 auto" p={["0 0 1px 0"]}>
        <Header></Header>
        <ContinentBanner
          src="/assets/img/Europa.svg"
          continentName="Europa"
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
            <ContinentDescription></ContinentDescription>
            <ContinentCharacteristics></ContinentCharacteristics>
          </Flex>
          <CitiesList />
        </Box>
      </Box>
    </div>
  );
}
