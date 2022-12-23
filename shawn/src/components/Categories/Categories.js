import React from 'react' ; 
import {Link} from 'react-router-dom' ; 
import "./Categories.scss"
const Categories = () => {
  return (
    <div className='categories'>
      <div className="col">
 <div className="row">
    <img src="/img/shoes1.jpeg" alt="" />
    <button>
        <Link className='link' to="/products/1">Sale</Link>
    </button>
 </div>
 <div className="row">
 <img src="/img/bag3.jpeg" alt="" />
    <button>
        <Link className='link' to="/products/1">Sale</Link>
    </button>
 </div>
      </div>
      <div className="col">
        <div className="row">
        <img src="/img/coat1.jpeg" alt="" />
    <button>
        <Link className='link' to="/products/1">Sale</Link>
    </button>
        </div>
      </div>
      <div className="col large">
        <div className="row">
            <div className="col">
                <div className="row">
                <img src="/img/hoodie1.jpeg" alt="" />
    <button>
        <Link className='link' to="/products/1">Sale</Link>
    </button>
                </div>
            </div>
            <div className="col">
                <div className="row">
                <img src="/img/dress1.jpeg" alt="" />
    <button>
        <Link className='link' to="/products/1">Sale</Link>
    </button>
                </div>
            </div>
        </div>
        <div className="row">
        <img src="/img/bag1.jpeg" alt="" />
    <button>
        <Link className='link' to="/products/1">Sale</Link>
    </button>
        </div>
      </div>
    </div>
  )
}

export default Categories ; 
