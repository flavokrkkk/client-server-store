import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Modal,
  Select,
  TextField,
} from "@mui/material";
import { ChangeEventHandler, FC, useState } from "react";
import { useAppSelector } from "../../../hooks/useAppSelector";
import {
  brandSelectors,
  deviceSelectors,
  typeSelectors,
} from "../../../store/selectors";
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
import { useActions } from "../../../hooks/useActions";
import { IBrand } from "../../../models/IBrand";
import { IType } from "../../../models/IType";
import Loader from "../../UI/Loader/Loader";
import ModalError from "../ModalError/ModalError";

interface FileInputEvent extends React.SyntheticEvent {
  target: HTMLInputElement & EventTarget;
}
interface ModalDeviceProps {
  isVisible: boolean;
  setIsVisible: (active: boolean) => void;
}

interface IDeviceRequesData {
  name: string;
  price: number;
  file: File | null;
  brand: IBrand;
  type: IType;
  info: IInfo[];
}

const ModalDevice: FC<ModalDeviceProps> = ({ isVisible, setIsVisible }) => {
  const { types, selectedType } = useAppSelector(typeSelectors);
  const { brands, selectedBrand } = useAppSelector(brandSelectors);
  const { isLoading, error } = useAppSelector(deviceSelectors);

  const { createAsyncDevice, setSelectedBrand, setSelectedType } = useActions();

  const [device, setDevice] = useState<IDeviceRequesData>({
    name: "",
    price: 0,
    file: null,
    brand: {} as IBrand,
    type: {} as IType,
    info: [],
  });

  const handleAddedInfo = () => {
    setDevice({
      ...device,
      info: [...device.info, { id: Date.now(), title: "", description: "" }],
    });
  };

  const handleDeleteInfo = (id: number) => {
    setDevice({ ...device, info: device.info.filter((i) => i.id !== id) });
  };

  const handleCloseModal = () => {
    setIsVisible(false);
  };

  const handleChangeDevice: ChangeEventHandler<HTMLInputElement> = (event) => {
    setDevice({ ...device, [event.target.name]: event.target.value });
  };

  const handleChangeSelectBrand = (brand: IBrand) => {
    setDevice({ ...device, brand });
    setSelectedBrand(brand);
    console.log(selectedBrand);
  };

  const handleChangeSelectType = (type: IType) => {
    setDevice({ ...device, type });
    setSelectedType(type);
    console.log(device.type);
  };

  const handleSelectFile: ChangeEventHandler = (event: FileInputEvent) => {
    setDevice({
      ...device,
      file: event.target.files && event.target.files.item(0),
    });
  };

  const handleChangeInfo = (key: string, value: string, id: number) => {
    setDevice({
      ...device,
      info: device.info.map((info) =>
        info.id === id ? { ...info, [key]: value } : info
      ),
    });
  };

  const handleFormSubmit = () => {
    const formData = new FormData();
    formData.append("name", device.name);
    formData.append("price", `${device.price}`);
    formData.append("img", device.file!);
    formData.append("BrandId", `${selectedBrand.id}`);
    formData.append("TypeId", `${selectedType.id}`);
    formData.append("info", JSON.stringify(device.info));
    createAsyncDevice(formData);
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
          Добавить устройство
          <Hr />
        </ModalTitle>
        <form>
          <FormWrapper>
            <FormControl fullWidth variant="standard">
              <InputLabel>Выберите тип</InputLabel>
              <Select name="type">
                {types.map((type) => (
                  <MenuItem onClick={() => handleChangeSelectType(type)}>
                    {type.name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            <FormControl fullWidth variant="standard">
              <InputLabel>Выберите бренд</InputLabel>
              <Select label="Brand" name="brand">
                {brands.map((brand) => (
                  <MenuItem onClick={() => handleChangeSelectBrand(brand)}>
                    {brand.name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </FormWrapper>
          <DescriptionWrapper>
            <TextField
              value={device.name}
              name="name"
              fullWidth
              size="small"
              placeholder="Введите название устройства"
              onChange={handleChangeDevice}
            />
            <TextField
              value={device.price}
              name="price"
              fullWidth
              size="small"
              type="number"
              placeholder="Введите стоимость устройства"
              onChange={handleChangeDevice}
            />
            <TextField
              fullWidth
              size="small"
              type="file"
              onChange={handleSelectFile}
            />
          </DescriptionWrapper>
          <Hr />
          <ButtonWrapper>
            <Button variant="outlined" onClick={handleAddedInfo}>
              Добавить новое свойство
            </Button>
          </ButtonWrapper>
          {device.info.map((info) => (
            <ModalDeviceList
              key={info.id}
              info={info}
              handleChangeInfo={handleChangeInfo}
              handleDeleteInfo={handleDeleteInfo}
            />
          ))}
        </form>
        <ButtonWrapper>
          <Button variant="outlined" onClick={handleFormSubmit}>
            Добавить
          </Button>
          <Button variant="outlined" onClick={handleCloseModal}>
            Закрыть
          </Button>
        </ButtonWrapper>
        {error && <ModalError error={error} />}
      </ModalStyles>
    </Modal>
  );
};

export default ModalDevice;
