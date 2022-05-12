function IwatchesCard(props) {
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
            <a className="button--1" href="#">
              Add to cart
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
export default IwatchesCard;
