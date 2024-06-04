import { IBrand } from "../../models/IBrand";
import { FC } from "react";
import { BrandCard } from "./styles";

interface BrandBarListProps {
  brand: IBrand;
  selectedBrand: IBrand;
  setSelectedBrand: (brand: IBrand) => void;
}

const BrandBarList: FC<BrandBarListProps> = ({
  brand,
  selectedBrand,
  setSelectedBrand,
}) => {
  const isSelect = selectedBrand.id === brand.id;

  const handleSelectedBrand = () => {
    setSelectedBrand(brand);
  };

  return (
    <BrandCard isSelect={isSelect} key={brand.id} onClick={handleSelectedBrand}>
      {brand.name}
    </BrandCard>
  );
};

export default BrandBarList;
