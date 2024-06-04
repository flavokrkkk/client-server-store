import { IBrand } from "../../../models/IBrand";

export interface BrandState {
  brands: IBrand[];
  selectedBrand: IBrand;
}
