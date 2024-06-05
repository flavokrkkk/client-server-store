import { IRoute } from "../models/IRoute";
import AdminPage from "../pages/AdminPage/AdminPage";
import AuthPage from "../pages/AuthPage/AuthPage";
import BasketPage from "../pages/BasketPage/BasketPage";
import DevicePage from "../pages/DevicePage/DevicePage";
import ShopPage from "../pages/ShopPage/ShopPage";
import { RoutesName } from "../utils/routesName";

export const publicRoute = <IRoute[]>[
  {
    path: RoutesName.LOGIN_ROUTE,
    component: AuthPage,
  },
  {
    path: RoutesName.REGISTRATION_ROUTE,
    component: AuthPage,
  },
];

export const privateRoute = <IRoute[]>[
  {
    path: RoutesName.ADMIN_ROUTE,
    component: AdminPage,
  },
  {
    path: RoutesName.BASKET_ROUTE,
    component: BasketPage,
  },
  {
    path: RoutesName.SHOP_ROUTE,
    component: ShopPage,
  },
  {
    path: RoutesName.DEVICE_ROUTE + "/:id",
    component: DevicePage,
  },
];
