import { FC } from "react";
import { IType } from "../../models/IType";
import { ListItemText } from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { ListGroupButton } from "./styles";

interface TypeBarListProps {
  type: IType;
  selectedType: IType;
  setSelectedType: (type: IType) => void;
}

const TypeBarList: FC<TypeBarListProps> = ({
  type,
  selectedType,
  setSelectedType,
}) => {
  const isSelect = selectedType.id === type.id;

  const handleSelectedType = () => {
    setSelectedType(type);
  };

  return (
    <ListGroupButton selected={isSelect} onClick={handleSelectedType}>
      <ListItemText primary={type.name} />
      <ArrowForwardIosIcon />
    </ListGroupButton>
  );
};

export default TypeBarList;
