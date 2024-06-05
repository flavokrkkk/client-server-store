import { Container, styled } from "@mui/material";
import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        font-family: "Roboto", sans-serif;
    }

    a{
        text-decoration:  none;
        color: #fff
    }
`;

export const ProgressBarContainer = styled(Container)({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "calc(90vh - 64px)",
});
