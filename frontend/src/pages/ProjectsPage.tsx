import { useState } from 'react';
import { motion } from 'framer-motion';
import ProjectCard from '@/components/ProjectCard';
import Navbar from '@/components/Navbar';

const ProjectsPage = () => {
  const [filter, setFilter] = useState('All');

  const allProjects = [
    {
      title: 'Face Logbook',
      description: 'A face recognition–based attendance tracker using ArcFace embeddings with in/out logic and admin management UI.',
      image: 'facelogbook.png',
      techStack: ['NextJs', 'Flask', 'MySql', 'openCv'],
      liveUrl: 'https://face-log-book.vercel.app/',
      githubUrl: 'https://github.com/Rahuly1606/Face-LogBook',
      category: 'ML',
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
    {
      title: 'Property Manangement System',
      description: 'Analytics dashboard for social media metrics with real-time data visualization.',
      image: 'https://api.dicebear.com/7.x/shapes/svg?seed=dashboard',
      techStack: ['React', 'SpringBoot', 'MySql', 'WebSocket'],
      liveUrl: 'https://github.com/Rahuly1606/Property-management-System',
      githubUrl: 'https://github.com/Rahuly1606/Property-management-System',
      category: 'Frontend',
    },
    {
      title: 'Video Streaming Platform',
      description: 'Netflix-like streaming service with adaptive bitrate streaming and recommendations.',
      image: 'https://api.dicebear.com/7.x/shapes/svg?seed=streaming',
      techStack: ['Next.js', 'AWS', 'FFmpeg', 'Redis'],
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com',
      category: 'Backend',
    },

  ];

  const categories = ['All', 'Frontend', 'Backend', 'ML'];

  const filteredProjects = filter === 'All'
    ? allProjects
    : allProjects.filter(project => project.category === filter);

  return (
    <>
      <Navbar />
      <div className="min-h-screen pt-20">
        <section className="section-padding">
          <div className="container-max">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl sm:text-5xl font-bold text-center mb-4">
                All <span className="gradient-text">Projects</span>
              </h1>
              <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                Explore my complete portfolio of web development projects, from simple websites to complex applications
              </p>

              {/* Filter Buttons */}
              <div className="flex flex-wrap justify-center gap-3 mb-12">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setFilter(category)}
                    className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${filter === category
                      ? 'bg-gradient-primary text-primary-foreground shadow-lg'
                      : 'bg-secondary hover:bg-primary/10 text-muted-foreground hover:text-primary'
                      }`}
                  >
                    {category}
                  </button>
                ))}
              </div>

              {/* Projects Grid */}
              <motion.div
                layout
                className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
              >
                {filteredProjects.map((project, index) => (
                  <motion.div
                    key={project.title}
                    layout
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                  >
                    <ProjectCard {...project} index={index} />
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ProjectsPage;