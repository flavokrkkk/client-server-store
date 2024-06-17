import { Button, Modal, TextField } from "@mui/material";
import { ChangeEventHandler, FC, useState } from "react";
import { Hr, ModalBody, ModalStyles, ModalTitle } from "./styles";
import { useActions } from "../../../hooks/useActions";
import { useAppSelector } from "../../../hooks/useAppSelector";
import { brandSelectors } from "../../../store/selectors";
import Loader from "../../UI/Loader/Loader";
import ModalError from "../ModalError/ModalError";

interface ModalBrandProps {
  isVisible: boolean;
  setIsVisible: (active: boolean) => void;
}

const ModalBrand: FC<ModalBrandProps> = ({ isVisible, setIsVisible }) => {
  const [brand, setBrand] = useState("");

  const { createAsyncBrand } = useActions();

  const { isLoading, error } = useAppSelector(brandSelectors);

  const handleCloseModal = () => {
    setIsVisible(false);
  };

  const handleChangeBrand: ChangeEventHandler<HTMLInputElement> = (event) => {
    setBrand(event.target.value);
  };

  const handleCreateAsyncBrand = () => {
    createAsyncBrand(brand);
    setBrand("");
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
          Добавить бренд
          <Hr />
        </ModalTitle>
        <form>
          <ModalBody>
            <TextField
              value={brand}
              fullWidth
              size="small"
              placeholder="Введите название бренда"
              onChange={handleChangeBrand}
            />
            <Button variant="outlined" onClick={handleCreateAsyncBrand}>
              Добавить
            </Button>
          </ModalBody>
        </form>
        {error && <ModalError error={error} />}
      </ModalStyles>
    </Modal>
  );
};

export default ModalBrand;
