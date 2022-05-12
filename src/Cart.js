import Subtotal from "./components/Subtotal";
import CartCard from "./components/CartCard";
import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";
import { useEffect, useRef } from "react";
// import { LottiePlayer } from "@lottiefiles/lottie-player";
import lottie from "lottie-web";
import { Player, Controls } from "@lottiefiles/react-lottie-player";

function Cart() {
  const [{ basket }] = useStateValue();

  return (
    <>
      <div className="cart">
        <div>
          {basket.length === 0 ? (
            <div className="no-items">
              <div>
                <h2>You have no items in your basket</h2>
              </div>

              <Player
                autoplay
                loop
                src="https://assets10.lottiefiles.com/packages/lf20_bxcy3zpm.json"
                style={{ height: "30rem", width: "30rem" }}
              ></Player>

              <div>
                <Link to={"/"} className="button--1">
                  Buy Some Here
                </Link>
              </div>
            </div>
          ) : (
            <div>
              <div className="checkout__left">
                <h3>Here are your items{basket.length}</h3>
                {basket.map((item) => {
                  return <CartCard key={item.id} {...item} />;
                })}
              </div>
              <div className="checkout__right">
                <Subtotal />
              </div>
            </div>
          )}
        </div>
        {/* {basket.length > 0 && (
          <div className="checkout__right">
            <Subtotal />
          </div>
        )} */}
      </div>
    </>
  );
}

export default Cart;
