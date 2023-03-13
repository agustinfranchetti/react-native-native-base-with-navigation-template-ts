import {
  Box,
  Flex,
  Text,
  Image,
  Stack,
  Checkbox,
  Divider,
} from "@chakra-ui/react";
import { useState } from "react";

type ExpenseCardProps = {
  expense: any;
};
export const ExpenseCard = ({ expense }: ExpenseCardProps) => {
  const [payed, setPayed] = useState(false);
  const { name, amount, date, icon, numCuota, totalCuota } = expense;

  const togglePayed = () => {
    setPayed(!payed);
  };

  const textColor = payed ? "gray.500" : "gray.200";
  const textStyle = payed ? "s" : undefined;

  return (
    <Box w="100%" h="100%" px="4">
      <Text as={textStyle} fontSize="md" color={textColor}>
        {date}
      </Text>
      <Divider mb={2} borderColor={textColor} />
      <Flex justifyContent="space-between" alignItems="flex-start">
        <Flex alignItems="center" gap={3}>
          <Checkbox colorScheme="black" size="lg" onChange={togglePayed} />
          <Image
            src={icon}
            width={"2rem"}
            height={"2rem"}
            alt={name}
            css={{
              filter: payed ? "brightness(0.3)" : "brightness(1)",
            }}
          />
          <Text
            as={textStyle}
            fontSize="2xl"
            fontWeight="bold"
            color={textColor}
          >
            {name}
          </Text>
        </Flex>
        <Flex
          direction={"column"}
          justifyContent="flex-start"
          alignItems="flex-end"
        >
          <Text
            as={textStyle}
            fontSize="xl"
            fontWeight="bold"
            color={payed ? "gray.700" : "red.500"}
          >
            ${amount}
          </Text>
          {numCuota && totalCuota && (
            <Text as={textStyle} fontSize="sm" color={textColor}>
              Cuota {numCuota} / {totalCuota}
            </Text>
          )}
          {numCuota && totalCuota && (
            <Text as={textStyle} fontSize="sm" color={textColor}>
              Total: ${Number(amount * totalCuota).toFixed(2)}
            </Text>
          )}
        </Flex>
      </Flex>
    </Box>
  );
};
