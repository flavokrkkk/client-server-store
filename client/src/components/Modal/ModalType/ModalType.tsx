import { Button, Modal, TextField } from "@mui/material";
import { FC } from "react";
import { Hr, ModalBody, ModalStyles, ModalTitle } from "./styles";

interface ModalTypeProps {
  isVisible: boolean;
  setIsVisible: (active: boolean) => void;
}

const ModalType: FC<ModalTypeProps> = ({ isVisible, setIsVisible }) => {
  const handleCloseModal = () => {
    setIsVisible(false);
  };

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
              fullWidth
              size="small"
              placeholder="Введите название типа"
            />
            <Button variant="outlined">Добавить</Button>
          </ModalBody>
        </form>
      </ModalStyles>
    </Modal>
  );
};

export default ModalType;
