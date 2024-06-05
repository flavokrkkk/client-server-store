import { Box, styled } from "@mui/material";

interface CardListDescriptionProps {
  index: number;
}

export const CardListDescription = styled(Box)<CardListDescriptionProps>`
  padding: 15px;
  background-color: ${({ index }) => (index % 2 === 0 ? "lightgray" : "#fff")};
`;
