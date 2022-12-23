import React, { useState } from "react";
import { useParams } from "react-router-dom";
import List from "../../components/List/List";
import "./Products.scss";
const Products = () => {
  const catId = parseInt(useParams().id) 
  const [maxPrice , SetMaxPrice] = useState(1000);
  const [sort , setSort] = useState(null);
  return (
    <div className="products">
      <div className="left">
        <div className="filterItem">
          <h2>Product Categories</h2>
          <div className="inputItem">
            <input type="checkbox" id="1" value={1} />
            <label htmlFor="1">Shoes</label>
          </div>

          <div className="inputItem">
            <input type="checkbox" id="2" value={2} />
            <label htmlFor="2">Clothes</label>
          </div>

          <div className="inputItem">
            <input type="checkbox" id="3" value={3} />
            <label htmlFor="3">Accessories</label>
          </div>
        </div>
        <div className="filterItem">
          <h2>Filter By Price</h2>
          <div className="inputItem">
            <span>0</span>
            <input type="range" min={0}  max={1000} onChange = {(e) =>SetMaxPrice(e.target.value) }/>
            <span>{maxPrice} </span>
          </div>
        </div>
        <div className="filterItem">
          <h2>Sort By</h2>
          <div className="inputItem">
            <input type="radio" name="price" id="asc" value="asc" onChange={e => setSort("asc")}/>
            <label htmlFor="asc">Price (Lowest first)</label>
          </div>

          <div className="inputItem">
            <input type="radio" name="price" id="desc" value="desc" onChange={e => setSort("desc")}/>
            <label htmlFor="desc">Price (Highest first)</label>
          </div>
        </div>
      </div>
      <div className="right">
        <img src="/img/home2.jpeg" alt=""  className="catImg"/>
        <List catId = {catId} maxPrice = {maxPrice} sort = {sort} />
      </div>
    </div>
  );
};

export default Products;
