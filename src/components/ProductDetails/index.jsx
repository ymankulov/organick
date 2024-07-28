import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { FaArrowCircleRight } from "react-icons/fa";
import { addToBasket } from "../../redux/reducers/addProductSlice";
import { IoChevronBackCircleOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

const ProductDetails = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { productDeteils } = useSelector((s) => s.add);
  const rating = [1, 2, 3, 4, 5];
  return (
    <div className="relative container">
      <a
        href="#"
        className="text-[40px] absolute top-[-40px] left-[50px]"
        onClick={() => navigate("/products")}
      >
        <IoChevronBackCircleOutline />
      </a>
      <div className="flex items-center max-[992px]:gap-[30px]  gap-[80px] justify-between mt-[80px]">
        <div className="w-[450px] max-[992px]:w-[40%]  h-[450px] rounded-[20px] shadow-2xl">
          <img src={productDeteils.url} alt="" width={400} className="" />
        </div>
        <div className="flex items-start flex-col gap-[30px] w-[50%] max-[992px]:">
          <h1 className="text-[35px] max-[992px]:text-[25px] max-[992px]:font-medium font-bold">
            {productDeteils.name}
          </h1>
          <div className="flex items-center mt-[-25px] gap-3">
            {rating.map((sun) => (
              <div
                className="star"
                style={{
                  background:
                    sun <= productDeteils.rating ? "rgb(255, 167, 3)" : "gray",
                }}
                key={sun}
              ></div>
            ))}
            <h1 className="text-xl w-[30px] h-[30px] bg-blue-300 flex items-center justify-center rounded-[50%]">
              {productDeteils.rating}
            </h1>
          </div>
          <h1 className="text-[30px] font-bold">{productDeteils.price} $</h1>
          <p className="w-[600px] max-[992px]:w-[100%]">{productDeteils.description}</p>
          <div className="flex items-center gap-[20px]">
            <h1>Quantity :</h1>
            <h1 className="border-2 flex items-center justify-center text-[20px] border-solid border-black w-[120px] h-[58px] rounded-[10px]">
              {productDeteils.quantity}
            </h1>
            <button
              onClick={() => dispatch(addToBasket(productDeteils))}
              className="flex items-center gap-5 bg-[#274C5B] py-[18px] text-white font-bold px-[30px] rounded-[10px] "
            >
              Add To Cart <FaArrowCircleRight />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
