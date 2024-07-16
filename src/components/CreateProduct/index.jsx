import axios from "axios";
import React, { useState } from "react";

const CreateProduct = () => {
  const [productUrl, setProductUrl] = useState("");
  const [productName, setProductName] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const [productDes, setProductDes] = useState("");

  const cretePro = () => {
    let newProduct = {
      url: productUrl,
      name: productName,
      price: productPrice,
      rating: Math.floor(Math.random() * 5),
      description: productDes,
      quantity: 1,
    };

    axios.post(
      `https://api.elchocrud.pro/api/v1/e7dd828feeb129cf4709a5a3595d11b9/organick`,
      newProduct
    );
    setProductUrl("");
    setProductName("");
    setProductPrice("");
    setProductDes("");
  };

  return (
    <div className="mt-[60px]">
      <div className="container">
        <div className="w-[50%] mx-auto flex items-center flex-col gap-5 ">
          <div class="relative z-0 w-full mb-5 group">
            <input
              onChange={(e) => setProductUrl(e.target.value)}
              value={productUrl}
              type="text"
              id="floating_email"
              class="block py-2.5 px-0 w-full text-2xl text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
            />
            <label
              htmlFor="floating_email"
              class="peer-focus:font-medium absolute text-2xl text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Product (Url...)
            </label>
          </div>{" "}
          <div class="relative z-0 w-full mb-5 group">
            <input
              onChange={(e) => setProductName(e.target.value)}
              value={productName}
              type="text"
              id="floating_email"
              class="block py-2.5 px-0 w-full text-2xl text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
            />
            <label
              htmlFor="floating_email"
              class="peer-focus:font-medium absolute text-2xl text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Product Name
            </label>
          </div>{" "}
          <div class="relative z-0 w-full mb-5 group">
            <input
              onChange={(e) => setProductPrice(e.target.value)}
              value={productPrice}
              type="text"
              id="floating_email"
              class="block py-2.5 px-0 w-full text-2xl text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
            />
            <label
              htmlFor="floating_email"
              class="peer-focus:font-medium absolute text-2xl text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Product Price
            </label>
          </div>
          <div class="relative z-0 w-full mb-5 group">
            <input
              onChange={(e) => setProductDes(e.target.value)}
              value={productDes}
              type="text"
              id="floating_email"
              class="block py-2.5 px-0 w-full text-2xl text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
            />
            <label
              htmlFor="floating_email"
              class="peer-focus:font-medium absolute text-2xl text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Product Description
            </label>
          </div>
          <button
            onClick={() => cretePro()}
            className="py-[20px] px-[40px] bg-yellow-600 rounded-xl text-2xl text-white"
          >
            Create
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreateProduct;
