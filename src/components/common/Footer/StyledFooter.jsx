import React from "react";
import { Link } from "react-router-dom";
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8 mt-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

          <div>
            <h3 className="font-bold text-xl mb-4">Resources</h3>
            <ul className="list-none space-y-3">
              <li><Link to="#" className="hover:text-gray-300">FAQ</Link></li>
              <li><Link to="#" className="hover:text-gray-300">Shipping</Link></li>
              <li><Link to="#" className="hover:text-gray-300">Returns</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-xl mb-4">Company</h3>
            <ul className="list-none space-y-3">
              <li><Link to="#" className="hover:text-gray-300">About Us</Link></li>
              <li><Link to="/contact" className="hover:text-gray-300">Contact</Link></li>
              <li><Link to="#" className="hover:text-gray-300">Terms Of Use</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-xl mb-4">Follow Us</h3>
            <ul className="list-none space-y-3">
              <li>
                <a href="#" className="hover:text-gray-300 flex items-center">
                  <FaFacebookF className="mr-2" /> Facebook
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-300 flex items-center">
                  <FaTwitter className="mr-2" /> Twitter
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-300 flex items-center">
                  <FaInstagram className="mr-2" /> Instagram
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-xl mb-4">Newsletter</h4>
            <p>Don't miss any of our latest news and products.</p>
            <input 
              type="email" 
              className="mt-3 p-2 rounded w-full" 
              placeholder="example123@something.com" 
            />
          </div>

        </div>
        <div className="mt-10 border-t border-gray-700 pt-5 flex justify-center">
            <p>&copy; {new Date().getFullYear()} Best Bargain. All Rights Reserved.</p>
        </div>

      </div>
    </footer>
  );
}

export default Footer;
