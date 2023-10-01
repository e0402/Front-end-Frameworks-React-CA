import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="flex justify-between bg-gray-900 text-white w-screen">
      <div className="px-5 xl:px-12 py-6 flex w-full items-center">
        <Link to="/" className="text-3xl font-bold font-heading">
          Logo Here
        </Link>
        <ul className="hidden md:flex px-4 mx-auto font-semibold font-heading space-x-12">
          <li><Link to="/" className="hover:text-gray-200">Home</Link></li>
        </ul>
        <div className="hidden xl:flex items-center space-x-5 items-center">
          <a className="hover:text-gray-200" href="#">
          </a>
          <a className="flex items-center hover:text-gray-200" href="#">
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
