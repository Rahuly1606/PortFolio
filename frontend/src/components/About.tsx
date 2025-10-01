import { motion } from 'framer-motion';
import { GraduationCap, MapPin, Mail, FileText } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="section-padding">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">
            About <span className="gradient-text">Me</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Education Card */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="glass-card p-6 shadow-card hover:shadow-card-hover transition-shadow"
            >
              <div className="flex items-center mb-4">
                <div className="p-3 bg-primary/10 rounded-lg mr-4">
                  <GraduationCap className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold">Education</h3>
                  <p className="text-muted-foreground">B.Tech in Computer Science & IT</p>
                </div>
              </div>
              <p className="text-sm text-muted-foreground">K L University • 2023-2027</p>
            </motion.div>

            {/* About Me Card */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="glass-card p-6 shadow-card hover:shadow-card-hover transition-shadow"
            >
              <h3 className="text-xl font-semibold mb-3">Who I Am</h3>
              <p className="text-muted-foreground leading-relaxed">
                Passionate full-stack developer with expertise in modern web technologies.
                I love building scalable applications and solving complex problems.
                Always eager to learn new technologies and contribute to innovative projects.
              </p>
            </motion.div>
          </div>

          {/* Quick Facts */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="grid sm:grid-cols-3 gap-4 mt-8"
          >
            <div className="flex items-center p-4 glass-card rounded-xl">
              <MapPin className="w-5 h-5 text-primary mr-3" />
              <div>
                <p className="text-sm text-muted-foreground">Location</p>
                <p className="font-medium">Bihar, India</p>
              </div>
            </div>

            <div className="flex items-center p-4 glass-card rounded-xl">
              <Mail className="w-5 h-5 text-primary mr-3" />
              <div>
                <p className="text-sm text-muted-foreground">Email</p>
                <p className="font-medium">alexrahul9576@gmail.com</p>
              </div>
            </div>

            <div className="flex items-center p-4 glass-card rounded-xl">
              <FileText className="w-5 h-5 text-primary mr-3" />
              <div>
                <p className="text-sm text-muted-foreground">Resume</p>
                <a href="/resume.pdf" className="font-medium text-primary link-hover">
                  Download PDF
                </a>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;