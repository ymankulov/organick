import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProduct, sortProduct } from "../../redux/reducers/addProductSlice";
import ProductCard from "../ProductCard";
import loading from "../../assets/loading.svg";

const Products = () => {
  const { product } = useSelector((s) => s.add);
  const [selectValue, setSelectValue] = useState("");

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
        {!product.length ? (
          <div className="flex items-center justify-center mt-[100px]">
            <img src={loading} alt="" />
          </div>
        ) : (
          <div className="">
            <div className="flex items-center justify-end mt-[50px]">
              <select
                className="block py-2.5 px-0 w-[200px] text-xl text-black bg-transparent border-0 border-b-2 border-black appearance-none  focus:outline-none focus:ring-0 focus:border-gray-500 peer"
                onChange={(e) => dispatch(sortProduct(e.target.value))}
              >
                <option selected>Product Sort</option>
                <option value="cheap">Cheap</option>
                <option value="expensive">Expensive</option>
                <option value="best">Best</option>
                <option value="A-Z">A-Z</option>
                <option value="Z-A">Z-A</option>
              </select>
            </div>
            <div className="flex items-center flex-wrap gap-6 my-[30px] max-[1024px]:justify-between max-[428px]:justify-center">
              {product?.map((el) => (
                <ProductCard el={el} key={el._id} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Products;
