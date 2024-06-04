import { Button } from "@mui/material";
import { AdminContainer } from "./styles";
import ModalBrand from "../../components/Modal/ModalBrand/ModalBrand";
import ModalType from "../../components/Modal/ModalType/ModalType";
import ModalDevice from "../../components/Modal/ModalDevice/ModalDevice";
import { useState } from "react";

const AdminPage = () => {
  const [isVisibleTypeModal, setIsVisibleTypeModal] = useState(false);
  const [isVisibleBrandModal, setIsVisibleBrandModal] = useState(false);
  const [isVisibleDeviceModal, setIsVisibleDeviceModal] = useState(false);

  const handleOpenModalBrand = () => {
    setIsVisibleBrandModal(true);
  };

  const handleOpenModalDevice = () => {
    setIsVisibleDeviceModal(true);
  };

  const handleOpenModalType = () => {
    setIsVisibleTypeModal(true);
  };

  return (
    <AdminContainer>
      <Button size="large" variant="outlined" onClick={handleOpenModalType}>
        Добавить тип
      </Button>
      <Button size="large" variant="outlined" onClick={handleOpenModalBrand}>
        Добавить брэнд
      </Button>
      <Button size="large" variant="outlined" onClick={handleOpenModalDevice}>
        Добавить устройство
      </Button>

      <ModalBrand
        isVisible={isVisibleBrandModal}
        setIsVisible={setIsVisibleBrandModal}
      />
      <ModalType
        isVisible={isVisibleTypeModal}
        setIsVisible={setIsVisibleTypeModal}
      />
      <ModalDevice
        isVisible={isVisibleDeviceModal}
        setIsVisible={setIsVisibleDeviceModal}
      />
    </AdminContainer>
  );
};

export default AdminPage;
