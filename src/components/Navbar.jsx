import React from "react";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between py-6 px-4 sm:px-8">
      <div className="text-lg font-semibold">Chandrashakar Gudipally</div>
      <div className="flex items-center space-x-8">
        <div className="flex space-x-4 text-2xl">
          <a
            href="https://github.com/chandrashekar915481"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub className="hover:text-gray-400" />
          </a>
          <a
            href="https://linkedin.com/in/chandrashakar-gudipally-93a9b9161"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin className="hover:text-gray-400" />
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
