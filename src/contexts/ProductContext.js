import React, { createContext, useState, useEffect } from "react";
//for axiuos
import axios from 'axios';
//create Context
export const ProductContext = createContext();
const ProductProvider = ({ children }) => {
  //product state
  const [products, setProducts] = useState([]);
  //fetch products

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch('https://fakestoreapi.com/products');
      const data = await response.json();
      setProducts(data);
    };
    fetchProducts();

//     // Make a request for a user with a given ID
// axios.get('https://fakestoreapi.com/products')
// .then(function (response) {
//   // handle success
//   console.log(response);
// })
// .catch(function (error) {
//   // handle error
//   console.log(error);
// })
}, []);

  return <ProductContext.Provider value={{products}} >{children}</ProductContext.Provider>;
};

export default ProductProvider;
