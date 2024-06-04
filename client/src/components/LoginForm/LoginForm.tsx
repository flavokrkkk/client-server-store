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
import { FC } from "react";

interface LoginFormProps {
  isPathName: boolean;
}

const LoginForm: FC<LoginFormProps> = ({ isPathName }) => {
  return (
    <GridWrapper container>
      <TypographyTitle variant="h3">Добрый день!</TypographyTitle>
      <TypographySubTitle variant="h6">
        Для продолжения необходимо{" "}
        {isPathName ? "авторизоваться" : "зарегистрироваться"}
      </TypographySubTitle>
      <form>
        <GridForm container>
          <TextField size="small" fullWidth placeholder="E-mail" />
          <TextField size="small" fullWidth placeholder="Password" />
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
          <Button variant="outlined">
            {isPathName ? "Войти" : "Регистрация"}
          </Button>
        </ButtonWrapper>
      </form>
    </GridWrapper>
  );
};

export default LoginForm;
