import React from "react";
import { Body } from "./components/Body";
import { Sidebar } from "./components/Sidebar";
import "./styles.css";

 const Home =() => {
  return (
    <div className="main">
      <Sidebar />
      <Body />
    </div>
  );
}
export default Home;