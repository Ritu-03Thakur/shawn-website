import "./Footer.scss" ; 

export default function Footer() {
  return (
    <>
      <div className="footer">
        <div className="top">
          <div className="item">
            <h1>Categories</h1>
            <span>Women</span>
            <span>Men</span>
            <span>Shoes</span>
           
          </div>
          <div className="item">
            <h1>Link</h1>
            <span>FAQ</span>
            <span>Pages</span>
            <span>Stores</span>
           
          </div>
          <div className="item">
            <h1>Trending</h1>
            <span>Stores</span>
            <span>Compare</span>
            <span>Cookies</span>
          </div>
          <div className="item">
          <h1>Popular</h1>
           
            <span>Shoes</span>
            <span>Accessories</span>
            <span>New Accessories</span>
         
          </div>
        </div>
        <div className="bottom">
            <div className="left">
                <span className="logo">SHAWN</span>
                <span className="copyright">Copyright 2023. All Rights Reserved</span>
            </div>
            <div className="right">
                <img src="/img/payment.jpeg" alt="" />
            </div>
        </div>
      </div>
    </>
  );
}
