import { useState } from "react";
import "./Product.scss";
import  AddShoppingCartIcon  from "@mui/icons-material/AddShoppingCart";
import  FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import BalanceIcon from "@mui/icons-material/Balance";

export default function Product() {
  const [selected, setSelected] = useState(0);
  const [quantity, setQuantity] = useState(1);

  const images = ["/img/dress1.jpeg", "/img/dress2.jpeg"];
  return (
    <>
      <div className="product">
        <div className="left">
          <div className="images">
            <img src={images[0]} alt="" onClick={(e) => setSelected(0)} />
            <img src={images[1]} alt="" onClick={(e) => setSelected(1)} />
          </div>
          <div className="mainImg">
            <img src={images[selected]} alt="" />
          </div>
        </div>
        <div className="right">
          <h1>Simplicity Sweater Dress</h1>
          <span className="price">Rs 1320</span>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus
            consequatur, eius nobis vitae velit alias assumenda illum! Nostrum
            distinctio, sunt quaerat fuga eaque pariatur, quas inventore unde
            adipisci voluptatibus sequi numquam rem, molestias accusamus
            dignissimos.
          </p>
          <div className="quantity">
            <button onClick={() => setQuantity((quantity) =>quantity === 1 ? 1 : quantity -1  )}>-</button>
            {quantity}
            <button onClick={e => setQuantity(quantity + 1 )}>+</button>
          </div>

          <button className="add">
            <AddShoppingCartIcon/> ADD TO CART
          </button>
          <div className="link">
            <div className="item">
              <FavoriteBorderIcon/> ADD TO WISH LIST
            </div>
            <div className="item">
              <BalanceIcon/> ADD TO COMPARE
            </div>
          </div>

          <div className="info">
            <span>Vendor : polo</span>
            <span>Product Type : Coat </span>
            <span>Tags : T-shirt , Women , Top</span>
          </div>
          <hr />

          <div className="details">
            <span>DESCRIPTION</span>
            <hr />
            <span>ADDITIONAL INFORMATION</span>
            <hr />
            <span>FAQ</span>
          </div>
        </div>
      </div>
    </>
  );
}
