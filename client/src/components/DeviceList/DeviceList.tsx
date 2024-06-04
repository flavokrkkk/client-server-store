import { FC } from "react";
import { IDevice } from "../../models/IDevice";
import { Button, Typography } from "@mui/material";
import { ButttonWrapper, CardHeader, CardImage, CardWrapper } from "./styles";
import { useNavigate } from "react-router-dom";
import { RoutesName } from "../../utils/routesName";

interface DeviceListProps {
  device: IDevice;
}

const DeviceList: FC<DeviceListProps> = ({ device }) => {
  const navigate = useNavigate();

  const handleNavigation = () => {
    navigate(RoutesName.DEVICE_ROUTE + `/${device.id}`);
  };

  return (
    <CardWrapper>
      <CardImage image={device.img} />
      <CardHeader>
        <Typography variant="h6">{`${device.price} $`}</Typography>
      </CardHeader>
      <ButttonWrapper>
        <Button variant="outlined" size="small" onClick={handleNavigation}>
          Buy
        </Button>
      </ButttonWrapper>
    </CardWrapper>
  );
};

export default DeviceList;
