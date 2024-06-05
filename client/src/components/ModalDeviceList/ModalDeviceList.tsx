import { Box, Button, TextField } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { FC } from "react";
import { IInfo } from "../../models/IInfo";
import { BoxWrapper } from "./styles";

interface ModalDeviceListProps {
  info: IInfo;
  handleDeleteInfo: (id: number) => void;
}

const ModalDeviceList: FC<ModalDeviceListProps> = ({
  info,
  handleDeleteInfo,
}) => {
  const handleDeleteInfoTab = () => {
    handleDeleteInfo(info.id);
  };

  return (
    <BoxWrapper>
      <Box>
        <TextField size="small" placeholder="Название" />
      </Box>
      <Box>
        <TextField size="small" placeholder="Описание" />
      </Box>
      <Box>
        <Button
          size="medium"
          variant="outlined"
          startIcon={<DeleteIcon />}
          onClick={handleDeleteInfoTab}
        >
          Delete
        </Button>
      </Box>
    </BoxWrapper>
  );
};

export default ModalDeviceList;
