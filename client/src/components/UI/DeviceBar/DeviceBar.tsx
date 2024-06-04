import { useAppSelector } from "../../../hooks/useAppSelector";
import DeviceList from "../../DeviceList/DeviceList";
import { deviceSelectors } from "../../../store/selectors";
import { GridWrapper } from "./styles";

const DeviceBar = () => {
  const { devices } = useAppSelector(deviceSelectors);
  return (
    <GridWrapper container>
      {devices.map((device) => (
        <DeviceList key={device.id} device={device} />
      ))}
    </GridWrapper>
  );
};

export default DeviceBar;
