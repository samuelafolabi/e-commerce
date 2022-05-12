import Homepage from "./Homepage";
import Store from "./Store";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Productpage from "./Productpage";
import Cart from "./Cart";
import Navbar from "./components/Navbar";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="store" element={<Store />} />
        <Route path="product-page" element={<Productpage />} />
        <Route path="cart" element={<Cart />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
