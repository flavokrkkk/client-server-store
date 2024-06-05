import { Route, Routes } from "react-router-dom";
import { privateRoute, publicRoute } from "../../routes";
import ShopPage from "../../pages/ShopPage/ShopPage";
import { useAppSelector } from "../../hooks/useAppSelector";
import { userSelectors } from "../../store/selectors";
import AuthPage from "../../pages/AuthPage/AuthPage";

const AppRouter = () => {
  const { isAuth } = useAppSelector(userSelectors);

  return isAuth ? (
    <Routes>
      {privateRoute.map(({ path, component }) => (
        <Route key={path} path={path} Component={component} />
      ))}
      <Route path="*" Component={ShopPage} />
    </Routes>
  ) : (
    <Routes>
      {publicRoute.map(({ path, component }) => (
        <Route key={path} path={path} Component={component} />
      ))}
      <Route path="*" Component={AuthPage} />
    </Routes>
  );
};

export default AppRouter;
