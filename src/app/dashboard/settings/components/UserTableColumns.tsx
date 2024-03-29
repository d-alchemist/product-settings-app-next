import { createColumnHelper } from "@tanstack/react-table";
import { Badge, Box, Flex, Image, Text } from "@chakra-ui/react";
import { ICONS } from "@/utils/constants";
import { UserData } from "@/types";
import { calculateRelativeTime } from "@/utils/helpers";

export const data = [
  {
    user_id: "auth0|64a1511413a158528b90be33",
    email: "theodoremozziewinters@gmail.com",
    name: "Theodore Mozzie Winters",
    picture:
      "https://s.gravatar.com/avatar/be545182604d51d230bd1b79b79815d4?s=480&r=pg&d=https%3A%2F%2Fcdn.auth0.com%2Favatars%2Fth.png",
    email_verified: true,
    user_metadata: {
      role: "Member",
      org: "org_bb8g9mvw7jsyGO77",
    },
    last_login: "2024-03-28T19:07:00.553",
    given_name: null,
    family_name: null,
    blocked: false,
  },
  {
    user_id: "auth0|abc123",
    email: "example1@example.com",
    name: "John Doe",
    picture:
      "https://s.gravatar.com/avatar/abc123?s=480&r=pg&d=https%3A%2F%2Fcdn.auth0.com%2Favatars%2Fjd.png",
    email_verified: true,
    user_metadata: {
      role: "Admin",
      org: "org_123456",
    },
    last_login: "2024-03-29T08:15:00.553",
    given_name: null,
    family_name: null,
    blocked: false,
  },
  {
    user_id: "auth0|def456",
    email: "example2@example.com",
    name: "Jane Smith",
    picture:
      "https://s.gravatar.com/avatar/def456?s=480&r=pg&d=https%3A%2F%2Fcdn.auth0.com%2Favatars%2Fjs.png",
    email_verified: false,
    user_metadata: {
      role: "Member",
      org: "org_789012",
    },
    last_login: "2024-03-28T10:30:00.553",
    given_name: null,
    family_name: null,
    blocked: true,
  },
  {
    user_id: "auth0|ghi789",
    email: "example3@example.com",
    name: "Alice Johnson",
    picture:
      "https://s.gravatar.com/avatar/ghi789?s=480&r=pg&d=https%3A%2F%2Fcdn.auth0.com%2Favatars%2Faj.png",
    email_verified: true,
    user_metadata: {
      role: "Member",
      org: "org_345678",
    },
    last_login: "2024-03-27T15:45:00.553",
    given_name: null,
    family_name: null,
    blocked: false,
  },
  {
    user_id: "auth0|jkl012",
    email: "example4@example.com",
    name: "Bob Brown",
    picture:
      "https://s.gravatar.com/avatar/jkl012?s=480&r=pg&d=https%3A%2F%2Fcdn.auth0.com%2Favatars%2Fbb.png",
    email_verified: true,
    user_metadata: {
      role: "Admin",
      org: "org_901234",
    },
    last_login: "2024-03-26T12:00:00.553000",
    given_name: null,
    family_name: null,
    blocked: true,
  },
];

const columnHelper = createColumnHelper<UserData>();

const UserState = ({ data }: { data: UserData }) => {
  if (!data.email_verified) {
    return (
      <Badge
        color="#D17E09"
        bg="#FFF0DB99"
        borderRadius="full"
        py="2px"
        px="14px"
        fontSize="9px"
        fontWeight="normal"
        textTransform="capitalize"
      >
        Pending
      </Badge>
    );
  }
  if (data.blocked) {
    return (
      <Badge
        color="#81859C"
        bg="#F6F7FB"
        borderRadius="full"
        py="2px"
        px="14px"
        fontSize="9px"
        fontWeight="normal"
        textTransform="capitalize"
      >
        Disabled
      </Badge>
    );
  }
};

export const columns = [
  columnHelper.accessor("user_id", {
    header: () => <Image src={ICONS.users} alt="users icon" />,
    cell: (info) => {
      return (
        <Box>
          {info.row.original.picture ? (
            <Image
              src={info.row.original.picture}
              alt="profile picture"
              width={30}
              height={30}
              style={{ borderRadius: "100%", maxHeight: 30, maxWidth: 30 }}
            />
          ) : (
            <Flex
              alignItems="center"
              justifyContent="center"
              width="30px"
              height="30px"
              bgColor="#F6F7FB"
              borderRadius="full"
            >
              <Text
                color="#7C8187"
                fontFamily="body"
                textTransform="capitalize"
                fontSize="12"
              >
                {info.row.original.name.charAt(0)}
              </Text>
            </Flex>
          )}
        </Box>
      );
    },
    size: 10,
  }),
  columnHelper.accessor("name", {
    header: () => <Text ml="4">Name</Text>,
    cell: (info) => {
      return (
        <Flex flexDir="column">
          <Flex alignItems="center" gap="2">
            <Text ml="4" color="#292B34">
              {info.row.original.name}
            </Text>
            <UserState data={info.row.original} />
          </Flex>
          <Text ml="4" fontSize="14" color="#81859C">
            {info.row.original.email}
          </Text>
        </Flex>
      );
    },
    size: 300,
  }),
  columnHelper.accessor("user_metadata.role", {
    header: () => "Role",
    cell: (info) => {
      return (
        <Text color="#292B34" fontSize="14">
          {info.renderValue()}
        </Text>
      );
    },
    size: 200,
  }),
  columnHelper.accessor("last_login", {
    header: () => "Last Active",
    cell: (info) => {
      return (
        <Text color="label" fontSize="14">
          {calculateRelativeTime(info.row.original.last_login as string)}
        </Text>
      );
    },
    size: 400,
  }),
];
