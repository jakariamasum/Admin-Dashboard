import {
  FaBell,
  FaExpandAlt,
  FaGlobe,
  FaMoon,
  FaSearch,
  FaUser,
} from "react-icons/fa";
import { BiChevronDown } from "react-icons/bi";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex flex-col sm:flex-row justify-between items-center bg-white p-4 shadow-md">
      <div className="flex flex-col sm:flex-row gap-4">
        <Link className="flex items-center font-semibold text-[#5D62F2] hover:bg-[#DEDFFC]">
          <span className="bg-[#DEDFFC]">Dashb</span>oard <BiChevronDown />
        </Link>
        <span className="hidden sm:inline-block">|</span>
        <Link className="flex items-center font-semibold text-[#5D62F2] hover:bg-[#DEDFFC]">
          <span className="bg-[#DEDFFC]">Appli</span>cation <BiChevronDown />
        </Link>
        <span className="hidden sm:inline-block">|</span>
        <Link className="text-[#5D62F2] font-semibold hover:bg-[#DEDFFC]">
          <span className="bg-[#DEDFFC]">More </span>pages
        </Link>
      </div>
      <div className="flex items-center mt-4 sm:mt-0 relative">
        <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
        <input
          type="text"
          placeholder="Search Here..."
          className="pl-10 pr-2 py-2 rounded bg-[#F6F8FC]"
        />
      </div>
      <div className="flex mt-4 sm:mt-0 space-x-4 ">
        <FaMoon className="cursor-pointer" />
        <FaBell className="cursor-pointer" />
        <FaGlobe className="cursor-pointer" />
        <FaExpandAlt className="cursor-pointer" />
        <FaUser className="cursor-pointer" />
      </div>
    </div>
  );
};

export default Navbar;
