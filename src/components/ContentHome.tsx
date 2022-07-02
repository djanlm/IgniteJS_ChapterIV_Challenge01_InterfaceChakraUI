import { Center, Heading } from "@chakra-ui/react";

export function ContentHome() {
  return (
    <>
      <Center>
        <Heading
          color="brand.gray"
          fontWeight="medium"
          fontSize={["1.25rem", "1.75rem", "2.25rem"]}
        >
          Vamos nessa?
        </Heading>
      </Center>
      <Center>
        <Heading
          color="brand.gray"
          fontWeight="medium"
          fontSize={["1.25rem", "1.75rem", "2.25rem"]}
        >
          Então escolha seu continente
        </Heading>
      </Center>
    </>
  );
}
