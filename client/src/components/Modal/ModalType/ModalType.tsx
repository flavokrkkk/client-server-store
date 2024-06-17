import { Button, Modal, TextField } from "@mui/material";
import { ChangeEventHandler, FC, useState } from "react";
import { Hr, ModalBody, ModalStyles, ModalTitle } from "./styles";
import { useActions } from "../../../hooks/useActions";
import { useAppSelector } from "../../../hooks/useAppSelector";
import { typeSelectors } from "../../../store/selectors";
import ModalError from "../ModalError/ModalError";
import Loader from "../../UI/Loader/Loader";

interface ModalTypeProps {
  isVisible: boolean;
  setIsVisible: (active: boolean) => void;
}

const ModalType: FC<ModalTypeProps> = ({ isVisible, setIsVisible }) => {
  const [type, setType] = useState("");

  const { createAsyncType } = useActions();

  const { isLoading, error } = useAppSelector(typeSelectors);

  const handleCloseModal = () => {
    setIsVisible(false);
  };

  const handleChangeType: ChangeEventHandler<HTMLInputElement> = (event) => {
    setType(event.target.value);
  };

  const handleSetAsyncType = () => {
    createAsyncType(type);
    setType("");
    setIsVisible(false);
  };

  if (isLoading) {
    return <Loader />;
  }

  return (
    <Modal
      open={isVisible}
      onClose={handleCloseModal}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <ModalStyles>
        <ModalTitle variant="h4">
          Добавить тип
          <Hr />
        </ModalTitle>
        <form>
          <ModalBody>
            <TextField
              value={type}
              fullWidth
              size="small"
              placeholder="Введите название типа"
              onChange={handleChangeType}
            />
            <Button variant="outlined" onClick={handleSetAsyncType}>
              Добавить
            </Button>
          </ModalBody>
        </form>
        {error && <ModalError error={error} />}
      </ModalStyles>
    </Modal>
  );
};

export default ModalType;
