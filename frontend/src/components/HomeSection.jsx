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

  return (
    <motion.section
      id="home"
      className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      {/* Enhanced animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Dark gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black opacity-90"></div>
        
        {/* Animated noise texture */}
        <div className="absolute inset-0 bg-noise opacity-[0.05]"></div>
        
        {/* Animated gradient blobs */}
        <motion.div 
          className="absolute -top-20 -left-20 w-96 h-96 bg-gradient-radial from-purple-900/20 to-transparent rounded-full mix-blend-multiply filter blur-3xl"
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
          className="absolute bottom-0 right-0 w-80 h-80 bg-gradient-radial from-indigo-900/20 to-transparent rounded-full mix-blend-multiply filter blur-3xl"
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
          className="absolute top-1/2 left-1/3 w-72 h-72 bg-gradient-radial from-purple-900/10 to-transparent rounded-full mix-blend-multiply filter blur-3xl"
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
        
        {/* Animated particles */}
        {[...Array(25)].map((_, i) => (
          <motion.div
            key={i}
            className={`absolute rounded-full ${
              'bg-purple-500 opacity-20'
            }`}
            style={{
              width: Math.random() * 15 + 5,
              height: Math.random() * 15 + 5,
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
        
        {/* Grid pattern overlay */}
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
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
            className="inline-block px-6 py-2 mb-6 rounded-full bg-purple-900/30 text-purple-300 font-medium text-sm shadow-soft glow-border"
          >
            <span className="flex items-center gap-2">
              <span className="inline-block w-2 h-2 rounded-full bg-purple-500 animate-pulse"></span>
              Full-Stack Developer
            </span>
          </motion.div>
          
          {/* Responsive typing animation container */}
          <div className="typing-container overflow-hidden">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-100 mb-4 text-shadow-lg glow-text">
              <span className="typing-text inline-block">{text}</span><span className="cursor">|</span>
            </h1>
          </div>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="mt-4 text-xl text-gray-300 leading-relaxed max-w-xl"
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
              whileHover={{ scale: 1.05, boxShadow: "0 10px 25px -5px rgba(139, 92, 246, 0.4)" }}
              whileTap={{ scale: 0.95 }}
              href="#projects"
              onClick={(e) => handleSmoothScroll(e, '#projects')}
              className="btn-primary px-8 py-3 rounded-full shadow-lg hover:shadow-purple-500/50 transition-all duration-300 group"
            >
              <span className="flex items-center gap-2">
                View Projects
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </span>
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.05, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.3)" }}
              whileTap={{ scale: 0.95 }}
              href="#footer"
              onClick={(e) => handleSmoothScroll(e, '#footer')}
              className="btn-secondary px-8 py-3 rounded-full shadow-md hover:shadow-lg transition-all duration-300"
            >
              Contact Me
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.05, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.3)" }}
              whileTap={{ scale: 0.95 }}
              href="https://www.linkedin.com/in/rahuly1606/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary px-8 py-3 rounded-full shadow-md hover:shadow-lg transition-all duration-300 flex items-center gap-2"
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
            {/* Creative 3D visualization with glow effect */}
            <motion.div
              className="w-80 h-80 relative"
              animate={{ 
                rotateY: [0, 360],
              }}
              transition={{ 
                duration: 20,
                repeat: Infinity,
                ease: "linear"
              }}
            >
              {/* Glow background */}
              <div className="absolute inset-0 rounded-full bg-purple-500/10 filter blur-3xl animate-pulse-slow"></div>
              
              {/* Floating code blocks */}
              {[...Array(5)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute rounded-lg bg-gray-900 shadow-xl p-4 border-l-4 border-purple-500 text-sm font-mono text-gray-300 w-48 glow-border"
                  style={{
                    top: `${20 + i * 15}%`,
                    left: `${15 + (i % 3) * 12}%`,
                    zIndex: 5 - i,
                    transform: `rotate(${i * 5}deg)`,
                  }}
                  animate={{
                    y: [0, -10, 0],
                    x: [0, i % 2 === 0 ? 10 : -10, 0],
                    rotate: [i * 5, i * 5 + 3, i * 5],
                  }}
                  transition={{
                    duration: 4 + i,
                    repeat: Infinity,
                    repeatType: "reverse",
                    ease: "easeInOut",
                    delay: i * 0.2,
                  }}
                >
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  </div>
                  {i === 0 && <div className="text-purple-400">function App() &#123;</div>}
                  {i === 1 && <div className="text-blue-400">const [state, setState] = useState();</div>}
                  {i === 2 && <div className="text-green-400">return &lt;Component /&gt;;</div>}
                  {i === 3 && <div className="text-purple-400">useEffect(function() &#123; ... &#125;);</div>}
                  {i === 4 && <div className="text-blue-400">&#125; // End of App</div>}
                </motion.div>
              ))}

              {/* Central rotating element */}
              <motion.div
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32"
                animate={{ 
                  rotate: [0, 360],
                }}
                transition={{ 
                  duration: 15,
                  repeat: Infinity,
                  ease: "linear"
                }}
              >
                <div className="relative w-full h-full">
                  <motion.div
                    className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500 to-indigo-500 opacity-80 blur-md"
                    animate={{ 
                      scale: [1, 1.2, 1],
                    }}
                    transition={{ 
                      duration: 3,
                      repeat: Infinity,
                      repeatType: "reverse"
                    }}
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-white" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>
              </motion.div>
            </motion.div>
            
            {/* Skill badges with glow effect */}
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="absolute -top-5 -right-5 bg-black glow-border rounded-full p-3 shadow-lg"
            >
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              >
                <img src="icons/react.png" alt="React" className="h-8 w-8" />
              </motion.div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="absolute top-1/2 -right-10 bg-black glow-border rounded-full p-2 shadow-lg"
            >
              <img src="icons/nodejs.png" alt="Node.js" className="h-6 w-6" />
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 1 }}
              className="absolute bottom-1/4 -left-10 bg-black glow-border rounded-full p-2 shadow-lg"
            >
              <img src="icons/python.png" alt="Python" className="h-6 w-6" />
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