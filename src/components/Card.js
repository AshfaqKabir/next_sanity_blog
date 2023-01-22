import {
  chakra,
  Container,
  Box,
  HStack,
  VStack,
  Link,
  Text,
  Avatar,
  SimpleGrid,
  useColorModeValue,
} from "@chakra-ui/react";

const Card = ({ title, content, username, userAvatar, created_at }) => {
  return (
    <Box
      as={Link}
      p={4}
      _hover={{ bg: useColorModeValue("gray.100", "gray.800") }}
      rounded="md"
    >
      <VStack spacing={2} mb={5} textAlign="left">
        <chakra.h1 fontSize="2xl" lineHeight={1.2} fontWeight="bold" w="100%">
          {title} Rust Is The Future
        </chakra.h1>
        <Text fontSize="md" noOfLines={2} color="gray.500">
          {content} Why is Rust being used to replace parts of the JavaScript
          web ecosystem like minification (Terser), transpilation (Babel),
          formatting (Prettier), bundling (webpack), linting (ESLint), and more?
        </Text>
      </VStack>
      <HStack spacing={2} alignItems="center">
        <Avatar
          size="md"
          title="Author"
          src={
            "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&auto=format&fit=crop&w=334&q=80"
          }
        />
        <Box>
          <Text fontWeight="bold">{username}</Text>
          <Text fontSize="sm" color="gray.500">
            {created_at} 
          </Text>
        </Box>
      </HStack>
    </Box>
  );
};

export default Card;
