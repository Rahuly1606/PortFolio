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
    <section id="projects" className="py-20 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Showcase of my technical work and problem-solving abilities
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
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
            className="bg-primary hover:bg-primary-hover text-primary-foreground shadow-primary"
          >
            Explore More Projects
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
