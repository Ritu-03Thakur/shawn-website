import React from 'react'
import {Link} from 'react-router-dom' ; 
import "./Card.scss" ; 
const Card = ({item}) => {
  return (
   <Link to={`/product/${item.id}`} className = "link">
<div className="card">
  <div className="image">
    <img src={item.img} alt="" className="first" />
    <img src={item.img2} alt="" className="second" />
  </div>
  <h2>{item.title}</h2>
  <div className="prices">
    <h3>Rs {item.oldPrice}</h3>
    <h3>Rs {item.price}</h3>
  </div>
</div>
   </Link>
  )
}

export default Card ; 
