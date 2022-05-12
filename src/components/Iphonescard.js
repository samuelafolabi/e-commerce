import { Link } from "react-router-dom";
import { useStateValue } from "../StateProvider";
function IphonesCard(props) {
  const [{ basket }, dispatch] = useStateValue();
  //dispatching card data on Click
  const addToBasket = () => {
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: props.id,
        phoneName: props.phoneName,
        phoneImg: props.phoneImg,
        phonePrice: props.phonePrice,
      },
    });
  };

  return (
    <>
      <div className="card-container">
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
            <a onClick={addToBasket} className="button--1">
              Add to Cart
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
export default IphonesCard;
