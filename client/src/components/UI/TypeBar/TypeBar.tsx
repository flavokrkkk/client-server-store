import { Container } from "@mui/material";
import { useAppSelector } from "../../../hooks/useAppSelector";
import { typeSelectors } from "../../../store/selectors";
import TypeBarList from "../../TypeBarList/TypeBarList";
import { ListWrapper } from "./styles";
import { useActions } from "../../../hooks/useActions";
const TypeBar = () => {
  const { types, selectedType } = useAppSelector(typeSelectors);

  const { setSelectedType } = useActions();

  return (
    <Container>
      <ListWrapper aria-labelledby="nested-list-subheader">
        {types.map((type) => (
          <TypeBarList
            key={type.id}
            type={type}
            selectedType={selectedType}
            setSelectedType={setSelectedType}
          />
        ))}
      </ListWrapper>
    </Container>
  );
};

export default TypeBar;
