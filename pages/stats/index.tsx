import Head from "next/head";
import { Box } from "@chakra-ui/react";

export default function Stats() {
  return (
    <>
      <Head>
        <title>Estadisticas</title>
        <meta name="description" content="Estadisticas" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Box w={"100%"} h={"calc(100vh - 80px)"} bg={"black"}></Box>
      </main>
    </>
  );
}
