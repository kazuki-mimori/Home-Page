import { Container, Header, Burger } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import React from "react";

const HeaderArea = () => {
  const [opened, { toggle }] = useDisclosure(false);

  const menu = [
    {
      name: "ホーム",
      href: "#home",
    },
    {
      name: "事業内容",
      href: "#contact",
    },
    {
      name: "制作実例",
      href: "#home",
    },
  ];

  const manus = menu.map((item) => (
    <>
      <a
        href={item.href}
        className="transition-all duration-300 hover:text-yellow-500"
      >
        {item.name}
      </a>
    </>
  ));

  return (
    <Header id="home" height={1} mb={120} className="">
      <Container className="max-w-full ">
        <div className="bg-white py-10">
          <div className="mx-auto flex w-full items-center justify-between px-8  md:px-14 lg:container">
            <a href="#" className="text-3xl font-bold">
              MIMORI IT
            </a>
            <div className="hidden items-center space-x-12 md:flex">
              {manus}
              <a href="#contact">
                <button className="rounded-lg bg-yellow-500 px-6 py-2 font-bold transition-all duration-300 hover:bg-yellow-300  ">
                  お問合せ
                </button>
              </a>
            </div>
            <Burger
              opened={opened}
              onClick={toggle}
              className="md:hidden "
              size="md"
            />
          </div>
        </div>
      </Container>
    </Header>
  );
};

export default HeaderArea;
