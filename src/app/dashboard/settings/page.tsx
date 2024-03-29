"use client";
import {
  Box,
  SystemStyleObject,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
} from "@chakra-ui/react";
import Account from "./components/Account";
import UserManagement from "./components/UserManagement";
import useSettingsFetch from "@/hooks/useSettingsFetch";

const selectedStyle: SystemStyleObject = { fontWeight: "bold", color: "primary", borderBottom: "2px solid", borderBottomColor: "primary" }

export default function SettingsPage() {
  useSettingsFetch();

  return (
    <Box>
      <Box my="10">
        <Text fontSize="28px" fontWeight="semibold">Settings</Text>
      </Box>
      <Box>
        <Tabs>
          <TabList borderBottomColor="#AEADBE" borderBottom="0.3px solid" gap="4">
            <Tab fontFamily="heading" _selected={selectedStyle}>Account</Tab>
            <Tab fontFamily="heading" _selected={selectedStyle}>User Management</Tab>
          </TabList>
          <TabPanels>
            <TabPanel p="0">
              <Account />
            </TabPanel>
            <TabPanel p="0">
              <UserManagement />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </Box>
  );
}
