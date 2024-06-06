import { Link } from "react-router-dom";
import {
  FaTachometerAlt,
  FaChartPie,
  FaShoppingCart,
  FaEnvelope,
  FaComments,
  FaUsers,
  FaBookmark,
} from "react-icons/fa";

const Sidebar = () => {
  return (
    <div className="w-64 bg-[#171829] text-white h-screen p-5">
      <h2 className="text-2xl font-bold mb-5">Tivo</h2>
      <ul>
        <li className="mb-4 flex items-center">
          <FaTachometerAlt className="mr-3" />
          <Link to="/dashboard">Dashboard</Link>
        </li>
        <li className="mb-4 flex items-center">
          <FaChartPie className="mr-3" />
          <Link to="/chart">Chart</Link>
        </li>

        <li className="mb-4 flex items-center">
          <FaShoppingCart className="mr-3" />
          <Link to="/ecommerce">Ecommerce</Link>
        </li>
        <li className="mb-4 flex items-center">
          <FaEnvelope className="mr-3" />
          <Link to="/email">Email</Link>
        </li>
        <li className="mb-4 flex items-center">
          <FaComments className="mr-3" />
          <Link to="/chat">Chat</Link>
        </li>
        <li className="mb-4 flex items-center">
          <FaUsers className="mr-3" />
          <Link to="/users">Users</Link>
        </li>
        <li className="mb-4 flex items-center">
          <FaBookmark className="mr-3" />
          <Link to="/bookmarks">Bookmarks</Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
