import { Box, Flex, Image, Text } from "@chakra-ui/react";

interface MenuItemProps {
  src: string;
  alt: string;
  title: string;
}

export function MenuItem({ src, alt, title }: MenuItemProps) {
  return (
    <Flex
      flexDirection={["row", "row", "column"]}
      justifyContent="center"
      alignItems="center"
      height={["auto", "auto", "145px"]}
      margin={["1rem 1rem 0 0", "1rem 1rem 0 0", "0 0 0 0"]}
    >
      <Image
        src={src}
        alt={alt}
        width={["0", "0", "65px", "85px"]}
        display={["none", "none", "block"]}
        marginBottom="24px"
      />
      <Box
        borderRadius="full"
        bgColor="brand.yellow"
        width="8px"
        height="8px"
        display={["inline", "inline", "none"]}
        marginRight="8px"
      />

      <Text
        fontSize={["18px", "21px", "21px", "24px"]}
        fontWeight="semibold"
        color="brand.gray"
      >
        {title}
      </Text>
    </Flex>
  );
}
