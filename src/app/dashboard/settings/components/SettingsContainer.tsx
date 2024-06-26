import { Box, Divider, Flex, Text } from "@chakra-ui/react";
import { ReactNode, memo } from "react";

type Props = {
  title: string;
  children: ReactNode;
};

function SettingsContainer({ title, children }: Props) {
  return (
    <Flex
      border="1px solid"
      borderColor="#CACEE133"
      bg="white"
      py="5"
      px="7"
      mt="10"
      borderRadius="24px"
      flexDir="column"
    >
      <Box w="full">
        <Text className="avenir" fontWeight="500" fontSize="20px">
          {title}
        </Text>
        <Divider mt="3" color="#AEADBE" border="0.3px solid" />
      </Box>
      <Box minH="400px" mt="5">{children}</Box>
    </Flex>
  );
}

export default memo(SettingsContainer);