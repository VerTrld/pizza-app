"use client";
import React from "react";
import { Divider, Flex, Group, Image, Text, Title } from "@mantine/core";
import { IconLockFilled, IconUserCircle } from "@tabler/icons-react";
import { useRouter } from "next/navigation";

export default function Home() {
  const { push } = useRouter();
  return (
    <>
      <Flex direction={"column"} mih={"100vh"} w={"100%"} bg="#d9d9d9">
        <Flex
          direction={"row"}
          w={"100%"}
          h={"13vh"}
          bg={"white"}
          align={"center"}
          justify={"space-between"}
          p={20}
        >
          <Title>Pizza Store</Title>

          <Flex gap={10}>
            <Divider orientation="vertical" />
            <Group gap={5}>
              <IconLockFilled />
              <Text>Login</Text>
            </Group>
            <Divider orientation="vertical" />
            <Group gap={5}>
              <IconUserCircle />
              <Text>Register</Text>
            </Group>
          </Flex>
        </Flex>

        <Flex
          direction={"row"}
          w={"100%"}
          flex={1}
          align={"center"}
          justify={"center"}
          gap={50}
          wrap={"wrap"}
          p={20}
        >
          <Image
            w={500}
            h={500}
            src={
              "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/pizza-poster-ads-design-template-ff4749ce5b0f76d6348e6547ee03c654_screen.jpg?ts=1644392455"
            }
            onClick={() => {
              push("/order/pizza");
            }}
          />
          <Image
            w={500}
            h={500}
            src={
              "https://i.pinimg.com/564x/54/e4/bf/54e4bfd25557141f45350944bc629e40.jpg"
            }
            onClick={() => {
              push("/order/pasta");
            }}
          />
        </Flex>
      </Flex>
    </>
  );
}
