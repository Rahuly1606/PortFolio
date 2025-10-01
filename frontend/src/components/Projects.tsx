import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import ProjectCard from './ProjectCard';

const Projects = () => {
  const featuredProjects = [
    {
      title: 'Face Logbook',
      description: 'A face recognition–based attendance tracker using ArcFace embeddings with in/out logic and admin management UI.',
      image: 'facelogbook.png',
      techStack: ['NextJs', 'Flask', 'MySql', 'openCv'],
      liveUrl: 'https://face-log-book.vercel.app/',
      githubUrl: 'https://github.com/Rahuly1606/Face-LogBook',
    },
    {
      title: 'AI-Enabled Virtual Classroom System',
      description: 'A scalable full-stack platform with real-time video, chat, and AI-powered assignments/chatbot support for virtual learning.',
      image: 'vcroom.png',
      techStack: ['React', 'jitsi', 'tailwind', 'node Js'],
      liveUrl: 'https://github.com/Rahuly1606/Virtual-Classroom',
      githubUrl: 'https://github.com/Rahuly1606/Virtual-Classroom',
    },
    {
      title: 'Real Time Chat App',
      description: 'Built a real-time chat app using the MERN stack, Socket.IO, and Cloudinary for media management....',
      image: 'chat.png',
      techStack: ['React', 'Socket.IO', 'Express', 'MongoDB'],
      liveUrl: 'https://chat-applications-react-js-xvyj.onrender.com/',
      githubUrl: 'https://github.com/Rahuly1606/Chat-Applications-React-JS-',
    },
  ];

  return (
    <section id="projects" className="section-padding bg-secondary/30">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Showcasing my best work in web development, from full-stack applications to innovative solutions
          </p>

          {/* Project Cards Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {featuredProjects.map((project, index) => (
              <ProjectCard key={index} {...project} index={index} />
            ))}
          </div>

          {/* Explore More Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 btn-primary group"
            >
              Explore More Projects
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;