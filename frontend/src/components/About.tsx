import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { GraduationCap, MapPin, Mail, FileText } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import AboutSkeleton from "./skeletons/AboutSkeleton";

const About = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate data loading
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 700);

    return () => clearTimeout(timer);
  }, []);
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  if (isLoading) {
    return <AboutSkeleton />;
  }

  return (
    <section id="about" className="py-20 md:py-32 relative bg-white">
      <div className="container mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="mb-12 md:mb-20"
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-bold text-text tracking-tight mb-4 md:mb-6">
            ABOUT ME
          </h2>
          <p className="text-lg md:text-xl text-subtext max-w-2xl">
            Passionate about creating innovative solutions and learning new technologies
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8"
        >
          {/* Education Card */}
          <motion.div variants={itemVariants}>
            <Card className="bg-white border-2 border-gray-200 h-full rounded-2xl shadow-soft hover:shadow-lift hover:border-accent transition-all duration-300 hover:-translate-y-1 group overflow-hidden">
              <CardHeader className="pb-6 pt-8 px-8">
                <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mb-5 group-hover:bg-accent group-hover:scale-110 transition-all duration-300">
                  <GraduationCap className="w-7 h-7 text-text" />
                </div>
                <CardTitle className="text-xl font-bold text-text group-hover:text-accent transition-colors duration-300">Education</CardTitle>
              </CardHeader>
              <CardContent className="px-8 pb-8">
                <h3 className="font-bold text-text mb-2">B.Tech in Computer Science & IT</h3>
                <p className="text-subtext mb-1 font-medium">K L University</p>
                <p className="text-sm text-gray-600 font-medium">2023 - 2027</p>
              </CardContent>
            </Card>
          </motion.div>

          {/* About Me Card - Dark variant */}
          <motion.div variants={itemVariants}>
            <Card className="bg-card-dark border-none h-full rounded-2xl shadow-soft hover:shadow-lift transition-all duration-300 hover:-translate-y-1 group overflow-hidden">
              <CardHeader className="pb-6 pt-8 px-8">
                <CardTitle className="text-xl font-bold text-white group-hover:text-accent transition-colors duration-300">Who I Am</CardTitle>
              </CardHeader>
              <CardContent className="px-8 pb-8">
                <p className="text-gray-300 leading-relaxed font-medium">
                  Passionate full-stack developer focused on building scalable applications
                  with modern technologies. Eager to learn and contribute to innovative projects.
                </p>
              </CardContent>
            </Card>
          </motion.div>

          {/* Quick Facts Card */}
          <motion.div variants={itemVariants}>
            <Card className="bg-white border-2 border-gray-200 h-full rounded-2xl shadow-soft hover:shadow-lift hover:border-accent transition-all duration-300 hover:-translate-y-1 group overflow-hidden">
              <CardHeader className="pb-6 pt-8 px-8">
                <CardTitle className="text-xl font-bold text-text group-hover:text-accent transition-colors duration-300">Quick Facts</CardTitle>
              </CardHeader>
              <CardContent className="px-8 pb-8 space-y-4">
                <div className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-accent" />
                  <span className="text-subtext font-medium">Bihar, India</span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-accent" />
                  <span className="text-sm text-subtext font-medium">alexrahul9576@gmail.com</span>
                </div>
                <div className="flex items-center gap-3">
                  <FileText className="w-5 h-5 text-accent" />
                  <a
                    href="/Resume.pdf"
                    download="Resume.pdf"
                    className="text-sm text-text hover:text-accent font-medium transition-colors duration-300"
                  >
                    Download Resume
                  </a>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
