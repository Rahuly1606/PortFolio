import React, { useState } from 'react';
import { Dialog, DialogPanel } from '@headlessui/react';
import { MenuIcon, XIcon } from '@heroicons/react/outline';
import { motion } from 'framer-motion';

function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navigation = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Certificates', href: '#certificates' },
    { name: 'Skills', href: '#skills' }, // Add Skills link
    { name: 'Contact', href: '#footer' },
    { name: 'Resume', href: 'Resume.pdf', download: true }, // Add download property
  ];

  const handleSmoothScroll = (e, href) => {
    e.preventDefault();
    document.querySelector(href).scrollIntoView({ behavior: 'smooth' });
  };

  const handleDownload = (e, href) => {
    e.preventDefault();
    const link = document.createElement('a');
    link.href = href;
    link.download = 'Resume.pdf';
    link.click();
  };

  return (
    <header className="bg-white bg-opacity-90  w-full z-50">
      <nav aria-label="Global" className="mx-auto max-w-7xl px-6 py-7 lg:px-8">
        <div className="flex items-center justify-between">
          <motion.a
            href="#home"
            className="flex items-center gap-2"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <img
              alt="Portfolio Logo"
              src="img.jpeg"
              className="h-8 w-8 rounded-full"
            />
            <span className="text-xl font-bold text-gray-900">My Portfolio</span>
          </motion.a>
          <div className="flex lg:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only">Open main menu</span>
              <MenuIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-12">
            {navigation.map((item) => (
              <motion.a
                key={item.name}
                href={item.href}
                onClick={(e) => item.download ? handleDownload(e, item.href) : handleSmoothScroll(e, item.href)}
                className="text-sm font-semibold text-gray-900 hover:text-indigo-600"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                {item.name}
              </motion.a>
            ))}
          </div>
        </div>
      </nav>
      <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
        <div className="fixed inset-0 z-10" />
        <DialogPanel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href="#home" className="flex items-center gap-2">
              <img
                alt="Portfolio Logo"
                src="img.jpeg"
                className="h-8 w-8 rounded-full"
              />
              <span className="text-xl font-bold text-gray-900">My Portfolio</span>
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only">Close menu</span>
              <XIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={(e) => item.download ? handleDownload(e, item.href) : handleSmoothScroll(e, item.href)}
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold text-gray-900 hover:bg-gray-50 transition-colors duration-200"
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  );
}

export default Navbar;