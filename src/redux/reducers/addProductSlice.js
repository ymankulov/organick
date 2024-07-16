import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  product: [],
  productDeteils: JSON.parse(localStorage.getItem("details")) || {},
  basket: JSON.parse(localStorage.getItem("basket")) || [],
};

const addProductSlice = createSlice({
  name: "CREATE",
  initialState,
  reducers: {
    getProduct(state, action) {
      state.product = action.payload;
    },
    deleteProd(state, action) {
      state.product = action.payload;
    },
    productDet(state, action) {
      state.productDeteils = action.payload;
      localStorage.setItem("details", JSON.stringify(action.payload));
      console.log(state.productDeteils, "product");
    },
    addToBasket(state, action) {
      let bas = [...state.basket, action.payload];
      localStorage.setItem("basket", JSON.stringify(bas));
      state.basket = bas;
    },
    inCrement(state, action) {
      let plus = state.basket.map((el) =>
        el._id === action.payload ? { ...el, quantity: el.quantity + 1 } : el
      );
      localStorage.setItem("basket", JSON.stringify(plus));
      state.basket = plus;
    },
    desCremenet(state, action) {
      let minus = state.basket.map((el) =>
        el._id === action.payload
          ? { ...el, quantity: el.quantity > 1 ? el.quantity - 1 : 1 }
          : el
      );
      localStorage.setItem("basket", JSON.stringify(minus));
      state.basket = minus;
    },
    deleteBasket(state, action) {
      let filterDel = state.basket.filter((el) => el._id !== action.payload);
      localStorage.setItem("basket", JSON.stringify(filterDel));
      state.basket = filterDel;
    },
  },
});
export const {
  getProduct,
  deleteProd,
  productDet,
  addToBasket,
  inCrement,
  desCremenet,
  deleteBasket,
} = addProductSlice.actions;
export default addProductSlice.reducer;
