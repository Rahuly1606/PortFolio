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
    <section id="certificates" className="py-32 relative bg-white">
      <div className="container mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <h2 className="text-5xl md:text-7xl font-display font-bold text-text tracking-tight mb-6">
            CERTIFICATIONS
          </h2>
          <p className="text-xl text-subtext max-w-2xl">
            Demonstrating continuous learning and professional development
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {featuredCertificates.map((cert, index) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
              className="group"
            >
              <Card className="h-full bg-white border-2 border-gray-200 rounded-2xl shadow-soft hover:shadow-lift hover:border-accent transition-all duration-300 hover:-translate-y-1 flex flex-col overflow-hidden">
                <CardHeader className="pb-4 pt-6 px-6">
                  <div className="w-16 h-16 flex items-center justify-center mb-4 bg-gray-50 rounded-xl p-3 border border-gray-200">
                    <img
                      src={cert.logo}
                      alt={`${cert.issuer} logo`}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <CardTitle className="text-lg font-bold text-text leading-tight min-h-[3rem] group-hover:text-accent transition-colors duration-300">
                    {cert.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex-1 flex flex-col pt-2 pb-6 px-6">
                  <div className="flex-1 space-y-3">
                    {cert.description && (
                      <p className="text-sm text-subtext leading-relaxed font-medium min-h-[2.5rem]">{cert.description}</p>
                    )}
                    <div>
                      <p className="text-xs font-bold text-text uppercase tracking-wide mb-1">Issuer</p>
                      <p className="text-sm text-subtext font-medium">{cert.issuer}</p>
                    </div>
                    <div>
                      <p className="text-xs font-bold text-text uppercase tracking-wide mb-1">Issued</p>
                      <p className="text-sm text-subtext font-medium">{cert.date}</p>
                    </div>
                  </div>
                  <Button
                    size="sm"
                    className="w-full bg-accent hover:bg-accent/90 text-text font-bold rounded-xl mt-4 py-5 transition-all duration-300 hover:-translate-y-0.5 shadow-accent"
                    asChild
                  >
                    <a href={cert.verificationUrl} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2">
                      Verify Credential
                      <ExternalLink className="w-4 h-4" />
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
            className="bg-accent hover:bg-accent/90 text-text font-bold px-10 py-7 text-lg rounded-xl shadow-accent hover:shadow-lift transition-all duration-300 hover:-translate-y-1 group"
          >
            <span className="flex items-center gap-3">
              View All Certificates
              <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
            </span>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default Certificates;
