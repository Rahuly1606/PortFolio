import { motion } from 'framer-motion';
import { Award, Calendar, ExternalLink, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Certificates = () => {
  const featuredCertificates = [
    {
      title: 'Oracle Cloud Infrastructure Generative AI Professional',
      issuer: 'Oracle Cloud',
      date: 'sep 2025',
      image: 'oracle.png',
      verificationUrl: 'https://catalog-education.oracle.com/pls/certview/sharebadge?id=20BBA5622A4DC3CB33169DD8BD069D90C785FEB86DE3F1D1BFF0713EF9DD3787',
      certificateImage: '/certificates/aws.pdf',
    },
    {
      title: 'MongoDB Associate Developer',
      issuer: 'MongoDB University',
      date: 'may 2025',
      image: 'mongodb.png',
      verificationUrl: 'https://www.credly.com/badges/bea62934-bb43-4a5a-87a6-3b4a9dab0c08',
    },
    {
      title: 'Salesforce Certified AI Associate(5184141)',
      issuer: 'Salesforce',
      date: 'nov 2024',
      image: 'salesforce.png',
      verificationUrl: 'https://trailhead.salesforce.com/en/credentials/verification/',
      certificateImage: '/certificates/stanford.pdf',
    },
  ];

  return (
    <section id="certificates" className="section-padding">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4">
            Professional <span className="gradient-text">Certificates</span>
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Continuous learning and professional development through industry-recognized certifications
          </p>

          {/* Certificate Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {featuredCertificates.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="glass-card overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300"
              >
                {/* Certificate Image */}
                <div className="relative h-40 bg-gradient-subtle flex items-center justify-center">
                  <img
                    src={cert.image}
                    alt={cert.title}
                    className="w-32 h-32 object-contain"
                  />
                  <div className="absolute top-3 right-3">
                    <Award className="w-5 h-5 text-primary" />
                  </div>
                </div>

                {/* Certificate Content */}
                <div className="p-6">
                  <h3 className="text-lg font-semibold mb-2">{cert.title}</h3>
                  <p className="text-muted-foreground text-sm mb-3">{cert.issuer}</p>

                  <div className="flex items-center text-sm text-muted-foreground mb-4">
                    <Calendar className="w-4 h-4 mr-2" />
                    {cert.date}
                  </div>

                  <a
                    href={cert.verificationUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-primary font-medium link-hover"
                  >
                    Verify Certificate
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>

          {/* View All Certificates Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <Link
              to="/certificates"
              className="inline-flex items-center gap-2 btn-secondary group"
            >
              View All Certificates
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Certificates;