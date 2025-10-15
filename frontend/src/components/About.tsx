import { motion } from "framer-motion";
import { GraduationCap, MapPin, Mail, FileText } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const About = () => {
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

  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="text-gradient">Me</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Passionate about creating innovative solutions and learning new technologies
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-6"
        >
          {/* Education Card */}
          <motion.div variants={itemVariants}>
            <Card className="glass border-primary/20 h-full hover:shadow-primary transition-all duration-300 hover:-translate-y-2">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <GraduationCap className="w-6 h-6 text-primary" />
                </div>
                <CardTitle>Education</CardTitle>
              </CardHeader>
              <CardContent>
                <h3 className="font-semibold mb-2">B.Tech in Computer Science & IT</h3>
                <p className="text-muted-foreground mb-1">K L University</p>
                <p className="text-sm text-muted-foreground">2023 - 2027</p>
              </CardContent>
            </Card>
          </motion.div>

          {/* About Me Card */}
          <motion.div variants={itemVariants}>
            <Card className="glass border-primary/20 h-full hover:shadow-primary transition-all duration-300 hover:-translate-y-2">
              <CardHeader>
                <CardTitle>Who I Am</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  Passionate full-stack developer focused on building scalable applications
                  with modern technologies. Eager to learn and contribute to innovative projects.
                </p>
              </CardContent>
            </Card>
          </motion.div>

          {/* Quick Facts Card */}
          <motion.div variants={itemVariants}>
            <Card className="glass border-primary/20 h-full hover:shadow-primary transition-all duration-300 hover:-translate-y-2">
              <CardHeader>
                <CardTitle>Quick Facts</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-primary" />
                  <span className="text-muted-foreground">Bihar, India</span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-primary" />
                  <span className="text-sm text-muted-foreground">alexrahul9576@gmail.com</span>
                </div>
                <div className="flex items-center gap-3">
                  <FileText className="w-5 h-5 text-primary" />
                  <a
                    href="/Resume.pdf"
                    download="Resume.pdf"
                    className="text-sm text-primary hover:underline"
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
