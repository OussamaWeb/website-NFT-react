import React from "react";
import './App.css';
import './all.min.css';
import { Main } from "./components/pages/Main";
import { Routes, Route } from 'react-router-dom';
import { Home } from "./components/pages/Home";
import { Slidebar } from "./components/pages/slidebar";
import { Context } from './context/Context'
import { Market } from "./components/pages/Market";
import { DetailsMarket } from "./components/detailsMarket/DetailsMarket";
import { Create } from "./components/pages/Create";
import { Contact } from "./components/pages/Contact";
import { Connect } from "./components/pages/Connect";

export default function App() {
  return (
    <Context>
      <div className="app relative h-screen">
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/home" element={<Home />} />
          <Route path="/market" element={<Market />} />
          <Route path="/create" element={<Create />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/connect" element={<Connect />} />
          <Route path="/detailsMarket" element={<DetailsMarket />} />
        </Routes>
        <Slidebar />
      </div>
    </Context>
  )
}