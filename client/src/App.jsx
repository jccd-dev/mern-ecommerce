import "./App.css";
import Cart from "./pages/Cart";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Product from "./pages/Product";
import ProductList from "./pages/ProductList";
import Register from "./pages/Register";

import { Routes, Route, Navigate } from "react-router-dom";
import Success from "./pages/Success";

function App() {
  // temporary for user authentication
  const userAuth = true;
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
        <Route path="/success" element={<Success />} />
      </Routes>
    </>
  );
}

export default App;
