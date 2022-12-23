import './Navbar.scss' ; 
import { Link } from "react-router-dom";

import Cart from "../Cart/Cart";
import SearchIcon from "@mui/icons-material/Search";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { useState } from 'react';

export default function Navbar() {
  const [open , setOpen] = useState(false) ; 
  return (
    <>
      <div className="navbar">
        <div className="wrapper">
          <div className="left">
            <div className="item item-logo">
              <img src="/img/logo.jpeg"  alt="" className="logo"/>
            </div>
           
            <div className="item">
              <Link className="link" to="/products/1">Dress</Link>
            </div>
            <div className="item">
              <Link className="link" to="/products/2">Shoes</Link>
            </div>
            <div className="item">
              <Link className = "link" to="/products/3">Accessories</Link>
            </div>
          </div>
          <div className="center">
            <Link className="link" to="/">SHAWN</Link>
          </div>
          <div className="right">
            <div className="item">
              <Link className="link" to="/">Home</Link>
            </div>
            <div className="item">
              <Link className="link" to="/">About</Link>
            </div>
            <div className="item">
              <Link className="link" to="/">Contact</Link>
            </div>
            <div className="item">
              <Link className="link" to="/">Stores</Link>
            </div>
            <div className="icons">
              <SearchIcon />
              <PersonOutlineOutlinedIcon />
              <FavoriteBorderOutlinedIcon />
              <div className="cardIcon"onClick={() =>setOpen(!open)}>
                <ShoppingCartOutlinedIcon />
                <span>0</span>
              </div>
            </div>
          </div>
        </div>
        {open && <Cart/>}
      </div>
    </>
  );
}
