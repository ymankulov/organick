import React from "react";
import { useSelector } from "react-redux";
import BasketProduct from "../BasketProduct";
import logo from "../../assets/empty.jpg";

const Basket = () => {
  const { basket } = useSelector((s) => s.add);
  console.log(basket, "bas");
  return (
    <div>
      <div className="container">
        <div className="">
          {basket.length ? (
            <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
              <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead class="text-2xl text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                  <tr>
                    <th scope="col" class="px-16 py-3">
                      Image
                    </th>
                    <th scope="col" class="px-6 py-3">
                      Product
                    </th>
                    <th scope="col" class="px-6 py-3">
                      Qty
                    </th>
                    <th scope="col" class="px-6 py-3">
                      Price
                    </th>
                    <th scope="col" class="px-6 py-3">
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
      </div>
    </div>
  );
};

export default Basket;
