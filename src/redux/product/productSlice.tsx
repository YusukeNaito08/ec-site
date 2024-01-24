import { createSlice } from "@reduxjs/toolkit";

interface ProductState {
  id: string;
  name: string;
  price: number;
  imageUrl: string[];
  category: string;
}

//仮データ
const initialState: ProductState[] = [
  { id: "1", name: "商品1", price: 1000, imageUrl: ["/src/assets/productsSample.png", "src/assets/productsSample.png", "src/assets/productsSample.png"], category: "レディース" },
  { id: "2", name: "商品2", price: 2000, imageUrl: ["/src/assets/productsSample.png", "src/assets/productsSample.png", "src/assets/productsSample.png"], category: "レディース" },
  { id: "3", name: "商品3", price: 2000, imageUrl: ["/src/assets/productsSample.png", "src/assets/productsSample.png", "src/assets/productsSample.png"], category: "レディース" },
  { id: "4", name: "商品4", price: 2000, imageUrl: ["/src/assets/productsSample.png", "src/assets/productsSample.png", "src/assets/productsSample.png"], category: "レディース" },
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
