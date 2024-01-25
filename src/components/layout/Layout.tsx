import Footer from "../common/Footer";
import Header from "../common/Header";
import React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import styled from "styled-components";

type Props = {
  children: React.ReactNode;
};
const Layout: React.FC<Props> = ({ children }) => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Header />
        <Main>{children}</Main>
        <Footer />
      </ThemeProvider>
    </>
  );
};

const Main = styled.main`
  width: 100%;
`;

const theme = createTheme({
  palette: {
    primary: {
      main: "#FFB118",
    },
  },
});

export default Layout;
