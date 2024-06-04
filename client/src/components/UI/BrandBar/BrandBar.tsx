import { useAppSelector } from "../../../hooks/useAppSelector";
import { brandSelectors } from "../../../store/selectors";
import { BrandBarWrapper } from "./styles";
import BrandBarList from "../../BrandBarList/BrandBarList";
import { useActions } from "../../../hooks/useActions";

const BrandBar = () => {
  const { brands, selectedBrand } = useAppSelector(brandSelectors);

  const { setSelectedBrand } = useActions();

  return (
    <BrandBarWrapper>
      {brands.map((brand) => (
        <BrandBarList
          brand={brand}
          selectedBrand={selectedBrand}
          setSelectedBrand={setSelectedBrand}
        />
      ))}
    </BrandBarWrapper>
  );
};

export default BrandBar;
