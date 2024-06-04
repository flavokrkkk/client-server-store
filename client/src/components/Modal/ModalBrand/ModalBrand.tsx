import { Box, Modal, Typography } from "@mui/material";
import { FC } from "react";

interface ModalBrandProps {
  isVisible: boolean;
  setIsVisible: (active: boolean) => void;
}

const ModalBrand: FC<ModalBrandProps> = ({ isVisible, setIsVisible }) => {
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };

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
      <Box sx={style}>
        <Typography id="modal-modal-title" variant="h6" component="h2">
          Text in a modal
        </Typography>
        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
        </Typography>
      </Box>
    </Modal>
  );
};

export default ModalBrand;
