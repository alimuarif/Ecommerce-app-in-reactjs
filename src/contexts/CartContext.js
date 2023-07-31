import React, { createContext, useState, useEffect } from "react";

export const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [Cart, setCart] = useState([]);
  // item amount states
  const [itemAmount, setItemAmount] = useState(0);
  //total price state
  const [total, setTotal] = useState(0);

  useEffect(()=>{
    const total = Cart.reduce((accumulator,currentItem)=> {
      return accumulator + currentItem.price *currentItem.amount;
    },0);
    setTotal(total)
  })

  //update item amount
  useEffect(() => {
    if (Cart) {
      const amount = Cart.reduce((accumulator, currentItem) => {
        return accumulator + currentItem.amount;
      }, 0);
      setItemAmount(amount);
    }
  }, [Cart]);

  // add to cart
  const addToCart = (product, id) => {
    const newItem = { ...product, amount: 1 };
    // console.log(`Item ${id} Added to cart ${product.title}`);

    //check if the item is already in the cart
    const cartItem = Cart.find((item) => {
      return item.id === id;
    });

    //if cart is already in the cart
    if (cartItem) {
      const newCart = [...Cart].map((item) => {
        if (item.id === id) {
          // console.log("matched")
          return { ...item, amount: cartItem.amount + 1 };
        } else {
          // console.log("not matched")
          return item;
        }
      });
      setCart(newCart);
    } else {
      setCart([...Cart, newItem]);
    }
  };

  const removeFromCart = (id) => {
    const newCart = Cart.filter((item) => {
      return item.id !== id;
    });
    setCart(newCart);
  };

  const clearCart = () => {
    setCart([]);
  };

  // increaseAmount
  const increaseAmount = (id) => {
    const cartItem = Cart.find((item) => item.id === id);
    addToCart(cartItem, id);
  };

  // decreaseAmount
  const decreaseAmount = (id) => {
    const cartItem = Cart.find((item) => {
      return item.id === id;
    });
    if (cartItem) {
      const newCart = Cart.map((item) => {
        if (item.id === id) {
          return { ...item, amount: cartItem.amount - 1 };
        } else {
          return item;
        }
      });
      setCart(newCart);
    }
    if (cartItem.amount < 2) {
      removeFromCart(id);
    }
  };

  // console.log(Cart);
  return (
    <CartContext.Provider
      value={{
        Cart,
        addToCart,
        removeFromCart,
        clearCart,
        increaseAmount,
        decreaseAmount,
        itemAmount,
        total,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
