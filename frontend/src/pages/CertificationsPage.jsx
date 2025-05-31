import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';

const CertificationsPage = () => {
  // Define certificates data directly in this component
  const certificates = [
    {
      name: 'React Developer Certification',
      issuer: 'Coursera',
      link: 'https://coursera.org/verify/react-cert',
    },
    {
      name: 'MongoDB Associate Developer',
      issuer: 'MongoDB University',
      link: 'https://learn.mongodb.com/c/o0VSCgN9R-OXgM6wiUpI1A',
    },
    {
      name: 'Python for Everybody',
      issuer: 'edX',
      link: 'https://edx.org/verify/python-cert',
    },
    {
      name: 'AWS Cloud Practitioner',
      issuer: 'Amazon Web Services',
      link: 'https://aws.amazon.com/certification/certified-cloud-practitioner/',
    },
    {
      name: 'JavaScript Advanced Concepts',
      issuer: 'Udemy',
      link: 'https://udemy.com/certificate/javascript-advanced',
    },
  ];

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <>
      <Navbar />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="pt-20" // Add padding to account for navbar
      >
        <motion.section
          ref={ref}
          className="relative py-24 overflow-hidden"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* Background elements */}
          <div className="absolute inset-0 bg-black"></div>
          <div className="absolute inset-0 opacity-10 bg-grid-pattern"></div>
          
          <div className="mx-auto max-w-7xl px-6 lg:px-12 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.7 }}
              className="text-center mb-16"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5 }}
                className="inline-block px-6 py-2 mb-4 rounded-full bg-purple-900/30 text-purple-300 font-medium text-sm"
              >
                Achievements
              </motion.div>
              
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-5xl font-extrabold"
              >
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-purple-500 glow-text">
                  All My Certifications
                </span>
              </motion.h2>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="text-lg text-gray-300 mt-4 max-w-2xl mx-auto"
              >
                A complete collection of professional certifications that validate my expertise and commitment to continuous learning.
              </motion.p>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="mt-8"
              >
                <Link 
                  to="/"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-purple-600 to-purple-500 text-white hover:shadow-purple-500/50 transition-all duration-300"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                  </svg>
                  Back to Home
                </Link>
              </motion.div>
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
                    boxShadow: "0 20px 25px -5px rgba(139, 92, 246, 0.3), 0 10px 10px -5px rgba(139, 92, 246, 0.2)",
                    transition: { duration: 0.3, ease: "easeOut" }
                  }}
                  className="group relative bg-gray-900 rounded-2xl overflow-hidden shadow-lg transition-all duration-300 border border-gray-800 glow-border"
                >
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 to-purple-500"></div>
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
          </div>
        </motion.section>
      </motion.div>
      <Footer />
    </>
  );
};

export default CertificationsPage; 