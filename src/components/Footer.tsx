import React from "react";
import { Link } from "react-router-dom";
import { GitHubIcon } from "../assets/Icons";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gradient-to-t from-gray-800 to-black text-white shadow-inner w-full py-4 fixed bottom-0">
      <div className="container mx-auto flex flex-col lg:flex-row justify-between items-center text-center lg:text-left gap-4">
        <div className="flex flex-row-reverse items-center lg:items-center gap-4">
          <p className="text-sm">&copy; {new Date().getFullYear()} GitHub. Todos os direitos reservados.</p>
          <div className="mt-2">
            <GitHubIcon />
          </div>
        </div>
        <ul className="flex flex-col lg:flex-row items-center gap-4">
          <li>
            <Link
              to="/contato"
              className="hover:text-blue-400 transition duration-300 text-sm"
            >
              Contato
            </Link>
          </li>
          <li>
            <Link
              to="/sobre"
              className="hover:text-blue-400 transition duration-300 text-sm"
            >
              Sobre o GitHub
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
