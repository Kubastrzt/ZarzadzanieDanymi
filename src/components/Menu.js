import React from "react";
import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from "react-router-dom";
import '../index.css'
import Logo from "../images/logos/logo_transparent.png"
import { Error } from "../pages/Error";
import CartPage from "../pages/CartPage";
import { Home } from "../pages/Home";
import { useSelector, useDispatch } from "react-redux";
import eXit from '../images/x-solid-white.png'
import MenProducts from "../pages/MenProducts";
import WomenProducts from "../pages/WomenProducts";
import ElectronicsProducts from "../pages/ElectronicsProducts";
import Accessories from "../pages/AccesoriesProducts";
import ProductPage from "../pages/ProductPage";
import Login from "../pages/Login";
import Register from "../pages/Register"
import Favourites from "../pages/Favourites";
import Navi from './NavigationSRC/navi'

function Menu() {
  const cart = useSelector((state)=>state.cart)
  const account = useSelector((state)=>state.login)

   const fadeIn={
     transform: "translateX(0)",
     transitionDuration: "0.3s"
   }
   const fadeOut={
     transform: "translateX(-100%)",
     transitionDuration: "0.3s"
   }
  return (
      <Navi/>
  );
}

export default Menu;
