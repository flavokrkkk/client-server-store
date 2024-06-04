import { IBrand } from "../models/IBrand";
import { IDescriptions } from "../models/IDescription";
import { IDevice } from "../models/IDevice";
import { IType } from "../models/IType";

export const types = <IType[]>[
  { id: 1, name: "Ноутбуки" },
  { id: 2, name: "Наушники" },
  { id: 3, name: "Смартфоны" },
  { id: 4, name: "Игровые приставки" },
];

export const brands = <IBrand[]>[
  { id: 1, name: "Apple" },
  { id: 2, name: "Samsung" },
  { id: 3, name: "Xiaomi" },
  { id: 4, name: "Logitech" },
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
    img: "https://static.cdek.shopping/images/shopping/b4f671b6735b4d9393a974439acfbb3e.jpg",
  },
];

export const device = <IDevice>{
  id: 1,
  name: "Iphone 15 pro",
  price: 1400,
  rating: 5,
  img: "https://static.cdek.shopping/images/shopping/27b9b283106744beb0b67d2d972597b4.jpg",
};

export const description = ` Приобретая любое устройство в нашем магазине, Вы имеете право
осуществить его полную проверку непосредственно ДО ОПЛАТЫ. Никто
не будет Вас торопить, при этом всю интересующую Вас информацию Вы
сможете уточнить у курьера или на пункте самовывоза в момент
распаковки устройства. Подробнее о доставке`;

export const descriptions = <IDescriptions[]>[
  { id: 1, title: "Оперативная память", description: "125 гб" },
  { id: 2, title: "Камера", description: "12 мп" },
  { id: 3, title: "Процессор", description: "Пентиум 3" },
  { id: 4, title: "Кол-во ядер", description: "2" },
  { id: 5, title: "Аккумулятор", description: "4000" },
];
