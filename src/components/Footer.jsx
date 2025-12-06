import React from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <motion.footer
      className="w-full bg-[#0B0F0A] text-gray-300 py-12 px-6 md:px-20"
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">

        {/* Logo + Copyright */}
        <div>
          <h1 className="text-xl font-bold mb-4">Miros</h1>
          <p className="text-sm opacity-60">Copyright © 2024</p>
        </div>

        {/* Useful Link 1 */}
        <div>
          <h3 className="text-sm font-semibold mb-5">Useful Link</h3>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-white transition">Home</li>
            <li className="hover:text-white transition">Resume</li>
            <li className="hover:text-white transition">Lets talk</li>
            <li className="hover:text-white transition"><a href="https://github.com/adarshhhh01">Github</a></li>
          </ul>
        </div>

        {/* Useful Link 2 */}
        <div>
          <h3 className="text-sm font-semibold mb-5">Useful Link</h3>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-white transition"><a href="#About">About</a></li>
            <li className="hover:text-white transition"><a href="#Services">Services</a></li>
            <li className="hover:text-white transition"><a href="#Projects">Projects</a></li>
            <li className="hover:text-white transition"><a href="#Contact">Contact</a></li>
          </ul>
        </div>

        {/* Subscribe */}
        <div className="">
          <h3 className="text-sm font-semibold mb-5">Subscribe our newsletter</h3>

          <div className="flex items-center bg-[#141A13] rounded-full p-1 pr-2 w-full max-w-sm">
            <input
              type="email"
              placeholder="Your email address"
              className="bg-transparent text-sm text-gray-300 px-4 py-2 w-full outline-none"
            />
            <button className="bg-[#D8FF00] text-black text-sm font-semibold px-4 py-2 rounded-full hover:bg-[#c6f200] transition">
              Get Started
            </button>
          </div>

          <p className="text-xs opacity-60 mt-5 text-right">All rights reserved.</p>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
