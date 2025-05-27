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
      className="relative py-24 overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900"
      initial={{ opacity: 0 }}
      animate={inView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Background elements */}      <div className="absolute inset-0 opacity-10">
        <div className="absolute transform -rotate-12 -translate-y-1/4 -left-1/4 w-1/2 h-full bg-gradient-to-br from-blue-500/20 to-purple-600/20 rounded-full blur-3xl"></div>
        <div className="absolute transform rotate-12 translate-y-1/3 -right-1/4 w-1/2 h-full bg-gradient-to-br from-purple-500/20 to-pink-600/20 rounded-full blur-3xl"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-[url('/coding-pattern.svg')] bg-repeat opacity-5"></div>
      </div>
      
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 via-indigo-500 to-purple-600 bg-clip-text text-transparent">
            Competitive Programming
          </h2>
          <p className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto">
            Passionate about solving complex algorithmic problems and participating in coding competitions.
          </p>
        </motion.div>

        {/* Tab navigation */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <button
            onClick={() => setActiveTab('overview')}
            className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
              activeTab === 'overview' 
                ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/30' 
                : 'bg-gray-700/50 text-gray-300 hover:bg-gray-700'
            }`}
          >
            Overview
          </button>
          <button
            onClick={() => setActiveTab('platforms')}
            className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
              activeTab === 'platforms' 
                ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/30' 
                : 'bg-gray-700/50 text-gray-300 hover:bg-gray-700'
            }`}
          >
            Platforms
          </button>
          <button
            onClick={() => setActiveTab('stats')}
            className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
              activeTab === 'stats' 
                ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/30' 
                : 'bg-gray-700/50 text-gray-300 hover:bg-gray-700'
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
                className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 shadow-xl border border-gray-700"
              >
                <h3 className="text-2xl font-bold text-white mb-6">My Competitive Journey</h3>
                <div className="space-y-6 text-gray-300">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-600/20 flex items-center justify-center mr-4">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-400" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm0-2a6 6 0 110-12 6 6 0 010 12z" clipRule="evenodd" />
                        <path fillRule="evenodd" d="M10 12a1 1 0 01-.707-.293l-2-2a1 1 0 011.414-1.414L10 9.586l3.293-3.293a1 1 0 111.414 1.414l-4 4A1 1 0 0110 12z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <p>Started competitive programming in 2021, focusing on algorithms and data structures.</p>
                  </div>
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-purple-600/20 flex items-center justify-center mr-4">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-purple-400" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <p>Regularly participate in CodeChef contests, achieved 3-star rating through consistent performance.</p>
                  </div>
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-indigo-600/20 flex items-center justify-center mr-4">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-indigo-400" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <p>Solved 250+ problems on LeetCode, focusing on dynamic programming, graphs, and advanced algorithms.</p>
                  </div>
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-pink-600/20 flex items-center justify-center mr-4">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-pink-400" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <p>Passionate about optimizing solutions for time and space complexity, with a focus on elegant code.</p>
                  </div>
                </div>
              </motion.div>              {/* Right column: Skills */}
              <motion.div 
                variants={itemVariants} 
                className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 shadow-xl border border-gray-700"
              >
                <h3 className="text-2xl font-bold text-white mb-6">Problem Solving Skills</h3>
                <div className="relative mb-8">
                  <img 
                    src="/algorithm-visual.svg" 
                    alt="Algorithm Visualization" 
                    className="w-full rounded-lg opacity-60 hover:opacity-90 transition-opacity duration-500"
                  />
                  <div className="absolute bottom-3 right-3 bg-gray-900/80 backdrop-blur-sm px-3 py-1 rounded-full text-xs text-blue-300 border border-blue-900/50">
                    <span className="flex items-center gap-1">
                      <span className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></span>
                      Algorithm Visualization
                    </span>
                  </div>
                </div>
                
                <div className="space-y-6">
                  {['Data Structures', 'Algorithms', 'Dynamic Programming', 'Graph Theory'].map((skill, index) => (
                    <div key={index}>
                      <div className="flex justify-between mb-2">
                        <span className="text-gray-300">{skill}</span>
                        <span className="text-gray-400 text-sm">Advanced</span>
                      </div>
                      <div className="w-full bg-gray-700 rounded-full h-2.5">
                        <div className={`h-2.5 rounded-full ${
                          index === 0 ? 'bg-blue-500' : 
                          index === 1 ? 'bg-purple-500' : 
                          index === 2 ? 'bg-pink-500' : 
                          'bg-indigo-500'
                        }`} style={{ width: `${90 - index * 5}%` }}></div>
                      </div>
                    </div>
                  ))}
                </div>
                
                <h3 className="text-2xl font-bold text-white mt-8 mb-6">Topics Mastered</h3>
                <div className="flex flex-wrap gap-2">
                  {[
                    'Arrays', 'Linked Lists', 'Trees', 'Graphs', 'Heaps',
                    'Binary Search', 'Backtracking', 'Greedy', 'DP', 'Sliding Window',
                    'Two Pointers', 'BFS/DFS', 'Recursion', 'Bit Manipulation', 'Math'
                  ].map((topic, i) => (
                    <span 
                      key={i} 
                      className="px-3 py-1 rounded-full text-sm bg-gradient-to-r from-blue-800/30 to-indigo-800/30 text-blue-300 border border-blue-800/50"
                    >
                      {topic}
                    </span>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Featured Achievements */}
            <motion.div 
              variants={itemVariants} 
              className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 shadow-xl border border-gray-700 mb-12"
            >
              <h3 className="text-2xl font-bold text-white mb-6">Featured Achievements</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-gradient-to-br from-blue-900/30 to-indigo-900/30 rounded-xl p-6 border border-blue-800/30">
                  <div className="w-14 h-14 rounded-lg mb-4 bg-blue-600/20 flex items-center justify-center">
                    <img src="/leetcode.png" alt="LeetCode" className="w-8 h-8 object-contain" />
                  </div>
                  <h4 className="text-lg font-semibold text-white mb-2">LeetCode Mastery</h4>
                  <p className="text-gray-300 mb-3">Solved 250+ problems across all difficulty levels</p>
                  <div className="flex items-center">
                    <span className="text-yellow-500 text-xs font-semibold mr-2">ACHIEVEMENT</span>
                    <span className="text-gray-400 text-xs">Top 15% problem solver</span>
                  </div>
                </div>
                <div className="bg-gradient-to-br from-amber-900/30 to-orange-900/30 rounded-xl p-6 border border-amber-800/30">
                  <div className="w-14 h-14 rounded-lg mb-4 bg-amber-600/20 flex items-center justify-center">
                    <img src="/codechef.jpg" alt="CodeChef" className="w-8 h-8 object-contain" />
                  </div>
                  <h4 className="text-lg font-semibold text-white mb-2">CodeChef Star</h4>
                  <p className="text-gray-300 mb-3">Achieved 3-star rating in competitive contests</p>
                  <div className="flex items-center">
                    <span className="text-yellow-500 text-xs font-semibold mr-2">ACHIEVEMENT</span>
                    <span className="text-gray-400 text-xs">Ranked in top contests</span>
                  </div>
                </div>
                <div className="bg-gradient-to-br from-green-900/30 to-emerald-900/30 rounded-xl p-6 border border-green-800/30">
                  <div className="w-14 h-14 rounded-lg mb-4 bg-green-600/20 flex items-center justify-center">
                    <img src="/hackerank.png" alt="HackerRank" className="w-8 h-8 object-contain" />
                  </div>
                  <h4 className="text-lg font-semibold text-white mb-2">HackerRank Certified</h4>
                  <p className="text-gray-300 mb-3">Problem Solving & Python Programming</p>
                  <div className="flex items-center">
                    <span className="text-yellow-500 text-xs font-semibold mr-2">ACHIEVEMENT</span>
                    <span className="text-gray-400 text-xs">Gold Badge holder</span>
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
            className="grid grid-cols-1 lg:grid-cols-3 gap-8"
          >
            {codingAchievements.map((platform, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl overflow-hidden shadow-xl border border-gray-700 flex flex-col"
              >
                <div className={`p-6 bg-gradient-to-r ${platform.color}`}>
                  <div className="flex items-center">
                    <div className="w-12 h-12 rounded-full bg-white p-1 mr-4">
                      <img
                        src={`/${platform.icon}`}
                        alt={platform.platform}
                        className="w-full h-full object-contain rounded-full"
                      />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-white">{platform.platform}</h4>
                      <div className="flex items-center mt-1">
                        <span className="text-white/90 font-medium">{platform.rating}</span>
                        {platform.platform === 'CodeChef' && (
                          <div className="ml-2 flex items-center">
                            <span className="text-yellow-300">★★★</span>
                            <span className="text-gray-400">☆☆</span>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
                  <div className="p-6 flex-grow">
                  <ul className="space-y-3">
                    {platform.achievements.map((achievement, i) => (
                      <motion.li 
                        key={i} 
                        className="flex items-start group"
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 * i }}
                        whileHover={{ x: 5 }}
                      >
                        <div className={`w-5 h-5 rounded-full flex items-center justify-center mr-2 mt-0.5 flex-shrink-0 bg-gradient-to-br ${
                          platform.platform === 'CodeChef' ? 'from-amber-600/20 to-amber-800/20 text-amber-400' :
                          platform.platform === 'LeetCode' ? 'from-orange-600/20 to-orange-800/20 text-orange-400' :
                          'from-green-600/20 to-green-800/20 text-green-400'
                        } group-hover:shadow-md transition-all duration-300`}>
                          <svg
                            className="w-3 h-3"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fillRule="evenodd"
                              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </div>
                        <span className="text-gray-300 group-hover:text-white transition-colors duration-300">{achievement}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
                
                <div className="p-6 pt-0 mt-auto">
                  <a
                    href={platform.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full py-3 px-4 text-center bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-medium rounded-lg transition transform hover:-translate-y-1 hover:shadow-lg"
                  >
                    View Profile
                  </a>
                </div>
              </motion.div>
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
            {/* Statistics cards */}
            <motion.div 
              variants={itemVariants}
              className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12"
            >
              {codingStats.map((stat, index) => (
                <div 
                  key={index} 
                  className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-6 border border-gray-700 flex flex-col items-center text-center hover:shadow-lg transition-all hover:-translate-y-1"
                >
                  <div className={`w-14 h-14 ${stat.color} rounded-full flex items-center justify-center mb-4 text-2xl`}>
                    {stat.icon}
                  </div>
                  <h4 className="text-3xl font-bold text-white mb-2">{stat.value}</h4>
                  <p className="text-gray-400">{stat.label}</p>
                </div>
              ))}
            </motion.div>

            {/* Progress graph */}            <motion.div 
              variants={itemVariants} 
              className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 shadow-xl border border-gray-700"
            >
              <h3 className="text-2xl font-bold text-white mb-8">Problem Solving Progress</h3>
              <div className="relative">
                {/* Graph visualization (simplified version) */}
                <div className="grid grid-cols-4 gap-4 mb-6">
                  <div className="flex flex-col items-center">
                    <div className="w-full bg-gradient-to-t from-green-600 to-green-400 h-40 rounded-t-lg relative overflow-hidden">
                      <motion.div 
                        className="absolute inset-x-0 bottom-0 h-10 bg-green-300/20"
                        animate={{ 
                          height: [10, 20, 10],
                          opacity: [0.2, 0.4, 0.2]
                        }}
                        transition={{ 
                          duration: 3, 
                          repeat: Infinity, 
                          ease: "easeInOut" 
                        }}
                      />
                    </div>
                    <span className="mt-2 text-gray-300">Easy</span>
                    <span className="text-green-500 font-bold">125+</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <div className="w-full bg-gradient-to-t from-yellow-600 to-yellow-400 h-32 rounded-t-lg relative overflow-hidden">
                      <motion.div 
                        className="absolute inset-x-0 bottom-0 h-8 bg-yellow-300/20"
                        animate={{ 
                          height: [8, 16, 8],
                          opacity: [0.2, 0.4, 0.2]
                        }}
                        transition={{ 
                          duration: 2.5, 
                          repeat: Infinity, 
                          ease: "easeInOut",
                          delay: 0.3
                        }}
                      />
                    </div>
                    <span className="mt-2 text-gray-300">Medium</span>
                    <span className="text-yellow-500 font-bold">100+</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <div className="w-full bg-gradient-to-t from-red-600 to-red-400 h-16 rounded-t-lg relative overflow-hidden">
                      <motion.div 
                        className="absolute inset-x-0 bottom-0 h-4 bg-red-300/20"
                        animate={{ 
                          height: [4, 8, 4],
                          opacity: [0.2, 0.4, 0.2]
                        }}
                        transition={{ 
                          duration: 2, 
                          repeat: Infinity, 
                          ease: "easeInOut",
                          delay: 0.6
                        }}
                      />
                    </div>
                    <span className="mt-2 text-gray-300">Hard</span>
                    <span className="text-red-500 font-bold">25+</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <div className="w-full bg-gradient-to-t from-blue-600 to-blue-400 h-28 rounded-t-lg relative overflow-hidden">
                      <motion.div 
                        className="absolute inset-x-0 bottom-0 h-7 bg-blue-300/20"
                        animate={{ 
                          height: [7, 14, 7],
                          opacity: [0.2, 0.4, 0.2]
                        }}
                        transition={{ 
                          duration: 3.5, 
                          repeat: Infinity, 
                          ease: "easeInOut",
                          delay: 0.9
                        }}
                      />
                    </div>
                    <span className="mt-2 text-gray-300">Contests</span>
                    <span className="text-blue-500 font-bold">30+</span>
                  </div>
                </div>                <h4 className="text-xl font-semibold text-white mt-10 mb-4">Topics Distribution</h4>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {[
                    { name: 'Array & String', percentage: 35, color: 'bg-blue-500' },
                    { name: 'Trees & Graphs', percentage: 25, color: 'bg-green-500' },
                    { name: 'Dynamic Prog.', percentage: 20, color: 'bg-purple-500' },
                    { name: 'Other Algorithms', percentage: 20, color: 'bg-orange-500' }
                  ].map((topic, i) => (
                    <div key={i} className="mb-4">
                      <div className="flex justify-between mb-1">
                        <span className="text-sm text-gray-300">{topic.name}</span>
                        <span className="text-sm text-gray-400">{topic.percentage}%</span>
                      </div>
                      <div className="w-full bg-gray-700 rounded-full h-2">
                        <motion.div
                          className={`h-2 rounded-full ${topic.color}`}
                          initial={{ width: 0 }}
                          animate={{ width: `${topic.percentage}%` }}
                          transition={{ duration: 1, delay: 0.2 * i }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
                
                <h4 className="text-xl font-semibold text-white mt-10 mb-6">Contest Timeline</h4>
                <div className="relative">
                  {/* Timeline track */}
                  <div className="absolute left-3 top-0 w-0.5 h-full bg-gray-700"></div>
                  
                  {/* Timeline events */}
                  <div className="space-y-8 relative">
                    {[
                      { date: 'Jan 2023', title: 'First CodeChef Contest', desc: 'Ranked in top 60%', icon: '🚀', color: 'bg-blue-600' },
                      { date: 'Mar 2023', title: 'Achieved 2⭐ Rating', desc: 'After consistent practice', icon: '⭐', color: 'bg-green-600' },
                      { date: 'Aug 2023', title: 'LeetCode Weekly Contest', desc: 'Solved 3/4 problems', icon: '💻', color: 'bg-yellow-600' },
                      { date: 'Nov 2023', title: 'Achieved 3⭐ Rating', desc: 'Milestone achievement', icon: '🏆', color: 'bg-purple-600' },
                      { date: 'Apr 2024', title: 'CodeChef Cook-Off', desc: 'Ranked in top 15%', icon: '📈', color: 'bg-pink-600' }
                    ].map((event, i) => (
                      <motion.div 
                        key={i} 
                        className="flex items-start ml-6"
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 * i }}
                      >
                        <div className={`absolute left-0 w-6 h-6 rounded-full ${event.color} flex items-center justify-center -ml-3`}>
                          <span className="text-xs">{event.icon}</span>
                        </div>
                        <div className="bg-gray-800/70 rounded-lg p-4 border border-gray-700 w-full">
                          <div className="flex justify-between items-start">
                            <h5 className="text-white font-medium">{event.title}</h5>
                            <span className="text-xs px-2 py-1 bg-gray-700 rounded-full text-gray-300">{event.date}</span>
                          </div>
                          <p className="text-gray-400 text-sm mt-1">{event.desc}</p>
                        </div>
                      </motion.div>
                    ))}
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
              className="flex items-center gap-2 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-medium py-3 px-8 rounded-lg transition-all duration-300"
              whileHover={{ y: -5, scale: 1.02, boxShadow: "0 10px 25px -5px rgba(79, 70, 229, 0.5)" }}
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
              className="flex items-center gap-2 bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-500 hover:to-emerald-500 text-white font-medium py-3 px-8 rounded-lg transition-all duration-300"
              whileHover={{ y: -5, scale: 1.02, boxShadow: "0 10px 25px -5px rgba(16, 185, 129, 0.5)" }}
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
