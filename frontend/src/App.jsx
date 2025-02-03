import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer'; // Import the Footer component
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
    },
    {
      name: 'Real Time Chat App',
      description: 'Built a real-time chat app using the MERN stack, Socket.IO, and Cloudinary for media management....',
      image: 'chat.png',
      link: '#',
    },
    {
      name: 'INoteBook',
      description: 'iNote is a ReactJS-based notebook app with authentication, allowing users to securely create, edit, and manage their personal notes',
      image: 'note.png',
      link: '#',
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
    { name: 'MongoDB', icon: 'icons/mongodb.png', progress: 80 }, // Add MongoDB
    { name: 'MySQL', icon: 'icons/mysql.png', progress: 85 }, // Add MySQL
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
  }, [text, isDeleting, loopNum, typingSpeed]);

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
    <>
      <Navbar />
      <motion.section
        id="home"
        className="bg-gray-50 py-30 shadow-lg bg-cover bg-center"
        style={{ backgroundImage: "url('tbn10.jpg')" }}
        initial={{ opacity: 0, y: 50 }}
        animate={homeInView ? 'visible' : 'hidden'}
        variants={{
          visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
          hidden: { opacity: 0, y: 50 },
        }}
        ref={homeRef}
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-8 flex flex-col lg:flex-row items-center justify-between">
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center lg:text-left"
          >
            <h1 className="text-5xl font-bold text-gray-900">{text}<span className="cursor">|</span></h1>
            <p className="mt-4 text-xl text-gray-600">
              A passionate developer and designer crafting beautiful and functional digital experiences.
            </p>
            <div className="mt-8 flex justify-center lg:justify-start gap-4">
              <motion.a
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                href="#projects"
                onClick={(e) => handleSmoothScroll(e, '#projects')}
                className="button-33"
              >
                View Projects
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                href="#footer"
                onClick={(e) => handleSmoothScroll(e, '#footer')}
                className="button-17"
              >
                Contact Me
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                href="https://www.linkedin.com/in/rahuly1606/"
                target="_blank"
                rel="noopener noreferrer"
                className="button-17 flex items-center gap-2"
              >
                <img src="linkedin.png" alt="LinkedIn" className="h-6 w-6" />
                LinkedIn
              </motion.a>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mt-10 lg:mt-0 flex flex-col items-center lg:items-start"
          >
            <motion.div
              key={skills[skillIndex].name}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mt-4 flex items-center gap-4 rounded-full bg-white mb-16 px-8 py-5 shadow-lg text-2xl"
            >
              <span className="text-3xl">
                <img src={skills[skillIndex].icon} alt={skills[skillIndex].name} className="h-6 w-6" />
              </span>
              <span className="text-xl font-medium text-gray-900">{skills[skillIndex].name}</span>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>
    
      <motion.section
        id="about"
        className="bg-gradient-to-r from-white to-blue-30 py-24 shadow-xl rounded-xl"
        initial={{ opacity: 0, y: 50 }}
        animate={aboutInView ? 'visible' : 'hidden'}
        variants={{
          visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
          hidden: { opacity: 0, y: 50 },
        }}
        ref={aboutRef}
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-12 flex flex-col lg:flex-row items-center">
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center lg:text-left lg:w-2/3"
          >
            <h2 className="text-5xl font-extrabold text-black mb-6">
              About Me
            </h2>
            <p className="mt-4 text-lg text-gray-800 leading-relaxed">
              🚀 I'm a passionate <span className="font-semibold text-blue-600">Full-Stack Developer</span> with a knack for building
              high-performance, scalable, and visually stunning web applications.
            </p>
            <p className="mt-4 text-lg text-gray-700 leading-relaxed">
              With expertise in <span className="text-purple-600 font-semibold">React, Node.js</span>, and modern web technologies,
              I specialize in crafting seamless, responsive, and engaging digital experiences.
            </p>
            <p className="mt-4 text-lg text-gray-700 leading-relaxed">
              💡 I love turning ideas into reality and solving complex problems with clean and efficient code.
              Whether it’s a new feature or optimizing an existing one, my goal is always to deliver exceptional user experiences.
            </p>
            <p className="mt-6 text-lg text-gray-800 font-medium italic">
              "Let’s build something amazing together and create meaningful digital experiences!" 🌟
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mt-10 lg:mt-0 lg:w-1/3 flex justify-center lg:justify-end"
          >
            <img
              src="profile-img.png"
              alt="Profile"
              style={{ borderRadius: "131px 36px 130px 36px" }}
              className="rounded-full w-72 h-72 object-cover shadow-2xl transition-transform transform hover:scale-105 hover:shadow-blue-500/50"
            />
          </motion.div>
        </div>
      </motion.section>


      <motion.section
        id="projects"
        className="bg-gradient-to-b from-white-50 to-blue py-24 shadow-lg rounded-xl"
        initial={{ opacity: 0, y: 50 }}
        animate={projectsInView ? 'visible' : 'hidden'}
        variants={{
          visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
          hidden: { opacity: 0, y: 50 },
        }}
        ref={projectsRef}
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <motion.h2
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center text-5xl font-extrabold text-black"
          >
            My Projects 
          </motion.h2>
          <p className="text-center text-lg text-gray-700 mt-4">
            Check out some of the amazing projects I've worked on!
          </p>

          <div className="mt-12 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              <motion.div
                key={project.name}
                whileHover={{ scale: 1.05 }}
                className="overflow-hidden rounded-xl bg-white shadow-lg transition-all duration-300 hover:shadow-2xl hover:scale-105 hover:shadow-blue-500/50"
              >
                <img src={project.image} alt={project.name} className="h-52 w-full object-cover rounded-t-xl" />
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-900">{project.name}</h3>
                  <p className="mt-2 text-gray-600 leading-relaxed">{project.description}</p>
                  <a
                    href={project.link}
                    className="mt-4 inline-block text-md font-semibold text-indigo-600 hover:text-indigo-500 transition-all duration-300"
                  >
                    Learn More →
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>


      <motion.section
        id="certificates"
        className="bg-gradient-to-b from-white to-blue-50 py-24 shadow-lg rounded-xl"
        initial={{ opacity: 0, y: 50 }}
        animate={certificatesInView ? 'visible' : 'hidden'}
        variants={{
          visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
          hidden: { opacity: 0, y: 50 },
        }}
        ref={certificatesRef}
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <motion.h2
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center text-5xl font-extrabold text-black"
          >
             My Certifications
          </motion.h2>
          <p className="text-center text-lg text-gray-700 mt-4">
            These are my achievements in various fields.
          </p>

          <div className="mt-12 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
            {certificates.map((certificate) => (
              <motion.div
                key={certificate.name}
                whileHover={{ scale: 1.05, boxShadow: "0px 4px 15px rgba(0,0,0,0.2)" }}
                className="overflow-hidden rounded-xl bg-white shadow-lg transition-all duration-300 hover:shadow-2xl hover:scale-105 hover:shadow-blue-500/5 p-6"
              >
                <h3 className="text-2xl font-bold text-gray-900">{certificate.name}</h3>
                <p className="mt-2 text-gray-600">Issued by: {certificate.issuer}</p>
                <a
                  href={certificate.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-block text-md font-semibold text-indigo-600 hover:text-indigo-500 transition-all duration-300"
                >
                  Verify Certificate →
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>
      <motion.section
        id="skills"
        className="bg-gradient-to-b from-blue-50 to-white py-24 shadow-xl rounded-xl"
        initial={{ opacity: 0, y: 50 }}
        animate={skillsInView ? 'visible' : 'hidden'}
        variants={{
          visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
          hidden: { opacity: 0, y: 50 },
        }}
        ref={skillsRef}
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <motion.h2
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center text-5xl font-extrabold text-black"
          >
             My Skills
          </motion.h2>
          <p className="text-center text-lg text-gray-700 mt-4">
            A showcase of my technical skills and expertise.
          </p>

          <div className="mt-12 grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">Programming Languages</h3>
              <div className="space-y-4">
                {programmingLanguages.map((skill) => (
                  <motion.div
                    key={skill.name}
                    whileHover={{ scale: 1.05, boxShadow: "0px 4px 15px rgba(0,0,0,0.2)" }}
                    className="overflow-hidden rounded-lg bg-white shadow-lg transition-all duration-300 hover:shadow-2xl hover:ring-2 hover:ring-gray-400 p-3"
                  >
                    <div className="flex items-center gap-4">
                      <img src={skill.icon} alt={skill.name} className="h-8 w-8" />
                      <h3 className="text-lg font-bold text-gray-900">{skill.name}</h3>
                    </div>
                    <div className="mt-4">
                      <div className="h-2 bg-gray-200 rounded-full">
                        <div
                          className="h-full bg-gradient-to-r from-gray-700 to-black rounded-full transition-all duration-500"
                          style={{ width: `${skill.progress}%` }}
                        ></div>
                      </div>
                      <p className="mt-2 text-sm font-semibold text-gray-700">{skill.progress}%</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">Frontend</h3>
              <div className="space-y-4">
                {frontendSkills.map((skill) => (
                  <motion.div
                    key={skill.name}
                    whileHover={{ scale: 1.05, boxShadow: "0px 4px 15px rgba(0,0,0,0.2)" }}
                    className="overflow-hidden rounded-lg bg-white shadow-lg transition-all duration-300 hover:shadow-2xl hover:ring-2 hover:ring-gray-400 p-3"
                  >
                    <div className="flex items-center gap-4">
                      <img src={skill.icon} alt={skill.name} className="h-8 w-8" />
                      <h3 className="text-lg font-bold text-gray-900">{skill.name}</h3>
                    </div>
                    <div className="mt-4">
                      <div className="h-2 bg-gray-200 rounded-full">
                        <div
                          className="h-full bg-gradient-to-r from-gray-700 to-black rounded-full transition-all duration-500"
                          style={{ width: `${skill.progress}%` }}
                        ></div>
                      </div>
                      <p className="mt-2 text-sm font-semibold text-gray-700">{skill.progress}%</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">Backend</h3>
              <div className="space-y-4">
                {backendSkills.map((skill) => (
                  <motion.div
                    key={skill.name}
                    whileHover={{ scale: 1.05, boxShadow: "0px 4px 15px rgba(0,0,0,0.2)" }}
                    className="overflow-hidden rounded-lg bg-white shadow-lg transition-all duration-300 hover:shadow-2xl hover:ring-2 hover:ring-gray-400 p-3"
                  >
                    <div className="flex items-center gap-4">
                      <img src={skill.icon} alt={skill.name} className="h-8 w-8" />
                      <h3 className="text-lg font-bold text-gray-900">{skill.name}</h3>
                    </div>
                    <div className="mt-4">
                      <div className="h-2 bg-gray-200 rounded-full">
                        <div
                          className="h-full bg-gradient-to-r from-gray-700 to-black rounded-full transition-all duration-500"
                          style={{ width: `${skill.progress}%` }}
                        ></div>
                      </div>
                      <p className="mt-2 text-sm font-semibold text-gray-700">{skill.progress}%</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      <motion.section
        id="links"
        className="relative bg-gradient-to-r from-white-100 to-grey-50 py-24 shadow-xl rounded-xl"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0, transition: { duration: 0.5 } }}
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-12 text-center">
          <motion.h2
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-5xl font-extrabold text-black"
          >
            🔗 Problem Solving & Development Projects
          </motion.h2>
          <p className="mt-4 text-lg text-black-200">
          Check Out My Coding Platforms
          </p>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {links.map((link) => (
              <motion.a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, rotate: 3 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center justify-center gap-4 w-50 bg-white px-1 py-4 rounded-lg  duration-300 object-cover shadow-2xl transition-transform transform hover:scale-105 hover:shadow-blue-500/50"
              >
                <img src={link.icon} alt={link.name} className="h-8 w-8" />
                <span className="text-xl font-bold text-gray-900">{link.name}</span>
              </motion.a>
            ))}
          </div>
        </div>
      </motion.section>

      <Footer /> {/* Add the Footer component */}
    </>
  );
}

export default App;