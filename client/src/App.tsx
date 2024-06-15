import { useEffect } from "react";
import AppRouter from "./components/AppRouter/AppRouter";
import NavBar from "./components/UI/NavBar/NavBar";
import { useActions } from "./hooks/useActions";
import { useAppSelector } from "./hooks/useAppSelector";
import { userSelectors } from "./store/selectors";
import { ProgressBarContainer } from "./styles/global";
import { CircularProgress } from "@mui/material";
import ModalError from "./components/Modal/ModalError/ModalError";

function App() {
  const { authenticateUserAsync } = useActions();
  const { error, isLoading } = useAppSelector(userSelectors);

  useEffect(() => {
    if (localStorage.getItem("token")) {
      authenticateUserAsync();
    }
  }, []);

  if (isLoading) {
    return (
      <ProgressBarContainer>
        <CircularProgress disableShrink />
      </ProgressBarContainer>
    );
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
