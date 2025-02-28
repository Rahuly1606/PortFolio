import React from 'react';
import { motion } from 'framer-motion';

const MyProjects = ({ projects, projectsInView, projectsRef }) => {
  return (
    <motion.section
      id="projects"
      className="bg-gradient-to-b from-white-50 to-blue-100 py-24 shadow-2xl rounded-xl"
      initial={{ opacity: 0, y: 50 }}
      animate={projectsInView ? 'visible' : 'hidden'}
      variants={{
        visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
        hidden: { opacity: 0, y: 50 },
      }}
      ref={projectsRef}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-center text-5xl font-extrabold text-black"
        >
          My Projects
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center text-lg text-gray-700 mt-4"
        >
          Check out some of the amazing projects I've worked on!
        </motion.p>

        <div className="mt-12 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <motion.div
              key={project.name}
              whileHover={{ 
                scale: 1.05, 
                rotate: [0, 5, -5, 0], 
                boxShadow: "0px 15px 40px rgba(0, 0, 0, 0.25)",
                transition: { duration: 0.3, ease: "easeInOut" }
              }}
              whileTap={{ scale: 0.95 }}
              className="overflow-hidden rounded-xl bg-white shadow-2xl hover:shadow-3xl transition-all duration-300"
            >
              <div className="p-2">
                <motion.img 
                  src={project.image} 
                  alt={project.name} 
                  className="h-52 w-full object-cover rounded-t-xl shadow-md"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                />
              </div>
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
  );
};

export default MyProjects;