import { Flex, Group, Text, Title, UnstyledButton } from "@mantine/core";
import { IconUserCircle } from "@tabler/icons-react";
import { useParams, useRouter } from "next/navigation";
import React, { useState, useEffect } from "react";

const NavBar = () => {
  const { push } = useRouter();
  const params = useParams();
  const [active, setActive] = useState(params.orderName || "");

  useEffect(() => {
    setActive(params.orderName || "");
  }, [params.orderName]);

  const menuItems = [
    { name: "Pizza", route: "pizza" },
    { name: "Pasta", route: "pasta" },
    { name: "Chicken & Sides", route: "chickensides" },
    { name: "Drinks", route: "drinks" },
  ];

  return (
    <Flex direction="column" bg="white" p={20}>
      <Flex justify="space-between" align="center" pb={15}>
        <Title onClick={() => push("/")} style={{ cursor: "pointer" }}>
          Pizza Store
        </Title>
        <Group>
          <IconUserCircle />
          <Text>Login/Register</Text>
        </Group>
      </Flex>
      <Group justify="center" gap={20}>
        {menuItems.map((item) => (
          <UnstyledButton
            key={item.route}
            p={5}
            c={active === item.route ? "white" : "black"}
            bg={active === item.route ? "red" : "transparent"}
            fw={500}
            style={{ borderRadius: "5px" }}
            onClick={() => push(`/order/${item.route}`)}
          >
            <Text ff="Verdana" fz={"16px"} lh={"16px"} p={10} fw={600}>
              {item.name.toUpperCase()}
            </Text>
          </UnstyledButton>
        ))}
      </Group>
    </Flex>
  );
};

export default NavBar;
