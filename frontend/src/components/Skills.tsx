import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Palette, Server, Cloud, Zap, Users } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      icon: Code,
      title: "Programming & Core CS",
      skills: ["Java", "Python", "JavaScript", "C", "SQL", "DSA", "OOP", "System Design"],
    },
    {
      icon: Palette,
      title: "Frontend",
      skills: ["React.js", "HTML5", "CSS3", "Tailwind CSS", "DaisyUI"],
    },
    {
      icon: Server,
      title: "Backend & APIs",
      skills: ["Django", "Node.js", "Express", "Spring Boot", "RESTful APIs"],
    },
    {
      icon: Cloud,
      title: "Cloud & Databases",
      skills: ["AWS (EC2, S3, Lambda)", "Azure", "MongoDB", "MySQL", "SQLite"],
    },
    {
      icon: Zap,
      title: "Real-Time & AI",
      skills: ["Socket.IO", "OpenAI APIs", "NLP", "SentenceTransformers", "ArcFace"],
    },
    {
      icon: Users,
      title: "Consulting Skills",
      skills: ["Requirements Analysis", "Stakeholder Communication", "Scoping", "Risk Mitigation"],
    },
  ];

  return (
    <section id="skills" className="py-20 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Technical <span className="text-gradient">Skills</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive display of technical competencies
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
            >
              <Card className="glass border-primary/20 h-full hover:shadow-primary transition-all duration-300">
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <category.icon className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle className="text-lg">{category.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <Badge
                        key={skill}
                        variant="secondary"
                        className="bg-primary/10 text-primary border-primary/20 hover:bg-primary hover:text-primary-foreground transition-colors"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
