import { Box, Button, TextField } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { ChangeEvent, FC } from "react";
import { IInfo } from "../../models/IInfo";
import { BoxWrapper } from "./styles";

interface ModalDeviceListProps {
  info: IInfo;
  handleDeleteInfo: (id: number) => void;
  handleChangeInfo: (key: string, value: string, id: number) => void;
}

const ModalDeviceList: FC<ModalDeviceListProps> = ({
  info,
  handleDeleteInfo,
  handleChangeInfo,
}) => {
  const handleDeleteInfoTab = () => {
    handleDeleteInfo(info.id);
  };

  const handleChangeTitle = (event: ChangeEvent<HTMLInputElement>) => {
    handleChangeInfo("title", event.target.value, info.id);
  };

  const handleChangeDescription = (event: ChangeEvent<HTMLInputElement>) => {
    handleChangeInfo("description", event.target.value, info.id);
  };

  return (
    <BoxWrapper>
      <Box>
        <TextField
          size="small"
          placeholder="Название"
          value={info.title}
          onChange={handleChangeTitle}
        />
      </Box>
      <Box>
        <TextField
          size="small"
          placeholder="Описание"
          value={info.description}
          onChange={handleChangeDescription}
        />
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
