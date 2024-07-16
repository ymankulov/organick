import React from "react";
import bgHome from "../../assets/Banner.png";
import { FaArrowCircleRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  return (
    <div
      style={{
        background: `url(${bgHome}) no-repeat top/contain`,
        minHeight: "100vh",
      }}
    >
      <div className="container">
        <div className=" relative">
          <button
            onClick={() => navigate("/createProduct")}
            className="text-[#274C5B] absolute top-[420px] left-[110px] text-[20px] bg-[#EFD372] font-bold flex items-center gap-3 py-[28px] px-[39px] rounded-2xl"
          >
            Explore Now <FaArrowCircleRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
