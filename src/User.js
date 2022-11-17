import React from "react";
import { Body2 } from "./components/Body2";
import { Sidebar } from "./components/Sidebar";
import "./styles.css";

export default function User() {
  return (
    <div className="main">
      <Sidebar />
      <Body2 />
    </div>
  );
}