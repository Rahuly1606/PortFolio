import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import MyProjects from './components/MyProjects'; // Import the MyProjects component
import CodingBadges from './components/CodingBadges'; // Import the CodingBadges component
import HomeSection from './components/HomeSection'; // Import the new HomeSection component
import AboutSection from './components/AboutSection'; // Import the new AboutSection component
import { motion, useAnimation } from 'framer-motion';
import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';

function App() {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const projects = [
    {
      name: 'Job Portal',
      description: 'Designed and developed a job portal with features like user authentication, job posting, and resume management.',
      image: 'job_portal.png',
      link: '#',
      technologies: ['Django', 'HTML', 'PostgreSQL'],
      github: 'https://github.com/Rahuly1606/job-portal'
    },
    {
      name: 'Real Time Chat App',
      description: 'Built a real-time chat app using the MERN stack, Socket.IO, and Cloudinary for media management....',
      image: 'chat.png',
      link: 'https://chat-applications-react-js-xvyj.onrender.com/',
      technologies: ['React', 'Socket.IO', 'Express','MongoDB'],
      github: 'https://github.com/Rahuly1606/Chat-Applications-React-JS-'
    },
    {
      name: 'INoteBook',
      description: 'iNote is a ReactJS-based notebook app with authentication, allowing users to securely create, edit, and manage their personal notes',
      image: 'note.png',
      link: '#',
      technologies: ['React', 'Firebase', 'CSS'],
      github: 'https://github.com/Rahuly1606/inotebook'
    },
    {
      name: 'Virtual Classroom',
      description: 'A virtual classroom platform that allows teachers to create and manage virtual classrooms, and students to join and participate in live video calls with their teachers and classmates.',
      image: 'vcroom.png',
      link: '#',
      technologies: ['React', 'jitsi', 'tailwind', 'node Js'],
      github: 'https://github.com/Rahuly1606/Virtual-Classroom'
    },
  ];

  // Get only the top 3 projects for the main page
  const topProjects = projects.slice(0, 3);

  const skills = [
    { name: 'Java', icon: 'icons/java.png' },
    { name: 'React', icon: 'icons/react.png' },
    { name: 'Tailwind CSS', icon: 'icons/tailwind.png' },
    { name: 'Node.js', icon: 'icons/nodejs.png' },
    { name: 'Python', icon: 'icons/python.png' },
    { name: 'UI/UX Design', icon: 'icons/uiux.png' },
    { name: 'Git', icon: 'icons/git.png' },
    { name: 'GitHub', icon: 'github.png' },
    { name: 'Django', icon: 'icons/django.png' },
  ];

  const programmingLanguages = [
    { name: 'Java', icon: 'icons/java.png', progress: 80 },
    { name: 'Python', icon: 'icons/python.png', progress: 85 },
    { name: 'Git', icon: 'icons/git.png', progress: 60 },
    { name: 'GitHub', icon: 'github.png', progress: 75 },
  ];

  const frontendSkills = [
    { name: 'React', icon: 'icons/react.png', progress: 70 },
    { name: 'Tailwind CSS', icon: 'icons/tailwind.png', progress: 60 },
    { name: 'UI/UX Design', icon: 'icons/uiux.png', progress: 65 },
  ];

  const backendSkills = [
    { name: 'Node.js', icon: 'icons/nodejs.png', progress: 75 },
    { name: 'Django', icon: 'icons/django.png', progress: 70 },
    { name: 'MongoDB', icon: 'icons/mongodb.png', progress: 80 },
    { name: 'MySQL', icon: 'icons/mysql.png', progress: 85 },
  ];

  const links = [
    { name: 'GitHub', url: 'https://github.com/Rahuly1606', icon: 'github.png' },
    { name: 'HackerRank', url: 'https://www.hackerrank.com/profile/kl2300090198', icon: 'hackerank.png' },
    { name: 'LeetCode', url: 'https://leetcode.com/u/klu2300090198/', icon: 'leetcode.png' },
    { name: 'CodeChef', url: 'https://www.codechef.com/users/klu2300090198', icon: 'codechef.jpg' },
    { name : 'GitLab', url:'https://gitlab.com/Rahuly1606', icon: 'icons/gitlab.png'},
  ];

  const certificates = [
    {
      name: 'React Developer Certification',
      issuer: 'Coursera',
      link: 'https://coursera.org/verify/react-cert',
    },
    {
      name: 'MongoDB Associate Developer',
      issuer: 'MongoDB University',
      link: 'https://learn.mongodb.com/c/o0VSCgN9R-OXgM6wiUpI1A',
    },
    {
      name: 'Python for Everybody',
      issuer: 'edX',
      link: 'https://edx.org/verify/python-cert',
    },
    {
      name: 'AWS Cloud Practitioner',
      issuer: 'Amazon Web Services',
      link: 'https://aws.amazon.com/certification/certified-cloud-practitioner/',
    },
    {
      name: 'JavaScript Advanced Concepts',
      issuer: 'Udemy',
      link: 'https://udemy.com/certificate/javascript-advanced',
    },
  ];
  
  // Get only the top 3 certificates for the main page
  const topCertificates = certificates.slice(0, 3);

  const [skillIndex, setSkillIndex] = useState(0);

  // Function to get descriptions for coding platforms
  const getLinkDescription = (name) => {
    switch (name) {
      case 'GitHub':
        return 'View my repositories and code projects';
      case 'HackerRank':
        return 'Check my problem-solving skills and badges';
      case 'LeetCode':
        return 'See my algorithmic problem solutions';
      case 'CodeChef':
        return 'Explore my competitive programming profile';
      case 'GitLab':
        return 'Alternative code hosting and CI/CD projects';
      default:
        return 'Visit my coding profile';
    }
  };

  useEffect(() => {
    const skillTimer = setInterval(() => {
      setSkillIndex((prevIndex) => (prevIndex + 1) % skills.length);
    }, 2000);

    return () => clearInterval(skillTimer);
  }, [skills.length]);

  // Scroll animations
  const controls = useAnimation();
  const [projectsRef, projectsInView] = useInView({ triggerOnce: true });
  const [certificatesRef, certificatesInView] = useInView({ triggerOnce: true });
  const [linksRef, linksInView] = useInView({ triggerOnce: true });
  const [contactRef, contactInView] = useInView({ triggerOnce: true });
  const [skillsRef, skillsInView] = useInView({ triggerOnce: true });

  useEffect(() => {
    if (projectsInView) controls.start('visible');
  }, [controls, projectsInView]);

  useEffect(() => {
    if (certificatesInView) controls.start('visible');
  }, [controls, certificatesInView]);

  useEffect(() => {
    if (linksInView) controls.start('visible');
  }, [controls, linksInView]);

  useEffect(() => {
    if (contactInView) controls.start('visible');
  }, [controls, contactInView]);

  useEffect(() => {
    if (skillsInView) controls.start('visible');
  }, [controls, skillsInView]);

  return (
    <div className="bg-white text-gray-800">
      <Navbar />
      
      {/* Use the new HomeSection component */}
      <HomeSection />
      
      {/* Use the new AboutSection component */}
      <AboutSection />

      <MyProjects projects={topProjects} projectsInView={projectsInView} projectsRef={projectsRef} />

      <motion.section
        id="certificates"
        className="relative py-24 overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        ref={certificatesRef}
      >
        {/* Background elements */}
        <div className="absolute inset-0 bg-black"></div>
        <div className="absolute inset-0 opacity-10 bg-grid-pattern"></div>
        
        <div className="mx-auto max-w-7xl px-6 lg:px-12 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="inline-block px-6 py-2 mb-4 rounded-full bg-purple-900/30 text-purple-300 font-medium text-sm"
            >
              Achievements
            </motion.div>
            
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-5xl font-extrabold"
            >
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-indigo-400 glow-text">
                My Certifications
              </span>
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-lg text-gray-300 mt-4 max-w-2xl mx-auto"
            >
              Professional certifications that validate my expertise and commitment to continuous learning.
            </motion.p>
          </motion.div>

          <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
            {topCertificates.map((certificate, index) => (
              <motion.div
                key={certificate.name}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 + (index * 0.1) }}
                whileHover={{ 
                  y: -10,
                  boxShadow: "0 20px 25px -5px rgba(139, 92, 246, 0.3), 0 10px 10px -5px rgba(139, 92, 246, 0.2)",
                  transition: { duration: 0.3, ease: "easeOut" }
                }}
                className="group relative bg-gray-900 rounded-2xl overflow-hidden shadow-lg transition-all duration-300 border border-gray-800 glow-border"
              >
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 to-indigo-500"></div>
                <div className="p-8">
                  <div className="w-16 h-16 rounded-full bg-purple-900/30 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-purple-400 transition-colors duration-300">
                    {certificate.name}
                  </h3>
                  
                  <p className="text-gray-400 mb-6">
                    Issued by: <span className="font-semibold">{certificate.issuer}</span>
                  </p>
                  
                  <motion.a
                    href={certificate.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-purple-400 font-medium group/link"
                    whileHover={{ x: 5 }}
                  >
                    Verify Certificate
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      className="h-4 w-4 ml-2 transform group-hover/link:translate-x-1 transition-transform duration-300" 
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </motion.a>
                </div>
                
                <div className="absolute bottom-0 right-0 w-24 h-24 -m-6 opacity-10 group-hover:opacity-20 transition-opacity duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                  </svg>
                </div>
              </motion.div>
            ))}
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="mt-16 text-center"
          >
            <Link 
              to="/certifications"
              className="inline-flex items-center px-8 py-3 rounded-full bg-gray-900 text-purple-400 font-medium border border-purple-500/30 shadow-md hover:shadow-lg hover:border-purple-500/70 transition-all duration-300 glow-border"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
              View All Certifications
            </Link>
          </motion.div>
        </div>
      </motion.section>
      <motion.section
        id="skills"
        className="relative py-24 overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        ref={skillsRef}
      >
        {/* Background elements */}
        <div className="absolute inset-0 bg-black"></div>
        <div className="absolute inset-0 opacity-10 bg-grid-pattern"></div>
        
        {/* Animated particles */}
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-purple-500 opacity-20"
            style={{
              width: Math.random() * 10 + 5,
              height: Math.random() * 10 + 5,
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
        
        <div className="mx-auto max-w-7xl px-6 lg:px-12 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="inline-block px-6 py-2 mb-4 rounded-full bg-purple-900/30 text-purple-300 font-medium text-sm"
            >
              Expertise
            </motion.div>
            
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-5xl font-extrabold"
            >
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-indigo-400 glow-text">
                My Skills
              </span>
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-lg text-gray-300 mt-4 max-w-2xl mx-auto"
            >
              A showcase of my technical skills and expertise that I've developed over the years.
            </motion.p>
          </motion.div>

          {/* Skills Categories Tabs */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-wrap justify-center gap-4 mb-12"
          >
            {["All Skills", "Frontend", "Backend", "Languages", "Tools"].map((category, index) => (
              <motion.button
                key={category}
                whileHover={{ scale: 1.05, backgroundColor: "rgba(139, 92, 246, 0.3)" }}
                whileTap={{ scale: 0.95 }}
                className={`px-6 py-2 rounded-full ${index === 0 ? 'bg-purple-600/30 text-purple-300 border border-purple-500/50' : 'bg-gray-900 text-gray-300 border border-gray-800'} font-medium text-sm transition-all duration-300`}
              >
                {category}
              </motion.button>
            ))}
          </motion.div>

          {/* Featured Skills */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="mb-16"
          >
            <h3 className="text-2xl font-bold text-gray-100 mb-8 flex items-center">
              <div className="w-10 h-10 rounded-full bg-purple-900/30 flex items-center justify-center mr-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              Featured Skills
            </h3>
            
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
              {[
                { name: 'React', icon: 'icons/react.png', level: 'Advanced' },
                { name: 'Node.js', icon: 'icons/nodejs.png', level: 'Advanced' },
                { name: 'MongoDB', icon: 'icons/mongodb.png', level: 'Intermediate' },
                { name: 'Python', icon: 'icons/python.png', level: 'Advanced' },
                { name: 'Tailwind', icon: 'icons/tailwind.png', level: 'Advanced' },
              ].map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.6 + (index * 0.1) }}
                  whileHover={{ 
                    y: -10,
                    boxShadow: "0 15px 30px -5px rgba(139, 92, 246, 0.3)",
                    backgroundColor: "rgba(30, 30, 40, 0.9)",
                    transition: { duration: 0.3 }
                  }}
                  className="bg-gray-800/80 backdrop-blur-sm rounded-xl p-6 flex flex-col items-center justify-center border border-gray-700/50 transition-all duration-300"
                >
                  <div className="w-16 h-16 rounded-full bg-gray-700/50 flex items-center justify-center mb-4 p-3">
                    <img src={skill.icon} alt={skill.name} className="w-full h-full object-contain" />
                  </div>
                  <h4 className="text-lg font-bold text-gray-100 mb-1">{skill.name}</h4>
                  <span className="text-xs font-medium px-3 py-1 rounded-full bg-purple-900/30 text-purple-300">{skill.level}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Skill Categories */}
          <div className="space-y-16">
            {/* Programming Languages */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 hover:border-purple-500/30 transition-all duration-500 shadow-lg hover:shadow-purple-500/10"
            >
              <div className="flex items-center mb-8">
                <div className="w-12 h-12 rounded-full bg-purple-900/30 flex items-center justify-center mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-100">Programming Languages</h3>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {programmingLanguages.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.7 + (index * 0.1) }}
                    className="group relative overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-blue-500/20 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500 rounded-lg"></div>
                    <div className="relative p-4 rounded-lg bg-gray-700/50 border border-gray-600/50 group-hover:border-purple-500/50 transition-colors duration-300">
                      <div className="flex items-center mb-3">
                        <img src={skill.icon} alt={skill.name} className="h-8 w-8 mr-3 group-hover:scale-110 transition-transform duration-300" />
                        <h3 className="text-lg font-semibold text-gray-200 group-hover:text-purple-300 transition-colors duration-300">
                          {skill.name}
                        </h3>
                      </div>
                      <div className="h-2 bg-gray-600/50 rounded-full overflow-hidden">
                        <motion.div
                          className="h-full bg-gradient-to-r from-purple-500 to-blue-500 rounded-full"
                          initial={{ width: 0 }}
                          animate={{ width: `${skill.progress}%` }}
                          transition={{ duration: 1, delay: 0.8 + (index * 0.1) }}
                        />
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Frontend Skills */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.7 }}
              className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 hover:border-blue-500/30 transition-all duration-500 shadow-lg hover:shadow-blue-500/10"
            >
              <div className="flex items-center mb-8">
                <div className="w-12 h-12 rounded-full bg-blue-900/30 flex items-center justify-center mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-100">Frontend Development</h3>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {frontendSkills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.8 + (index * 0.1) }}
                    whileHover={{ 
                      y: -5,
                      transition: { duration: 0.3 }
                    }}
                    className="bg-gray-700/50 rounded-lg p-5 border border-gray-600/50 hover:border-blue-500/50 transition-all duration-300"
                  >
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center">
                        <div className="w-10 h-10 rounded-full bg-blue-900/20 flex items-center justify-center mr-3 p-2">
                          <img src={skill.icon} alt={skill.name} className="w-full h-full object-contain" />
                        </div>
                        <h3 className="text-lg font-semibold text-gray-200">
                          {skill.name}
                        </h3>
                      </div>
                      <span className="text-sm font-bold text-blue-400">{skill.progress}%</span>
                    </div>
                    <div className="h-2 bg-gray-600/50 rounded-full overflow-hidden">
                      <motion.div
                        className="h-full bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full"
                        initial={{ width: 0 }}
                        animate={{ width: `${skill.progress}%` }}
                        transition={{ duration: 1, delay: 0.9 + (index * 0.1) }}
                      />
                    </div>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {['Responsive', 'Interactive', 'Modern'].map((tag, i) => (
                        <span key={i} className="text-xs px-2 py-1 bg-gray-800/70 text-gray-300 rounded-md">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Backend Skills */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 hover:border-green-500/30 transition-all duration-500 shadow-lg hover:shadow-green-500/10"
            >
              <div className="flex items-center mb-8">
                <div className="w-12 h-12 rounded-full bg-green-900/30 flex items-center justify-center mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-100">Backend Development</h3>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {backendSkills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.9 + (index * 0.1) }}
                    className="group relative"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-green-500/20 to-cyan-500/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="relative bg-gray-700/50 rounded-xl p-6 border border-gray-600/50 group-hover:border-green-500/50 transition-all duration-300 z-10">
                      <div className="flex items-center mb-6">
                        <div className="w-12 h-12 rounded-lg bg-gray-800/80 flex items-center justify-center mr-4 p-2 group-hover:bg-green-900/30 transition-colors duration-300">
                          <img src={skill.icon} alt={skill.name} className="w-full h-full object-contain" />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-gray-200 group-hover:text-green-300 transition-colors duration-300">
                            {skill.name}
                          </h3>
                          <div className="flex items-center mt-1">
                            {[...Array(5)].map((_, i) => (
                              <svg 
                                key={i} 
                                xmlns="http://www.w3.org/2000/svg" 
                                className={`h-4 w-4 ${i < skill.progress/20 ? 'text-green-400' : 'text-gray-600'}`} 
                                fill="currentColor" 
                                viewBox="0 0 20 20"
                              >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                            ))}
                            <span className="ml-2 text-sm text-gray-400">{skill.progress}%</span>
                          </div>
                        </div>
                      </div>
                      
                      <div className="h-2 bg-gray-600/50 rounded-full overflow-hidden">
                        <motion.div
                          className="h-full bg-gradient-to-r from-green-500 to-cyan-500 rounded-full"
                          initial={{ width: 0 }}
                          animate={{ width: `${skill.progress}%` }}
                          transition={{ duration: 1, delay: 1 + (index * 0.1) }}
                        />
                      </div>
                      
                      <div className="mt-4 flex flex-wrap gap-2">
                        {index === 0 && ['Express', 'API', 'REST'].map((tag, i) => (
                          <span key={i} className="text-xs px-2 py-1 bg-gray-800/70 text-gray-300 rounded-md">
                            {tag}
                          </span>
                        ))}
                        {index === 1 && ['MVT', 'Python', 'ORM'].map((tag, i) => (
                          <span key={i} className="text-xs px-2 py-1 bg-gray-800/70 text-gray-300 rounded-md">
                            {tag}
                          </span>
                        ))}
                        {index === 2 && ['NoSQL', 'Atlas', 'Aggregation'].map((tag, i) => (
                          <span key={i} className="text-xs px-2 py-1 bg-gray-800/70 text-gray-300 rounded-md">
                            {tag}
                          </span>
                        ))}
                        {index === 3 && ['SQL', 'Relational', 'Queries'].map((tag, i) => (
                          <span key={i} className="text-xs px-2 py-1 bg-gray-800/70 text-gray-300 rounded-md">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Additional Skills */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.9 }}
            className="mt-16"
          >
            <h3 className="text-2xl font-bold text-gray-100 mb-8 flex items-center">
              <div className="w-10 h-10 rounded-full bg-indigo-900/30 flex items-center justify-center mr-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                </svg>
              </div>
              Other Skills & Tools
            </h3>
            
            <div className="flex flex-wrap gap-3">
              {[
                'Git', 'GitHub', 'Docker', 'AWS', 'Firebase', 
                'Redux', 'TypeScript', 'Jest', 'Webpack', 'GraphQL',
                'Sass', 'Figma', 'UI/UX', 'Responsive Design', 'SEO'
              ].map((skill, index) => (
                <motion.div
                  key={skill}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: 1 + (index * 0.05) }}
                  whileHover={{ 
                    scale: 1.05,
                    backgroundColor: "rgba(139, 92, 246, 0.3)",
                    transition: { duration: 0.2 }
                  }}
                  className="px-4 py-2 bg-gray-800/80 text-gray-300 rounded-lg border border-gray-700/50 transition-all duration-300"
                >
                  {skill}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.section>

      <motion.section
        id="links"
        className="relative py-24 overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        ref={linksRef}
      >
        {/* Background elements */}
        <div className="absolute inset-0 bg-black"></div>
        <div className="absolute inset-0 opacity-10 bg-grid-pattern"></div>
        
        <div className="mx-auto max-w-7xl px-6 lg:px-12 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="inline-block px-6 py-2 mb-4 rounded-full bg-purple-900/30 text-purple-300 font-medium text-sm"
            >
              Coding Profiles
            </motion.div>
            
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-5xl font-extrabold"
            >
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-indigo-400 glow-text">
                Problem Solving
              </span>
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-lg text-gray-300 mt-4 max-w-2xl mx-auto"
            >
              Check out my coding profiles where I solve algorithmic problems and participate in competitions.
            </motion.p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {links.map((link, index) => (
              <motion.a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 + (index * 0.1) }}
                whileHover={{ 
                  y: -10,
                  boxShadow: "0 20px 25px -5px rgba(139, 92, 246, 0.3), 0 10px 10px -5px rgba(139, 92, 246, 0.2)",
                  transition: { duration: 0.3, ease: "easeOut" }
                }}
                className="group bg-gray-900 rounded-2xl p-8 shadow-lg transition-all duration-300 flex flex-col items-center border border-gray-800 glow-border"
              >
                <div className="w-20 h-20 rounded-full bg-gray-800 p-4 mb-6 group-hover:scale-110 transition-transform duration-300">
                  <img src={link.icon} alt={link.name} className="w-full h-full object-contain" />
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-purple-400 transition-colors duration-300">
                  {link.name}
                </h3>
                
                <p className="text-gray-400 text-center mb-6">
                  {getLinkDescription(link.name)}
                </p>
                
                <div className="mt-auto flex items-center text-purple-400 font-medium">
                  <span>Visit Profile</span>
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    className="h-4 w-4 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Add the CodingBadges component */}
      <CodingBadges />

      <Footer /> {/* Add the Footer component */}
    </div>
  );
}

export default App;