import { Box } from "@chakra-ui/react";
import type { GetStaticProps, NextPage } from "next";
import Head from "next/head";
import { Banner } from "../components/Banner";
import { Carousel } from "../components/Carousel";
import { ContentHome } from "../components/ContentHome";
import { Divider } from "../components/Divider";
import { Header } from "../components/Header";
import { Menu } from "../components/Menu";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>World Trip</title>
        <meta name="Home" content="Home page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Box bgColor="white" maxWidth="1440px" margin="0 auto" p={["0 0 1px 0"]}>
        <Header></Header>
        <Banner></Banner>
        <Menu></Menu>
        <Divider></Divider>
        <ContentHome></ContentHome>
        <Carousel></Carousel>
      </Box>
    </div>
  );
};

// Fetching data from the JSON file
// import fsPromises from 'fs/promises';
// import path from 'path';
// export async function getStaticProps(): Promise<GetStaticProps> {
//   const filePath = path.join(process.cwd(), 'continents.json');
//   const jsonData = await fsPromises.readFile(filePath);
//   const objectData = JSON.parse(jsonData);

//   return {
//     props: objectData
//   }
// }

export default Home;
