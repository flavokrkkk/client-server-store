import { Box, Button, Container, Typography } from "@mui/material";
import { IDevice } from "../../models/IDevice";
import { FC } from "react";
import {
  BoxContainer,
  BoxWrapper,
  CardDescription,
  CardFooter,
  DescriptionContainer,
  GridContainer,
  TitleDescription,
} from "./styles";
import { description } from "../../utils/mockData";
import DescriptionList from "../DescriptionList/DescriptionList";
import { baseUrl } from "../../utils/baseUrl";

interface DeviceItemProps {
  device: IDevice;
}

const DeviceItem: FC<DeviceItemProps> = ({ device }) => {
  return (
    <>
      <GridContainer>
        <BoxWrapper>
          <Typography variant="h4" fontWeight={300}>
            {device.name}
          </Typography>
          <img
            src={baseUrl.REACT_APP_API_URL + device.img}
            width={340}
            height={330}
          />
        </BoxWrapper>
        <Box>
          <BoxContainer>
            <Typography variant="h6" fontWeight={"300"}>
              Накопитель:{" "}
            </Typography>
            <div>
              <Button variant="outlined">128 ГБ</Button>
              <Button color="primary" variant="contained">
                256 ГБ
              </Button>
              <Button variant="outlined">512 ГБ</Button>
              <Button color="primary" variant="contained">
                1 ТБ
              </Button>
              <CardFooter>
                <Typography variant="h5">{device.price}$</Typography>
              </CardFooter>
            </div>
            <div>
              <CardDescription>{description}</CardDescription>
            </div>

            <Button variant="outlined">Добавить в корзину</Button>
          </BoxContainer>
        </Box>
      </GridContainer>
      <Container>
        <TitleDescription variant="h4">Характеристики</TitleDescription>
        <DescriptionContainer>
          {device.info.map((description, index) => (
            <DescriptionList description={description} index={index} />
          ))}
        </DescriptionContainer>
      </Container>
    </>
  );
};

export default DeviceItem;
