import React from "react";
import "./FeaturedProducts.scss";
 import Card from "../Card/Card" ; 
const FeaturedProducts = (props) => {
  const data = [
    {
      id: 1,
      img: `${props.i1}`,
      img2: `${props.i2}`,
      title: "Simplicity Sweater Dress",
      isNew: true,
      oldPrice: 1490,
      price: 1192,
    },
    {
      id: 2,
      img: `${props.s1}`,
      img2: `${props.s2}`,
      title: "Sneakers",
      isNew: true,
      oldPrice: 556,
      price: 395,
    },
    {
      id: 3,
      img: `${props.n1}`,
      img2: `${props.n2}`,
      title: "Chokers Necklace",
      isNew: true,
      oldPrice: 679,
      price: 552,
    },
    {
      id: 4,
      img: `${props.b1}`,
      img2: `${props.b2}`,
      title: "Crossbody Bag",
      isNew: true,
      oldPrice: 1990,
      price: 1290,
    },
  ];
  return (
    <div className="featuredProducts">
      <div className="top">
        <h1>{props.type} Products</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet esse,
          nobis id labore dolor corporis ex commodi quasi corrupti quisquam,
          consequatur quo nihil numquam? Qui consectetur aspernatur porro
          veritatis. Ex asperiores aperiam obcaecati sed a!
        </p>
      </div>
      <div className="bottom">
        {data.map(item =>(

        <Card item={item} key={item.id} />
        ))}
      </div>
    </div>
  );
};

export default FeaturedProducts;
