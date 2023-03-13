import { ExpenseCard } from "./ExpenseCard";
import { Text, Stack, Divider } from "@chakra-ui/react";

type ExpenseCardListProps = {
  expenseList: any;
  listTitle: string;
};
export const ExpenseCardList = ({
  expenseList,
  listTitle,
}: ExpenseCardListProps) => {
  return (
    <Stack spacing={4} w="100%" p="4">
      <Text fontSize="2xl" fontWeight="bold" color={"pink.500"} pl="4">
        {listTitle}
      </Text>
      {expenseList.map((expense: any) => (
        <ExpenseCard key={expense.id} expense={expense} />
      ))}
    </Stack>
  );
};
