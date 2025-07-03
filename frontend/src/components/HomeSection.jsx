import React from 'react';
import { motion } from 'framer-motion';

const HomeSection = () => {
  const handleSmoothScroll = (e, href) => {
    e.preventDefault();
    document.querySelector(href).scrollIntoView({ behavior: 'smooth' });
  };

  // Add reduced motion check for accessibility
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  return (
    <motion.section
      id="home"
      className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden bg-white"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      {/* Animated gradient background with warm tones */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Base light background */}
        <div className="absolute inset-0 bg-white"></div>
        
        {/* Orange spots with minimal opacity - now with hover wave effect */}
        <motion.div 
          className="absolute top-1/3 left-1/4 w-96 h-96 bg-orange-200 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse-slow"
          whileHover={{ 
            scale: 1.1,
            x: [0, 10, -10, 0],
            y: [0, -10, 10, 0],
            transition: {
              x: { repeat: Infinity, duration: 2, ease: "easeInOut" },
              y: { repeat: Infinity, duration: 2, ease: "easeInOut" },
              scale: { duration: 0.5 }
            }
          }}
        ></motion.div>
        <motion.div 
          className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-orange-600 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-float"
          whileHover={{ 
            scale: 1.1,
            x: [0, -10, 10, 0],
            y: [0, 10, -10, 0],
            transition: {
              x: { repeat: Infinity, duration: 2, ease: "easeInOut" },
              y: { repeat: Infinity, duration: 2, ease: "easeInOut" },
              scale: { duration: 0.5 }
            }
          }}
        ></motion.div>
        
        {/* Animated gradient background - with reduced motion option */}
        <motion.div 
          className={`absolute inset-0 bg-gradient-to-br from-orange-500 via-coral-500 to-pink-500 opacity-10 ${!prefersReducedMotion ? 'bg-gradient-animated' : ''}`}
          style={{ backgroundSize: '400% 400%' }}
          animate={!prefersReducedMotion ? {
            backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
          } : {}}
          transition={!prefersReducedMotion ? {
            duration: 15,
            repeat: Infinity,
            ease: "linear"
          } : {}}
        />
        
        {/* SVG Wave Background */}
        <div className="absolute bottom-0 left-0 right-0 h-48 bg-wave-pattern bg-repeat-x bg-bottom bg-contain"></div>
        
        {/* Noise texture for depth */}
        <div className="absolute inset-0 bg-noise opacity-[0.03]"></div>
        
        {/* Subtle animated gradient blobs - with reduced motion check and hover wave effect */}
        {!prefersReducedMotion && (
          <>
            <motion.div 
              className="absolute -top-20 -left-20 w-96 h-96 bg-gradient-radial from-orange-500/10 to-transparent rounded-full mix-blend-multiply filter blur-3xl"
              animate={{ 
                scale: [1, 1.1, 1],
                x: [0, 10, 0],
                y: [0, 15, 0],
              }}
              transition={{ 
                duration: 15,
                repeat: Infinity,
                repeatType: "reverse"
              }}
              whileHover={{ 
                scale: 1.2,
                x: [0, 15, -15, 0],
                y: [0, -15, 15, 0],
                transition: {
                  x: { repeat: Infinity, duration: 3, ease: "easeInOut" },
                  y: { repeat: Infinity, duration: 3, ease: "easeInOut" },
                  scale: { duration: 0.5 }
                }
              }}
            />
            
            <motion.div 
              className="absolute bottom-0 right-0 w-80 h-80 bg-gradient-radial from-coral-600/10 to-transparent rounded-full mix-blend-multiply filter blur-3xl"
              animate={{ 
                scale: [1, 1.2, 1],
                x: [0, -20, 0],
                y: [0, -10, 0],
              }}
              transition={{ 
                duration: 18,
                repeat: Infinity,
                repeatType: "reverse"
              }}
              whileHover={{ 
                scale: 1.2,
                x: [0, -15, 15, 0],
                y: [0, 15, -15, 0],
                transition: {
                  x: { repeat: Infinity, duration: 3, ease: "easeInOut" },
                  y: { repeat: Infinity, duration: 3, ease: "easeInOut" },
                  scale: { duration: 0.5 }
                }
              }}
            />
            
            <motion.div 
              className="absolute top-1/2 left-1/3 w-72 h-72 bg-gradient-radial from-pink-500/5 to-transparent rounded-full mix-blend-multiply filter blur-3xl"
              animate={{ 
                scale: [1, 1.15, 1],
                x: [0, 15, 0],
                y: [0, -15, 0],
              }}
              transition={{ 
                duration: 20,
                repeat: Infinity,
                repeatType: "reverse"
              }}
              whileHover={{ 
                scale: 1.2,
                x: [0, 20, -20, 0],
                y: [0, -20, 20, 0],
                transition: {
                  x: { repeat: Infinity, duration: 3, ease: "easeInOut" },
                  y: { repeat: Infinity, duration: 3, ease: "easeInOut" },
                  scale: { duration: 0.5 }
                }
              }}
            />
          </>
        )}
        
        {/* Animated particles with hover wave effect */}
        {!prefersReducedMotion && [...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-orange-500 opacity-20"
            style={{
              width: Math.random() * 8 + 3,
              height: Math.random() * 8 + 3,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, Math.random() * 100 - 50],
              opacity: [0.1, 0.3, 0.1],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
            }}
            whileHover={{ 
              scale: 1.5,
              opacity: 0.4,
              transition: { duration: 0.3 }
            }}
          />
        ))}
        
        {/* Subtle grid pattern overlay */}
        <div className="absolute inset-0 bg-grid opacity-10"></div>
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8 flex flex-col items-center justify-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-center w-full max-w-3xl"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="inline-block px-6 py-2 mb-6 rounded-full glass shadow-soft border border-white/20 text-orange-600 font-medium text-sm"
          >
            <span className="flex items-center gap-2">
              <span className="inline-block w-2 h-2 rounded-full bg-orange-500 animate-pulse"></span>
              Full-Stack Developer
            </span>
          </motion.div>
          
          {/* Static bold headline in hero section */}
          <div className="overflow-hidden">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-800 mb-4 text-shadow">
              Hi, I'm Rahul Kumar
            </h1>
          </div>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="mt-4 text-xl text-gray-700 leading-relaxed max-w-xl mx-auto"
          >
            A passionate developer and designer crafting beautiful and functional digital experiences that solve real-world problems.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            className="mt-8 flex flex-wrap justify-center gap-4"
          >
            <motion.a
              whileHover={{ scale: 1.05, boxShadow: "0 10px 25px -5px rgba(255, 106, 0, 0.4)" }}
              whileTap={{ scale: 0.95 }}
              href="#projects"
              onClick={(e) => handleSmoothScroll(e, '#projects')}
              className="bg-gradient-warm text-black px-8 py-3 rounded-full shadow-lg hover:shadow-orange-500/50 transition-all duration-300 group"
            >
              <span className="flex items-center gap-2">
                View Projects
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </span>
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.05, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
              whileTap={{ scale: 0.95 }}
              href="#footer"
              onClick={(e) => handleSmoothScroll(e, '#footer')}
              className="glass text-gray-800 border border-orange-500/20 px-8 py-3 rounded-full shadow-md hover:shadow-lg transition-all duration-300"
            >
              Contact Me
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.05, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
              whileTap={{ scale: 0.95 }}
              href="https://www.linkedin.com/in/rahuly1606/"
              target="_blank"
              rel="noopener noreferrer"
              className="glass text-gray-800 border border-orange-500/20 px-8 py-3 rounded-full shadow-md hover:shadow-lg transition-all duration-300 flex items-center gap-2"
            >
              <img src="linkedin.png" alt="LinkedIn" className="h-5 w-5" />
              LinkedIn
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default HomeSection; 