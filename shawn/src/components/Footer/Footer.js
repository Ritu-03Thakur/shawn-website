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
            <span>Accessories</span>
            <span>New Accessories</span>
          </div>
          <div className="item">
            <h1>Link</h1>
            <span>FAQ</span>
            <span>Pages</span>
            <span>Stores</span>
            <span>Compare</span>
            <span>Cookies</span>
          </div>
          <div className="item">
            <h1>About</h1>
            <span>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro
              libero expedita quod architecto, deleniti repellendus harum
              pariatur, assumenda consectetur nesciunt cumque quidem, modi fugit
               impedit!
            </span>
          </div>
          <div className="item">
          <h1>Contact</h1>
            <span>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro
              libero expedita quod architecto, deleniti repellendus harum
              pariatur, assumenda consectetur nesciunt cumque quidem, modi fugit
              impedit!
            </span>
          </div>
        </div>
        <div className="bottom">
            <div className="left">
                <span className="logo">SHAWN</span>
                <span className="copyright">Copyright 2023. All Rights Reserved</span>
            </div>
            <div className="right">
                <img src="/img/payment.jpeg" alt="" height= {30} width = {500}/>
            </div>
        </div>
      </div>
    </>
  );
}
