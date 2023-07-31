import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
//Product Provider
import ProductProvider from "./contexts/ProductContext";
//Sliderbar Provider
import SliderProvider from "./contexts/SidebarContext";
//cartprovider
import CartProvider from "./contexts/CartContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  
  <SliderProvider>
    <CartProvider>
    <ProductProvider>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </ProductProvider>
    </CartProvider>
  </SliderProvider>
);