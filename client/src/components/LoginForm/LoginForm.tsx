import { Button, TextField } from "@mui/material";
import {
  BoxForm,
  ButtonWrapper,
  GridForm,
  GridWrapper,
  Span,
  TypographySubTitle,
  TypographyTitle,
} from "./styles.ts";
import { NavLink } from "react-router-dom";
import { RoutesName } from "../../utils/routesName.ts";
import { ChangeEventHandler, FC, useState } from "react";

interface LoginFormProps {
  isPathName: boolean;
  handleAuthorizeUserAsync: (email: string, password: string) => void;
}

const LoginForm: FC<LoginFormProps> = ({
  isPathName,
  handleAuthorizeUserAsync,
}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleChangeEmail: ChangeEventHandler<HTMLInputElement> = (event) => {
    setEmail(event.target.value);
  };

  const handleChangePassword: ChangeEventHandler<HTMLInputElement> = (
    event
  ) => {
    setPassword(event.target.value);
  };

  const handleAuthorization = () => {
    handleAuthorizeUserAsync(email, password);
  };

  return (
    <GridWrapper container>
      <TypographyTitle variant="h3">Добрый день!</TypographyTitle>
      <TypographySubTitle variant="h6">
        Для продолжения необходимо{" "}
        {isPathName ? "авторизоваться" : "зарегистрироваться"}
      </TypographySubTitle>
      <form>
        <GridForm container>
          <TextField
            size="small"
            fullWidth
            placeholder="E-mail"
            value={email}
            onChange={handleChangeEmail}
          />
          <TextField
            size="small"
            fullWidth
            placeholder="Password"
            value={password}
            onChange={handleChangePassword}
          />
          <BoxForm>
            <span>
              {isPathName ? (
                <>
                  <Span>Нет аккаунта? </Span>
                  <NavLink to={RoutesName.REGISTRATION_ROUTE}>
                    <Span>Зарегистрируйтесь!</Span>
                  </NavLink>
                </>
              ) : (
                <>
                  <Span>Есть аккаунт? </Span>
                  <NavLink to={RoutesName.LOGIN_ROUTE}>
                    <Span>Войдите</Span>
                  </NavLink>
                </>
              )}
            </span>
          </BoxForm>
        </GridForm>
        <ButtonWrapper>
          <Button variant="outlined" onClick={handleAuthorization}>
            {isPathName ? "Войти" : "Регистрация"}
          </Button>
        </ButtonWrapper>
      </form>
    </GridWrapper>
  );
};

export default LoginForm;
