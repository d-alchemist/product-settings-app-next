"use client";

import { Box, Button, Center, Container, Heading, Stack } from "@chakra-ui/react";
import Image from "next/image";
import { IMAGES, PAGES } from "@/utils/constants";
import { useAuth } from "./providers/AuthContext";
import { useEffect, useState } from "react";
import React from "react";

export default function App() {
  const { login } = useAuth();

  const [origin, setOrigin] = useState("");

  useEffect(() => {
    if (typeof window !== "undefined") {
      setOrigin(window.origin);
    }
  }, []);

  return (
    <Center minH="100dvh">
      <Container
        maxW="lg"
        py={{ base: "12", md: "24" }}
        px={{ base: "0", sm: "8" }}
      >
        <Box
          py={{ base: "0", sm: "8" }}
          px={{ base: "4", sm: "10" }}
          bg={{ base: "transparent", sm: "bg.surface" }}
          boxShadow={{ base: "none", sm: "md" }}
          borderRadius={{ base: "none", sm: "xl" }}
        >
          <Stack spacing="6">
            <Image
              src={IMAGES.logo}
              alt="company logo"
              width={120}
              height={30}
              style={{ margin: "0 auto" }}
            />
            <Stack mt="4" spacing={{ base: "2", md: "3" }} textAlign="center">
              <Heading size={{ base: "xs", md: "sm" }}>
                Log in to your account
              </Heading>
            </Stack>
          </Stack>
          <Stack spacing="6" mt="10">
            <Stack spacing="6">
              <Button onClick={() => login(`${origin}${PAGES.validateUser}`)}>
                Sign in
              </Button>
            </Stack>
          </Stack>
        </Box>
      </Container>
    </Center>
  );
}
