import { Flex, Spinner, useColorModeValue as mode } from "@chakra-ui/react";

export const Loader = (props) => {
  return (
    <Flex
      bg={mode("white", "gray.700")}
      shadow="md"
      w="full"
      maxW="2xl"
      mx="auto"
      rounded="lg"
      overflow="hidden"
      textAlign="center"
      minH="20rem"
      justifyContent="center"
      alignItems="center"
      color="gray.700"
      fontSize="1.8rem"
      p="4"
      direction="column"
    >
      🎉 To check yout BPRO earnings please enter your ETH address above 👆! 🎉
      {props.state === "submitting" && (
        <Spinner
          thickness="4px"
          speed="0.65s"
          emptyColor="gray.200"
          color="green.700"
          size="xl"
          mt="4"
        />
      )}
    </Flex>
  );
};
