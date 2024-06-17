import { useEffect } from "react";
import AppRouter from "./components/AppRouter/AppRouter";
import NavBar from "./components/UI/NavBar/NavBar";
import { useActions } from "./hooks/useActions";
import { useAppSelector } from "./hooks/useAppSelector";
import { userSelectors } from "./store/selectors";
import ModalError from "./components/Modal/ModalError/ModalError";
import Loader from "./components/UI/Loader/Loader";

function App() {
  const { authenticateUserAsync } = useActions();
  const { error, isLoading } = useAppSelector(userSelectors);

  useEffect(() => {
    if (localStorage.getItem("token")) {
      authenticateUserAsync();
    }
  }, []);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <>
      <NavBar title="VK Shop" />
      <AppRouter />
      {error && <ModalError error={error} />}
    </>
  );
}

export default App;
