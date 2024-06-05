import { Container } from "@mui/material";
import { GridWrapper } from "./styles";
import LoginForm from "../../components/LoginForm/LoginForm";
import { useLocation } from "react-router-dom";
import { RoutesName } from "../../utils/routesName";
import { useActions } from "../../hooks/useActions";

const AuthPage = () => {
  const { authorizeUserAsync, loginUserAsync } = useActions();

  const { pathname } = useLocation();

  const isPathName = pathname === RoutesName.LOGIN_ROUTE;

  const handleAuthorizeUserAsync = (email: string, password: string) => {
    isPathName
      ? loginUserAsync({ email, password })
      : authorizeUserAsync({ email, password });
  };

  return (
    <Container>
      <GridWrapper container>
        <LoginForm
          isPathName={isPathName}
          handleAuthorizeUserAsync={handleAuthorizeUserAsync}
        />
      </GridWrapper>
    </Container>
  );
};

export default AuthPage;
