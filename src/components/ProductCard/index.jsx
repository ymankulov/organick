import React, { useEffect } from "react";
import { IoCloseCircleOutline } from "react-icons/io5";
import { useDispatch } from "react-redux";
// import { deleteProd, getProduct } from "../../redux/reducers/addProductSlice";
import axios from "axios";
import { deleteProd, getProduct, productDet } from "../../redux/reducers/addProductSlice";
import { useNavigate } from "react-router-dom";

const ProductCard = ({ el }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const deleteProduct = async () => {
    const { data } = await axios.delete(
      `https://api.elchocrud.pro/api/v1/e7dd828feeb129cf4709a5a3595d11b9/organick/${el._id}`
    );
    dispatch(deleteProd(data));
  };
  const rating = [1, 2, 3, 4, 5];

  const getProductDeteils = () => {
    dispatch(productDet(el))
    navigate(`/productDetails/${el._id}`)
  }
  return (
    <div className="relative gap-5 p-4 flex items-center justify-start flex-col w-[300px] h-[400px] border-2 border-solid border-black rounded-[15px]">
      <a
        onClick={() => dispatch(deleteProduct())}
        className="text-2xl absolute top-[20px] right-[20px]"
      >
        <IoCloseCircleOutline />
      </a>
      <img src={el.url} alt="img" width={200} />
      <h1
        className="text-3xl font-bold underline cursor-pointer"
        onClick={() => getProductDeteils()}
      >
        {el.name}
      </h1>
      <div className="flex items-center gap-3">
        {rating.map((sun) => (
          <div
            className="star"
            style={{
              background: sun <= el.rating ? "rgb(255, 167, 3)" : "gray",
            }}
            key={sun}
          ></div>
        ))}
        <h1 className="text-xl w-[30px] h-[30px] bg-blue-300 flex items-center justify-center rounded-[50%]">
          {el.rating}
        </h1>
      </div>
      <h1 className="text-2xl">{el.price}$</h1>
    </div>
  );
};

export default ProductCard;
