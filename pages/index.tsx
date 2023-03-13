import Head from "next/head";
import { ExpenseCardList } from "@/components/home/ExpenseCardList";
import { Box, Divider, Stack, Text } from "@chakra-ui/react";

const expenseListSubscriptions = [
  {
    id: 1,
    name: "Netflix",
    amount: 2453.32,
    icon: "https://cdn-icons-png.flaticon.com/512/732/732228.png",
    date: "2021-08-01",
  },
  {
    id: 2,
    name: "Spotify",
    amount: 1060.12,
    icon: "https://cdn-icons-png.flaticon.com/512/3669/3669986.png",
    date: "2021-08-04",
  },
  {
    id: 3,
    name: "Crunchyroll",
    amount: 354.45,
    icon: "https://cdn-icons-png.flaticon.com/512/889/889086.png",
    date: "2021-08-07",
  },
];

const expenseListCuotas = [
  {
    id: 1,
    name: "Sillon",
    amount: 9999.99,
    icon: "https://cdn-icons-png.flaticon.com/512/743/743007.png",
    numCuota: 3,
    totalCuota: 12,
    date: "2021-08-09",
  },
  {
    id: 2,
    name: "Celular",
    amount: 32999.99,
    icon: "https://cdn-icons-png.flaticon.com/512/743/743007.png",
    numCuota: 5,
    totalCuota: 6,
    date: "2021-08-09",
  },
  {
    id: 3,
    name: "Notebook",
    amount: 99999.99,
    icon: "https://cdn-icons-png.flaticon.com/512/743/743007.png",
    numCuota: 1,
    totalCuota: 3,
    date: "2021-08-12",
  },
];

// const totalSubscriptionsYear = expenseListSubscriptions.reduce(
//   (acc, expense) => acc + expense.amount * 12,
//   0
// );

// const totalCuotasYear = expenseListCuotas.reduce(
//   (acc, expense) => acc + expense.amount * expense.totalCuota,
//   0
// );

export default function Home() {
  return (
    <>
      <Head>
        <title>Inicio</title>
        <meta name="description" content="Inicio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Box
          w={"100%"}
          h={"calc(100vh - 80px)"}
          bg={"black"}
          css={{
            overflowY: "scroll",
            scrollBehavior: "smooth",
            scrollbarColor: "gray.300 gray.800",
          }}
        >
          <ExpenseCardList
            listTitle={"Suscripciones"}
            expenseList={expenseListSubscriptions}
          />
          <ExpenseCardList
            listTitle={"Cuotas"}
            expenseList={expenseListCuotas}
          />
          {/* <Stack position="absolute" bottom="80px" left="0" mr="4" mb="4" p={4}>
            <Text fontSize="xl" fontWeight="bold" color={"gray.500"}>
              Total suscripciones: ${totalSubscriptionsYear + totalCuotasYear}
            </Text>
            <Text fontSize="xl" fontWeight="bold" color={"gray.500"}>
              Total cuotas: ${totalSubscriptionsYear + totalCuotasYear}
            </Text>
            <Text fontSize="xl" fontWeight="bold" color={"gray.300"}>
              Total anual: ${totalSubscriptionsYear + totalCuotasYear}
            </Text>
          </Stack> */}
        </Box>
      </main>
    </>
  );
}
