import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProduct } from "../../redux/reducers/addProductSlice";
import ProductCard from "../ProductCard";

const Products = () => {
  const { product } = useSelector((s) => s.add);

  const dispatch = useDispatch();

  const getProd = () => {
    return async (dispatch) => {
      const res = await axios(
        `https://api.elchocrud.pro/api/v1/e7dd828feeb129cf4709a5a3595d11b9/organick`
      );
      const { data } = res;
      dispatch(getProduct(data));
      console.log(product, "pro");
    };
  };

  useEffect(() => {
    dispatch(getProd());
  }, []);

  return (
    <div className="">
      <div className="container">
        <div className="flex items-center flex-wrap gap-6 mt-[60px]">
          {product?.map((el) => (
            <ProductCard el={el} key={el._id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
