import Dataphones from "../Dataphones";
import { Link } from "react-router-dom";
import { useState } from "react";
import Navbar from "./Navbar";
function Productdetails() {
  // Setting Counter State
  const [count, setCount] = useState(1);
  function add() {
    setCount((prevCount) => prevCount + 1);
  }
  function subtract() {
    if (count > 0) setCount((prevCount) => prevCount - 1);
  }

  //Adding to Cart

  return (
    <>
      {/* <Navbar /> */}

      <div className="u-margin-bottom"></div>

      <div className="product-container">
        <div className="product__img-container">
          <img
            src={`${Dataphones[0].phoneImg}`}
            alt={`${Dataphones[0].phoneName}`}
            className="product__img"
          />
        </div>
        <div>
          <div className="product__name">{Dataphones[0].phoneName}</div>
          <div className="product__price">{Dataphones[0].phonePrice}</div>
          <p className="product__info">
            This is the product page. Lorem ipsum dolor sit amet, consectetur
            adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat. Duis aute irure dolor in reprehenderit in voluptate velit
            esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum.
          </p>
          <div className="form">
            <p>Quantity</p>
            <button onClick={subtract} className="counter--minus">
              –
            </button>
            <input
              type="text"
              value={`${count}`}
              className="form__input"
              name="productQuantity"
              placeholder="Quantity"
              // onChange={handleChange}
            />
            <button onClick={add} className="counter--plus">
              +
            </button>
            <div className="button--2-container">
              <a className="button--1">Add to cart</a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Productdetails;
