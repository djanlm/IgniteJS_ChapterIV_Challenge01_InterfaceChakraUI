import { ChevronLeftIcon } from "@chakra-ui/icons";
import { Flex, Image, Link as ChakraLink } from "@chakra-ui/react";
import Link from "next/link";
import { useRouter } from "next/router";

export function Header() {
  const { asPath } = useRouter();
  console.log(asPath);
  return (
    <Flex
      width="100%"
      margin="0 auto"
      justifyContent="center"
      alignItems="center"
      bgColor="white"
      //p={["0 16px 0 16px", "0 16px 0 16px", "0 70px 0 70px", "0 140px 0 140px"]}
      position="relative"
    >
      {asPath === "/" ? (
        ""
      ) : (
        <Link href="/" passHref>
          <ChakraLink
            position="absolute"
            left={["16px", "16px", "70px", "140px"]}
          >
            <ChevronLeftIcon
              w={["16px", "24px", "32px"]}
              h={["16px", "24px", "32px"]}
              _hover={{
                transform: "scale(1.2)",
              }}
            />
          </ChakraLink>
        </Link>
      )}

      <Image
        src="/assets/img/Logo.svg"
        alt="Logomarca"
        width={["21.6%", "17%", "13%"]}
        p={["4% 0 4% 0", "2.5% 0 2.5% 0", "1.88% 0 1.88% 0"]}
      />
    </Flex>
  );
}
