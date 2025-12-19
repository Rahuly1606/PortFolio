import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import ProjectCard from "@/components/ProjectCard";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { ProjectCardSkeleton } from "@/components/skeletons/ProjectsSkeleton";

const ProjectsPage = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate page load
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

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

  return (
    <div className="min-h-screen">
      <Navbar />

      <div className="container mx-auto px-4 pt-24 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Button
            variant="ghost"
            onClick={() => navigate("/")}
            className="mb-8 hover:bg-primary/10 hover:text-primary transition-all duration-300 group"
          >
            <ArrowLeft className="mr-2 w-4 h-4 group-hover:-translate-x-1 transition-transform duration-300" />
            <span className="relative">
              Back to Home
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></span>
            </span>
          </Button>

          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              All <span className="text-gradient">Projects</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Explore my complete portfolio of technical projects and innovations
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {isLoading
              ? Array.from({ length: 6 }).map((_, index) => (
                <ProjectCardSkeleton key={index} />
              ))
              : allProjects.map((project, index) => (
                <ProjectCard
                  key={project.title}
                  {...project}
                  delay={index * 0.1}
                />
              ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ProjectsPage;
