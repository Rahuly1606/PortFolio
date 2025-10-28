import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, ArrowRight } from "lucide-react";

const Certificates = () => {
  const navigate = useNavigate();

  const featuredCertificates = [
    {
      title: 'GitHub Foundations',
      issuer: 'Microsoft Learn',
      date: 'Oct 2025',
      description: 'Demonstrates foundational knowledge of GitHub, version control, and collaboration practices',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg',
      verificationUrl: 'https://learn.microsoft.com/api/credentials/share/en-us/RAHULKUMAR-6909/75D907EC828C9221?sharingId=64CE99F68B678B3B',
    },
    // {
    //   title: 'Oracle Cloud Infrastructure Generative AI Professional',
    //   issuer: 'Oracle Cloud',
    //   date: 'Sep 2024',
    //   description: 'Validates expertise in generative AI on Oracle Cloud Infrastructure',
    //   logo: 'https://upload.wikimedia.org/wikipedia/commons/5/50/Oracle_logo.svg',
    //   verificationUrl: 'https://catalog-education.oracle.com/pls/certview/sharebadge?id=20BBA5622A4DC3CB33169DD8BD069D90C785FEB86DE3F1D1BFF0713EF9DD3787',
    // },
    {
      title: 'MongoDB Associate Developer',
      issuer: 'MongoDB University',
      date: 'May 2025',
      description: 'Demonstrates proficiency in MongoDB development and database design',
      logo: 'https://www.vectorlogo.zone/logos/mongodb/mongodb-ar21.svg',
      verificationUrl: 'https://www.credly.com/badges/bea62934-bb43-4a5a-87a6-3b4a9dab0c08',
    },
    {
      title: 'Salesforce Certified AI Associate',
      issuer: 'Salesforce',
      date: 'Nov 2024',
      description: 'Validates foundational knowledge of AI in Salesforce ecosystem',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/f/f9/Salesforce.com_logo.svg',
      verificationUrl: 'https://trailhead.salesforce.com/en/credentials/verification/',
    },
  ];

  return (
    <section id="certificates" className="py-20 relative bg-[#F8F9FA]">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 font-['Montserrat']" style={{ color: '#212529' }}>
            Professional <span style={{ color: '#E53935' }}>Certifications</span>
          </h2>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: '#6C757D' }}>
            Demonstrating continuous learning and professional development
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {featuredCertificates.map((cert, index) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <Card
                className="h-full bg-white border-0 transition-all duration-300 hover:-translate-y-2 flex flex-col"
                style={{
                  borderRadius: '12px',
                  boxShadow: '0 4px 8px rgba(0,0,0,0.05)',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = '0 12px 24px rgba(0,0,0,0.12)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = '0 4px 8px rgba(0,0,0,0.05)';
                }}
              >
                <CardHeader className="pb-2 pt-4">
                  <div className="w-14 h-14 flex items-center justify-center mb-3 bg-white rounded-lg p-2">
                    <img
                      src={cert.logo}
                      alt={`${cert.issuer} logo`}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <CardTitle className="text-base font-bold font-['Montserrat'] leading-tight min-h-[3rem]" style={{ color: '#212529' }}>
                    {cert.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex-1 flex flex-col pt-2 pb-4">
                  <div className="flex-1 space-y-2">
                    {cert.description && (
                      <p className="text-xs min-h-[2rem] leading-tight" style={{ color: '#6C757D' }}>{cert.description}</p>
                    )}
                    <div>
                      <p className="text-xs font-semibold" style={{ color: '#212529' }}>Issuer</p>
                      <p className="text-xs" style={{ color: '#6C757D' }}>{cert.issuer}</p>
                    </div>
                    <div>
                      <p className="text-xs font-semibold" style={{ color: '#212529' }}>Issued</p>
                      <p className="text-xs" style={{ color: '#6C757D' }}>{cert.date}</p>
                    </div>
                  </div>
                  <Button
                    size="sm"
                    className="w-full font-semibold transition-all duration-300 border-0 mt-3 py-2"
                    style={{
                      backgroundColor: '#E53935',
                      color: 'white',
                      fontSize: '0.813rem',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = '#CC3333';
                      e.currentTarget.style.transform = 'scale(1.02)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = '#E53935';
                      e.currentTarget.style.transform = 'scale(1)';
                    }}
                    asChild
                  >
                    <a href={cert.verificationUrl} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2">
                      Verify Credential
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
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
            onClick={() => navigate("/certificates")}
            className="font-semibold transition-all duration-300 border-0 px-8 py-6"
            style={{
              backgroundColor: '#E53935',
              color: 'white',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#CC3333';
              e.currentTarget.style.transform = 'scale(1.05)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = '#E53935';
              e.currentTarget.style.transform = 'scale(1)';
            }}
          >
            <span className="flex items-center gap-3">
              View All Certificates
              <ArrowRight className="w-5 h-5" />
            </span>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default Certificates;
