import './App.css';
import Navbar from './components/Navbar';
import { motion, useAnimation } from 'framer-motion';
import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';

function App() {
  const projects = [
    {
      name: 'Project Alpha',
      description: 'A cutting-edge web application built with React and Tailwind CSS.',
      image: 'https://via.placeholder.com/400x200',
      link: '#',
    },
    {
      name: 'Project Beta',
      description: 'An AI-powered chatbot integrated with natural language processing.',
      image: 'https://via.placeholder.com/400x200',
      link: '#',
    },
    {
      name: 'Project Gamma',
      description: 'A mobile app for fitness tracking with real-time analytics.',
      image: 'https://via.placeholder.com/400x200',
      link: '#',
    },
  ];

  const skills = [
    { name: 'React', icon: '⚛️' },
    { name: 'Tailwind CSS', icon: '🎨' },
    { name: 'Node.js', icon: '🛠️' },
    { name: 'Python', icon: '🐍' },
    { name: 'UI/UX Design', icon: '✏️' },
    { name: 'Git', icon: '🔧' },
    { name: 'GitHub', icon: '🐙' },
    { name: 'Django', icon: '🌐' },
    { name: 'Java', icon: '☕' },
  ];

  const links = [
    { name: 'GitHub', url: 'https://github.com', icon: '👨‍💻' },
    { name: 'LinkedIn', url: 'https://linkedin.com', icon: '🔗' },
    { name: 'LeetCode', url: 'https://leetcode.com', icon: '🧠' },
    { name: 'CodeChef', url: 'https://codechef.com', icon: '🍲' },
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
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  return (
    <>
      <Navbar />
      <section id="home" className="bg-gray-50 py-20">
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
                className="rounded-md bg-indigo-600 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 transition-all duration-300"
              >
                View Projects
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                href="#contact"
                className="rounded-md bg-white px-6 py-3 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-gray-300 hover:bg-gray-50 transition-all duration-300"
              >
                Contact Me
              </motion.a>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="mt-10 lg:mt-0 flex flex-col items-center lg:items-start"
          >
            {/* <h2 className="text-3xl font-bold text-gray-900"></h2> */}
            <motion.div
              key={skills[skillIndex].name}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="mt-4 flex items-center gap-4 rounded-full bg-white px-6 py-3 shadow-lg text-2xl"
            >
              <span className="text-3xl">{skills[skillIndex].icon}</span>
              <span className="text-xl font-medium text-gray-900">{skills[skillIndex].name}</span>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section id="about" className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <h2 className="text-3xl font-bold text-gray-900">About Me</h2>
            <p className="mt-4 text-lg text-gray-600">
              I'm a full-stack developer with over 5 years of experience in building scalable and user-friendly
              applications. I specialize in React, Node.js, and modern web technologies.
            </p>
            <div className="mt-8 flex justify-center gap-4 flex-wrap">
              {skills.map((skill) => (
                <motion.div
                  key={skill.name}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="flex items-center gap-2 rounded-full bg-gray-100 px-4 py-2 cursor-pointer hover:bg-indigo-100 transition-all duration-300"
                >
                  <span>{skill.icon}</span>
                  <span className="text-sm font-medium text-gray-900">{skill.name}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section id="projects" className="bg-gray-50 py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center text-3xl font-bold text-gray-900"
          >
            Projects
          </motion.h2>
          <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              <motion.div
                key={project.name}
                whileHover={{ scale: 1.05 }}
                className="overflow-hidden rounded-lg bg-white shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <img src={project.image} alt={project.name} className="h-48 w-full object-cover" />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900">{project.name}</h3>
                  <p className="mt-2 text-gray-600">{project.description}</p>
                  <a
                    href={project.link}
                    className="mt-4 inline-block text-sm font-semibold text-indigo-600 hover:text-indigo-500 transition-all duration-300"
                  >
                    Learn More →
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="certificates" className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center text-3xl font-bold text-gray-900"
          >
            Certificates
          </motion.h2>
          <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {certificates.map((certificate) => (
              <motion.div
                key={certificate.name}
                whileHover={{ scale: 1.05 }}
                className="overflow-hidden rounded-lg bg-white shadow-lg hover:shadow-xl transition-all duration-300 p-6"
              >
                <h3 className="text-xl font-bold text-gray-900">{certificate.name}</h3>
                <p className="mt-2 text-gray-600">Issued by: {certificate.issuer}</p>
                <a
                  href={certificate.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-block text-sm font-semibold text-indigo-600 hover:text-indigo-500 transition-all duration-300"
                >
                  Verify Certificate →
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="links" className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center text-3xl font-bold text-gray-900"
          >
            Connect with Me
          </motion.h2>
          <div className="mt-8 flex justify-center gap-6">
            {links.map((link) => (
              <motion.a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="flex items-center gap-2 rounded-full bg-gray-100 px-6 py-3 text-sm font-semibold text-gray-900 hover:bg-indigo-100 transition-all duration-300"
              >
                <span>{link.icon}</span>
                <span>{link.name}</span>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="bg-gray-50 py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <h2 className="text-3xl font-bold text-gray-900">Get in Touch</h2>
            <p className="mt-4 text-lg text-gray-600">
              Have a project in mind or just want to say hi? Feel free to reach out!
            </p>
            <form className="mt-8 max-w-md mx-auto">
              <div className="grid grid-cols-1 gap-6">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  className="px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
                <textarea
                  placeholder="Your Message"
                  rows="4"
                  className="px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                ></textarea>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  type="submit"
                  className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-md hover:bg-indigo-500 transition-all duration-300"
                >
                  Send Message
                </motion.button>
              </div>
            </form>
          </motion.div>
        </div>
      </section>
    </>
  );
}

export default App;