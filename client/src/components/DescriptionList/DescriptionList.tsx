import { FC } from "react";
import { IDescriptions } from "../../models/IDescription";
import { CardListDescription } from "./styles";

interface DescriptionListProps {
  description: IDescriptions;
  index: number;
}

const DescriptionList: FC<DescriptionListProps> = ({ description, index }) => {
  return (
    <CardListDescription index={index} key={description.id}>
      {description.title}: {description.description}
    </CardListDescription>
  );
};

export default DescriptionList;
