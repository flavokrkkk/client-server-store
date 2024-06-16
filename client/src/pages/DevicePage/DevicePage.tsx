import { CircularProgress, Container } from "@mui/material";
import DeviceItem from "../../components/DeviceItem/DeviceItem";
import { useEffect } from "react";
import { useActions } from "../../hooks/useActions";
import { useParams } from "react-router-dom";
import { useAppSelector } from "../../hooks/useAppSelector";
import { deviceSelectors } from "../../store/selectors";
import { ProgressBarContainer } from "../../styles/global";
import ModalError from "../../components/Modal/ModalError/ModalError";

const DevicePage = () => {
  const { setAsyncDevice } = useActions();

  const { id } = useParams();

  const { device, error, isLoading } = useAppSelector(deviceSelectors);

  useEffect(() => {
    setAsyncDevice(id!);
  }, []);

  if (isLoading) {
    return (
      <ProgressBarContainer>
        <CircularProgress disableShrink />
      </ProgressBarContainer>
    );
  }

  return (
    <Container>
      <DeviceItem device={device} />
      {error && <ModalError error={error} />}
    </Container>
  );
};

export default DevicePage;
