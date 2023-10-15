import React, { useState } from "react";
import { Link } from "react-router-dom";
import { AiOutlineShoppingCart, AiOutlineMenu } from "react-icons/ai";
import { useCart } from "../../../contexts/CartContext";
import { FaMoneyBillWave } from "react-icons/fa";

const Navbar = () => {
  const { cartItems } = useCart();

  const [menuOpen, setMenuOpen] = useState(false);

  const totalItemsInCart = cartItems.reduce((acc, item) => acc + (item.quantity || 1), 0);

  return (
    <nav className="flex justify-between bg-gray-900 text-white w-screen">
      <div className="px-5 xl:px-10 py-6 flex w-full justify-between items-center">
       
        <Link to="/" className="text-3xl font-bold font-heading flex items-center space-x-2">
          <FaMoneyBillWave size={24} />
          <span>Best bargain</span>
        </Link>

        <ul className={`hidden md:flex font-semibold font-heading space-x-12 ${menuOpen ? 'block' : 'hidden'} md:block`}>
            <li><Link to="/" className="hover:text-gray-200">Home</Link></li>
            <li><Link to="/" className="hover:text-gray-200">About Us</Link></li>
            <li><Link to="/contact" className="hover:text-gray-200">Contact</Link></li>
        </ul>

        <div className="flex items-center space-x-5">
            <button className="md:hidden focus:outline-none" onClick={() => setMenuOpen(!menuOpen)}>
                <AiOutlineMenu size={24} />
            </button>

            <Link to="/cart" className="hover:text-gray-200 relative">
                <AiOutlineShoppingCart size={24} />
                {totalItemsInCart > 0 && (
                    <span className="absolute top-0 right-0 bg-red-500 text-white rounded-full text-xs w-5 h-5 flex items-center justify-center">
                        {totalItemsInCart}
                    </span>
                )}
            </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
