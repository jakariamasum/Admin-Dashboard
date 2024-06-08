import { useState } from "react";
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
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className="lg:w-40 flex flex-row lg:items-start lg:flex-col sm:items-center bg-gray-800 text-white p-4">
      <div className="flex items-center">
        <h2 className="text-2xl font-bold mb-5 mr-5">Tivo</h2>
        <button
          onClick={toggleSidebar}
          className="block sm:hidden text-white focus:outline-none focus:text-white"
        >
          <svg
            className="h-6 w-6 fill-current"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            {isOpen ? (
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M5 6H19C19.5523 6 20 6.44772 20 7C20 7.55228 19.5523 8 19 8H5C4.44772 8 4 7.55228 4 7C4 6.44772 4.44772 6 5 6ZM19 12H5C4.44772 12 4 11.5523 4 11C4 10.4477 4.44772 10 5 10H19C19.5523 10 20 10.4477 20 11C20 11.5523 19.5523 12 19 12ZM19 16H5C4.44772 16 4 15.5523 4 15C4 14.4477 4.44772 14 5 14H19C19.5523 14 20 14.4477 20 15C20 15.5523 19.5523 16 19 16Z"
              />
            ) : (
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M4 6H20C20.5523 6 21 6.44772 21 7C21 7.55228 20.5523 8 20 8H4C3.44772 8 3 7.55228 3 7C3 6.44772 3.44772 6 4 6ZM4 12H20C20.5523 12 21 11.5523 21 11C21 10.4477 20.5523 10 20 10H4C3.44772 10 3 10.4477 3 11C3 11.5523 3.44772 12 4 12ZM3 16C3 16.5523 3.44772 17 4 17H20C20.5523 17 21 16.5523 21 16C21 15.4477 20.5523 15 20 15H4C3.44772 15 3 15.4477 3 16Z"
              />
            )}
          </svg>
        </button>
      </div>
      <ul
        className={`sm:flex sm:flex-row sm:items-center sm:space-x-4 ${
          isOpen ? "block" : "hidden"
        }`}
      >
        <div className="lg:flex-col">
          <li className="mb-4  items-center">
            <Link
              to="/dashboard"
              onClick={closeMenu}
              className="flex gap-1 items-center"
            >
              <FaTachometerAlt />
              <span>Dashboard</span>
            </Link>
          </li>
          <li className="mb-4 flex items-center">
            <Link
              to="/chart"
              onClick={closeMenu}
              className="flex gap-1 items-center"
            >
              <FaChartPie className="mr-3" />
              Chart
            </Link>
          </li>
          <li className="mb-4 flex items-center">
            <Link
              to="/ecommerce"
              onClick={closeMenu}
              className="flex gap-1 items-center"
            >
              <FaShoppingCart className="mr-3" />
              Ecommerce
            </Link>
          </li>
          <li className="mb-4 flex items-center">
            <Link
              to="/email"
              onClick={closeMenu}
              className="flex gap-1 items-center"
            >
              <FaEnvelope className="mr-3" />
              Email
            </Link>
          </li>
          <li className="mb-4 flex items-center">
            <Link
              to="/chat"
              onClick={closeMenu}
              className="flex gap-1 items-center"
            >
              <FaComments className="mr-3" />
              Chat
            </Link>
          </li>
          <li className="mb-4 flex items-center">
            <Link
              to="/users"
              onClick={closeMenu}
              className="flex gap-1 items-center"
            >
              <FaUsers className="mr-3" />
              Users
            </Link>
          </li>
          <li className="mb-4 flex items-center">
            <Link
              to="/bookmarks"
              onClick={closeMenu}
              className="flex gap-1 items-center"
            >
              <FaBookmark className="mr-3" />
              Bookmarks
            </Link>
          </li>
        </div>
      </ul>
    </nav>
  );
};

export default Sidebar;
