import { motion } from 'framer-motion';
import { Award, Calendar, ExternalLink, Download } from 'lucide-react';
import Navbar from '@/components/Navbar';

const CertificatesPage = () => {
  const allCertificates = [
    {
      title: 'Oracle Cloud Infrastructure Generative AI Professional',
      issuer: 'Oracle Cloud',
      date: 'Dec 2023',
      image: 'oracle.png',
      verificationUrl: 'https://catalog-education.oracle.com/pls/certview/sharebadge?id=20BBA5622A4DC3CB33169DD8BD069D90C785FEB86DE3F1D1BFF0713EF9DD3787',
      certificateImage: 'oracle.png',
    },
    {
      title: 'MongoDB Associate Developer',
      issuer: 'MongoDB University',
      date: 'may 2025',
      image: 'mongodb.png',
      verificationUrl: 'https://www.credly.com/badges/bea62934-bb43-4a5a-87a6-3b4a9dab0c08',
      certificateImage: 'mongodb.png',
    },
    {
      title: 'Salesforce Certified AI Associate(5184141)',
      issuer: 'Salesforce',
      date: 'nov 2024',
      image: 'salesforce.png',
      verificationUrl: 'https://trailhead.salesforce.com/en/credentials/verification/',
      certificateImage: 'salesforce.png',
    },
    {
      title: 'Introduction to CIP',
      issuer: 'OPSWAT Academy',
      date: 'feb 2025',
      image: 'cip.png',
      verificationUrl: 'https://learn.opswatacademy.com/certificate/wrod517NqA',
      certificateImage: 'cip.png',
    },
    {
      title: 'React Developer Certification',
      issuer: 'React Training',
      date: 'Aug 2023',
      image: 'https://api.dicebear.com/7.x/shapes/svg?seed=react',
      verificationUrl: 'https://reacttraining.com/verify',
      certificateImage: '/certificates/react.pdf',
    },
    {
      title: 'Problem Solving (Basic) Certificate',
      issuer: 'HackerRank',
      date: 'may 2024',
      image: 'hacker.png',
      verificationUrl: 'https://www.hackerrank.com/certificates/32ce923f6145',
      certificateImage: 'hacker.png',
    },
    {
      title: 'Artificial Intelligence Essentials V2',
      issuer: 'Coursera',
      date: 'oct 2024',
      image: 'courseera1.png',
      verificationUrl: 'https://www.credly.com/badges/22b0b9ad-0aba-498f-a4e9-8968a1893331/',
      certificateImage: '/certificates/docker.pdf',
    },
    {
      title: 'Python for Data Science',
      issuer: 'IBM',
      date: 'May 2023',
      image: 'https://api.dicebear.com/7.x/shapes/svg?seed=python',
      verificationUrl: 'https://ibm.com/verify',
      certificateImage: '/certificates/python.pdf',
    },
  ];

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
                All <span className="gradient-text">Certificates</span>
              </h1>
              <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                A comprehensive collection of my professional certifications and achievements in technology
              </p>

              {/* Certificates Grid */}
              <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {allCertificates.map((cert, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.05 }}
                    whileHover={{ y: -5 }}
                    className="glass-card overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300 group"
                  >
                    {/* Certificate Image */}
                    <div className="relative h-48 bg-gradient-subtle flex items-center justify-center overflow-hidden">
                      <img
                        src={cert.image}
                        alt={cert.title}
                        className="w-32 h-32 object-contain transition-transform duration-300 group-hover:scale-110"
                      />
                      <div className="absolute top-3 right-3">
                        <Award className="w-5 h-5 text-primary" />
                      </div>

                      {/* Overlay on hover */}
                      <div className="absolute inset-0 bg-background/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <button
                          onClick={() => window.open(cert.certificateImage, '_blank')}
                          className="px-4 py-2 bg-gradient-primary text-primary-foreground rounded-lg font-medium transform scale-90 group-hover:scale-100 transition-transform"
                        >
                          View Certificate
                        </button>
                      </div>
                    </div>

                    {/* Certificate Content */}
                    <div className="p-6">
                      <h3 className="text-lg font-semibold mb-2 line-clamp-2">{cert.title}</h3>
                      <p className="text-muted-foreground text-sm mb-3">{cert.issuer}</p>

                      <div className="flex items-center text-sm text-muted-foreground mb-4">
                        <Calendar className="w-4 h-4 mr-2" />
                        {cert.date}
                      </div>

                      <div className="flex gap-2">
                        <a
                          href={cert.verificationUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-primary text-sm font-medium link-hover"
                        >
                          Verify
                          <ExternalLink className="w-3 h-3" />
                        </a>
                        <span className="text-muted-foreground">•</span>
                        <button
                          onClick={() => window.open(cert.certificateImage, '_blank')}
                          className="inline-flex items-center gap-1 text-primary text-sm font-medium link-hover"
                        >
                          Download
                          <Download className="w-3 h-3" />
                        </button>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default CertificatesPage;