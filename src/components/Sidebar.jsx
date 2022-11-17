import { sidebarData } from "../data";
import "../styles.css";
export const Sidebar = () => {
  return (
    <div className="sidebar">
      {sidebarData.map((data, i) => (
        <div className="sidebar-menu">
          <div>{data.icon}</div>
          <div>{data.label}</div>
        </div>
      ))}
    </div>
  );
};
