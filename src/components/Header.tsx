import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { CodeIcon, MenuIcon, CloseIcon } from "../assets/Icons";

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`bg-gradient-to-r from-gray-700 to-black text-white shadow-md w-full fixed top-0 left-0 z-50 transition-all duration-300 ease-in-out ${
        !isScrolled && "lg:rounded-br-2xl lg:rounded-bl-2xl"
      }`}
    >
      <div className="container mx-auto flex flex-col lg:flex-row justify-between items-center p-4">
        <div className="flex justify-between items-center w-full lg:w-auto">
          <Link to="/" className="flex items-center space-x-2">
            <div className="flex items-center gap-3">
              <CodeIcon />
              <h1 className="text-2xl font-bold">GitHub Explorer</h1>
            </div>
          </Link>
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="block lg:hidden text-white"
          >
            {isMenuOpen ? (
              <CloseIcon className="h-6 w-6" />
            ) : (
              <MenuIcon className="h-6 w-6" />
            )}
          </button>
        </div>
        <div
          className={`overflow-hidden transition-all duration-300 ease-in-out ${
            isMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          } lg:opacity-100 lg:max-h-none lg:flex lg:space-x-8 w-full lg:w-auto`}
        >
          <ul className="flex flex-col lg:flex-row items-center gap-4 lg:gap-0 bg-black lg:bg-transparent lg:p-0 p-4 shadow-lg rounded-md lg:shadow-none">
            <li>
              <Link
                to="/"
                className="block px-3 py-2 rounded-md text-base font-medium hover:text-blue-400 transition duration-300"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/user/octocat"
                className="block px-3 py-2 rounded-md text-base font-medium hover:text-blue-400 transition duration-300"
              >
                User Details
              </Link>
            </li>
            <li>
              <Link
                to="/repo/octocat/repo-example"
                className="block px-3 py-2 rounded-md text-base font-medium hover:text-blue-400 transition duration-300"
              >
                Repo Details
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
