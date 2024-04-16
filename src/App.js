import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Pages/Home";
import PNF from "./components/Pages/PNF";
import Collections from "./components/Pages/Collections";
import SingleJewel from "./components/Pages/SingleJewel";
import Cart from "./components/Pages/Cart";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/collections" element={<Collections />} />
          <Route path="/collections/:id" element={<SingleJewel />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="*" element={<PNF />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
