import "./Navbar.scss";

import Cart from "../Cart/Cart";
import SearchIcon from "@mui/icons-material/Search";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { useState } from "react";
import {Link} from 'react-router-dom' ; 

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <nav className="navbar">
        <div className="wrapper">
          <Link to = "/" className="item-logo">
            <img src="/img/logo.jpeg" alt="" />
          </Link>
        
          <Link to = "/products/1" className="link">PRODUCTS</Link>
        
          <div className="icons">
            <SearchIcon />
            <PersonOutlineOutlinedIcon />
            <FavoriteBorderOutlinedIcon />
            <div className="cardIcon" onClick={() => setOpen(!open)}>
              <ShoppingCartOutlinedIcon />
              <span>0</span>
            </div>
          </div>
        </div>

        {open && <Cart />}
      </nav>
    </>
  );
}
