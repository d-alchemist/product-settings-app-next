"use client";
import {
  SystemStyleObject,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
} from "@chakra-ui/react";
import Account from "./Account";
import UserManagement from "./UserManagement";
import useSettingsFetch from "@/hooks/useSettingsFetch";
import LoadingModal from "@/app/components/LoadingModal";

const selectedStyle: SystemStyleObject = {
  fontWeight: "bold",
  color: "primary",
  borderBottom: "2px solid",
  borderBottomColor: "primary",
};

export default function SettingsComponent() {
  const { orgData, userData } = useSettingsFetch();

  if (!orgData?.org_id || !userData.length) {
    return <LoadingModal />;
  }

  return (
    <Tabs>
      <TabList borderBottomColor="#AEADBE" borderBottom="0.3px solid" gap="4">
        <Tab fontFamily="heading" _selected={selectedStyle}>
          Account
        </Tab>
        <Tab fontFamily="heading" _selected={selectedStyle}>
          User Management
        </Tab>
      </TabList>
      <TabPanels>
        <TabPanel p="0">
          <Account orgData={orgData} />
        </TabPanel>
        <TabPanel p="0">
          <UserManagement userData={userData} />
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
}
