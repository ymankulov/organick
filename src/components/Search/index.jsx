import React from "react";
import { useSelector } from "react-redux";
import ProductCard from "../ProductCard";

const Search = () => {
  const { search } = useSelector((s) => s.add);
  console.log(search, "search");
  return (
    <div className="mt-[40px]">
      <div className="container">
        <div className="flex items-center flex-wrap gap-5">
          {search.map((el) => (
            <ProductCard el={el} key={el.id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Search;
