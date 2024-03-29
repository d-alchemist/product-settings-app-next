"use client";
import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "@/style/theme";
import { AuthProvider } from "./providers/AuthContext";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ChakraProvider theme={theme}>
      <AuthProvider>{children}</AuthProvider>
    </ChakraProvider>
  );
}
