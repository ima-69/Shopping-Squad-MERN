import React from 'react'
import { Link } from 'react-router-dom'
import { TbBrandMeta } from 'react-icons/tb'
import { IoLogoInstagram } from 'react-icons/io'
import { RiTwitterXLine } from 'react-icons/ri'
import { FiPhoneCall } from 'react-icons/fi'

const Footer = () => {
  return (
    <footer className="border-t border-gray-200 py-14 px-6 bg-white">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-20 max-w-7xl">
        
        {/* Newsletter */}
        <div className="mr-12">
          <h3 className="text-xl font-semibold text-gray-800 mb-5">Newsletter</h3>
          <p className="text-gray-600 mb-3">
            Be the first to hear about new products, exclusive events, and online offers.
          </p>
          <p className="font-medium text-sm text-gray-500 mb-6">
            Sign up and get 10% off on your first order.
          </p>

          <form className="flex">
            <input
              type="email"
              placeholder="Enter your email"
              required
              className="flex-grow p-3 text-sm border border-gray-300 rounded-l-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition"
            />
            <button
              type="submit"
              className="bg-indigo-600 text-white px-5 py-3 rounded-r-md text-sm font-semibold hover:bg-indigo-700 active:bg-indigo-800 transition-transform transform hover:scale-105 cursor-pointer"
            >
              Subscribe
            </button>
          </form>
        </div>

        {/* Shop Links */}
        <div>
          <h3 className="text-xl font-semibold text-gray-800 mb-5">Shop</h3>
          <ul className="space-y-3 text-gray-600">
            <li>
              <Link to="/collections/all?gender=Men" className="hover:text-indigo-600 transition-colors">
                Men's Top Wear
              </Link>
            </li>
            <li>
              <Link to="/collections/all?gender=Women" className="hover:text-indigo-600 transition-colors">
                Women's Top Wear
              </Link>
            </li>
            <li>
              <Link to="/collections/all?category=Top Wear" className="hover:text-indigo-600 transition-colors">
                Men's Bottom Wear
              </Link>
            </li>
            <li>
              <Link to="/collections/all?category=Bottom Wear" className="hover:text-indigo-600 transition-colors">
                Women's Bottom Wear
              </Link>
            </li>
          </ul>
        </div>

        {/* Support Links */}
        <div>
          <h3 className="text-xl font-semibold text-gray-800 mb-5">Support</h3>
          <ul className="space-y-3 text-gray-600">
            <li>
              <Link to="#" className="hover:text-indigo-600 transition-colors">
                Contact Us
              </Link>
            </li>
            <li>
              <Link to="#" className="hover:text-indigo-600 transition-colors">
                About Us
              </Link>
            </li>
            <li>
              <Link to="#" className="hover:text-indigo-600 transition-colors">
                FAQs
              </Link>
            </li>
            <li>
              <Link to="#" className="hover:text-indigo-600 transition-colors">
                Features
              </Link>
            </li>
          </ul>
        </div>

        {/* Social Links */}
        <div>
          <h3 className="text-xl font-semibold text-gray-800 mb-5">Follow Us</h3>
          <div className="flex items-center space-x-6 mb-6 text-gray-700">
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noreferrer noopener"
              className="hover:text-indigo-600 transition transform hover:scale-110"
              aria-label="Facebook"
            >
              <TbBrandMeta className="h-7 w-7" />
            </a>
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noreferrer noopener"
              className="hover:text-indigo-600 transition transform hover:scale-110"
              aria-label="Instagram"
            >
              <IoLogoInstagram className="h-7 w-7" />
            </a>
            <a
              href="https://www.x.com"
              target="_blank"
              rel="noreferrer noopener"
              className="hover:text-indigo-600 transition transform hover:scale-110"
              aria-label="Twitter"
            >
              <RiTwitterXLine className="h-6 w-6" />
            </a>
          </div>
          <p className="text-gray-500 font-medium">Call Us</p>
          <p className="flex items-center text-gray-700 font-semibold mt-1">
            <FiPhoneCall className="inline-block mr-2 h-5 w-5" />
            0123-456-789
          </p>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="container mx-auto border-t border-gray-200 mt-14 px-6 max-w-7xl pt-6">
        <p className="text-gray-500 text-sm text-center tracking-wide font-light">
          &copy; 2025, Squad. All Rights Reserved.
        </p>
      </div>
    </footer>
  )
}

export default Footer
