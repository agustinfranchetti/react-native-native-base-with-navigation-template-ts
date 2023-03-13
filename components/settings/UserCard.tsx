import { Text, Button, Flex, Box, Avatar } from "@chakra-ui/react";
type UserCardProps = {
  user: {
    name: string;
    email: string;
    avatar: string;
    type: string;
  };
};

export const UserCard = ({ user }: UserCardProps) => {
  const { name, email, avatar, type } = user;
  return (
    <Flex
      w="100%"
      h="fit-content"
      bg="black"
      px="8"
      py="4"
      justifyContent="space-between"
      alignItems="center"
    >
      <Flex alignItems="center" gap={3}>
        <Avatar name={name} src={avatar} />
        <Box>
          <Text fontSize="xl" fontWeight="bold" color={"gray.300"}>
            {name}
          </Text>
          <Text fontSize="sm" color="gray.500">
            {email}
          </Text>
        </Box>
      </Flex>
      <Text
        fontSize="sm"
        color={type === "premium" ? "gold" : "gray.400"}
        fontWeight="bold"
        textTransform="uppercase"
        border={type === "premium" ? "1px solid gold" : "1px solid gray"}
        borderRadius="md"
        p="1"
        minW={"5rem"}
        textAlign="center"
      >
        {type}
      </Text>
    </Flex>
  );
};
