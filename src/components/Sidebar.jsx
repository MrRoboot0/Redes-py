import { useState } from "react";
import { sidebarData } from "../data";
import "../styles.css";
import { FaChartLine, FaHome } from "react-icons/fa";
export const Sidebar = () => {

  const [rutas, setRuta] = useState('');


  return (
    
    <div className="sidebar">
        <a href="/" className="sidebar-menu" >
          <div className="icon"><FaHome /></div>
          <div>Monitor</div>
          
        </a>
        <a href="/user" className="sidebar-menu" >
          <div className="icon"><FaChartLine /></div>
          <div>Sala 1</div>
          
        </a>
        <a href="/user1" className="sidebar-menu" >
          <div className="icon"><FaChartLine /></div>
          <div>Sala 2</div>
          
        </a>
        <a href="/user2" className="sidebar-menu" >
          <div className="icon"><FaChartLine /></div>
          <div>Sala 3</div>
          
        </a>
    
    </div>
  );
};
