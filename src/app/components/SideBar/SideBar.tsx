import {
  Box,
  Button,
  Divider,
  Flex,
  Input,
  Paper,
  ScrollArea,
  Stack,
  Text,
  Title,
} from "@mantine/core";
import {
  IconSearch,
  IconShoppingCart,
  IconShoppingCartFilled,
} from "@tabler/icons-react";
import { useRouter } from "next/navigation";
import React, { ReactNode } from "react";

const SideBar = ({ title, total }: { title: ReactNode; total: number }) => {
  const { push } = useRouter();
  return (
    <Paper shadow="lg" withBorder visibleFrom="sm">
      <Divider
        my="lg"
        variant="dashed"
        labelPosition="center"
        label={
          <>
            <Text fz={"1.5rem"}>
              <IconShoppingCartFilled size={20} />
              Your cart
            </Text>
          </>
        }
      />
      <Flex direction={"column"} w={300} h={"89%"} justify={"space-between"}>
        <Flex
          direction={"column"}
          align={"center"}
          w={"100%"}
          flex={1}
          justify={"space-between"}
          p={20}
        >
          <ScrollArea w={"100%"} h={"75vh"}>
            <Text w={"100%"}>{title}</Text>
          </ScrollArea>

          <Flex direction={"row"} w={"100%"}>
            <Button
              w={"100%"}
              onClick={() => {
                push("/transaction");
              }}
            >
              <Flex direction={"row"} justify={"space-between"}>
                <Text>Check Out</Text>
                <Text>{total}</Text>
              </Flex>
            </Button>
          </Flex>
        </Flex>
      </Flex>
    </Paper>
  );
};

export default SideBar;
