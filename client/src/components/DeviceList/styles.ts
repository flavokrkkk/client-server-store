import { Card, CardMedia, styled } from "@mui/material";
import { styled as styles } from "styled-components";

export const CardWrapper = styled(Card)({
  width: "180px",
  border: "1px solid #fff",
});

export const CardImage = styled(CardMedia)({
  width: "150px",
  height: "150px",
});

export const CardImageWrapper = styles.div({
  display: "flex",
  justifyContent: "center",
});

export const CardHeader = styles.div`
    text-align: center;
`;

export const ButttonWrapper = styles.div`
        display: flex;
        justify-content: center;
        margin: 10px 0px 10px 0px
`;
