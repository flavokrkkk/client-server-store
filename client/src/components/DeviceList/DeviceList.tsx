import { FC } from "react";
import { IDevice } from "../../models/IDevice";
import { Button, Typography } from "@mui/material";
import {
  ButttonWrapper,
  CardHeader,
  CardImage,
  CardImageWrapper,
  CardWrapper,
} from "./styles";
import { useNavigate } from "react-router-dom";
import { RoutesName } from "../../utils/routesName";
import { baseUrl } from "../../utils/baseUrl";

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
      <CardImageWrapper>
        <CardImage image={baseUrl.REACT_APP_API_URL + device.img} />
      </CardImageWrapper>
      <CardHeader>
        <Typography variant="h6" fontWeight={"300"} fontSize={"18px"}>
          {`${device.name}`}
        </Typography>
        <Typography
          variant="h6"
          fontWeight={"300"}
          fontSize={"15px"}
        >{`${device.price} $`}</Typography>
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
