import "./App.css";
import Cart from "./pages/Cart";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Product from "./pages/Product";
import ProductList from "./pages/ProductList";
import Register from "./pages/Register";

import { Routes, Route, Navigate } from "react-router-dom";
import CheckoutStatus from "./pages/CheckoutStatus";
import Checkout from "./pages/Checkout";
import Return from "./pages/Return";
import { useSelector } from "react-redux";
import ProtectedRoutes from "./pages/ProtectedRoutes";

function App() {
  // temporary for user authentication
  const userAuth = useSelector((state) => state.user.currentUser);

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route
          path="/login"
          element={userAuth ? <Navigate to="/" /> : <Login />}
        />
        <Route path="/products/:category?" element={<ProductList />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout-status" element={<CheckoutStatus />} />
        <Route
          path="/checkout"
          element={
            <ProtectedRoutes>
              <Checkout />
            </ProtectedRoutes>
          }
        />
        <Route path="/return" element={<Return />} />
      </Routes>
    </>
  );
}

export default App;
