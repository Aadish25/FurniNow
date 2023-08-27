import React from "react";
import ReactDOM from "react-dom/client";
import HomePage from "./components/homepage/homepage.jsx";
import Carousel from "./components/firstpage/carousel/carousel.jsx";
// import Cart from "./components/Cart/cart.jsx";
import store from "./app/store";
import { Provider } from "react-redux";
import ShopMain from "./components/Shop/ShopMain.jsx";
import Snackbar from "./components/snackbar/snackbar.jsx";
import SinglePage from "./components/singlePage/singlePage.jsx";
import Login from "./components/login/login/login.jsx";
import Layout from "./components/login/layout/layout.jsx";
import SignUp from "./components/login/signup/signup.jsx";
import CartPage from "./components/CartPage/cartPage.jsx";
import CheckOut from "./components/CheckOut/CheckOut.jsx";
import Contact from "./components/contact/contact.jsx";
import "./index.css";
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
const isToken = () => {
  if (localStorage.getItem("SavedToken")) {
    return <Navigate to={"/home"} />;
  }
  return <Layout />;
};

const router = createBrowserRouter([
  {
    path: "/",
    element: isToken(),
    children: [
      {
        path: "/",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <SignUp />,
      },
    ],
  },
  {
    path: "/home",
    element: <HomePage />,
    children: [
      {
        path: "/home",
        element: <Carousel />,
      },
      {
        path: "/home/shop/:category",
        element: <ShopMain />,
      },
      {
        path: "/home/shop/singlePage/:id",
        element: <SinglePage />,
      },
      {
        path: "/home/cart",
        element: <CartPage/>,
      },
      {
        path: "/home/checkout",
        element: <CheckOut/>,
      },
      {
        path: "/home/contact",
        element: <Contact/>,
      },
    ],
  },
  
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <Snackbar />
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
