import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  product: [],
  productDeteils: JSON.parse(localStorage.getItem("details")) || {},
  basket: JSON.parse(localStorage.getItem("basket")) || [],
  user: null,
  search: [],
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
      let findProduct = state.basket.find(
        (el) => el._id === action.payload._id
      );
      if (findProduct) {
        console.log("Bar");
      } else {
        let bas = [...state.basket, action.payload];
        localStorage.setItem("basket", JSON.stringify(bas));
        state.basket = bas;
      }
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
    getUser(state, action) {
      state.user = action.payload;
    },
    sortProduct(state, action) {
      if (action.payload === "cheap") {
        let changeProduct = state.product.sort((a, b) => a.price - b.price);
        state.product = changeProduct;
      } else if (action.payload === "expensive") {
        let changeProduct = state.product.sort((a, b) => b.price - a.price);
        state.product = changeProduct;
      } else if (action.payload === "best") {
        let changeProduct = state.product.sort((a, b) => b.rating - a.rating);
        state.product = changeProduct;
      } else if (action.payload === "A-Z") {
        let changeProduct = state.product.sort((a, b) =>
          a.name.localeCompare(b.name)
        );
        state.product = changeProduct;
      } else if (action.payload === "Z-A") {
        let changeProduct = state.product.sort((a, b) =>
          b.name.localeCompare(a.name)
        );
        state.product = changeProduct;
      }
    },
    searchProduct(state, action) {
      let search = state.product.filter((el) =>
        el.name
          .toUpperCase()
          .trim()
          .includes(action.payload.toUpperCase().trim())
      );
      state.search = search;
    },
  },
});
export const {
  getProduct,
  getUser,
  deleteProd,
  searchProduct,
  productDet,
  addToBasket,
  inCrement,
  desCremenet,
  deleteBasket,
  sortProduct,
} = addProductSlice.actions;
export default addProductSlice.reducer;
