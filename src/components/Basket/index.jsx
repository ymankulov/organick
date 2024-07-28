import React from "react";
import { useSelector } from "react-redux";
import BasketProduct from "../BasketProduct";
import logo from "../../assets/empty.jpg";

const Basket = () => {
  const { basket } = useSelector((s) => s.add);
  const totallPrice = basket.reduce((acc, el) => {
    return acc + +el.price * el.quantity;
  }, 0);
  return (
    <div className="mt-[100px]">
      <div className="container">
        <div className="">
          {basket.length ? (
            <div class="flex items-center justify-center">
              <table class="w-full max-[428px]:w-[390px] text-sm text-left rtl:text-right text-gray-500 ">
                <thead class="text-2xl max-[428px]:text-[10px] w-full text-gray-700 uppercase bg-[#d5d5d5]">
                  <tr>
                    <th scope="col" class="px-16 max-[428px]:px-[6px] py-3">
                      Image
                    </th>
                    <th scope="col" class="px-6 max-[428px]:px-[6px] py-3">
                      Product
                    </th>
                    <th
                      scope="col"
                      class="px-6 flex max-[428px]:hidden max-[428px]:px-[6px] py-3"
                    >
                      Qty
                    </th>
                    <th scope="col" class="px-6 max-[428px]:px-[6px] py-3">
                      Price
                    </th>
                    <th scope="col" class="px-6 max-[428px]:px-[6px] py-3">
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {basket.map((el) => (
                    <BasketProduct el={el} key={el._id} />
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <div className="">
              <img src={logo} alt="" className="mx-auto" />
            </div>
          )}
        </div>
        <div className="">
          <h1 className="text-[35px] font-bold mt-[30px]">
            Totall Price: {totallPrice} $
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Basket;
