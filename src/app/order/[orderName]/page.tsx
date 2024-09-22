"use client";

import {
  Button,
  Card,
  Divider,
  Flex,
  Group,
  Image,
  ScrollArea,
  Text,
} from "@mantine/core";
import { useEffect, useState } from "react";
import { IconMinus, IconPlus } from "@tabler/icons-react";
import NavBar from "@/app/components/NavBar/NavBar";
import SideBar from "@/app/components/SideBar/SideBar";
import { chickensides, drinks, pasta, pizza } from "@/app/json/Item/data";
import useStore from "@/app/store/cart";

export default function Order({ params }: { params: { orderName: string } }) {
  // const [cart, setCart] = useState<IPizza[]>([]);

  const [quantity, setQuantity] = useState(1);

  const { addCart, setAddToCart } = useStore();

  useEffect(() => {
    console.log(addCart);
  }, [addCart]);

  const itemCart = addCart.map((v, index) => (
    <Flex direction="column" gap={20} p={5}>
      <Text>{v.title}</Text>
      <Flex direction={"row"} justify={"space-between"}>
        <Group gap={5}>
          <IconMinus onClick={() => setQuantity((q) => q - 1)} />
          <Text w={40} ta="center">
            {quantity}
          </Text>
          <IconPlus onClick={() => setQuantity((q) => q + 1)} />
        </Group>
        <Text>{`₱ ${v.price * quantity}`}</Text>
      </Flex>
      <Divider />
    </Flex>
  ));

  const menuItems =
    {
      pizza,
      pasta,
      chickensides,
      drinks,
    }[params.orderName] || [];

  const total = addCart.reduce((acc, item) => acc + item.price, 0);

  return (
    <Flex
      direction="row"
      mih="100vh"
      w="100%"
      bg="blue"
      justify="space-between"
    >
      <Flex direction="column" flex={1} bg="#d9d9d9">
        <NavBar />
        <ScrollArea w="100%" h="80vh">
          <Flex direction="row" wrap="wrap" justify="space-between">
            {menuItems.map((item: any, index: any) => (
              // Temporary . Make it Component
              <Flex
                direction={"column"}
                align={"center"}
                flex={1}
                gap={10}
                p={20}
              >
                <Card
                  shadow="sm"
                  padding="lg"
                  radius="md"
                  withBorder
                  w={250}
                  h={350}
                >
                  <Card.Section>
                    <Image src={item.image} height={160} alt="Norway" />
                  </Card.Section>

                  <Group justify="space-between" mt="md" mb="xs">
                    <Text fw={500}>{item.title}</Text>
                  </Group>

                  <Text size="sm" c="dimmed">
                    {item.details}
                  </Text>

                  <Button
                    color="blue"
                    fullWidth
                    mt="md"
                    radius="md"
                    onClick={() => setAddToCart(item)}
                  >
                    {item.price}
                  </Button>
                </Card>
              </Flex>
            ))}
          </Flex>
        </ScrollArea>
      </Flex>
      <SideBar total={total} title={itemCart} />
    </Flex>
  );
}
