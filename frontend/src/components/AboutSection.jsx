import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const AboutSection = () => {
  const [activeSlide, setActiveSlide] = useState(0);

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
      <div className="absolute inset-0 bg-black"></div>
      <div className="absolute inset-0 opacity-10 bg-grid-pattern"></div>
      
      {/* Animated particles */}
      {[...Array(10)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-purple-500 opacity-20"
          style={{
            width: Math.random() * 8 + 4,
            height: Math.random() * 8 + 4,
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, Math.random() * 50 - 25],
            opacity: [0.1, 0.3, 0.1],
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
            className="inline-block px-6 py-2 mb-4 rounded-full bg-purple-900/30 text-purple-300 font-medium text-sm"
          >
            <span className="flex items-center gap-2">
              <span className="inline-block w-2 h-2 rounded-full bg-purple-500 animate-pulse"></span>
              Discover My Story
            </span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-5xl font-extrabold"
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-indigo-400 glow-text">
              {activeSlide === 0 ? "About Me" : "My Education"}
            </span>
          </motion.h2>
        </motion.div>

        <div className="about-slider">
          <div className="flex items-center justify-between mb-8">
            <button 
              onClick={handlePrevSlide}
              className="about-slide-control glow-border"
              aria-label="Previous slide"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            </button>
            
            <div className="flex items-center space-x-2">
              <div 
                className={`about-indicator ${activeSlide === 0 ? 'active' : ''}`}
                onClick={() => setActiveSlide(0)}
              ></div>
              <div 
                className={`about-indicator ${activeSlide === 1 ? 'active' : ''}`}
                onClick={() => setActiveSlide(1)}
              ></div>
            </div>
            
            <button 
              onClick={handleNextSlide}
              className="about-slide-control glow-border"
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
                    <div className="bg-gradient-to-r p-[1px] from-purple-600 to-indigo-600 rounded-2xl shadow-xl mb-8">
                      <div className="bg-black rounded-2xl p-6">
                        <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-purple-500" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13a1 1 0 102 0V9.414l1.293 1.293a1 1 0 001.414-1.414z" clipRule="evenodd" />
                          </svg>
                          Professional Profile
                        </h3>
                        <p className="text-gray-300 leading-relaxed">
                          🚀 I'm a passionate <span className="font-semibold text-purple-400">Full-Stack Developer</span> with a knack for building
                          high-performance, scalable, and visually stunning web applications.
                        </p>
                      </div>
                    </div>
                    
                    <div className="bg-gradient-to-r p-[1px] from-purple-600 to-indigo-600 rounded-2xl shadow-xl mb-8">
                      <div className="bg-black rounded-2xl p-6">
                        <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-purple-500" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
                          </svg>
                          Technical Expertise
                        </h3>
                        <p className="text-gray-300 leading-relaxed">
                          With expertise in <span className="text-purple-400 font-semibold">React, Node.js</span>, and modern web technologies,
                          I specialize in crafting seamless, responsive, and engaging digital experiences.
                        </p>
                      </div>
                    </div>
                    
                    <div className="bg-gradient-to-r p-[1px] from-purple-600 to-indigo-600 rounded-2xl shadow-xl">
                      <div className="bg-black rounded-2xl p-6">
                        <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-purple-500" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                            <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
                          </svg>
                          Problem Solver
                        </h3>
                        <p className="text-gray-300 leading-relaxed">
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
                      <p className="text-lg font-medium italic bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent">
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
                      <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full blur-xl opacity-30 animate-pulse-slow"></div>
                      <motion.div
                        className="relative z-10 bg-gradient-to-r p-1 from-purple-500 to-indigo-500 rounded-full shadow-2xl"
                        whileHover={{ scale: 1.03 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        <img
                          src="profile-img.png"
                          alt="Profile"
                          className="rounded-full w-72 h-72 object-cover border-4 border-black"
                        />
                      </motion.div>
                      
                      {/* Floating skill bubbles */}
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.8 }}
                        className="absolute -bottom-5 -left-5 flex items-center gap-2 rounded-full bg-black px-4 py-2 shadow-lg border border-purple-500/30"
                      >
                        <img src="icons/react.png" alt="React" className="h-5 w-5" />
                        <span className="text-sm font-medium text-gray-200">React</span>
                      </motion.div>
                      
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 1 }}
                        className="absolute -top-5 -right-5 flex items-center gap-2 rounded-full bg-black px-4 py-2 shadow-lg border border-purple-500/30"
                      >
                        <img src="icons/nodejs.png" alt="Node.js" className="h-5 w-5" />
                        <span className="text-sm font-medium text-gray-200">Node.js</span>
                      </motion.div>
                      
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 1.2 }}
                        className="absolute bottom-10 -right-10 flex items-center gap-2 rounded-full bg-black px-4 py-2 shadow-lg border border-purple-500/30"
                      >
                        <img src="icons/python.png" alt="Python" className="h-5 w-5" />
                        <span className="text-sm font-medium text-gray-200">Python</span>
                      </motion.div>
                    </div>
                  </motion.div>
                </div>
              </div>
              
              {/* Education Slide */}
              <div className="min-w-full">
                <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
                  <div className="lg:col-span-2">
                    <motion.div
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5 }}
                      className="bg-gradient-to-r p-[1px] from-purple-600 to-indigo-600 rounded-2xl shadow-xl h-full"
                    >
                      <div className="bg-black rounded-2xl p-8 h-full flex flex-col justify-center">
                        <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 mr-3 text-purple-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path d="M12 14l9-5-9-5-9 5 9 5z" />
                            <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
                          </svg>
                          Academic Journey
                        </h3>
                        <p className="text-gray-300 leading-relaxed mb-6">
                          My educational background has provided me with a strong foundation in computer science principles, problem-solving skills, and technical expertise that I apply to every project.
                        </p>
                        <div className="mt-auto">
                          <div className="flex flex-wrap gap-3">
                            {['Algorithms', 'Data Structures', 'Machine Learning', 'Web Development'].map((skill, index) => (
                              <div
                                key={skill}
                                className="px-3 py-1 bg-purple-900/30 text-purple-300 rounded-lg border border-purple-500/30 text-sm"
                              >
                                {skill}
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  </div>
                  
                  <div className="lg:col-span-3">
                    <div className="timeline-container">
                      <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="timeline-item"
                      >
                        <div className="bg-gradient-to-r p-[1px] from-purple-600 to-indigo-600 rounded-xl shadow-xl">
                          <div className="bg-black rounded-xl p-6">
                            <div className="flex items-center mb-3">
                              <div className="w-12 h-12 rounded-full bg-purple-900/30 flex items-center justify-center mr-4">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                                </svg>
                              </div>
                              <div>
                                <h4 className="text-xl font-bold text-white">Bachelor of Technology</h4>
                                <p className="text-purple-300">Computer Science & Engineering</p>
                              </div>
                            </div>
                            <div className="ml-16">
                              <p className="text-gray-300 mb-2">KL University, Andhra Pradesh</p>
                              <p className="text-gray-400 text-sm mb-4">2019 - 2023</p>
                              <p className="text-gray-300">
                                Completed my B.Tech with a focus on advanced programming, database systems, and web technologies. Participated in hackathons and coding competitions.
                              </p>
                              <div className="mt-4 flex items-center">
                                <div className="text-sm px-3 py-1 bg-purple-900/30 text-purple-300 rounded-lg">
                                  CGPA: 8.5/10
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                      
                      <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.5 }}
                        className="timeline-item"
                      >
                        <div className="bg-gradient-to-r p-[1px] from-purple-600 to-indigo-600 rounded-xl shadow-xl">
                          <div className="bg-black rounded-xl p-6">
                            <div className="flex items-center mb-3">
                              <div className="w-12 h-12 rounded-full bg-purple-900/30 flex items-center justify-center mr-4">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                                </svg>
                              </div>
                              <div>
                                <h4 className="text-xl font-bold text-white">Intermediate Education</h4>
                                <p className="text-purple-300">MPC (Mathematics, Physics, Chemistry)</p>
                              </div>
                            </div>
                            <div className="ml-16">
                              <p className="text-gray-300 mb-2">Sri Chaitanya Jr College, Hyderabad</p>
                              <p className="text-gray-400 text-sm mb-4">2017 - 2019</p>
                              <p className="text-gray-300">
                                Developed strong analytical and problem-solving skills through rigorous training in mathematics and sciences. Ranked in the top 5% of students.
                              </p>
                              <div className="mt-4 flex items-center">
                                <div className="text-sm px-3 py-1 bg-purple-900/30 text-purple-300 rounded-lg">
                                  Percentage: 95.6%
                                </div>
                              </div>
                            </div>
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
      </div>
    </section>
  );
};

export default AboutSection; 