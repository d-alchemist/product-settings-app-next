import {
  Box,
  Text,
} from "@chakra-ui/react";
import SettingsComponent from "./components/SettingsComponent";

export default function SettingsPage() {
  return (
    <Box>
      <Box my="10">
        <Text fontSize="28px" fontWeight="semibold" className="avenir">
          Settings
        </Text>
      </Box>
      <SettingsComponent />
    </Box>
  );
}
