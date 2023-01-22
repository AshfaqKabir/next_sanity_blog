import NextLink from "next/link";
import { Flex, Link } from "@chakra-ui/react";

const Navbar = () => {
  return (
    <Flex justifyContent={"center"} my="12px">
      <Flex minW={"500px"} alignItems="center" justifyContent={"space-between"}>
        <Link as={NextLink} href="/">
          Home
        </Link>
        <Link as={NextLink} href="/blogs">
          Blogs
        </Link>
        <Link as={NextLink} href="/blogs">
          Blogs
        </Link>
        <Link as={NextLink} href="/studio/desk" isExternal>
          STUDIO
        </Link>
      </Flex>
    </Flex>
  );
};

export default Navbar;
