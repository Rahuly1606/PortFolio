import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Award, ExternalLink, ArrowLeft } from "lucide-react";

const CertificatesPage = () => {
  const navigate = useNavigate();

  const allCertificates = [
    {
      title: 'Oracle Cloud Infrastructure Generative AI Professional',
      issuer: 'Oracle Cloud',
      date: 'Sep 2024',
      image: 'oracle.png',
      verificationUrl: 'https://catalog-education.oracle.com/pls/certview/sharebadge?id=20BBA5622A4DC3CB33169DD8BD069D90C785FEB86DE3F1D1BFF0713EF9DD3787',
      certificateImage: 'oracle.png',
    },
    {
      title: 'MongoDB Associate Developer',
      issuer: 'MongoDB University',
      date: 'May 2025',
      image: 'mongodb.png',
      verificationUrl: 'https://www.credly.com/badges/bea62934-bb43-4a5a-87a6-3b4a9dab0c08',
      certificateImage: 'mongodb.png',
    },
    {
      title: 'Salesforce Certified AI Associate',
      issuer: 'Salesforce',
      date: 'Nov 2024',
      image: 'salesforce.png',
      verificationUrl: 'https://trailhead.salesforce.com/en/credentials/verification/',
      certificateImage: 'salesforce.png',
    },
    {
      title: 'Introduction to CIP',
      issuer: 'OPSWAT Academy',
      date: 'Feb 2025',
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
      date: 'May 2024',
      image: 'hacker.png',
      verificationUrl: 'https://www.hackerrank.com/certificates/32ce923f6145',
      certificateImage: 'hacker.png',
    },
    {
      title: 'Artificial Intelligence Essentials V2',
      issuer: 'Coursera',
      date: 'Oct 2024',
      image: 'coursera1.png',
      verificationUrl: 'https://www.credly.com/badges/22b0b9ad-0aba-498f-a4e9-8968a1893331/',
      certificateImage: '/certificates/coursera.pdf',
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
    <div className="min-h-screen bg-background">
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
            className="mb-8"
          >
            <ArrowLeft className="mr-2 w-4 h-4" />
            Back to Home
          </Button>

          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Professional <span className="text-gradient">Certifications</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A comprehensive collection of industry-recognized certifications demonstrating expertise
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {allCertificates.map((cert, index) => (
              <motion.div
                key={cert.title}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
              >
                <Card className="glass border-primary/20 h-full hover:shadow-primary transition-all duration-300">
                  <CardHeader>
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                      <Award className="w-6 h-6 text-primary" />
                    </div>
                    <CardTitle className="text-lg">{cert.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div>
                      <p className="text-sm font-medium text-muted-foreground">Issuer</p>
                      <p className="text-sm">{cert.issuer}</p>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-muted-foreground">Date</p>
                      <p className="text-sm">{cert.date}</p>
                    </div>
                    <Button
                      size="sm"
                      variant="outline"
                      className="w-full border-primary/30 hover:bg-primary hover:text-primary-foreground"
                      asChild
                    >
                      <a href={cert.verificationUrl} target="_blank" rel="noopener noreferrer">
                        Verify Certificate
                        <ExternalLink className="ml-2 w-4 h-4" />
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
