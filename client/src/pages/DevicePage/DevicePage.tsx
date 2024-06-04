import { Container } from "@mui/material";
import DeviceItem from "../../components/DeviceItem/DeviceItem";
import { descriptions, device } from "../../utils/mockData";

const DevicePage = () => {
  return (
    <Container>
      <DeviceItem device={device} descriptions={descriptions} />
    </Container>
  );
};

export default DevicePage;
