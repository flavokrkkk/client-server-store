import { IInfo } from "./IInfo";

export interface IDevice {
  id: number;
  name: string;
  price: number;
  rating: number;
  info: IInfo[];
  img: string;
}
