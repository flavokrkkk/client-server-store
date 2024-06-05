import {
  FormControl,
  InputLabel,
  MenuItem,
  Modal,
  Select,
} from "@mui/material";
import { FC } from "react";
import { useAppSelector } from "../../../hooks/useAppSelector";
import { brandSelectors, typeSelectors } from "../../../store/selectors";
import { Hr, ModalStyles, ModalTitle } from "./styles";

interface ModalDeviceProps {
  isVisible: boolean;
  setIsVisible: (active: boolean) => void;
}

const ModalDevice: FC<ModalDeviceProps> = ({ isVisible, setIsVisible }) => {
  const { types } = useAppSelector(typeSelectors);
  const { brands } = useAppSelector(brandSelectors);

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
          Добавить устройство
          <Hr />
        </ModalTitle>
        <div style={{ display: "flex", gap: "20px" }}>
          <FormControl fullWidth>
            <InputLabel>Выберите тип</InputLabel>
            <Select label="Type">
              {types.map((type) => (
                <MenuItem value={type.name}>{type.name}</MenuItem>
              ))}
            </Select>
          </FormControl>
          <FormControl fullWidth>
            <InputLabel>Выберите бренд</InputLabel>
            <Select label="Brand">
              {brands.map((brand) => (
                <MenuItem value={brand.name}>{brand.name}</MenuItem>
              ))}
            </Select>
          </FormControl>
        </div>
      </ModalStyles>
    </Modal>
  );
};

export default ModalDevice;
