import { Link } from "react-router-dom";
import { useStateValue } from "../StateProvider";
function Navbar() {
  const [{ basket }, dispatch] = useStateValue();
  return (
    <nav className="nav">
      <Link to={"/"} className="nav__brandname">
        Applebuy
      </Link>
      {/* <Link to={"/store"} className="nav__text nav__right">
        Store
      </Link> */}
      <Link to={"/cart"} className="nav__text nav__right">
        Cart <span>{basket?.length}</span>
      </Link>
    </nav>
  );
}
export default Navbar;
