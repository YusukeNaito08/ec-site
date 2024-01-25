import { createSlice } from "@reduxjs/toolkit";

interface ProductState {
  id: string;
  name: string;
  price: number;
  imageUrl?: img[];
  category: string;
  sizes: string[];
}

interface img {
  img: string;
  default: boolean;
}

//仮データ
const initialState: ProductState[] = [
  {
    id: "1",
    name: "商品1",
    price: 1000,
    imageUrl: [
      { img: "/src/assets/productsSample.png", default: true },
      { img: "/src/assets/productsSample2.png", default: false },
      { img: "/src/assets/productsSample.png", default: false },
    ],
    category: "レディース",
    sizes: ["XS", "S", "M", "L", "XL"],
  },
  {
    id: "2",
    name: "商品2",
    price: 2000,
    imageUrl: [
      { img: "/src/assets/productsSample.png", default: true },
      { img: "/src/assets/productsSample2.png", default: false },
      { img: "/src/assets/productsSample.png", default: false },
    ],
    category: "レディース",
    sizes: ["XS", "S", "M", "L", "XL"],
  },
  {
    id: "3",
    name: "商品3",
    price: 2000,
    imageUrl: [
      { img: "/src/assets/productsSample.png", default: true },
      { img: "/src/assets/productsSample2.png", default: false },
      { img: "/src/assets/productsSample.png", default: false },
    ],
    category: "レディース",
    sizes: ["XS", "S", "M", "L", "XL"],
  },
  {
    id: "4",
    name: "商品4",
    price: 2000,
    imageUrl: [
      { img: "/src/assets/productsSample.png", default: true },
      { img: "/src/assets/productsSample2.png", default: false },
      { img: "/src/assets/productsSample.png", default: false },
    ],
    category: "レディース",
    sizes: ["XS", "S", "M", "L", "XL"],
  },
];

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    addProduct: (state, action) => {
      state.push(action.payload);
    },
  },
});

export const { addProduct } = productSlice.actions;
export default productSlice.reducer;
