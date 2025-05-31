import React, { useState, useEffect } from 'react';
import { Dialog, DialogPanel } from '@headlessui/react';
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
          ? 'bg-gray-900/90 backdrop-blur-md shadow-lg py-3' 
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
            animate={{ opacity: 0.1 }}
            className="absolute inset-0 bg-gradient-to-r from-purple-900/20 to-purple-900/20"
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
                  className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-purple-500 rounded-full opacity-70 group-hover:opacity-100 blur-sm group-hover:blur transition duration-500"
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
                  className="relative h-9 w-9 rounded-full border-2 border-purple-600"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                />
              </div>
              <div className="overflow-hidden">
                <motion.span 
                  className="text-lg font-bold bg-gradient-to-r from-purple-500 to-purple-400 bg-clip-text text-transparent inline-block"
                  whileHover={{ scale: 1.05 }}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                >
                  Rahul Kumar
                </motion.span>
                <motion.div 
                  className={`h-0.5 w-full bg-gradient-to-r from-purple-500 to-purple-400 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300`}
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: scrolled ? 1 : 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                />
              </div>
            </Link>
          </motion.div>
          
          <div className="flex items-center gap-4 ml-auto">
            <div className="flex lg:hidden">
              <motion.button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-md text-gray-300 hover:bg-gray-800"
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
          </div>
          
          <div className="hidden lg:flex lg:gap-x-6 ml-6">
            {getFilteredNavItems().map((item, index) => (
              <motion.div key={item.name} className="relative">
                {item.download ? (
                  <motion.a
                    href={item.href}
                    onClick={(e) => handleDownload(e, item.href)}
                    className="text-sm font-semibold relative px-4 py-2 rounded-md transition-all duration-300 bg-gradient-to-r from-purple-600 to-purple-500 text-white shadow-md hover:shadow-purple-500/50"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                  >
                    {item.name}
                    <motion.span
                      className="ml-1 inline-block"
                      animate={{ y: [0, -2, 0] }}
                      transition={{ duration: 1, repeat: Infinity }}
                    >
                      ↓
                    </motion.span>
                  </motion.a>
                ) : item.href.startsWith('#') ? (
                  <motion.a
                    href={item.href}
                    onClick={(e) => handleSmoothScroll(e, item.href)}
                    className={`text-sm font-semibold relative px-2 py-1 rounded-md transition-all duration-300 text-gray-300 hover:text-purple-400`}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                  >
                    <>
                      <motion.span
                        className={`absolute bottom-0 left-0 w-full h-0.5 ${
                          activeSection === item.href.substring(1) 
                            ? 'bg-purple-500' 
                            : 'bg-transparent'
                        } origin-left`}
                        initial={{ scaleX: 0 }}
                        animate={{ 
                          scaleX: activeSection === item.href.substring(1) ? 1 : 0,
                          opacity: activeSection === item.href.substring(1) ? 1 : 0
                        }}
                        transition={{ duration: 0.3 }}
                      />
                      <motion.span
                        className="absolute bottom-0 left-0 w-full h-0.5 bg-purple-500 origin-left"
                        initial={{ scaleX: 0 }}
                        whileHover={{ scaleX: 1 }}
                        transition={{ duration: 0.3 }}
                      />
                    </>
                    {item.name}
                  </motion.a>
                ) : (
                  <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                  >
                    <Link
                      to={item.href}
                      className={`text-sm font-semibold relative px-2 py-1 rounded-md transition-all duration-300 text-gray-300 hover:text-purple-400`}
                    >
                      {item.name}
                    </Link>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </nav>
      <AnimatePresence>
        {mobileMenuOpen && (
          <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
            <motion.div 
              className="fixed inset-0 z-10 bg-black/20 backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileMenuOpen(false)}
            />
            <DialogPanel as={motion.div} 
              className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-gray-900 px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-800"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
            >
              <div className="mt-10 flow-root">
                <div className="-my-6 divide-y divide-gray-700">
                  <div className="space-y-4 py-6">
                    {getFilteredNavItems().map((item, index) => (
                      <motion.div key={item.name}>
                        {item.download ? (
                          <motion.a
                            href={item.href}
                            onClick={(e) => handleDownload(e, item.href)}
                            className="block rounded-lg px-3 py-3 text-base font-semibold bg-gradient-to-r from-purple-600 to-purple-500 text-white my-4 shadow-md"
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.3, delay: index * 0.1 }}
                          >
                            <div className="flex items-center justify-between">
                              <span>{item.name}</span>
                              <motion.span
                                animate={{ y: [0, -2, 0] }}
                                transition={{ duration: 1, repeat: Infinity }}
                              >
                                ↓
                              </motion.span>
                            </div>
                          </motion.a>
                        ) : item.href.startsWith('#') ? (
                          <motion.a
                            href={item.href}
                            onClick={(e) => handleSmoothScroll(e, item.href)}
                            className={`block rounded-lg px-3 py-2 text-base font-semibold transition-colors duration-200 ${
                              activeSection === item.href.substring(1)
                                ? 'bg-gray-800 text-purple-400'
                                : 'text-gray-300 hover:bg-gray-800 hover:text-purple-400'
                            }`}
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.3, delay: index * 0.1 }}
                          >
                            <div className="flex items-center justify-between">
                              <span>{item.name}</span>
                              {activeSection === item.href.substring(1) && (
                                <motion.div
                                  initial={{ scale: 0 }}
                                  animate={{ scale: 1 }}
                                  className="h-2 w-2 rounded-full bg-purple-500"
                                />
                              )}
                            </div>
                          </motion.a>
                        ) : (
                          <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.3, delay: index * 0.1 }}
                          >
                            <Link
                              to={item.href}
                              onClick={() => setMobileMenuOpen(false)}
                              className="block rounded-lg px-3 py-2 text-base font-semibold text-gray-300 hover:bg-gray-800 hover:text-purple-400 transition-colors duration-200"
                            >
                              {item.name}
                            </Link>
                          </motion.div>
                        )}
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </DialogPanel>
          </Dialog>
        )}
      </AnimatePresence>
    </header>
  );
}

export default Navbar;