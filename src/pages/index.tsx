import type { NextPage } from "next";
import { Content } from "src/pages/components/Contents";
import HeaderArea from "src/pages/components/Header";
import { Home } from "src/pages/components/Home";

const Index: NextPage = () => {
  return (
    <>
      <HeaderArea />
      <Home />
      <Content />
    </>
  );
};

export default Index;
