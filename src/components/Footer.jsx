// src/components/Footer.js
import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#383434] text-white py-4">
      <div className="container mx-auto flex px-10 space-x-[34%] items-center">
        <div className="flex items-center">
          {/* <img src="/qwesty-logo.png" alt="Qwesty Logo" className="w-10 h-10 mr-4" /> */}
          <span className="text-xl font-bold">Qwesty</span>
        </div>

        <div className="flex items-center space-x-4">
          <FaFacebook className="text-2xl" />
          <FaTwitter className="text-2xl" />
          <FaInstagram className="text-2xl" />
        </div>

        <div className="text-sm  flex">
            <div>
          <div className="mr-4">Terms</div>
          <div className="mr-4 my-4">Help</div>
          <div className="mr-4">About</div></div>
          <div>
          <div>Privacy</div>
          <div className='my-4'>Feature</div>
          </div>
        </div>
      </div>
          <span className="ml-10 text-xs">&copy; {currentYear} Qwesty. All rights reserved.</span>
    </footer>
  );
};

export default Footer;
