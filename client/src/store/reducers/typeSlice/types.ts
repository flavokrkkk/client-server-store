import { IType } from "../../../models/IType";

export interface TypeState {
  types: IType[];
  selectedType: IType;
  error: string;
}
