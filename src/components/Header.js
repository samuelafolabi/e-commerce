import ReactTypingEffect from "react-typing-effect";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
function Header() {
  return (
    <>
      <header className="header">
        <div className="header__textbox">
          <ReactTypingEffect
            text={["iPhones", "Airpods", "iWatch"]}
            cursorRenderer={(cursor) => <>{cursor}</>}
            typingDelay={500}
            speed={150}
            eraseSpeed={150}
            displayTextRenderer={(text, i) => {
              return (
                <>
                  {text.split("").map((char, i) => {
                    const key = `${i}`;
                    return <span key={key}>{char}</span>;
                  })}
                </>
              );
            }}
          />
          at the Best Prices
          <div>
            <a className="header__button" href="shop-now">
              Shop Now
            </a>
          </div>
        </div>
      </header>
      <div className="u-margin-bottom"></div>
    </>
  );
}

export default Header;
