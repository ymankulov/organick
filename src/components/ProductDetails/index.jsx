import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { FaArrowCircleRight } from "react-icons/fa";
import { addToBasket } from "../../redux/reducers/addProductSlice";

const ProductDetails = () => {
  const dispatch = useDispatch()
  const { productDeteils } = useSelector((s) => s.add);
  console.log(productDeteils, "url");
  const rating = [1, 2, 3, 4, 5];
  return (
    <div className="flex items-center gap-[80px] justify-center mt-[50px]">
      <div className="w-[450px]  h-[450px] rounded-[20px] shadow-2xl">
        <img src={productDeteils.url} alt="" width={400} className="" />
      </div>
      <div className="flex items-start flex-col gap-[30px]">
        <h1 className="text-[35px] font-bold">{productDeteils.name}</h1>
        <div className="flex items-center mt-[-25px] gap-3">
          {rating.map((sun) => (
            <div
              className="star"
              style={{
                background:
                  sun <= productDeteils.rating ? "rgb(255, 167, 3)" : "gray",
              }} key={sun}
            ></div>
          ))}
          <h1 className="text-xl w-[30px] h-[30px] bg-blue-300 flex items-center justify-center rounded-[50%]">
            {productDeteils.rating}
          </h1>
        </div>
        <h1 className="text-[30px] font-bold">{productDeteils.price} $</h1>
        <p className="w-[600px]">{productDeteils.description}</p>
        <div className="flex items-center gap-[20px]">
          <h1>Quentity :</h1>
          <h1 className="border-2 flex items-center justify-center text-[20px] border-solid border-black w-[120px] h-[58px] rounded-[10px]">
            {productDeteils.quantity}
          </h1>
          <button onClick={() => dispatch(addToBasket(productDeteils))} className="flex items-center gap-5 bg-[#274C5B] py-[18px] text-white font-bold px-[30px] rounded-[10px] ">
            Add To Cart <FaArrowCircleRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
