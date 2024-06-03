import { Route, Routes } from "react-router-dom";
import { privateRoute, publicRoute } from "../../routes";
import ShopPage from "../../pages/ShopPage/ShopPage";
import { useAppSelector } from "../../hooks/useAppSelector";
import { userSelectors } from "../../store/selectors";

const AppRouter = () => {
  const { isAuth } = useAppSelector(userSelectors);

  return (
    <Routes>
      {isAuth &&
        privateRoute.map(({ path, component }) => (
          <Route key={path} path={path} Component={component} />
        ))}
      {publicRoute.map(({ path, component }) => (
        <Route key={path} path={path} Component={component} />
      ))}
      <Route path="*" Component={ShopPage} />
    </Routes>
  );
};

export default AppRouter;
