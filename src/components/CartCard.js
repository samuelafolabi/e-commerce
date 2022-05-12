import { useStateValue } from "../StateProvider";
function CartCard(props) {
  const [{ basket }, dispatch] = useStateValue();

  const removeFromBasket = () => {
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id: props.id,
    });
  };
  return (
    <>
      <div className="cartcard-container">
        <div className="card">
          <div className="img-container">
            <img
              src={`${props.phoneImg}`}
              alt={`${props.phoneName}`}
              className="phone__img"
            />
          </div>

          <div className="phone__name">{props.phoneName}</div>
          <div className="phone__price">${props.phonePrice}</div>
          <div className="button--1-container">
            {/* <Link to="/product-page" className="button--1" href="#">
              View Product
            </Link> */}
            <a className="button--3" onClick={removeFromBasket}>
              Remove from Cart
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
export default CartCard;
