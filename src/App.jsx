import React from "react";
import Header from "./components/Header";
import Home from "./components/Home";
import { Route, Routes } from "react-router-dom";
import CreateProduct from "./components/CreateProduct";
import Products from "./components/Products";
import ProductDetails from "./components/ProductDetails";
import Basket from "./components/Basket";
import ErrorPages from "./components/Error";
import Search from "./components/Search";

const App = () => {
  const routes = [
    {
      id: 1,
      link: "/",
      element: <Home />,
    },
    {
      id: 2,
      link: "/createProduct",
      element: <CreateProduct />,
    },
    {
      id: 3,
      link: "/products",
      element: <Products />,
    },
    {
      id: 4,
      link: "/productDetails/:proId",
      element: <ProductDetails />,
    },
    {
      id: 5,
      link: "basket",
      element: <Basket />,
    },
    {
      id: 6,
      link: "*",
      element: <ErrorPages />,
    },
    {
      id: 7,
      link: "/search/:searchId",
      element: <Search />,
    },
  ];
  return (
    <div>
      <Header />
      <Routes>
        {routes.map((el) => (
          <Route path={el.link} element={el.element} key={el.id} />
        ))}
      </Routes>
    </div>
  );
};

export default App;
