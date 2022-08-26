import type { NextPage } from "next";
import HeaderArea from "src/pages/components/Header";
import { Home } from "src/pages/components/Home";

const Index: NextPage = () => {
  return (
    <>
      <HeaderArea />
      <Home />
    </>
  );
};

export default Index;
