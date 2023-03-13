import Head from "next/head";
import { Box } from "@chakra-ui/react";
import { UserCard } from "@/components/settings/UserCard";

const user = {
  name: "Juan",
  email: "juan@gmail.com",
  avatar: "https://bit.ly/sage-adebayo",
  type: "premium",
};

export default function Settings() {
  return (
    <>
      <Head>
        <title>Ajustes</title>
        <meta name="description" content="Gastos" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Box w={"100%"} h={"calc(100vh - 80px)"} bg={"black"}>
          <UserCard user={user} />
        </Box>
      </main>
    </>
  );
}
