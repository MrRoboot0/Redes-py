import { FaSearch } from "react-icons/fa";
import { IoNotificationsSharp } from "react-icons/io5";

export const Header = () => {
  return (
    <div className="header">
      <img
        src="https://ichef.bbci.co.uk/news/640/amz/worldservice/live/assets/images/2015/04/17/150417194023_einstein-lengua.jpg"
        alt=""
      />
      <div>
        <FaSearch color="#fff" />
        <IoNotificationsSharp color="#fff" />
      </div>
    </div>
  );
};
