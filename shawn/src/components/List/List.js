import React from 'react'
import "./List.scss";
import Card from '../Card/Card';
const List = () => {
    const data = [
        {
          id: 1,
          img: "/img/h1.jpeg",
         
          title: "Dress",
          isNew: true,
          oldPrice: 2156,
          price: 1950,
        },
        {
          id: 2,
          img: "/img/necklace1.jpeg",
          title: "Chokers Necklace",
          isNew: true,
          oldPrice: 679,
          price: 552,
        },
        {
          id: 3,
          img: "/img/bag1.jpeg",
          title: "Crossbody Bag",
          isNew: true,
          oldPrice: 1990,
          price: 1290,
        },
        {
          id: 4,
          img: "/img/shoes4.jpeg",
          title: "Sneakers",
          isNew: true,
          oldPrice: 990,
          price: 590,
        },
        {
          id: 4,
          img: "/img/h3.jpeg",
          title: "Jacket",
          isNew: true,
          oldPrice: 1566,
          price: 1232,
        },
        {
          id: 4,
          img: "/img/h4.jpeg",
          title: "Top",
          isNew: true,
          oldPrice: 1178,
          price: 865,
        },
      ];
  return (
    <div className='list'>
      {data?.map(item =>(

<Card item={item} key={item.id} />
))}
    </div>
  )
}

export default List
