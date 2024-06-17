import { CircularProgress } from "@mui/material";
import { ProgressBarContainer } from "../../../styles/global";

const Loader = () => {
  return (
    <ProgressBarContainer>
      <CircularProgress disableShrink />
    </ProgressBarContainer>
  );
};

export default Loader;
