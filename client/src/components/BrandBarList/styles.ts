import { Card, styled } from "@mui/material";

interface BrandCardProps {
  isSelect: boolean;
}

export const BrandCard = styled(Card)<BrandCardProps>`
  padding: 15px;
  width: 100px;
  text-align: center;
  cursor: pointer;
  background-color: ${({ isSelect }) => isSelect && "rgba(25, 118, 210, 0.08)"};
`;
