"use client";
import { Box, Button, Container, Heading, Stack } from "@chakra-ui/react";
import { useAuth } from "./providers/AuthContext";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { PAGES } from "@/utils/constants";

export default function LoginPage() {
  const { login } = useAuth();

  const [origin, setOrigin] = useState("");

  useEffect(() => {
    setOrigin(window.origin);
  }, []);

  return (
    <Container
      maxW="lg"
      py={{ base: "12", md: "24" }}
      px={{ base: "0", sm: "8" }}
    >
      <Stack spacing="8">
        <Stack spacing="6">
          <Stack spacing={{ base: "2", md: "3" }} textAlign="center">
            <Heading size={{ base: "sm", md: "sm" }}>
              Log in to your account
            </Heading>
          </Stack>
        </Stack>
        <Box
          py={{ base: "0", sm: "8" }}
          px={{ base: "4", sm: "10" }}
          bg={{ base: "transparent", sm: "bg.surface" }}
          boxShadow={{ base: "none", sm: "md" }}
          borderRadius={{ base: "none", sm: "xl" }}
        >
          <Stack spacing="6">
            <Button
              onClick={() => login(`${origin}${PAGES.validateUser}`)}
            >
              Sign in
            </Button>
          </Stack>
        </Box>
      </Stack>
    </Container>
  );
}
