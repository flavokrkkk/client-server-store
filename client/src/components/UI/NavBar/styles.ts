import { Toolbar, styled } from "@mui/material";
import { styled as styles } from "styled-components";
export const NavBarWrapper = styled(Toolbar)({
  display: " flex",
  justifyContent: "space-between",
});

export const ButtonWrapper = styles.div`
    display: flex;
    gap: 25px;
`;
