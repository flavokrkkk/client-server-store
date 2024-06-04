import { Box, Grid, Typography, styled } from "@mui/material";
import { styled as styles } from "styled-components";

export const GridWrapper = styled(Grid)({
  border: "1px solid #000000",
  padding: "40px",
  borderRadius: 20,
  alignItems: "center",
  maxWidth: 500,
  flexDirection: "column",
});

export const TypographyTitle = styled(Typography)({
  fontWeight: 300,
});

export const TypographySubTitle = styled(Typography)({
  textAlign: "center",
  fontSize: 15,
  margin: "10px 0px 30px 0px",
  fontWeight: 300,
});

export const TypographyFooterTitle = styled(Typography)({
  textAlign: "center",
});

export const GridForm = styled(Grid)({
  justifyContent: "center",
  gap: "15px",
});

export const BoxForm = styled(Box)({
  display: "flex",
  flexDirection: "column",
  gap: "20px",
  margin: "10px 0px 20px 0px ",
});

export const Span = styles.span`
  cursor: pointer;
  color: black;
`;

export const ButtonWrapper = styles.div`
    display: flex;
    justify-content: center;
`;
