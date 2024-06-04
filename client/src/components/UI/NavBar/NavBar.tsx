import AppBar from "@mui/material/AppBar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { ButtonWrapper, NavBarContainer, NavBarWrapper } from "./styles";
import { Container } from "@mui/material";
import { FC } from "react";
import { useAppSelector } from "../../../hooks/useAppSelector";
import { userSelectors } from "../../../store/selectors";
import { NavLink, useNavigate } from "react-router-dom";
import { RoutesName } from "../../../utils/routesName";

interface NavBarProps {
  title: string;
}

const NavBar: FC<NavBarProps> = ({ title }) => {
  const { isAuth } = useAppSelector(userSelectors);

  const navigate = useNavigate();

  const handleNavigationToAdminPage = () => {
    navigate(RoutesName.ADMIN_ROUTE);
  };

  const handleNavigationToAuthPage = () => {
    navigate(RoutesName.LOGIN_ROUTE);
  };

  return (
    <NavBarContainer>
      <AppBar position="static">
        <Container>
          <NavBarWrapper>
            <Typography variant="h5">
              <NavLink to={RoutesName.SHOP_ROUTE}>{title}</NavLink>
            </Typography>
            <ButtonWrapper>
              {isAuth ? (
                <>
                  <Button
                    color="inherit"
                    variant="outlined"
                    onClick={handleNavigationToAdminPage}
                  >
                    Admin
                  </Button>
                  <Button
                    color="inherit"
                    variant="outlined"
                    onClick={handleNavigationToAuthPage}
                  >
                    Log out
                  </Button>
                </>
              ) : (
                <>
                  <Button color="inherit" variant="outlined">
                    Authorization
                  </Button>
                </>
              )}
            </ButtonWrapper>
          </NavBarWrapper>
        </Container>
      </AppBar>
    </NavBarContainer>
  );
};

export default NavBar;
