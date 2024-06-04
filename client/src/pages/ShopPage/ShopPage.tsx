import { Box, Container, Grid } from "@mui/material";
import TypeBar from "../../components/UI/TypeBar/TypeBar";
import BrandBar from "../../components/UI/BrandBar/BrandBar";
import DeviceBar from "../../components/UI/DeviceBar/DeviceBar";

const ShopPage = () => {
  return (
    <Container>
      <Grid container direction={"row"} gap={3}>
        <Box>
          <TypeBar />
        </Box>
        <Box>
          <BrandBar />
          <DeviceBar />
        </Box>
      </Grid>
    </Container>
  );
};

export default ShopPage;
