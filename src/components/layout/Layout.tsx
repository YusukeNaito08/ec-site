import Footer from "../common/Footer";
import Header from "../common/Header";
import React from "react";

type Props = {
  children: React.ReactNode;
};
const Layout: React.FC<Props> = ({ children }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
