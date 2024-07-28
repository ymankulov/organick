import React from "react";
import bgHome from "../../assets/Banner.png";
import { FaArrowCircleRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Home = () => {
  const { user } = useSelector((s) => s.add);
  const navigate = useNavigate();
  return (
    <div
      style={{
        background: `url(${bgHome}) no-repeat top/contain`,
        minHeight: "100vh",
      }}
    >
      <div className="container">
        <div className="relative">
          <button
            onClick={() => (user ? navigate("/createProduct") : alert(404))}
            className="text-[#274C5B] absolute top-[420px] left-[110px] max-[428px]:py-[10px] max-[428px]:top-[125px] max-[428px]:left-[50px] max-[428px]:px-[20px] max-[1024px]:left-[0] max-[1024px]:top-[290px] text-[20px] max-[428px]:text-[10px] bg-[#EFD372] font-bold flex items-center gap-3 py-[28px] px-[39px] rounded-2xl"
          >
            Explore Now <FaArrowCircleRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
