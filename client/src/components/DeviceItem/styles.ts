import { Box, Card, Grid, Typography, styled } from "@mui/material";
import { styled as styles } from "styled-components";

export const GridContainer = styled(Grid)({
  display: "flex",
  maxWidth: 1110,
  margin: "50px auto",
  justifyContent: "center",
});

export const BoxWrapper = styled(Box)({
  textAlign: "center",
  marginRight: "50px",
});

export const BoxContainer = styles.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
`;

export const CardDescription = styled(Card)({
  padding: "20px",
});

export const CardFooter = styles.div`
    margin-top: 20px;
`;

export const TitleDescription = styled(Typography)({
  marginBottom: "10px",
  fontWeight: "300",
});

export const DescriptionContainer = styled(Box)({
  display: "flex",
  flexDirection: "column",
});
