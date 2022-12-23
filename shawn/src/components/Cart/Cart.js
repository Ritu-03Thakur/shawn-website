import React from 'react' ; 
import "./Cart.scss" ; 
import  DeleteOutlinedIcon  from '@mui/icons-material/DeleteOutlined';
const Cart = () => {
    const data = [
        {
            id: 1,
            img: "/img/d3.jpeg",
           
            title: "Button Blazer Dress",
            desc: "Dress",
            isNew: true,
            oldPrice: 1490,
            price: 1192,
          },
          {
            id: 2,
            img: "/img/shoes3.jpeg",
            title: "Sneakers",
            desc: "Color : Pink",
            isNew: true,
            oldPrice: 556 ,
            price: 395,
          }
    ]
  return (
    <div className='cart'>
      <h1>Products in your cart</h1>
      {data?.map((item) =>(
<div className="item" key={item.id}>
  <img src={item.img} alt="" />
  <div className="details">
    <h1>{item.title} </h1>
    <p>{item.desc?.substring(0 , 100)} </p>
    <div className="price"> 1 X Rs{item.price} </div>
  </div>
  <DeleteOutlinedIcon />
</div>
      ))}
      <div className="total">
        <span>SUBTOTAL</span>
        <span>Rs1230</span>
      </div>
      <button>PROCEED TO CHECKOUT</button>
      <span className='reset'>Reset Cart</span>
    </div>
  )
}

export default Cart ;
