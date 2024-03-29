import {
  Box,
  Button,
  Flex,
  FormControl,
  FormHelperText,
  FormLabel,
  Input,
  Select,
  Text,
} from "@chakra-ui/react";
import SettingsContainer from "./SettingsContainer";
import Image from "next/image";
import { ICONS } from "@/utils/constants";
import useAccountPage from "../hooks/useAccountPage";
import { OrgData } from "@/types";
import { memo } from "react";

function Account({ orgData }: { orgData: OrgData }) {
  const { formik, showCompanyLogo, onImageUpload, toast } =
    useAccountPage({ orgData });

  return (
    <>
      <SettingsContainer title="Account">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            formik.handleSubmit(e);
          }}
        >
          <Flex flexDir="column" maxW="480px" gap="4" fontFamily="heading">
            {formInput.map((form) => (
              <FormControl key={form.id}>
                <FormLabel color="label" fontWeight="normal" fontSize="13px">
                  {form.title}
                </FormLabel>
                <Input
                  type={form.type}
                  name={form.name}
                  placeholder={form.placeholder}
                  border="1px solid"
                  borderColor="#5E6DFA1A"
                  backgroundColor="#FCFCFE"
                  fontSize="12"
                  color="#292B34"
                  value={formik.values[form.name as keyof typeof formik.values]}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                <FormHelperText fontSize="10" color="red">
                  {formik.errors[form.name as keyof typeof formik.errors]}
                </FormHelperText>
              </FormControl>
            ))}
            <FormControl>
              <FormLabel color="label" fontWeight="normal" fontSize="13px">
                Industry
              </FormLabel>
              <Select
                placeholder="Select industry"
                border="1px solid"
                borderColor="#5E6DFA1A"
                backgroundColor="#FCFCFE"
                fontSize="12"
                color="#292B34"
                name="industry"
                value={formik.values["industry"]}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              >
                {industriesList.map((industry) => (
                  <option key={industry} value={industry}>
                    {industry}
                  </option>
                ))}
              </Select>
            </FormControl>
            <FormControl>
              <FormLabel color="label" fontWeight="normal" fontSize="13">
                Company Logo
              </FormLabel>
              <FormLabel
                htmlFor="companyLogo"
                border="1px solid"
                borderColor="#5E6DFA4D"
                py="5"
                px="7"
                borderRadius="8px"
                m="0"
                cursor="pointer"
              >
                <Flex alignItems="center" gap="3">
                  <Box position="relative">
                    <Image
                      alt="company sample logo"
                      src={showCompanyLogo()}
                      height={80}
                      width={80}
                      style={{
                        borderRadius: "100%",
                        objectFit: "cover",
                        maxHeight: 80,
                        maxWidth: 80,
                      }}
                    />
                    <Image
                      alt="upload logo"
                      src={ICONS.upload}
                      height={40}
                      width={40}
                      style={{
                        borderRadius: "100%",
                        position: "absolute",
                        left: 48,
                        top: -5,
                      }}
                    />
                  </Box>
                  <Text color="primary" fontWeight="normal" fontSize="12">
                    Upload company logo
                  </Text>
                </Flex>
              </FormLabel>
              <Input
                onChange={(e) => {
                  const files = e.target.files;
                  if (files?.length) {
                    if (files[0].size < 5_000_000) {
                      onImageUpload(files[0]);
                    } else {
                      toast({
                        status: "error",
                        description: "Image size is too large",
                      });
                    }
                  }
                }}
                id="companyLogo"
                visibility="hidden"
                type="file"
                accept=".png, .jpg, .jpeg"
              />
            </FormControl>
            <Box mt="-7">
              <Button
                bg="white"
                color="primary"
                borderColor="primary"
                border="1px solid"
                _hover={{ bg: "primary", color: "white" }}
                borderRadius="full"
                fontWeight="normal"
                fontSize="10"
                gap="8"
                type="submit"
              >
                Save changes
              </Button>
            </Box>
          </Flex>
        </form>
      </SettingsContainer>
    </>
  );
}

export default memo(Account);

const formInput = [
  {
    id: 1,
    title: "Company name",
    placeholder: "Enter company name",
    name: "companyName",
    type: "text",
  },
  {
    id: 2,
    title: "Contact name",
    placeholder: "Enter contact name",
    name: "contactName",
    type: "text",
  },
  {
    id: 3,
    title: "Email",
    placeholder: "Enter email address",
    name: "emailAddress",
    type: "email",
  },
];

const industriesList = [
  "Healthcare and Pharmaceuticals",
  "Information Technology (IT) and Software Services",
  "Finance and Banking",
  "Retail and Consumer Goods",
  "Manufacturing and Industrial Production",
];
