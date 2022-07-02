// Import Swiper React components
import { Navigation, Pagination } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";
import {
  Box,
  Center,
  Flex,
  Heading,
  Text,
  Link as ChakraLink,
} from "@chakra-ui/react";

import styles from "../styles/Carousel.module.css";
import "../styles/Carousel.module.css";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import data from "../../continents.json";
import Link from "next/link";

export function Carousel() {
  return (
    <Box
      maxWidth="1440px"
      width="100%"
      margin={["20px auto 24px", "52px auto 40px"]}
      position="relative"
    >
      <Swiper
        modules={[Navigation, Pagination]}
        className={styles.imageContainer}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        {data.continents.map((continent) => (
          <SwiperSlide key={continent.name}>
            <Box
              maxWidth="1440px"
              height={["250px", "350", "450px"]}
              bgImage={`url(${continent.srcHeroImage})`}
              filter=" brightness(0.6)"
              backgroundSize="cover"
            ></Box>

            <Center
              position="absolute"
              top="50%"
              left="50%"
              transform="translate(-50%, -50%)"
            >
              <Link href={`/continents/${continent.name}`} passHref>
                <ChakraLink
                  textDecor="none"
                  _hover={{ textDecoration: "none" }}
                >
                  <Flex
                    flexDir="column"
                    justifyContent="center"
                    alignItems="center"
                  >
                    <Heading
                      fontWeight="bold"
                      fontSize={["1.5rem", "3rem"]}
                      color="#F5F8FA"
                      transition="transform 0.2s"
                      _hover={{
                        transform: "scale(1.05)",
                        color: "white",
                      }}
                    >
                      {continent.name}
                    </Heading>
                    <Text
                      fontWeight="bold"
                      fontSize={["0.85rem", "1.5rem"]}
                      color="#DADADA"
                      marginTop="16px"
                    >
                      {continent.description}
                    </Text>
                  </Flex>
                </ChakraLink>
              </Link>
            </Center>
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
}
