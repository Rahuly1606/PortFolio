import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const HomeSection = () => {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  const words = ["Hi, I'm Rahul Kumar"];

  useEffect(() => {
    const handleTyping = () => {
      const i = loopNum % words.length;
      const fullText = words[i];

      setText(
        isDeleting
          ? fullText.substring(0, text.length - 1)
          : fullText.substring(0, text.length + 1)
      );

      setTypingSpeed(isDeleting ? 30 : 150);

      if (!isDeleting && text === fullText) {
        setTimeout(() => setIsDeleting(true), 500);
      } else if (isDeleting && text === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);

    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum, typingSpeed, words]);

  const handleSmoothScroll = (e, href) => {
    e.preventDefault();
    document.querySelector(href).scrollIntoView({ behavior: 'smooth' });
  };

  // Add reduced motion check for accessibility
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  return (
    <motion.section
      id="home"
      className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      {/* Animated gradient background with warm tones */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Base light background */}
        <div className="absolute inset-0 bg-white"></div>
        
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
        
        {/* Subtle animated gradient blobs - with reduced motion check */}
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
            />
          </>
        )}
        
        {/* Animated particles - with reduced motion check */}
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
          />
        ))}
        
        {/* Subtle grid pattern overlay */}
        <div className="absolute inset-0 bg-grid opacity-10"></div>
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8 flex flex-col lg:flex-row items-center justify-between relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-center lg:text-left lg:w-2/5"
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
          <div className="typing-container overflow-hidden">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-800 mb-4 text-shadow">
              <span className="typing-text inline-block">{text}</span><span className="cursor text-orange-500">|</span>
            </h1>
          </div>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="mt-4 text-xl text-gray-700 leading-relaxed max-w-xl"
          >
            A passionate developer and designer crafting beautiful and functional digital experiences that solve real-world problems.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            className="mt-8 flex flex-wrap justify-center lg:justify-start gap-4"
          >
            <motion.a
              whileHover={{ scale: 1.05, boxShadow: "0 10px 25px -5px rgba(255, 106, 0, 0.4)" }}
              whileTap={{ scale: 0.95 }}
              href="#projects"
              onClick={(e) => handleSmoothScroll(e, '#projects')}
              className="bg-gradient-warm text-white px-8 py-3 rounded-full shadow-lg hover:shadow-orange-500/50 transition-all duration-300 group"
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
        
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mt-16 lg:mt-0 lg:w-3/5 flex justify-center lg:justify-end pr-0 lg:pr-20"
        >
          <div className="relative translate-x-12 lg:translate-x-16">
            {/* Creative visualization with glassmorphic effect */}
            <motion.div
              className="w-80 h-80 relative"
              animate={!prefersReducedMotion ? { 
                rotateY: [0, 360],
              } : {}}
              transition={{ 
                duration: 20,
                repeat: Infinity,
                ease: "linear"
              }}
            >
              {/* Soft glow background */}
              <div className="absolute inset-0 rounded-full bg-orange-500/5 filter blur-3xl animate-pulse-slow"></div>
              
              {/* Floating code blocks with glassmorphism */}
              {[...Array(5)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute rounded-lg glass shadow-xl p-4 border-l-4 border-orange-500 text-sm font-mono text-gray-700 w-48"
                  style={{
                    top: `${20 + i * 15}%`,
                    left: `${15 + (i % 3) * 12}%`,
                    zIndex: 5 - i,
                    transform: `rotate(${i * 5}deg)`,
                  }}
                  animate={!prefersReducedMotion ? {
                    y: [0, -10, 0],
                    x: [0, i % 2 === 0 ? 10 : -10, 0],
                    rotate: [i * 5, i * 5 + 3, i * 5],
                  } : {}}
                  transition={{
                    duration: 4 + i,
                    repeat: Infinity,
                    repeatType: "reverse",
                    ease: "easeInOut"
                  }}
                >
                  <div className="font-mono text-xs">
                    <span className="text-orange-600">{`function `}</span>
                    <span className="text-coral-600">{`create`}</span>
                    <span className="text-gray-700">{`() {`}</span>
                    <br />
                    <span className="pl-4 text-gray-700">{`return `}</span>
                    <span className="text-coral-600">{`"Amazing!"`}</span>
                    <br />
                    <span className="text-gray-700">{`}`}</span>
                  </div>
                </motion.div>
              ))}
              
              {/* Central profile image with glassmorphic effect */}
              <motion.div 
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-warm rounded-full blur-md opacity-30 animate-pulse-slow"></div>
                  <div className="glass rounded-full p-1 border border-orange-500/20 shadow-xl relative">
                    <img 
                      src="My_photo.jpg" 
                      alt="Rahul Kumar" 
                      className="w-36 h-36 object-cover rounded-full border-2 border-white"
                    />
                  </div>
                  <div className="absolute -bottom-4 -right-4 glass rounded-full p-3 border border-orange-500/20 shadow-lg">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-orange-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                    </svg>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
      
      {/* Scroll down indicator */}
      <motion.div 
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 1 }}
      >
        <span className="text-sm text-gray-400 mb-2">Scroll Down</span>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default HomeSection; 