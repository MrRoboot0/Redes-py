import React from "react";
import { Body3 } from "./components/Body3";
import { Sidebar } from "./components/Sidebar";
import "./styles.css";

export default function User1() {
  return (
    <div className="main">
      <Sidebar />
      <Body3 />
    </div>
  );
}