import { Button, Modal } from "@mui/material";
import { FC, useEffect, useState } from "react";
import { ModalContent, ModalTitle } from "./styles";

interface ModalErrorProps {
  error: string;
}

const ModalError: FC<ModalErrorProps> = ({ error }) => {
  const [isVisible, setIsVisible] = useState(false);

  const handleModalClose = () => {
    setIsVisible(false);
  };

  useEffect(() => {
    error && setIsVisible(true);
  }, []);

  return (
    <Modal open={isVisible} onClose={handleModalClose}>
      <ModalContent>
        <ModalTitle variant="h4">Произошла проблема</ModalTitle>
        <ModalTitle id="modal-modal-title" variant="h6">
          {error}
        </ModalTitle>
        <Button variant="outlined" size="large" onClick={handleModalClose}>
          Повторить
        </Button>
      </ModalContent>
    </Modal>
  );
};

export default ModalError;
