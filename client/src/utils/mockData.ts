import { IBrand } from "../models/IBrand";
import { IDevice } from "../models/IDevice";
import { IType } from "../models/IType";

export const types = <IType[]>[
  { id: 1, name: "Ноутбуки" },
  { id: 2, name: "Наушники" },
];

export const brands = <IBrand[]>[
  { id: 1, name: "Apple" },
  { id: 2, name: "Samsung" },
];

export const devices = <IDevice[]>[
  {
    id: 1,
    name: "Iphone 15 pro",
    price: 1400,
    rating: 5,
    img: "https://static.cdek.shopping/images/shopping/27b9b283106744beb0b67d2d972597b4.jpg",
  },
  {
    id: 2,
    name: "Iphone 15",
    price: 1400,
    rating: 5,
    img: "https://static.cdek.shopping/images/shopping/66fe6f07613e4562add9d23743cf90c0.jpg",
  },
  {
    id: 3,
    name: "Iphone 14",
    price: 1400,
    rating: 5,
    img: "https://static.cdek.shopping/images/shopping/012ecaaaf73b4257bc2e1b82e8c90b91.jpg",
  },
  {
    id: 4,
    name: "Iphone 13",
    price: 1400,
    rating: 5,
    img: "https://static.cdek.shopping/images/shopping/b4f671b6735b4d9393a974439acfbb3e.jpg",
  },
  {
    id: 5,
    name: "Iphone 12 pro",
    price: 1400,
    rating: 5,
    img: "https://static.cdek.shopping/images/shopping/1d03a9937b944ca3bfaa6d20efa2c820.jpg",
  },
];
