import CurrencyFormat from "react-currency-format";
import { useStateValue } from "../StateProvider";
import { Player, Controls } from "@lottiefiles/react-lottie-player";
function Subtotal() {
  const [{ basket }, dispatch] = useStateValue();
  const getCartTotal = (basket) =>
    basket?.reduce((amount, item) => item.phonePrice + amount, 0);
  return (
    <>
      {/* <Player
        autoplay
        loop
        src="https://assets4.lottiefiles.com/packages/lf20_l8lfyhsl.json"
        style={{ height: "30rem", width: "30rem" }}
      ></Player> */}
      <div className="subtotal">
        <p className="">No of items:{basket.length}</p>

        <CurrencyFormat
          renderText={(value) => (
            <h1>
              Total Amount: <strong>{value}</strong>
            </h1>
          )}
          decimalScale={2}
          value={getCartTotal(basket)}
          displayType={"text"}
          thousandSeparator={true}
          prefix={"$"}
        />
        <div className="button--2-container">
          <a className="button--1" href="#">
            Checkout
          </a>
        </div>
      </div>
    </>
  );
}

export default Subtotal;
