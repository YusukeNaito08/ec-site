import Footer from "../common/Footer";
import Header from "../common/Header";
import React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";

type Props = {
  children: React.ReactNode;
};
const Layout: React.FC<Props> = ({ children }) => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Header />
        <main>{children}</main>
        <Footer />
      </ThemeProvider>
    </>
  );
};

const theme = createTheme({
  palette: {
    primary: {
      main: "#FFB118",
    },
  },
});

export default Layout;
