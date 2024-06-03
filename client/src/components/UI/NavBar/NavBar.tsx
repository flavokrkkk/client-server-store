import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { ButtonWrapper, NavBarWrapper } from "./styles";
import { Container } from "@mui/material";
import { FC } from "react";

interface NavBarProps {
  title: string;
}

const NavBar: FC<NavBarProps> = ({ title }) => {
  return (
    <Box>
      <AppBar position="static">
        <Container>
          <NavBarWrapper>
            <Typography variant="h5">{title}</Typography>
            <ButtonWrapper>
              <Button color="inherit" variant="outlined">
                Admin
              </Button>
              <Button color="inherit" variant="outlined">
                Login
              </Button>
            </ButtonWrapper>
          </NavBarWrapper>
        </Container>
      </AppBar>
    </Box>
  );
};

export default NavBar;
