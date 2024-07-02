import React from "react";
import "./App.css";
import Home from "./components/RouteExample/pages/Home";
import Products from "./components/RouteExample/pages/Products";
// import AddUsers from "./components/Users/AddUsers";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./components/RouteExample/layout/RootLayout";
import ErrorPage from "./components/RouteExample/pages/ErrorPage";
import ProductDetail from "./components/RouteExample/pages/ProductDetail";

//라우터 설정
const router = createBrowserRouter([
  {
    path: "/", //절대경로
    element: <RootLayout />,
    errorElement: <ErrorPage />, //에러가 났을때 보여줄 페이지
    children: [
      { path: "", element: <Home /> },
      { path: "products", element: <Products /> }, ///products /생략하면 ./ 앞에 생략인 의미
      { path: "products/:prodId/page/:pageNo", element: <ProductDetail /> }, //   /: 동적 라우터
    ],
  },
]);

const App = () => {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App;
