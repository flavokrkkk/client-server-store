import { Container } from "@mui/material";
import { GridWrapper } from "./styles";
import LoginForm from "../../components/LoginForm/LoginForm";
import { useLocation } from "react-router-dom";
import { RoutesName } from "../../utils/routesName";

const AuthPage = () => {
  const { pathname } = useLocation();

  const isPathName = pathname === RoutesName.LOGIN_ROUTE;

  return (
    <Container>
      <GridWrapper container>
        <LoginForm isPathName={isPathName} />
      </GridWrapper>
    </Container>
  );
};

export default AuthPage;
