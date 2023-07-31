import React, { useContext, useState ,useEffect } from "react";
import { SidebarContext } from "../contexts/SidebarContext";
import { CartContext } from "../contexts/CartContext";
import { BsBag } from "react-icons/bs";
import { Link } from "react-router-dom";
import Logo from "../img/logo.svg";

const Header = () => {
  // header state
  const [IsActive, setIsActive] = useState(false);
  const { isOpen, setisOpen } = useContext(SidebarContext);
  const { itemAmount } = useContext(CartContext);
  // even listener
useEffect(() => {
  window.addEventListener('scroll',  () => {
    window.scrollY >60? setIsActive(true): setIsActive(false);
  });
})

  return (
    <header className={` ${IsActive ? "bg-white py-4 shadow-md" : "bg-none py-6" } fixed w-full z-10 transition-all`}>
      <div className=" container mx-auto flex items-center justify-between h-full">
        <Link to={"/"}>
          <div>
            <img className=" w-[40px]" src={Logo} alt="" />
          </div>
        </Link>
        <div
          className="cursor-pointer flex relative "
          onClick={() => {
            setisOpen(!isOpen);
          }}
        >
          <BsBag className="text-2xl" />
          <div className=" bg-red-500 absolute -rght-2 -bottom-2 text-[12px] w-[18px] h-[18px] text-white rounded-full flex justify-center items-center ">
            {itemAmount}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
