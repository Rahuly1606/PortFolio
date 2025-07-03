import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const CodingBadges = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12
      }
    }
  };

  // Coding platform achievements
  const codingAchievements = [
    {
      platform: 'CodeChef',
      achievements: [
        '3-Star Competitive Coder',
        'Participated in 15+ contests',
        'Solved complex algorithmic problems',
        'Global ranking in top contests'
      ],
      icon: 'codechef.jpg',
      link: 'https://www.codechef.com/users/klu2300090198',
      rating: '1650+',
      color: 'from-yellow-500 to-amber-700'
    },
    {
      platform: 'LeetCode',
      achievements: [
        '250+ Problems Solved',
        'Strong in Data Structures & Algorithms',
        'Participated in Weekly Contests',
        'Top 10% in Monthly Challenges'
      ],
      icon: 'leetcode.png',
      link: 'https://leetcode.com/u/klu2300090198/',
      rating: '250+',
      color: 'from-orange-400 to-red-600'
    },
    {
      platform: 'HackerRank',
      achievements: [
        'Problem Solving Certification',
        'Gold Badge in Problem Solving',
        'Silver Badge in Python',
        'Active community contributor'
      ],
      icon: 'hackerank.png',
      link: 'https://www.hackerrank.com/profile/kl2300090198',
      rating: '5★',
      color: 'from-green-500 to-emerald-700'
    }
  ];

  // Coding statistics
  const codingStats = [
    { label: 'Problems Solved', value: '250+', icon: '🎯', color: 'bg-violet-100 text-violet-800' },
    { label: 'CodeChef Rating', value: '1650+', icon: '⭐', color: 'bg-amber-100 text-amber-800' },
    { label: 'Contest Participations', value: '30+', icon: '🏆', color: 'bg-blue-100 text-blue-800' },
    { label: 'Data Structures Mastered', value: '15+', icon: '🧩', color: 'bg-emerald-100 text-emerald-800' }
  ];

  const [activeTab, setActiveTab] = useState('overview');

  return (
    <motion.section
      id="coding"
      ref={ref}
      className="relative py-24 overflow-hidden"
      initial={{ opacity: 0 }}
      animate={inView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Background elements */}      
      <div className="absolute inset-0 bg-white"></div>
      <div className="absolute inset-0 bg-grid opacity-5"></div>
      
      {/* Improved decorative elements */}
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-orange-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse-slow"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-coral-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse"></div>
      <div className="absolute top-1/2 right-1/3 w-64 h-64 bg-amber-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-float"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-[url('/coding-pattern.svg')] bg-repeat opacity-5"></div>
      
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-orange-400 to-coral-500 bg-clip-text text-transparent">
            Competitive Programming
          </h2>
          <p className="text-gray-700 text-lg md:text-xl max-w-2xl mx-auto">
            Passionate about solving complex algorithmic problems and participating in coding competitions.
          </p>
        </motion.div>

        {/* Tab navigation */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <button
            onClick={() => setActiveTab('overview')}
            className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
              activeTab === 'overview' 
                ? 'bg-orange-500 text-white shadow-lg shadow-orange-500/30' 
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            Overview
          </button>
          <button
            onClick={() => setActiveTab('platforms')}
            className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
              activeTab === 'platforms' 
                ? 'bg-orange-500 text-white shadow-lg shadow-orange-500/30' 
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            Platforms
          </button>
          <button
            onClick={() => setActiveTab('stats')}
            className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
              activeTab === 'stats' 
                ? 'bg-orange-500 text-white shadow-lg shadow-orange-500/30' 
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            Stats
          </button>
        </div>

        {/* Overview Tab Content */}
        {activeTab === 'overview' && (
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
              {/* Left column: Summary */}
              <motion.div 
                variants={itemVariants} 
                className="bg-white rounded-2xl p-8 shadow-xl border border-orange-100"
              >
                <h3 className="text-2xl font-bold text-gray-900 mb-6">My Competitive Journey</h3>
                <div className="space-y-6 text-gray-700">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center mr-4">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-orange-500" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm0-2a6 6 0 110-12 6 6 0 010 12z" clipRule="evenodd" />
                        <path fillRule="evenodd" d="M10 12a1 1 0 01-.707-.293l-2-2a1 1 0 011.414-1.414L10 9.586l3.293-3.293a1 1 0 111.414 1.414l-4 4A1 1 0 0110 12z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <p>Started competitive programming in 2021, focusing on algorithms and data structures.</p>
                  </div>
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center mr-4">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-orange-500" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <p>Regularly participate in CodeChef contests, achieved 3-star rating through consistent performance.</p>
                  </div>
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center mr-4">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-orange-500" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <p>Solved 250+ problems on LeetCode, focusing on dynamic programming, graphs, and advanced algorithms.</p>
                  </div>
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center mr-4">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-orange-500" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <p>Earned multiple badges and certifications on HackerRank for problem-solving and language proficiency.</p>
                  </div>
                </div>
              </motion.div>              {/* Right column: Skills */}
              <motion.div variants={itemVariants}>
                <div className="bg-white rounded-2xl p-8 shadow-xl border border-orange-100 mb-8">
                  <h3 className="text-2xl font-bold text-gray-700 mb-6 flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                    Problem Solving Skills
                  </h3>
                  <div className="space-y-5">
                    <div>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-gray-700 font-medium">Data Structures</span>
                        <span className="text-orange-500 font-bold">90%</span>
                      </div>
                      <div className="h-2 bg-white rounded-full border border-orange-200">
                        <div className="h-full bg-gradient-to-r from-orange-400 to-orange-600 rounded-full" style={{ width: '90%' }}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-gray-700 font-medium">Algorithms</span>
                        <span className="text-orange-500 font-bold">85%</span>
                      </div>
                      <div className="h-2 bg-white rounded-full border border-orange-200">
                        <div className="h-full bg-gradient-to-r from-orange-400 to-orange-600 rounded-full" style={{ width: '85%' }}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-gray-700 font-medium">Dynamic Programming</span>
                        <span className="text-orange-500 font-bold">80%</span>
                      </div>
                      <div className="h-2 bg-white rounded-full border border-orange-200">
                        <div className="h-full bg-gradient-to-r from-orange-400 to-orange-600 rounded-full" style={{ width: '80%' }}></div>
                  </div>
                </div>
                    <div>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-gray-700 font-medium">Graph Algorithms</span>
                        <span className="text-orange-500 font-bold">75%</span>
                      </div>
                      <div className="h-2 bg-white rounded-full border border-orange-200">
                        <div className="h-full bg-gradient-to-r from-orange-400 to-orange-600 rounded-full" style={{ width: '75%' }}></div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white rounded-2xl p-8 shadow-xl border border-orange-100">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                    Strengths
                  </h3>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-orange-50 p-4 rounded-xl">
                      <div className="text-orange-500 font-bold mb-1">Time Complexity</div>
                      <div className="text-sm text-gray-700">Optimizing algorithms for efficiency</div>
                    </div>
                    <div className="bg-orange-50 p-4 rounded-xl">
                      <div className="text-orange-500 font-bold mb-1">Problem Analysis</div>
                      <div className="text-sm text-gray-700">Breaking down complex problems</div>
                    </div>
                    <div className="bg-orange-50 p-4 rounded-xl">
                      <div className="text-orange-500 font-bold mb-1">Pattern Recognition</div>
                      <div className="text-sm text-gray-700">Identifying solution patterns</div>
                    </div>
                    <div className="bg-orange-50 p-4 rounded-xl">
                      <div className="text-orange-500 font-bold mb-1">Clean Code</div>
                      <div className="text-sm text-gray-700">Writing readable solutions</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Featured Achievements */}
            <motion.div 
              variants={itemVariants} 
              className="bg-white rounded-2xl p-8 shadow-xl border border-orange-200 mb-12"
            >
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Featured Achievements</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white rounded-xl p-6 border border-orange-200 shadow-md">
                  <div className="w-14 h-14 rounded-lg mb-4 bg-orange-100 flex items-center justify-center">
                    <img src="/leetcode.png" alt="LeetCode" className="w-8 h-8 object-contain" />
                  </div>
                  <h4 className="text-lg font-semibold text-gray-800 mb-2">LeetCode Mastery</h4>
                  <p className="text-gray-700 mb-3">Solved 250+ problems across all difficulty levels</p>
                  <div className="flex items-center">
                    <span className="text-orange-500 text-xs font-semibold mr-2">ACHIEVEMENT</span>
                    <span className="text-gray-600 text-xs">Top 15% problem solver</span>
                  </div>
                </div>
                <div className="bg-white rounded-xl p-6 border border-orange-200 shadow-md">
                  <div className="w-14 h-14 rounded-lg mb-4 bg-orange-100 flex items-center justify-center">
                    <img src="/codechef.jpg" alt="CodeChef" className="w-8 h-8 object-contain" />
                  </div>
                  <h4 className="text-lg font-semibold text-gray-800 mb-2">CodeChef Star</h4>
                  <p className="text-gray-700 mb-3">Achieved 3-star rating in competitive contests</p>
                  <div className="flex items-center">
                    <span className="text-orange-500 text-xs font-semibold mr-2">ACHIEVEMENT</span>
                    <span className="text-gray-600 text-xs">Ranked in top contests</span>
                  </div>
                </div>
                <div className="bg-white rounded-xl p-6 border border-orange-200 shadow-md">
                  <div className="w-14 h-14 rounded-lg mb-4 bg-orange-100 flex items-center justify-center">
                    <img src="/hackerank.png" alt="HackerRank" className="w-8 h-8 object-contain" />
                  </div>
                  <h4 className="text-lg font-semibold text-gray-800 mb-2">HackerRank Certified</h4>
                  <p className="text-gray-700 mb-3">Problem Solving & Python Programming</p>
                  <div className="flex items-center">
                    <span className="text-orange-500 text-xs font-semibold mr-2">ACHIEVEMENT</span>
                    <span className="text-gray-600 text-xs">Gold Badge holder</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}

        {/* Platforms Tab Content */}
        {activeTab === 'platforms' && (
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {codingAchievements.map((platform, index) => (
              <motion.a
                key={platform.platform}
                href={platform.link}
                target="_blank"
                rel="noopener noreferrer"
                variants={itemVariants}
                whileHover={{ y: -10, transition: { duration: 0.3 } }}
                className="block bg-white rounded-2xl shadow-xl overflow-hidden border border-orange-100 transform transition-all duration-300 hover:shadow-orange-500/20"
              >
                <div className="relative h-32 bg-gradient-warm">
                  <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-coral-500 opacity-90"></div>
                  <div className="relative p-6 flex items-center justify-between">
                    <div className="bg-white rounded-full h-16 w-16 flex items-center justify-center shadow-lg">
                      <img src={platform.icon} alt={platform.platform} className="w-12 h-12 object-contain" />
                    </div>
                    <div className="bg-white text-orange-600 font-bold text-lg py-1 px-4 rounded-full shadow-md">
                      {platform.rating}
                    </div>
                  </div>
                  <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 bg-white rounded-full px-6 py-1 shadow-md border border-orange-100">
                    <span className="font-bold text-orange-600">{platform.platform}</span>
                  </div>
                </div>
                <div className="p-6 pt-8">
                  <div className="mt-4 space-y-3">
                    {platform.achievements.map((achievement, i) => (
                      <div key={i} className="flex items-start">
                        <div className="flex-shrink-0 h-5 w-5 text-orange-500 mt-0.5">
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <p className="ml-2 text-gray-700">{achievement}</p>
                      </div>
                    ))}
                  </div>
                  <div className="mt-6 flex justify-between items-center">
                    <div className="text-sm text-gray-500">View Profile</div>
                    <div className="h-8 w-8 rounded-full bg-orange-50 flex items-center justify-center text-orange-500 group-hover:bg-orange-500 group-hover:text-white transition-colors duration-300">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </div>
                </div>
                </div>
              </motion.a>
            ))}
          </motion.div>
        )}

        {/* Stats Tab Content */}
        {activeTab === 'stats' && (
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
              {codingStats.map((stat, index) => (
                <motion.div
                  key={index} 
                  variants={itemVariants}
                  className="bg-white rounded-2xl shadow-xl border border-orange-100 p-6 text-center transform transition-all duration-300 hover:-translate-y-2 hover:shadow-orange-500/20"
                >
                  <div className="w-16 h-16 mx-auto mb-4 bg-orange-50 rounded-full flex items-center justify-center text-2xl">
                    {stat.icon}
                  </div>
                  <h3 className="text-3xl font-bold text-orange-600 mb-2">{stat.value}</h3>
                  <p className="text-gray-700">{stat.label}</p>
                </motion.div>
              ))}
            </div>
            
            <motion.div
              variants={itemVariants} 
              className="bg-white rounded-2xl shadow-xl border border-orange-100 p-8"
            >
              <div className="flex flex-col lg:flex-row gap-8">
                <div className="lg:w-1/2">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                    Performance Metrics
                  </h3>
                  
                  <div className="space-y-6">
                    <div>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-gray-700">Contest Participation</span>
                        <span className="text-orange-500 font-bold">30+</span>
                    </div>
                      <div className="h-3 bg-white rounded-full border border-orange-200">
                        <div className="h-full bg-gradient-to-r from-orange-400 to-orange-600 rounded-full" style={{ width: '75%' }}></div>
                  </div>
                    </div>
                    
                    <div>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-gray-700">Problem Solving Streak</span>
                        <span className="text-orange-500 font-bold">45 days</span>
                  </div>
                      <div className="h-3 bg-white rounded-full border border-orange-200">
                        <div className="h-full bg-gradient-to-r from-orange-400 to-orange-600 rounded-full" style={{ width: '65%' }}></div>
                  </div>
                    </div>
                    
                    <div>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-gray-700">Consistency Rating</span>
                        <span className="text-orange-500 font-bold">High</span>
                      </div>
                      <div className="h-3 bg-white rounded-full border border-orange-200">
                        <div className="h-full bg-gradient-to-r from-orange-400 to-orange-600 rounded-full" style={{ width: '85%' }}></div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="lg:w-1/2">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                    </svg>
                    Key Achievements
                  </h3>
                  
                  <div className="space-y-4">
                    <div className="bg-orange-50 p-4 rounded-xl">
                      <div className="font-semibold text-gray-900">Top 10% in LeetCode Contest</div>
                      <div className="text-sm text-gray-700 mt-1">Consistently solved all problems within the time limit</div>
                        </div>
                    
                    <div className="bg-orange-50 p-4 rounded-xl">
                      <div className="font-semibold text-gray-900">3★ Coder on CodeChef</div>
                      <div className="text-sm text-gray-700 mt-1">Achieved rating of 1650+ through consistent performance</div>
                          </div>
                    
                    <div className="bg-orange-50 p-4 rounded-xl">
                      <div className="font-semibold text-gray-900">Gold Badge in Problem Solving</div>
                      <div className="text-sm text-gray-700 mt-1">HackerRank certification for advanced problem solving skills</div>
                        </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}        {/* Call to action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex flex-wrap justify-center gap-4">
            <motion.a
              href="https://leetcode.com/u/klu2300090198/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-gradient-to-r from-orange-600 to-coral-600 hover:from-orange-500 hover:to-coral-500 text-white font-medium py-3 px-8 rounded-lg transition-all duration-300"
              whileHover={{ y: -5, scale: 1.02, boxShadow: "0 10px 25px -5px rgba(255, 106, 0, 0.5)" }}
              whileTap={{ scale: 0.98 }}
            >
              <img src="/leetcode.png" alt="LeetCode" className="w-5 h-5 object-contain" />
              View LeetCode Profile
            </motion.a>
            
            <motion.a
              href="https://www.codechef.com/users/klu2300090198"
              target="_blank"
              rel="noopener noreferrer" 
              className="flex items-center gap-2 bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-500 hover:to-orange-500 text-white font-medium py-3 px-8 rounded-lg transition-all duration-300"
              whileHover={{ y: -5, scale: 1.02, boxShadow: "0 10px 25px -5px rgba(217, 119, 6, 0.5)" }}
              whileTap={{ scale: 0.98 }}
            >
              <img src="/codechef.jpg" alt="CodeChef" className="w-5 h-5 object-contain rounded-full" />
              View CodeChef Profile
            </motion.a>
            
            <motion.a
              href="https://www.hackerrank.com/profile/kl2300090198"
              target="_blank"
              rel="noopener noreferrer" 
              className="flex items-center gap-2 bg-gradient-to-r from-coral-600 to-rose-600 hover:from-coral-500 hover:to-rose-500 text-white font-medium py-3 px-8 rounded-lg transition-all duration-300"
              whileHover={{ y: -5, scale: 1.02, boxShadow: "0 10px 25px -5px rgba(255, 106, 106, 0.5)" }}
              whileTap={{ scale: 0.98 }}
            >
              <img src="/hackerank.png" alt="HackerRank" className="w-5 h-5 object-contain" />
              View HackerRank Profile
            </motion.a>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default CodingBadges;
