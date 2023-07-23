import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home";
import Main from "../Layout/Main";
import Product from "../Pages/product/Product";
import CheckOut from "../Pages/Checkout/CheckOut";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/product",
        element: <Product/>,
      },
      {
        path: "/checkout",
        element: <CheckOut/>,
      },
    ],
  },
]);

export default router;
