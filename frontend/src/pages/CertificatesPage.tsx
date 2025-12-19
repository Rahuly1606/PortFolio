import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, ArrowLeft } from "lucide-react";
import { CertificateCardSkeleton } from "@/components/skeletons/CertificatesSkeleton";

const CertificatesPage = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate page load
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const allCertificates = [
    {
      title: 'GitHub Foundations',
      issuer: 'Microsoft Learn',
      date: 'Oct 2025',
      description: 'Demonstrates foundational knowledge of GitHub, version control, and collaboration practices',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg',
      verificationUrl: 'https://learn.microsoft.com/api/credentials/share/en-us/RAHULKUMAR-6909/75D907EC828C9221?sharingId=64CE99F68B678B3B',
    },
    {
      title: 'Oracle Cloud Infrastructure Generative AI Professional',
      issuer: 'Oracle Cloud',
      date: 'Sep 2024',
      description: 'Validates expertise in generative AI on Oracle Cloud Infrastructure',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/5/50/Oracle_logo.svg',
      verificationUrl: 'https://catalog-education.oracle.com/pls/certview/sharebadge?id=20BBA5622A4DC3CB33169DD8BD069D90C785FEB86DE3F1D1BFF0713EF9DD3787',
    },
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
    {
      title: 'Introduction to CIP',
      issuer: 'OPSWAT Academy',
      date: 'Feb 2025',
      description: 'Critical Infrastructure Protection fundamentals certification',
      logo: 'https://www.opswat.com/sites/default/files/opswat-logo.svg',
      verificationUrl: 'https://learn.opswatacademy.com/certificate/wrod517NqA',
    },
    {
      title: 'Problem Solving (Basic) Certificate',
      issuer: 'HackerRank',
      date: 'May 2024',
      description: 'Demonstrates basic problem-solving and algorithmic skills',
      logo: 'https://hrcdn.net/fcore/assets/brand/logo-new-white-green-a5cb16e0ae.svg',
      verificationUrl: 'https://www.hackerrank.com/certificates/32ce923f6145',
    },
    {
      title: 'Artificial Intelligence Essentials V2',
      issuer: 'Coursera',
      date: 'Oct 2024',
      description: 'Foundation in AI concepts and practical applications',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/9/97/Coursera-Logo_600x600.svg',
      verificationUrl: 'https://www.credly.com/badges/22b0b9ad-0aba-498f-a4e9-8968a1893331/',
    },
  ];

  return (
    <div className="min-h-screen">
      <Navbar />

      <div className="container mx-auto px-6 lg:px-12 pt-24 md:pt-32 pb-12 md:pb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Button
            variant="ghost"
            onClick={() => navigate("/")}
            className="mb-8 md:mb-12 text-subtext hover:text-text hover:bg-accent/10 transition-all duration-300 group rounded-xl"
          >
            <ArrowLeft className="mr-2 w-4 h-4 group-hover:-translate-x-1 transition-transform duration-300" />
            Back to Home
          </Button>

          <div className="mb-12 md:mb-20">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-bold text-text tracking-tight mb-4 md:mb-6">
              CERTIFICATIONS
            </h1>
            <p className="text-lg md:text-xl text-subtext max-w-2xl">
              A comprehensive collection of industry-recognized certifications demonstrating expertise
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
            {isLoading
              ? Array.from({ length: 6 }).map((_, index) => (
                <CertificateCardSkeleton key={index} />
              ))
              : allCertificates.map((cert, index) => (
                <motion.div
                  key={cert.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
                  className="group"
                >
                  <Card className="h-full bg-white border-2 border-gray-200 rounded-xl shadow-soft hover:shadow-lift hover:border-accent transition-all duration-300 hover:-translate-y-1 flex flex-col overflow-hidden">
                    <CardHeader className="pb-3 pt-4 px-5">
                      <div className="w-12 h-12 flex items-center justify-center mb-3 bg-gray-50 rounded-lg p-2 border border-gray-200">
                        <img
                          src={cert.logo}
                          alt={`${cert.issuer} logo`}
                          className="w-full h-full object-contain"
                        />
                      </div>
                      <CardTitle className="text-base font-bold text-text leading-tight group-hover:text-accent transition-colors duration-300">
                        {cert.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="flex-1 flex flex-col pt-1 pb-4 px-5">
                      <div className="flex-1 space-y-2">
                        {cert.description && (
                          <p className="text-xs text-subtext leading-relaxed font-medium line-clamp-2">{cert.description}</p>
                        )}
                        <div>
                          <p className="text-xs font-bold text-text uppercase tracking-wide mb-0.5">Issuer</p>
                          <p className="text-xs text-subtext font-medium">{cert.issuer}</p>
                        </div>
                        <div>
                          <p className="text-xs font-bold text-text uppercase tracking-wide mb-0.5">Issued</p>
                          <p className="text-xs text-subtext font-medium">{cert.date}</p>
                        </div>
                      </div>
                      <Button
                        size="sm"
                        className="w-full bg-accent hover:bg-accent/90 text-text font-bold rounded-lg mt-3 py-4 text-xs transition-all duration-300 hover:-translate-y-0.5 shadow-accent"
                        asChild
                      >
                        <a href={cert.verificationUrl} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2">
                          Verify Credential
                          <ExternalLink className="w-3 h-3" />
                        </a>
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default CertificatesPage;
