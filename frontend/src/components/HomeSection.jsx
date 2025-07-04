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
      {/* Animated gradient background with cool tones */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Base light background */}
        <div className="absolute inset-0 bg-white"></div>
        
        {/* Cool color spots with minimal opacity - now with hover wave effect */}
        <motion.div 
          className="absolute top-1/3 left-1/4 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse-slow"
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
          className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-purple-600 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-float"
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
          className={`absolute inset-0 bg-gradient-to-br from-blue-500 via-indigo-500 to-purple-500 opacity-10 ${!prefersReducedMotion ? 'bg-gradient-animated' : ''}`}
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
              className="absolute -top-20 -left-20 w-96 h-96 bg-gradient-radial from-blue-500/10 to-transparent rounded-full mix-blend-multiply filter blur-3xl"
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
              className="absolute bottom-0 right-0 w-80 h-80 bg-gradient-radial from-indigo-600/10 to-transparent rounded-full mix-blend-multiply filter blur-3xl"
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
              className="absolute top-1/2 left-1/3 w-72 h-72 bg-gradient-radial from-purple-500/5 to-transparent rounded-full mix-blend-multiply filter blur-3xl"
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
            
            {/* NEW: 3D Rotating Cube */}
            <motion.div
              className="absolute top-20 right-20 w-40 h-40 perspective-500"
              animate={{
                rotateX: [0, 360],
                rotateY: [0, 360],
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear"
              }}
            >
              <div className="w-full h-full relative transform-style-3d">
                <div className="absolute inset-0 bg-blue-400/20 backdrop-blur-sm border border-white/20 transform translateZ-20"></div>
                <div className="absolute inset-0 bg-indigo-400/20 backdrop-blur-sm border border-white/20 transform rotateY-90 translateZ-20"></div>
                <div className="absolute inset-0 bg-purple-400/20 backdrop-blur-sm border border-white/20 transform rotateY-180 translateZ-20"></div>
                <div className="absolute inset-0 bg-teal-400/20 backdrop-blur-sm border border-white/20 transform rotateY-270 translateZ-20"></div>
                <div className="absolute inset-0 bg-cyan-400/20 backdrop-blur-sm border border-white/20 transform rotateX-90 translateZ-20"></div>
                <div className="absolute inset-0 bg-emerald-400/20 backdrop-blur-sm border border-white/20 transform rotateX-270 translateZ-20"></div>
              </div>
            </motion.div>
            
            {/* NEW: Floating Geometric Shapes */}
            {[...Array(5)].map((_, i) => (
              <motion.div
                key={`geo-shape-${i}`}
                className="absolute"
                style={{
                  top: `${Math.random() * 80 + 10}%`,
                  left: `${Math.random() * 80 + 10}%`,
                  width: `${Math.random() * 40 + 20}px`,
                  height: `${Math.random() * 40 + 20}px`,
                  borderRadius: i % 2 === 0 ? '50%' : i % 3 === 0 ? '0%' : '30%',
                  background: [
                    'linear-gradient(135deg, rgba(56,189,248,0.3), rgba(59,130,246,0.3))',
                    'linear-gradient(135deg, rgba(167,139,250,0.3), rgba(79,70,229,0.3))',
                    'linear-gradient(135deg, rgba(16,185,129,0.3), rgba(5,150,105,0.3))',
                    'linear-gradient(135deg, rgba(6,182,212,0.3), rgba(8,145,178,0.3))',
                    'linear-gradient(135deg, rgba(124,58,237,0.3), rgba(109,40,217,0.3))'
                  ][i % 5],
                  boxShadow: '0 4px 12px rgba(0,0,0,0.1), inset 0 0 0 1px rgba(255,255,255,0.2)',
                  backdropFilter: 'blur(4px)'
                }}
                animate={{
                  y: [0, -20, 0, 20, 0],
                  x: [0, 15, 0, -15, 0],
                  rotate: [0, 90, 180, 270, 360],
                  scale: [1, 1.1, 1, 0.9, 1]
                }}
                transition={{
                  duration: 10 + i * 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                whileHover={{
                  scale: 1.5,
                  boxShadow: '0 10px 25px rgba(0,0,0,0.2), inset 0 0 0 2px rgba(255,255,255,0.4)',
                  transition: { duration: 0.3 }
                }}
              />
            ))}
          </>
        )}
        
        {/* Animated particles with hover wave effect - changed colors */}
        {!prefersReducedMotion && [...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-blue-500 opacity-20"
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
        
        {/* NEW: Shooting stars effect */}
        {!prefersReducedMotion && [...Array(5)].map((_, i) => (
          <motion.div
            key={`star-${i}`}
            className="absolute h-0.5 bg-gradient-to-r from-blue-400 to-transparent"
            style={{
              width: `${Math.random() * 100 + 50}px`,
              top: `${Math.random() * 70}%`,
              left: `-50px`,
              transform: `rotate(${Math.random() * 20 + 10}deg)`,
            }}
            animate={{
              x: [0, window.innerWidth + 100],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: Math.random() * 2 + 1,
              repeat: Infinity,
              delay: i * 3,
              ease: "easeOut",
            }}
          />
        ))}
        
        {/* NEW: Glowing dots network effect */}
        <div className="absolute inset-0 overflow-hidden">
          <svg className="w-full h-full opacity-30">
            <defs>
              <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur stdDeviation="2.5" result="blur" />
                <feComposite in="SourceGraphic" in2="blur" operator="over" />
              </filter>
            </defs>
            {[...Array(20)].map((_, i) => (
              <motion.circle
                key={`dot-${i}`}
                cx={Math.random() * 100 + '%'}
                cy={Math.random() * 100 + '%'}
                r="2"
                fill={['#3B82F6', '#6366F1', '#8B5CF6', '#10B981', '#06B6D4'][i % 5]}
                filter="url(#glow)"
                animate={{
                  cx: [
                    `${Math.random() * 20 + (i % 5) * 20}%`,
                    `${Math.random() * 20 + ((i % 5) * 20 + 10)}%`,
                    `${Math.random() * 20 + (i % 5) * 20}%`
                  ],
                  cy: [
                    `${Math.random() * 20 + Math.floor(i / 5) * 20}%`,
                    `${Math.random() * 20 + (Math.floor(i / 5) * 20 + 10)}%`,
                    `${Math.random() * 20 + Math.floor(i / 5) * 20}%`
                  ],
                  opacity: [0.5, 1, 0.5]
                }}
                transition={{
                  duration: Math.random() * 10 + 20,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            ))}
            
            {/* Connection lines between dots */}
            {[...Array(15)].map((_, i) => (
              <motion.line
                key={`line-${i}`}
                x1={`${(i % 5) * 20 + 10}%`}
                y1={`${Math.floor(i / 5) * 20 + 10}%`}
                x2={`${((i + 1) % 5) * 20 + 10}%`}
                y2={`${Math.floor((i + 1) / 5) * 20 + 10}%`}
                stroke="url(#lineGradient)"
                strokeWidth="0.5"
                strokeOpacity="0.3"
                animate={{
                  strokeOpacity: [0.1, 0.3, 0.1]
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: i * 0.2
                }}
              />
            ))}
            
            <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#3B82F6" />
              <stop offset="50%" stopColor="#8B5CF6" />
              <stop offset="100%" stopColor="#10B981" />
            </linearGradient>
          </svg>
        </div>
        
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
            className="inline-block px-6 py-2 mb-6 rounded-full glass shadow-soft border border-white/20 text-blue-600 font-medium text-sm"
          >
            <span className="flex items-center gap-2">
              <span className="inline-block w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span>
              Full-Stack Developer
            </span>
          </motion.div>
          
          {/* NEW: Animated text reveal for name */}
          <div className="overflow-hidden">
            <motion.h1 
              className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-800 mb-4 text-shadow"
              initial={{ y: 100 }}
              animate={{ y: 0 }}
              transition={{ 
                type: "spring", 
                stiffness: 100, 
                damping: 15,
                delay: 0.4
              }}
            >
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="inline-block"
              >
                Hi, I'm 
              </motion.span>{" "}
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.7 }}
                className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text"
              >
                Rahul Kumar
              </motion.span>
            </motion.h1>
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
              whileHover={{ scale: 1.05, boxShadow: "0 10px 25px -5px rgba(37, 99, 235, 0.4)" }}
              whileTap={{ scale: 0.95 }}
              href="#projects"
              onClick={(e) => handleSmoothScroll(e, '#projects')}
              className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-8 py-3 rounded-full shadow-lg hover:shadow-blue-500/50 transition-all duration-300 group"
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
              className="glass text-gray-800 border border-blue-500/20 px-8 py-3 rounded-full shadow-md hover:shadow-lg transition-all duration-300"
            >
              Contact Me
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.05, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
              whileTap={{ scale: 0.95 }}
              href="https://www.linkedin.com/in/rahuly1606/"
              target="_blank"
              rel="noopener noreferrer"
              className="glass text-gray-800 border border-blue-500/20 px-8 py-3 rounded-full shadow-md hover:shadow-lg transition-all duration-300 flex items-center gap-2"
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