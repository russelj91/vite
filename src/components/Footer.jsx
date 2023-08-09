import React from "react";
import { FaGithub, FaLinkedin, FaFacebookF } from "react-icons/fa";

const Footer = () => {
  return (
    <footer>
      <div className="m-auto md:pl-20 p-4 py-16 text-center flex justify-center">
        <a
          href="https://github.com/russelj91"
          target="_blank"
          rel="noopener noreferrer"
          className="text-black mx-2 hover:text-gray-400"
        >
          <FaGithub size={35} />
        </a>
        <a
          href="https://www.linkedin.com/in/john-russel-i-ab87b27b/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-black mx-2 hover:text-gray-400"
        >
          <FaLinkedin size={35} />
        </a>
        <a
          href="https://www.facebook.com/foreveralonenomore"
          target="_blank"
          rel="noopener noreferrer"
          className="text-black mx-2 hover:text-gray-400"
        >
          <FaFacebookF size={35} />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
