import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import MyProjects from './components/MyProjects'; // Import the MyProjects component
import { motion, useAnimation } from 'framer-motion';
import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';

function App() {
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
      link: '#',
      technologies: ['React', 'Socket.IO', 'Express','MongoDB'],
      github: 'https://github.com/Rahuly1606/chat-app'
    },
    {
      name: 'INoteBook',
      description: 'iNote is a ReactJS-based notebook app with authentication, allowing users to securely create, edit, and manage their personal notes',
      image: 'note.png',
      link: '#',
      technologies: ['React', 'Firebase', 'CSS'],
      github: 'https://github.com/Rahuly1606/inotebook'
    },
  ];

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
      name: 'Full-Stack Web Development',
      issuer: 'Udacity',
      link: 'https://udacity.com/verify/fullstack-cert',
    },
    {
      name: 'Python for Everybody',
      issuer: 'edX',
      link: 'https://edx.org/verify/python-cert',
    },
  ];

  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);
  const [skillIndex, setSkillIndex] = useState(0);

  const words = ["Hi, I'm Rahul Kumar "];

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

  useEffect(() => {
    const skillTimer = setInterval(() => {
      setSkillIndex((prevIndex) => (prevIndex + 1) % skills.length);
    }, 2000);

    return () => clearInterval(skillTimer);
  }, [skills.length]);

  // Scroll animations
  const controls = useAnimation();
  const [homeRef, homeInView] = useInView({ triggerOnce: true });
  const [aboutRef, aboutInView] = useInView({ triggerOnce: true });
  const [projectsRef, projectsInView] = useInView({ triggerOnce: true });
  const [certificatesRef, certificatesInView] = useInView({ triggerOnce: true });
  const [linksRef, linksInView] = useInView({ triggerOnce: true });
  const [contactRef, contactInView] = useInView({ triggerOnce: true });
  const [skillsRef, skillsInView] = useInView({ triggerOnce: true });

  useEffect(() => {
    if (homeInView) controls.start('visible');
  }, [controls, homeInView]);

  useEffect(() => {
    if (aboutInView) controls.start('visible');
  }, [controls, aboutInView]);

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

  const handleSmoothScroll = (e, href) => {
    e.preventDefault();
    document.querySelector(href).scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div>
      <Navbar />
      <motion.section
        id="home"
        className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        ref={homeRef}
      >
        {/* Enhanced animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Gradient background */}
          <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 opacity-80"></div>
          
          {/* Animated noise texture */}
          <div className="absolute inset-0 bg-noise opacity-[0.05]"></div>
          
          {/* Animated gradient blobs */}
          <motion.div 
            className="absolute -top-20 -left-20 w-96 h-96 bg-gradient-radial from-purple-900/30 to-transparent rounded-full mix-blend-multiply filter blur-3xl"
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
            className="absolute bottom-0 right-0 w-80 h-80 bg-gradient-radial from-blue-900/30 to-transparent rounded-full mix-blend-multiply filter blur-3xl"
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
            className="absolute top-1/2 left-1/3 w-72 h-72 bg-gradient-radial from-indigo-900/20 to-transparent rounded-full mix-blend-multiply filter blur-3xl"
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
              className="inline-block px-6 py-2 mb-6 rounded-full bg-purple-900/30 text-purple-300 font-medium text-sm shadow-soft"
            >
              <span className="flex items-center gap-2">
                <span className="inline-block w-2 h-2 rounded-full bg-purple-500 animate-pulse"></span>
                Full-Stack Developer
              </span>
            </motion.div>
            
            <h1 className="text-5xl md:text-6xl font-bold text-gray-100 mb-4 text-shadow-lg whitespace-nowrap">
              {text}<span className="cursor">|</span>
            </h1>
            
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
            className="mt-16 lg:mt-0 lg:w-3/5 flex justify-center lg:justify-end pr-0 lg:pr-28"
          >
            <div className="relative translate-x-12 lg:translate-x-24">
              {/* Creative 3D code visualization */}
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
                {/* Floating code blocks */}
                {[...Array(5)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute rounded-lg bg-gray-800 shadow-xl p-4 border-l-4 border-purple-500 text-sm font-mono text-gray-300 w-48"
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
                      className="absolute inset-0 rounded-full bg-gradient-to-r from-indigo-500 to-blue-500 opacity-80 blur-md"
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
              
              {/* Floating skill bubbles */}
              <motion.div
                key={skills[skillIndex].name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="absolute -bottom-10 -left-10 flex items-center gap-2 rounded-full bg-gray-800 px-4 py-2 shadow-lg"
              >
                <img src={skills[skillIndex].icon} alt={skills[skillIndex].name} className="h-5 w-5" />
                <span className="text-sm font-medium text-gray-200">{skills[skillIndex].name}</span>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="absolute -top-5 -right-5 bg-gray-800 rounded-full p-3 shadow-lg"
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
                className="absolute top-1/2 -right-10 bg-gray-800 rounded-full p-2 shadow-lg"
              >
                <img src="icons/nodejs.png" alt="Node.js" className="h-6 w-6" />
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
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </motion.div>
        </motion.div>
      </motion.section>
      
      <motion.section
        id="about"
        className="relative py-24 overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        ref={aboutRef}
      >
        {/* Background gradient and pattern */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-gray-800 opacity-80"></div>
        <div className="absolute inset-0 opacity-5" style={{ 
          backgroundImage: "url('/code-pattern.svg')",
        }}></div>
        
        <div className="mx-auto max-w-7xl px-6 lg:px-12 flex flex-col lg:flex-row items-center relative z-10">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="text-center lg:text-left lg:w-2/3"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h2 className="text-5xl font-extrabold mb-6">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400">
                  About Me
                </span>
              </h2>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <p className="mt-4 text-lg text-gray-300 leading-relaxed">
                🚀 I'm a passionate <span className="font-semibold text-purple-400">Full-Stack Developer</span> with a knack for building
                high-performance, scalable, and visually stunning web applications.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <p className="mt-4 text-lg text-gray-300 leading-relaxed">
                With expertise in <span className="text-purple-400 font-semibold">React, Node.js</span>, and modern web technologies,
                I specialize in crafting seamless, responsive, and engaging digital experiences.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <p className="mt-4 text-lg text-gray-300 leading-relaxed">
                💡 I love turning ideas into reality and solving complex problems with clean and efficient code.
                Whether it's a new feature or optimizing an existing one, my goal is always to deliver exceptional user experiences.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <p className="mt-6 text-lg font-medium italic bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                "Let's build something amazing together and create meaningful digital experiences!" 🌟
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.7 }}
              className="mt-8 flex flex-wrap gap-4 justify-center lg:justify-start"
            >
              {/* Key stats */}
              {[
                { value: "3+", label: "Years Experience" },
                { value: "20+", label: "Projects Completed" },
                { value: "15+", label: "Happy Clients" }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
                  className="bg-gray-800 rounded-lg p-4 shadow-md flex flex-col items-center w-32"
                >
                  <span className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">{stat.value}</span>
                  <span className="text-sm text-gray-400">{stat.label}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-16 lg:mt-0 lg:w-1/3 flex justify-center lg:justify-end"
          >
            <div className="relative">
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-blue-500 rounded-3xl blur-xl opacity-30"
                animate={{ 
                  opacity: [0.2, 0.4, 0.2],
                  scale: [0.95, 1.05, 0.95]
                }}
                transition={{ duration: 4, repeat: Infinity }}
              />
              <motion.img
                src="profile-img.png"
                alt="Profile"
                className="relative z-10 rounded-3xl w-72 h-72 object-cover shadow-2xl"
                whileHover={{ scale: 1.03 }}
                transition={{ type: "spring", stiffness: 300 }}
              />
              
              {/* Decorative elements */}
              <motion.div
                className="absolute -bottom-5 -left-5 w-20 h-20 bg-indigo-100 rounded-full z-0"
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 3, repeat: Infinity }}
              />
              <motion.div
                className="absolute -top-5 -right-5 w-16 h-16 bg-blue-100 rounded-full z-0"
                animate={{ scale: [1, 1.15, 1] }}
                transition={{ duration: 3.5, repeat: Infinity, delay: 0.5 }}
              />
            </div>
          </motion.div>
        </div>
      </motion.section>

      <MyProjects projects={projects} projectsInView={projectsInView} projectsRef={projectsRef} />

      <motion.section
        id="certificates"
        className="relative py-24 overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        ref={certificatesRef}
      >
        {/* Background elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-gray-800"></div>
        <div className="absolute inset-0 opacity-5" style={{ 
          backgroundImage: "url('/code-pattern.svg')",
        }}></div>
        
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
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400">
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
            {certificates.map((certificate, index) => (
              <motion.div
                key={certificate.name}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 + (index * 0.1) }}
                whileHover={{ 
                  y: -10,
                  boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.3), 0 10px 10px -5px rgba(0, 0, 0, 0.2)",
                  transition: { duration: 0.3, ease: "easeOut" }
                }}
                className="group relative bg-gray-800 rounded-2xl overflow-hidden shadow-lg transition-all duration-300"
              >
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 to-blue-500"></div>
                <div className="p-8">
                  <div className="w-16 h-16 rounded-full bg-purple-900/30 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-100 mb-2 group-hover:text-purple-400 transition-colors duration-300">
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
            <motion.a
              href="#"
              className="inline-flex items-center px-8 py-3 rounded-full bg-gray-800 text-purple-400 font-medium border border-gray-700 shadow-md hover:shadow-lg transition-all duration-300"
              whileHover={{ scale: 1.05, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.3)" }}
              whileTap={{ scale: 0.95 }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
              View All Certifications
            </motion.a>
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
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-gray-800"></div>
        <div className="absolute inset-0 opacity-5" style={{ 
          backgroundImage: "url('/code-pattern.svg')",
        }}></div>
        
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
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400">
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

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 rounded-full bg-purple-900/30 flex items-center justify-center mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-100">Programming Languages</h3>
              </div>
              
              <div className="space-y-6">
                {programmingLanguages.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.5 + (index * 0.1) }}
                    className="group"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center">
                        <img src={skill.icon} alt={skill.name} className="h-6 w-6 mr-3" />
                        <h3 className="text-lg font-semibold text-gray-200 group-hover:text-purple-400 transition-colors duration-300">
                          {skill.name}
                        </h3>
                      </div>
                      <span className="text-sm font-bold text-purple-400">{skill.progress}%</span>
                    </div>
                    <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                      <motion.div
                        className="h-full bg-gradient-to-r from-purple-500 to-blue-500 rounded-full"
                        initial={{ width: 0 }}
                        animate={{ width: `${skill.progress}%` }}
                        transition={{ duration: 1, delay: 0.7 + (index * 0.1) }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 rounded-full bg-purple-900/30 flex items-center justify-center mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-100">Frontend</h3>
              </div>
              
              <div className="space-y-6">
                {frontendSkills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.5 + (index * 0.1) }}
                    className="group"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center">
                        <img src={skill.icon} alt={skill.name} className="h-6 w-6 mr-3" />
                        <h3 className="text-lg font-semibold text-gray-200 group-hover:text-purple-400 transition-colors duration-300">
                          {skill.name}
                        </h3>
                      </div>
                      <span className="text-sm font-bold text-purple-400">{skill.progress}%</span>
                    </div>
                    <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                      <motion.div
                        className="h-full bg-gradient-to-r from-purple-500 to-blue-500 rounded-full"
                        initial={{ width: 0 }}
                        animate={{ width: `${skill.progress}%` }}
                        transition={{ duration: 1, delay: 0.7 + (index * 0.1) }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 rounded-full bg-purple-900/30 flex items-center justify-center mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-100">Backend</h3>
              </div>
              
              <div className="space-y-6">
                {backendSkills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.5 + (index * 0.1) }}
                    className="group"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center">
                        <img src={skill.icon} alt={skill.name} className="h-6 w-6 mr-3" />
                        <h3 className="text-lg font-semibold text-gray-200 group-hover:text-purple-400 transition-colors duration-300">
                          {skill.name}
                        </h3>
                      </div>
                      <span className="text-sm font-bold text-purple-400">{skill.progress}%</span>
                    </div>
                    <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                      <motion.div
                        className="h-full bg-gradient-to-r from-purple-500 to-blue-500 rounded-full"
                        initial={{ width: 0 }}
                        animate={{ width: `${skill.progress}%` }}
                        transition={{ duration: 1, delay: 0.7 + (index * 0.1) }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
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
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-gray-800"></div>
        <div className="absolute inset-0 opacity-5" style={{ 
          backgroundImage: "url('/code-pattern.svg')",
        }}></div>
        
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
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400">
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
                  boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.3), 0 10px 10px -5px rgba(0, 0, 0, 0.2)",
                  transition: { duration: 0.3, ease: "easeOut" }
                }}
                className="group bg-gray-800 rounded-2xl p-8 shadow-lg transition-all duration-300 flex flex-col items-center"
              >
                <div className="w-20 h-20 rounded-full bg-gray-700 p-4 mb-6 group-hover:scale-110 transition-transform duration-300">
                  <img src={link.icon} alt={link.name} className="w-full h-full object-contain" />
                </div>
                
                <h3 className="text-2xl font-bold text-gray-100 mb-2 group-hover:text-purple-400 transition-colors duration-300">
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

      <Footer /> {/* Add the Footer component */}
    </div>
  );
}

export default App;