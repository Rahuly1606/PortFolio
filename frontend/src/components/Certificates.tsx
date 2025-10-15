import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, ArrowRight, Award } from "lucide-react";

const Certificates = () => {
  const navigate = useNavigate();

  const featuredCertificates = [
    {
      title: 'Oracle Cloud Infrastructure Generative AI Professional',
      issuer: 'Oracle Cloud',
      date: 'Sep 2024',
      image: 'oracle.png',
      verificationUrl: 'https://catalog-education.oracle.com/pls/certview/sharebadge?id=20BBA5622A4DC3CB33169DD8BD069D90C785FEB86DE3F1D1BFF0713EF9DD3787',
      certificateImage: '/certificates/oracle.pdf',
    },
    {
      title: 'MongoDB Associate Developer',
      issuer: 'MongoDB University',
      date: 'May 2025',
      image: 'mongodb.png',
      verificationUrl: 'https://www.credly.com/badges/bea62934-bb43-4a5a-87a6-3b4a9dab0c08',
    },
    {
      title: 'Salesforce Certified AI Associate',
      issuer: 'Salesforce',
      date: 'Nov 2024',
      image: 'salesforce.png',
      verificationUrl: 'https://trailhead.salesforce.com/en/credentials/verification/',
      certificateImage: '/certificates/salesforce.pdf',
    },
  ];

  return (
    <section id="certificates" className="py-20 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Professional <span className="text-gradient">Certifications</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
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
                      Verify
                      <ExternalLink className="ml-2 w-4 h-4" />
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
            className="bg-primary hover:bg-primary-hover text-primary-foreground shadow-primary"
          >
            View All Certificates
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default Certificates;
