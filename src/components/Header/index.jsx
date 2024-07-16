import React from "react";
import Logo from "../../assets/headerlogo.svg";
import { Link } from "react-router-dom";
import { IoSearch } from "react-icons/io5";
import { BsCart3 } from "react-icons/bs";
import { useSelector } from "react-redux";

const Header = () => {
  const { basket } = useSelector((s) => s.add);
  return (
    <div className="py-[40px]">
      <div className="container">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <img src={Logo} alt="" />
            <h1 className="text-[#274C5B] text-[40px] font-bold">Organick</h1>
          </div>
          <div className="text-[#274C5B] text-[25px] font-bold flex items-center gap-3">
            <Link to={"/"}>Home</Link>
            <Link to={"/"}>About</Link>
            <Link to={"/"}>Pages</Link>
            <Link to={"/products"}>Shop</Link>
            <Link to={"/"}>Projects</Link>
            <Link to={"/"}>News</Link>
          </div>
          <div className="flex items-center gap-4">
            <div className="relative">
              <input
                type="text"
                placeholder="search..."
                className="text-2xl text-black bg-gray-200 py-[10px] px-[30px] rounded-3xl outline-none"
              />
              <div className="bg-[#7EB693] absolute top-[6px] right-2 w-[40px] h-[40px] rounded-[50%] flex items-center justify-center">
                <a className="text-white text-[22px] ">
                  <IoSearch />
                </a>
              </div>
            </div>
            <Link
              to={`/basket`}
              className="flex items-center gap-2 border-2 border-solid border-gray-300 p-2 rounded-3xl"
            >
              <div className="w-[40px] h-[40px]  rounded-[50%] bg-[#274C5B] flex items-center justify-center">
                <a className="text-[22px] text-white">
                  <BsCart3 />
                </a>
              </div>
              <h1 className="text-[#274C5B] text-[24px] font-bold">
                Cart ({basket.length ? basket.length : 0})
              </h1>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
