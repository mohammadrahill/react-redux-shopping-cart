import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Cart from "./pages/Cart";
import cartReducer from "./reducers/cartSlice";
import productReducer from "./reducers/productSlice";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import Footer from "./components/Footer";

function App() {
  const store = configureStore({
    reducer: {
        cart: cartReducer,
        product: productReducer,
    }
  });



  return (
    <div className="App">
      <Provider store={store} >
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
