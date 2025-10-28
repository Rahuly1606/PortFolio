import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import ProjectCard from "./ProjectCard";
import { ArrowRight } from "lucide-react";

const Projects = () => {
  const navigate = useNavigate();

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
    <section id="projects" className="py-20 md:py-32 relative bg-background">
      <div className="container mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 md:mb-20"
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-bold text-text tracking-tight mb-4 md:mb-6">
            FEATURED WORK
          </h2>
          <p className="text-lg md:text-xl text-subtext max-w-2xl">
            Showcase of technical work and problem-solving abilities across various domains
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-12 md:mb-16">
          {featuredProjects.map((project, index) => (
            <ProjectCard
              key={project.title}
              {...project}
              delay={index * 0.1}
            />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center"
        >
          <Button
            size="lg"
            onClick={() => navigate("/projects")}
            className="bg-accent hover:bg-accent/90 text-text font-bold px-8 md:px-10 py-6 md:py-7 text-base md:text-lg rounded-xl shadow-accent hover:shadow-lift transition-all duration-300 hover:-translate-y-1 group"
          >
            <span className="flex items-center gap-3">
              Explore More Projects
              <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
            </span>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
