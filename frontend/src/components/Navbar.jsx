import React, { useState, useEffect, Fragment } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { MenuIcon, XIcon } from '@heroicons/react/outline';
import { motion, AnimatePresence } from 'framer-motion';
import { useLocation, Link } from 'react-router-dom';

function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  // Add scroll effect for navbar
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
      
      // Only update active section on homepage
      if (isHomePage) {
        // Update active section based on scroll position
        const sections = ['home', 'about', 'projects', 'certificates', 'skills', 'coding', 'footer'];
        const currentSection = sections.find(section => {
          const element = document.getElementById(section);
          if (element) {
            const rect = element.getBoundingClientRect();
            return rect.top <= 100 && rect.bottom >= 100;
          }
          return false;
        });
        
        if (currentSection && currentSection !== activeSection) {
          setActiveSection(currentSection);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled, activeSection, isHomePage]);

  const navigation = [
    { name: 'About', href: '#about', showOn: ['home'] },
    { name: 'Projects', href: '#projects', showOn: ['home'] },
    { name: 'Certificates', href: '#certificates', showOn: ['home'] },
    { name: 'Skills', href: '#skills', showOn: ['home'] },
    { name: 'Competitive Coding', href: '#coding', showOn: ['home'] },
    { name: 'Contact', href: '#footer', showOn: ['home', 'projects', 'certifications'] },
    { name: 'Home', href: '/', showOn: ['projects', 'certifications'] },
    { name: 'Resume', href: 'Resume.pdf', download: true, showOn: ['home', 'projects', 'certifications'] },
  ];

  // Filter navigation items based on current page
  const getFilteredNavItems = () => {
    let currentPage = 'home';
    
    if (location.pathname === '/projects') currentPage = 'projects';
    if (location.pathname === '/certifications') currentPage = 'certifications';
    
    return navigation.filter(item => item.showOn.includes(currentPage));
  };

  const handleSmoothScroll = (e, href) => {
    e.preventDefault();
    
    // If it's a hash link and we're on the homepage, scroll to the section
    if (href.startsWith('#') && isHomePage) {
      document.querySelector(href).scrollIntoView({ behavior: 'smooth' });
    } else if (href === '/') {
      // Navigate to home
      window.scrollTo(0, 0);
    }
    
    if (mobileMenuOpen) setMobileMenuOpen(false);
  };

  const handleDownload = (e, href) => {
    e.preventDefault();
    const link = document.createElement('a');
    link.href = href;
    link.download = 'Resume.pdf';
    link.click();
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 w-full z-50 transition-all duration-500 ${
        scrolled 
          ? 'glass shadow-lg py-3' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="absolute inset-0 z-[-1] overflow-hidden">
        {scrolled && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="absolute inset-0 bg-noise"
          />
        )}
        {scrolled && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.05 }}
            className="absolute inset-0 bg-gradient-to-r from-orange-500/10 to-coral-500/10"
          />
        )}
      </div>
      
      <nav aria-label="Global" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <motion.div
            className="flex-shrink-0"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link
              to="/"
              className="flex items-center gap-2 group"
              onClick={(e) => isHomePage && handleSmoothScroll(e, '#home')}
            >
              <div className="relative">
                <motion.div
                  className="absolute -inset-1 bg-gradient-to-r from-orange-500 to-coral-500 rounded-full opacity-70 group-hover:opacity-100 blur-sm group-hover:blur transition duration-500"
                  animate={{ 
                    scale: [1, 1.05, 1],
                  }}
                  transition={{ 
                    duration: 3,
                    repeat: Infinity,
                    repeatType: "reverse"
                  }}
                />
                <motion.img
                  alt="Portfolio Logo"
                  src="/img.jpeg"
                  className="relative h-9 w-9 rounded-full border-2 border-orange-500"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                />
              </div>
              <div className="overflow-hidden">
                <motion.span 
                  className="text-lg font-bold bg-gradient-to-r from-orange-500 to-coral-500 bg-clip-text text-transparent inline-block"
                  whileHover={{ scale: 1.05 }}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                >
                  Rahul Kumar
                </motion.span>
                <motion.div 
                  className={`h-0.5 w-full bg-gradient-to-r from-orange-500 to-coral-500 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300`}
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: scrolled ? 1 : 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                />
              </div>
            </Link>
          </motion.div>
          
          <div className="flex items-center justify-center gap-4 w-full">
            {/* Desktop navigation */}
            <div className="hidden lg:flex lg:gap-x-6 lg:justify-center mx-auto">
              {getFilteredNavItems().filter(item => !item.download).map((item, index) => (
                <motion.div key={item.name} className="relative">
                  <Link
                    to={item.href}
                    onClick={(e) => isHomePage && item.href.startsWith('#') && handleSmoothScroll(e, item.href)}
                    className={`text-sm font-medium transition-colors duration-300 px-3 py-2 rounded-md hover:text-orange-600 relative group ${
                      activeSection === item.href.substring(1) ? 'text-orange-600 font-semibold' : 'text-gray-700'
                    }`}
                  >
                    {item.name}
                    <span 
                      className={`absolute bottom-0 left-0 w-full h-0.5 rounded bg-gradient-warm origin-left transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out ${
                        activeSection === item.href.substring(1) ? 'scale-x-100' : ''
                      }`}
                    ></span>
                  </Link>
                </motion.div>
              ))}
            </div>

            {/* Resume button for all screen sizes */}
            <div className="hidden sm:flex">
              {getFilteredNavItems().filter(item => item.download).map((item) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => handleDownload(e, item.href)}
                  className="text-sm font-semibold relative px-4 py-2 rounded-md transition-all duration-300 bg-gradient-warm text-black shadow-md hover:text-orange-600 hover:shadow-orange-500/30"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <span className="flex items-center gap-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                    </svg>
                    {item.name}
                  </span>
                </motion.a>
              ))}
            </div>
            
            {/* Mobile menu button */}
            <div className="flex lg:hidden ml-auto">
              <motion.button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-md text-gray-700 hover:bg-gray-100"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                aria-expanded={mobileMenuOpen}
              >
                <span className="sr-only">{mobileMenuOpen ? 'Close main menu' : 'Open main menu'}</span>
                {mobileMenuOpen ? (
                  <XIcon className="h-6 w-6" aria-hidden="true" />
                ) : (
                  <MenuIcon className="h-6 w-6" aria-hidden="true" />
                )}
              </motion.button>
          </div>
          
            {/* Resume button for small mobile only */}
            <div className="flex sm:hidden">
                  <motion.a
                href="Resume.pdf"
                onClick={(e) => handleDownload(e, "Resume.pdf")}
                className="text-sm font-semibold relative px-4 py-2 rounded-md transition-all duration-300 bg-gradient-warm text-black shadow-md hover:text-orange-600 hover:shadow-orange-500/30"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                  >
                    <span className="flex items-center gap-1">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                      </svg>
                  Resume
                    </span>
                  </motion.a>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <Dialog
            as={motion.div}
            static
            open={mobileMenuOpen}
            onClose={() => setMobileMenuOpen(false)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 lg:hidden"
          >
            <Transition.Root show={mobileMenuOpen}>
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black/50 backdrop-blur-sm" aria-hidden="true" />
              </Transition.Child>
            
              <Transition.Child
              as={motion.div}
                enter="transform transition ease-in-out duration-300"
                enterFrom="translate-x-full"
                enterTo="translate-x-0"
                leave="transform transition ease-in-out duration-300"
                leaveFrom="translate-x-0"
                leaveTo="translate-x-full"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
                transition={{ type: 'spring', damping: 25 }}
                className="fixed inset-y-0 right-0 z-50 w-full max-w-xs bg-white/95 backdrop-blur-md shadow-xl p-6 overflow-y-auto"
            >
                <div className="flex items-center justify-between mb-8">
                  <Link
                    to="/"
                    onClick={(e) => {
                      isHomePage && handleSmoothScroll(e, '#home');
                      setMobileMenuOpen(false);
                    }}
                    className="flex items-center gap-2"
                  >
                  <img
                      alt="Portfolio Logo"
                    src="/img.jpeg"
                    className="h-8 w-8 rounded-full border-2 border-orange-500"
                  />
                  <span className="text-lg font-bold bg-gradient-to-r from-orange-500 to-coral-500 bg-clip-text text-transparent">
                    Rahul Kumar
                  </span>
                  </Link>
                <button
                  type="button"
                  onClick={() => setMobileMenuOpen(false)}
                    className="p-2 rounded-md text-gray-500 hover:text-gray-700"
                >
                    <span className="sr-only">Close menu</span>
                  <XIcon className="h-6 w-6" aria-hidden="true" />
                </button>
              </div>
              
                <div className="space-y-1">
                  {getFilteredNavItems().map((item, index) => (
                    <motion.div
                      key={item.name}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                    >
                      {item.download ? (
                        <a
                          href={item.href}
                          onClick={(e) => {
                            handleDownload(e, item.href);
                            setMobileMenuOpen(false);
                          }}
                          className="flex items-center gap-2 w-full px-4 py-3 rounded-md text-sm font-medium bg-gradient-warm text-black hover:text-orange-600"
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                          </svg>
                          {item.name}
                        </a>
                      ) : (
                        <Link
                          to={item.href}
                          onClick={(e) => {
                            isHomePage && item.href.startsWith('#') && handleSmoothScroll(e, item.href);
                            setMobileMenuOpen(false);
                          }}
                          className={`flex items-center py-3 px-5 text-base font-medium rounded-lg hover:bg-orange-50 transition-colors duration-300 ${
                            activeSection === item.href.substring(1) ? 'text-orange-600 bg-orange-50/50' : 'text-gray-700'
                          }`}
                        >
                          {item.name}
                        </Link>
                      )}
                    </motion.div>
                  ))}
              </div>
              
              <div className="px-6 py-6 border-t border-orange-500/10">
                <div className="flex items-center justify-center gap-5">
                  <motion.a
                    href="https://github.com/Rahuly1606"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-orange-600 transition-colors duration-300"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <img src="github.png" alt="GitHub" className="h-5 w-5" />
                  </motion.a>
                  <motion.a
                    href="https://www.linkedin.com/in/rahuly1606/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-orange-600 transition-colors duration-300"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <img src="linkedin.png" alt="LinkedIn" className="h-5 w-5" />
                  </motion.a>
                  <motion.a
                    href="mailto:example@domain.com"
                    className="text-gray-600 hover:text-orange-600 transition-colors duration-300"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <img src="icons/gmail.png" alt="Email" className="h-5 w-5" />
                  </motion.a>
                </div>
              </div>
              </Transition.Child>
            </Transition.Root>
          </Dialog>
        )}
      </AnimatePresence>
    </header>
  );
}

export default Navbar;