import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const AboutSection = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const handlePrevSlide = () => {
    setActiveSlide(activeSlide === 0 ? 1 : 0);
  };

  const handleNextSlide = () => {
    setActiveSlide(activeSlide === 0 ? 1 : 0);
  };

  return (
    <section
      id="about"
      className="relative py-24 overflow-hidden"
    >
      {/* Background elements */}
      <div className="absolute inset-0 bg-white"></div>
      <div className="absolute inset-0 opacity-5 bg-grid"></div>
      
      {/* Animated particles - with reduced motion check */}
      {!prefersReducedMotion && [...Array(10)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-orange-500 opacity-10"
          style={{
            width: Math.random() * 8 + 4,
            height: Math.random() * 8 + 4,
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, Math.random() * 50 - 25],
            opacity: [0.05, 0.2, 0.05],
          }}
          transition={{
            duration: Math.random() * 8 + 8,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
          }}
        />
      ))}

      <div className="mx-auto max-w-7xl px-6 lg:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-block px-6 py-2 mb-4 rounded-full glass shadow-soft border border-orange-500/20 text-orange-600 font-medium text-sm"
          >
            <span className="flex items-center gap-2">
              <span className="inline-block w-2 h-2 rounded-full bg-orange-500 animate-pulse"></span>
              Discover My Story
            </span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-5xl font-extrabold"
          >
            <span className="bg-clip-text text-transparent bg-gradient-warm">
              {activeSlide === 0 ? "About Me" : "My Education"}
            </span>
          </motion.h2>
        </motion.div>

        <div className="about-slider">
          <div className="flex items-center justify-between mb-8">
            <button 
              onClick={handlePrevSlide}
              className="p-3 rounded-full glass border border-orange-500/20 text-orange-600 shadow-md hover:shadow-orange-500/20 transition-all duration-300"
              aria-label="Previous slide"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            </button>
            
            <div className="flex items-center space-x-2">
              <div 
                className={`h-3 w-12 rounded-full transition-all duration-300 cursor-pointer ${activeSlide === 0 ? 'bg-gradient-warm' : 'bg-gray-200'}`}
                onClick={() => setActiveSlide(0)}
              ></div>
              <div 
                className={`h-3 w-12 rounded-full transition-all duration-300 cursor-pointer ${activeSlide === 1 ? 'bg-gradient-warm' : 'bg-gray-200'}`}
                onClick={() => setActiveSlide(1)}
              ></div>
            </div>
            
            <button 
              onClick={handleNextSlide}
              className="p-3 rounded-full glass border border-orange-500/20 text-orange-600 shadow-md hover:shadow-orange-500/20 transition-all duration-300"
              aria-label="Next slide"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
              </svg>
            </button>
          </div>

          <div className="relative overflow-hidden rounded-2xl">
            <div 
              className="flex transition-transform duration-500 ease-in-out" 
              style={{ transform: `translateX(-${activeSlide * 100}%)` }}
            >
              {/* About Me Slide */}
              <div className="min-w-full">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
                  <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.7 }}
                    className="text-center lg:text-left"
                  >
                    <div className="bg-gradient-warm p-[1px] rounded-2xl shadow-xl mb-8">
                      <div className="glass rounded-2xl p-6">
                        <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-orange-500" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13a1 1 0 102 0V9.414l1.293 1.293a1 1 0 001.414-1.414z" clipRule="evenodd" />
                          </svg>
                          Professional Profile
                        </h3>
                        <p className="text-gray-700 leading-relaxed">
                          🚀 I'm a passionate <span className="font-semibold text-orange-600">Full-Stack Developer</span> with a knack for building
                          high-performance, scalable, and visually stunning web applications.
                        </p>
                      </div>
                    </div>
                    
                    <div className="bg-gradient-warm p-[1px] rounded-2xl shadow-xl mb-8">
                      <div className="glass rounded-2xl p-6">
                        <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-orange-500" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
                          </svg>
                          Technical Expertise
                        </h3>
                        <p className="text-gray-700 leading-relaxed">
                          With expertise in <span className="text-orange-600 font-semibold">React, Node.js</span>, and modern web technologies,
                          I specialize in crafting seamless, responsive, and engaging digital experiences.
                        </p>
                      </div>
                    </div>
                    
                    <div className="bg-gradient-warm p-[1px] rounded-2xl shadow-xl">
                      <div className="glass rounded-2xl p-6">
                        <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-orange-500" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                            <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
                          </svg>
                          Problem Solver
                        </h3>
                        <p className="text-gray-700 leading-relaxed">
                          💡 I love turning ideas into reality and solving complex problems with clean and efficient code.
                          Whether it's a new feature or optimizing an existing one, my goal is always to deliver exceptional user experiences.
                        </p>
                      </div>
                    </div>
                    
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.7 }}
                      className="mt-8 text-center lg:text-left"
                    >
                      <p className="text-lg font-medium italic bg-gradient-warm bg-clip-text text-transparent">
                        "Let's build something amazing together and create meaningful digital experiences!" 🌟
                      </p>
                    </motion.div>
                  </motion.div>
                  
                  <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.7, delay: 0.3 }}
                    className="flex justify-center"
                  >
                    <div className="relative">
                      <div className="absolute inset-0 bg-gradient-warm rounded-full blur-xl opacity-30 animate-pulse-slow"></div>
                      <motion.div
                        className="relative z-10 bg-gradient-warm p-1 rounded-full shadow-2xl"
                        whileHover={{ scale: 1.03 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        <img
                          src="profile-img.png"
                          alt="Profile"
                          className="rounded-full h-80 w-80 object-cover border-4 border-white"
                        />
                        
                        {/* Floating badges */}
                        <motion.div 
                          className="absolute -top-4 -right-4 glass rounded-full p-3 border border-orange-500/20 shadow-lg"
                          animate={!prefersReducedMotion ? { y: [0, -8, 0] } : {}}
                          transition={{ 
                            duration: 3, 
                            repeat: Infinity,
                            repeatType: "reverse"
                          }}
                        >
                          <img src="icons/react.png" alt="React" className="h-10 w-10" />
                        </motion.div>
                        
                        <motion.div 
                          className="absolute bottom-12 -right-8 glass rounded-full p-2 border border-orange-500/20 shadow-lg"
                          animate={!prefersReducedMotion ? { y: [0, 8, 0] } : {}}
                          transition={{ 
                            duration: 4, 
                            repeat: Infinity,
                            repeatType: "reverse",
                            delay: 0.5
                          }}
                        >
                          <img src="icons/nodejs.png" alt="Node.js" className="h-8 w-8" />
                        </motion.div>
                        
                        <motion.div 
                          className="absolute top-16 -left-6 glass rounded-full p-2 border border-orange-500/20 shadow-lg"
                          animate={!prefersReducedMotion ? { y: [0, -6, 0] } : {}}
                          transition={{ 
                            duration: 3.5, 
                            repeat: Infinity,
                            repeatType: "reverse",
                            delay: 1
                          }}
                        >
                          <img src="icons/tailwind.png" alt="Tailwind CSS" className="h-6 w-6" />
                        </motion.div>
                        
                        <motion.div 
                          className="absolute bottom-20 -left-10 glass rounded-full p-2 border border-orange-500/20 shadow-lg"
                          animate={!prefersReducedMotion ? { y: [0, 10, 0] } : {}}
                          transition={{ 
                            duration: 5, 
                            repeat: Infinity,
                            repeatType: "reverse",
                            delay: 1.5
                          }}
                        >
                          <img src="icons/python.png" alt="Python" className="h-8 w-8" />
                        </motion.div>
                      </motion.div>
                    </div>
                  </motion.div>
                </div>
              </div>
              
              {/* Education Slide */}
              <div className="min-w-full">
                <div className="max-w-4xl mx-auto">
                  <div className="timeline-container">
                    <motion.div 
                      initial={{ opacity: 0, y: 50 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6 }}
                      className="timeline-item"
                    >
                      <div className="glass p-6 rounded-xl shadow-lg border border-orange-500/20">
                        <h3 className="text-2xl font-bold text-gray-800 mb-2">Master of Computer Applications</h3>
                        <div className="flex justify-between mb-4">
                          <p className="text-orange-600 font-semibold">KL University</p>
                          <p className="text-gray-500">2021 - 2023</p>
                        </div>
                        <p className="text-gray-700">
                          Specialized in Full-Stack Development with a focus on modern JavaScript frameworks and cloud technologies.
                          Completed multiple real-world projects and earned a GPA of 9.4/10.
                        </p>
                        <div className="mt-4 flex flex-wrap gap-2">
                          <span className="text-xs bg-orange-100 text-orange-700 px-3 py-1 rounded-full">React</span>
                          <span className="text-xs bg-orange-100 text-orange-700 px-3 py-1 rounded-full">Node.js</span>
                          <span className="text-xs bg-orange-100 text-orange-700 px-3 py-1 rounded-full">Cloud Computing</span>
                        </div>
                      </div>
                    </motion.div>
                    
                    <motion.div 
                      initial={{ opacity: 0, y: 50 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.2 }}
                      className="timeline-item"
                    >
                      <div className="glass p-6 rounded-xl shadow-lg border border-orange-500/20">
                        <h3 className="text-2xl font-bold text-gray-800 mb-2">Bachelor of Computer Applications</h3>
                        <div className="flex justify-between mb-4">
                          <p className="text-orange-600 font-semibold">University of Technology</p>
                          <p className="text-gray-500">2018 - 2021</p>
                        </div>
                        <p className="text-gray-700">
                          Built a strong foundation in computer science fundamentals, data structures, and algorithms.
                          Participated in various hackathons and coding competitions.
                        </p>
                        <div className="mt-4 flex flex-wrap gap-2">
                          <span className="text-xs bg-orange-100 text-orange-700 px-3 py-1 rounded-full">Java</span>
                          <span className="text-xs bg-orange-100 text-orange-700 px-3 py-1 rounded-full">Python</span>
                          <span className="text-xs bg-orange-100 text-orange-700 px-3 py-1 rounded-full">Data Structures</span>
                        </div>
                      </div>
                    </motion.div>
                    
                    <motion.div 
                      initial={{ opacity: 0, y: 50 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.4 }}
                      className="timeline-item"
                    >
                      <div className="glass p-6 rounded-xl shadow-lg border border-orange-500/20">
                        <h3 className="text-2xl font-bold text-gray-800 mb-2">Continuous Learning</h3>
                        <div className="flex justify-between mb-4">
                          <p className="text-orange-600 font-semibold">Online & Self-Paced</p>
                          <p className="text-gray-500">2021 - Present</p>
                        </div>
                        <p className="text-gray-700">
                          Continuously expanding my knowledge through online courses, workshops, and hands-on projects.
                          Recently completed certifications in cloud technologies and advanced JavaScript patterns.
                        </p>
                        <div className="mt-4 flex flex-wrap gap-2">
                          <span className="text-xs bg-orange-100 text-orange-700 px-3 py-1 rounded-full">AWS</span>
                          <span className="text-xs bg-orange-100 text-orange-700 px-3 py-1 rounded-full">TypeScript</span>
                          <span className="text-xs bg-orange-100 text-orange-700 px-3 py-1 rounded-full">DevOps</span>
                        </div>
                      </div>
                    </motion.div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection; 