import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/navbar";
import { Cart } from "./pages/cart";
import { Shop } from "./pages/shop";
import { ShopContextProvider } from "./context/shop-context";

function App() {
  return (
    <div className="App">
      <ShopContextProvider>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" Component={Shop} />
            <Route path="/cart" Component={Cart} />
          </Routes>
        </BrowserRouter>
      </ShopContextProvider>
    </div>
  );
}

export default App;
