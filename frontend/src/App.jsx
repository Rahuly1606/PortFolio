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

  const links = [
    { name: 'GitHub', url: 'https://github.com/Rahuly1606', icon: 'github.png' },
    { name: 'LinkedIn', url: 'https://www.linkedin.com/in/rahuly1606/', icon: 'linkedin.png' },
    { name: 'LeetCode', url: 'https://leetcode.com/u/klu2300090198/', icon: 'leetcode.png' },
    { name: 'CodeChef', url: 'https://www.codechef.com/users/klu2300090198', icon: 'codechef.jpg' },
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
                className="button-33"
              >
                View Projects
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                href="#contact"
                className="button-17"
              >
                Contact Me
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
              className="mt-4 flex items-center gap-4 rounded-full bg-white px-6 py-3 shadow-lg text-2xl"
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
        className="bg-white py-20 shadow-lg"
        initial={{ opacity: 0, y: 50 }}
        animate={aboutInView ? 'visible' : 'hidden'}
        variants={{
          visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
          hidden: { opacity: 0, y: 50 },
        }}
        ref={aboutRef}
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <h2 className="text-3xl font-bold text-gray-900">About Me</h2>
            <p className="mt-4 text-lg text-gray-600">
              I'm a Full-Stack Developer with over 1 years of experience in building scalable, high-performance, and user-friendly applications.
              My expertise lies in React, Node.js, and modern web technologies, enabling me to craft seamless and responsive digital experiences.
            </p>
            <p className="mt-4 text-lg text-gray-600">
              My goal is to create impactful software that improves the lives of users and drives business success. Let's connect and build something amazing together!
            </p>
            <div className="mt-8 flex justify-center gap-4 flex-wrap">
              {skills.map((skill) => (
                <motion.div
                  key={skill.name}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="flex items-center gap-2 rounded-full bg-gray-100 px-4 py-2 cursor-pointer shadow-md hover:bg-indigo-100 transition-all duration-300"
                >
                  <img src={skill.icon} alt={skill.name} className="h-6 w-6" />
                  <span className="text-sm font-medium text-gray-900">{skill.name}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.section>

      <motion.section
        id="projects"
        className="bg-gray-50 py-20 shadow-lg"
        initial={{ opacity: 0, y: 50 }}
        animate={projectsInView ? 'visible' : 'hidden'}
        variants={{
          visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
          hidden: { opacity: 0, y: 50 },
        }}
        ref={projectsRef}
      >
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
      </motion.section>

      <motion.section
        id="certificates"
        className="bg-white py-20 shadow-lg"
        initial={{ opacity: 0, y: 50 }}
        animate={certificatesInView ? 'visible' : 'hidden'}
        variants={{
          visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
          hidden: { opacity: 0, y: 50 },
        }}
        ref={certificatesRef}
      >
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
      </motion.section>

      <motion.section
        id="links"
        className="bg-white py-20 shadow-lg"
        initial={{ opacity: 0, y: 50 }}
        animate={linksInView ? 'visible' : 'hidden'}
        variants={{
          visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
          hidden: { opacity: 0, y: 50 },
        }}
        ref={linksRef}
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center text-3xl font-bold text-gray-900"
          >
            Connect with Me
          </motion.h2>
          <div className="mt-8 flex flex-col lg:flex-row justify-center gap-120">
            <div className="flex flex-col items-center gap-6">
              {links.filter(link => link.name !== 'LinkedIn').map((link) => (
                <motion.a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="flex items-center gap-2 rounded-full bg-gray-100 px-6 py-3 text-sm font-semibold text-gray-900 shadow-md hover:bg-indigo-100 transition-all duration-300"
                >
                  <img src={link.icon} alt={link.name} className="h-6 w-6" />
                  <span>{link.name}</span>
                </motion.a>
              ))}
            </div>
            <div className="flex flex-col items-center gap-6">
              {links.filter(link => link.name === 'LinkedIn').map((link) => (
                <motion.a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="flex items-center gap-2 rounded-full bg-gray-100 px-6 py-3 text-sm font-semibold text-gray-900 shadow-md hover:bg-indigo-100 transition-all duration-300"
                >
                  <img src={link.icon} alt={link.name} className="h-6 w-6" />
                  <span>{link.name}</span>
                </motion.a>
              ))}
            </div>
          </div>
        </div>
      </motion.section>

      {/* <motion.section
        id="contact"
        className="bg-gray-50 py-20 shadow-lg"
        initial={{ opacity: 0, y: 50 }}
        animate={contactInView ? 'visible' : 'hidden'}
        variants={{
          visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
          hidden: { opacity: 0, y: 50 },
        }}
        ref={contactRef}
      >
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
                  className="px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 shadow-md"
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  className="px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 shadow-md"
                />
                <textarea
                  placeholder="Your Message"
                  rows="4"
                  className="px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 shadow-md"
                ></textarea>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  type="submit"
                  className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-md shadow-md hover:bg-indigo-500 transition-all duration-300"
                >
                  Send Message
                </motion.button>
              </div>
            </form>
          </motion.div>
        </div>
      </motion.section> */}
      <Footer /> {/* Add the Footer component */}
    </>
  );
}

export default App;