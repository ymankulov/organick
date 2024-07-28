import React from "react";
import { useDispatch } from "react-redux";
import {
  deleteBasket,
  desCremenet,
  inCrement,
} from "../../redux/reducers/addProductSlice";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";

const BasketProduct = ({ el }) => {
  const dispatch = useDispatch();
  return (
    <tr className="bg-[#eaeaea] border-b  hover:bg-gray-50 ">
      <td className="p-4">
        <Zoom>
          <img
            src={el.url}
            className="w-16 max-[428px]:w-[100px] max-[428px]:h-[50px] max-w-full max-h-full"
            alt="img"
          />
        </Zoom>
      </td>
      <td className="px-6 py-4 text-[20px] max-[428px]:text-[10px] font-semibold text-gray-900 ">
        {el.name}
      </td>
      <td className="px-6 py-4 flex max-[428px]:hidden">
        <div className="flex items-center">
          <button
            onClick={() => dispatch(desCremenet(el._id))}
            className="inline-flex items-center justify-center p-1 me-3 text-sm font-medium h-6 w-6 text-gray-500 bg-white border border-gray-300 rounded-full focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200"
            type="button"
          >
            <span className="sr-only">Quantity button</span>
            <svg
              className="w-3 h-3"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 18 2"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 1h16"
              />
            </svg>
          </button>
          <div>
            <h1 className="bg-gray-50 text-center w-14 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block px-2.5 py-1">
              {el.quantity}
            </h1>
          </div>
          <button
            onClick={() => dispatch(inCrement(el._id))}
            className="inline-flex items-center justify-center h-6 w-6 p-1 ms-3 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-full focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 "
            type="button"
          >
            <span className="sr-only">Quantity button</span>
            <svg
              className="w-3 h-3"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 18 18"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M9 1v16M1 9h16"
              />
            </svg>
          </button>
        </div>
      </td>
      <td className="px-6 py-4 text-[20px]  font-semibold text-gray-900 ">
        {el.price * el.quantity}$
      </td>
      <td className="px-6 py-4">
        <button
          onClick={() => dispatch(deleteBasket(el._id))}
          className="text-[25px]  max-[428px]:text-[14px] text-white bg-red-500 hover:underline font-bold py-[10px] px-[30px] rounded-3xl cursor-pointer"
        >
          delete
        </button>
      </td>
    </tr>
  );
};

export default BasketProduct;
