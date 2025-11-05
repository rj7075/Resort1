// src/components/Navbar.jsx
import React, { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";

import { useAuth } from "../context/AuthContext";
import api from "../lib/api";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { user, logout, setUser } = useAuth();

  const handleLogout = async () => {
    await api.post("/auth/logout");
    toast.success("Logout Successfully");
    setUser(null);
  };
  const navigate = useNavigate();

  const navItems = [
    { name: "Rooms", href: "/#rooms" },
    { name: "Our Stories", href: "/#stories" },
    { name: "Client Reviews", href: "/#reviews" },
    { name: "Gallery", href: "/#gallery" },
    { name: "Contact", href: "/#contact" },
  ];

  return (
    <nav className=" bg-white sticky top-0 z-50 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center">
              <Link to="/" className="text-2xl font-bold text-teal-600">
                <img className="h-16 w-40" src="/logo.png" alt="Logo" />
              </Link>
            </div>
          </div>

          {/* Desktop Menu */}

          <div className="hidden md:flex items-center space-x-8">
            {/* {navItems.map((item) => ( */}

            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={({ isActive }) =>
                  `text-gray-800 hover:text-teal-600 transition-colors font-medium ${
                    isActive ? "text-teal-600 font-semibold" : ""
                  }`
                }
              >
                {item.name}
              </a>
            ))}
            <div>
              {user ? (
                <>
                  <span className="mr-4">Hi, {user.name}</span>
                  <button
                    onClick={handleLogout}
                    className="px-3 py-1 border rounded"
                  >
                    Logout
                  </button>
                </>
              ) : (
                <>
                  <Link to="/login" className="mr-3">
                    Login
                  </Link>
                  <Link to="/register" className="">
                    Register
                  </Link>
                </>
              )}
            </div>
            <a
              href="https://wa.me/919876543210?text=Hi%20there%2C%20I%20want%20to%20book%20a%20room"
              target="_blank"
              rel="noopener noreferrer"
              className="block mt-2 w-35 bg-green-600 hover:bg-teal-700 text-white px-4 py-2 rounded-md transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Watsapp US
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className=" md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-teal-600 focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="bg-white">
          <div className=" md:hidden px-2 pt-2 pb-3 space-y-1 sm:px-3 items-center leading-loose">
            {navItems.map((item) => (
              <li key={item.name} className="list-none ">
                <a
                  href={item.href}
                  className="text-gray-800 hover:text-teal-400 transition-colors"
                >
                  {item.name}
                </a>
              </li>
            ))}
            {/* {navItems.map((item) => (
              <NavLink
                key={item.name}
                to={item.href}
                className={({ isActive }) =>
                  `block w-full px-3 py-2 rounded-md text-base font-medium ${
                    isActive
                      ? "bg-teal-50 text-teal-600"
                      : "text-gray-700 hover:text-teal-600 hover:bg-gray-50"
                  }`
                }
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </NavLink>
            ))} */}
            <div className="flex flex-col md:flex-row md:items-center md:space-x-4 space-y-2 md:space-y-0 mt-2 md:mt-0">
              {user ? (
                <>
                  <span className="text-gray-800 md:mr-4 font-medium">
                    Hi, {user.name}
                  </span>
                  <button
                    onClick={handleLogout}
                    className="px-4 py-2 border rounded text-gray-700 hover:bg-gray-100 transition"
                  >
                    Logout
                  </button>
                </>
              ) : (
                <>
                  <Link
                    to="/login"
                    className="px-4 py-2  rounded text-gray-700 hover:bg-gray-100 transition"
                  >
                    Login
                  </Link>
                  <Link
                    to="/register"
                    className="px-4 py-2  rounded text-gray-700 hover:bg-gray-100 transition"
                  >
                    Register
                  </Link>
                </>
              )}
            </div>

            <a
              href="https://wa.me/919876543210?text=Hi%20there%2C%20I%20want%20to%20book%20a%20room"
              target="_blank"
              rel="noopener noreferrer"
              className="block mt-2 w-35 bg-green-600 hover:bg-teal-700 text-white px-4 py-2 rounded-md transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Watsapp US
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
