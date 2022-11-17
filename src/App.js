import React from "react";
import Home from "./Home";
import "./styles.css";
import { BrowserRouter, Link, Route, Router, Routes } from "react-router-dom";
import User from "./User";
import User1 from "./User1";
import User2 from "./User2.js";

export default function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route exact path="/" element={<Home/>} />
      <Route exact path="/user" element={<User />} />
      <Route exact path="/user1" element={<User1 />} />
      <Route exact path="/user2" element={<User2 />} />
      
    </Routes>
  </BrowserRouter>
  );
}
