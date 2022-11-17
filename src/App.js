import React from "react";
import { Body } from "./components/Body";
import { Sidebar } from "./components/Sidebar";
import "./styles.css";

export default function App() {
  return (
    <div className="main">
      <Sidebar />
      <Body />
    </div>
  );
}
