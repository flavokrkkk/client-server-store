import { Box, Container, Grid } from "@mui/material";
import TypeBar from "../../components/UI/TypeBar/TypeBar";
import BrandBar from "../../components/UI/BrandBar/BrandBar";
import DeviceBar from "../../components/UI/DeviceBar/DeviceBar";
import { useActions } from "../../hooks/useActions";
import { useEffect } from "react";
import Pages from "../../components/UI/Pages/Pages";

const ShopPage = () => {
  const { setAsyncTypes, setAsyncBrand, setAsyncDevices } = useActions();

  useEffect(() => {
    setAsyncTypes();
    setAsyncBrand();
    setAsyncDevices();
  }, []);
  return (
    <Container>
      <Grid container direction={"row"} gap={3}>
        <Box>
          <TypeBar />
        </Box>
        <Box>
          <BrandBar />
          <DeviceBar />
          <Pages />
        </Box>
      </Grid>
    </Container>
  );
};

export default ShopPage;
