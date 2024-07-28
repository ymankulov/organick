import React from "react";
import errorImg from "../../assets/error.png";

const ErrorPages = () => {
  return (
    <div>
      <div className="container">
        <div className="mt-[40px] flex items-center justify-center">
          <img src={errorImg} alt="img" width={700} />
        </div>
      </div>
    </div>
  );
};

export default ErrorPages;
