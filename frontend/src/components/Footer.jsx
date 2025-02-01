import React from 'react';
import { motion } from 'framer-motion';

function Footer() {
  return (
    <footer className="bg-gray-50 py-15 shadow-lg">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 flex flex-col lg:flex-row justify-between items-center">
        <div className="lg:w-1/2">
          <h2 className="text-3xl font-bold text-gray-900 mb-20">Contact Me</h2>
          <div className="flex space-x-4 mb-17 gap-2">
            <a href="https://github.com/your-github" target="_blank" rel="noopener noreferrer">
              <img src="github.png" alt="GitHub Icon" className="h-5 w-5" />
            </a>
            <a href="https://instagram.com/your-instagram" target="_blank" rel="noopener noreferrer">
              <img src="icons/instagram.png" alt="Instagram Icon" className="h-5 w-5" />
            </a>
            <a href="https://twitter.com/your-twitter" target="_blank" rel="noopener noreferrer">
              <img src="icons/twitter.png" alt="Twitter Icon" className="h-5 w-5" />
            </a>
          </div>
          <div className="space-y-3">
            <div className="flex items-center space-x-2">
              <img src="icons/phone-call.png" alt="Phone Icon" className="h-5 w-5" />
              <a href="tel:+1234567890" className="text-lg text-indigo-600 hover:text-indigo-500">+91 9508865788</a>
            </div>
            <div className="flex items-center space-x-2">
              <img src="icons/gmail.png" alt="Email Icon" className="h-5 w-5" />
              <a href="mailto:your-email@example.com" className="text-lg text-indigo-600 hover:text-indigo-500">alexrahul9576@gmail.com</a>
            </div>
            <div className="flex items-center space-x-2">
              <img src="icons/map.png" alt="Location Icon" className="h-5 w-5" />
              <span className="text-lg text-gray-900">Your City, Your Country</span>
            </div>
          </div>
        </div>
        <div className="lg:w-1/2 mt-10 lg:mt-0">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 lg:ml-48" >Get in Touch</h2>
          <form className="max-w-md mx-auto">
            <div className="grid grid-cols-1 gap-6">
              <input
                type="text"
                placeholder="Your Name"
                className="px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 shadow-md"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 shadow-md"
              />
              <textarea
                placeholder="Your Message"
                rows="4"
                className="px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 shadow-md"
              ></textarea>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-md shadow-md hover:bg-indigo-500 transition-all duration-300"
              >
                Send Message
              </motion.button>
            </div>
          </form>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
