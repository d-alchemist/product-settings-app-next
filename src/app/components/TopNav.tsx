"use client";
import { IMAGES } from "@/utils/constants";
import { Box, Flex, Text } from "@chakra-ui/react";
import Image from "next/image";
import { useAuth } from "../providers/AuthContext";

export default function TopNav() {
  return (
    <>
      <Flex
        justifyContent="space-between"
        py="2"
        px="6"
        top="0"
        height="76px"
        position="fixed"
        width="full"
        minWidth="xs"
        zIndex="modal"
        alignItems="center"
        bg="white"
      >
        <Box>
          <Image src={IMAGES.logo} alt="logo" height={27} width={150} />
        </Box>
        <Avatar />
      </Flex>
    </>
  );
}

const Avatar = () => {
  return (
    <Flex alignItems="center" gap="4">
      <Flex flexDir="column">
        <Text fontFamily="body" fontWeight="500">Theodore Winters</Text>
        <Text fontFamily="body" fontSize="14">twinters@gmail.com</Text>
      </Flex>
      <Box borderRadius="full" cursor="pointer">
        <Image
          src={IMAGES.profilePlaceholder}
          alt="logo"
          height={40}
          width={40}
          style={{ borderRadius: "100%", objectFit: "cover" }}
        />
      </Box>
    </Flex>
  );
};
