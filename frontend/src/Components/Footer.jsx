import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="w-full bg-black text-white py-6 px-4">
      {/* Logo and Text Section */}
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Logo */}
        <div className="flex items-center justify-center md:justify-start">
          <img
            src="/LOGO.png"
            alt="LostLink Logo"
            className="h-16 w-auto rounded-lg bg-white px-2"
          />
        </div>

        {/* Text Info */}
        <div className="text-center md:text-center">
          <p className="text-md text-gray-50 ">
            © 2025 LostLink. All rights reserved.
          </p>
          <p className="text-sm text-gray-300 mt-1">
            Made with ❤ by Aditya
          </p>
        </div>

        {/* Social Icons */}
        <div className="flex gap-4 justify-center md:justify-end">
          <a
            href="https://www.linkedin.com/in/aditya-bhure-729882258/E"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-black p-3 rounded-lg text-white hover:text-blue-400 transition"
          >
            <FaLinkedin size={28} />
          </a>
          <a
            href="https://x.com/Aditya82718059"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-black p-3 rounded-lg text-white hover:text-blue-300 transition"
          >
            <FaSquareXTwitter size={28} />
          </a>
          <a
            href="https://www.instagram.com/ab_aditya07/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-black p-3 rounded-lg text-white hover:text-pink-400 transition"
          >
            <FaInstagramSquare size={28} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;