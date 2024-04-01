import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Product from "./components/Pages/Product";
import Home from "./components/Pages/Home";
import img from '../src/Assets/home/one.jpeg'
import PNF from "./components/Pages/PNF";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/collections" element={<Product/>} />
          <Route path="*" element={<PNF/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
