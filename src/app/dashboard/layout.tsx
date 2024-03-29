import React from "react";
import TopNav from "../components/TopNav";
import { Box } from "@chakra-ui/react";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Box pt="76px">
      <TopNav />
      <Box maxW="1027px" mx="auto">
        {children}
      </Box>
    </Box>
  );
}
