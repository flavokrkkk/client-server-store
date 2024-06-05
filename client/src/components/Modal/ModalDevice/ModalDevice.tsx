import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Modal,
  Select,
  TextField,
} from "@mui/material";
import { FC, useState } from "react";
import { useAppSelector } from "../../../hooks/useAppSelector";
import { brandSelectors, typeSelectors } from "../../../store/selectors";
import {
  ButtonWrapper,
  DescriptionWrapper,
  FormWrapper,
  Hr,
  ModalStyles,
  ModalTitle,
} from "./styles";
import ModalDeviceList from "../../ModalDeviceList/ModalDeviceList";
import { IInfo } from "../../../models/IInfo";
interface ModalDeviceProps {
  isVisible: boolean;
  setIsVisible: (active: boolean) => void;
}

const ModalDevice: FC<ModalDeviceProps> = ({ isVisible, setIsVisible }) => {
  const { types } = useAppSelector(typeSelectors);
  const { brands } = useAppSelector(brandSelectors);

  const [infos, setInfo] = useState<IInfo[]>([]);

  const handleAddedInfo = () => {
    setInfo([...infos, { title: "", description: "", id: Date.now() }]);
  };

  const handleDeleteInfo = (id: number) => {
    setInfo(infos.filter((i) => i.id !== id));
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
      <ModalStyles>
        <ModalTitle variant="h4">
          Добавить устройство
          <Hr />
        </ModalTitle>
        <form>
          <FormWrapper>
            <FormControl fullWidth variant="standard">
              <InputLabel>Выберите тип</InputLabel>
              <Select value={""}>
                {types.map((type) => (
                  <MenuItem value={type.name}>{type.name}</MenuItem>
                ))}
              </Select>
            </FormControl>
            <FormControl fullWidth variant="standard">
              <InputLabel>Выберите бренд</InputLabel>
              <Select label="Brand" value={""}>
                {brands.map((brand) => (
                  <MenuItem value={brand.name}>{brand.name}</MenuItem>
                ))}
              </Select>
            </FormControl>
          </FormWrapper>
          <DescriptionWrapper>
            <TextField
              fullWidth
              size="small"
              placeholder="Введите название устройства"
            />
            <TextField
              fullWidth
              size="small"
              type="number"
              placeholder="Введите стоимость устройства"
            />
            <TextField fullWidth size="small" type="file" />
          </DescriptionWrapper>
          <Hr />
          <ButtonWrapper>
            <Button variant="outlined" onClick={handleAddedInfo}>
              Добавить новое свойство
            </Button>
          </ButtonWrapper>
          {infos.map((info) => (
            <ModalDeviceList
              key={info.id}
              info={info}
              handleDeleteInfo={handleDeleteInfo}
            />
          ))}
        </form>
      </ModalStyles>
    </Modal>
  );
};

export default ModalDevice;
