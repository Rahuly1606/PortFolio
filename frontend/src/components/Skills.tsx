import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Palette, Server, Cloud, Zap, Users } from "lucide-react";
import SkillsSkeleton from "./skeletons/SkillsSkeleton";

const Skills = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate data loading
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 900);

    return () => clearTimeout(timer);
  }, []);
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

  if (isLoading) {
    return <SkillsSkeleton />;
  }

  return (
    <section id="skills" className="py-20 md:py-32 relative bg-white">
      <div className="container mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="mb-12 md:mb-20"
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-bold text-text tracking-tight mb-4 md:mb-6">
            TECHNICAL SKILLS
          </h2>
          <p className="text-lg md:text-xl text-subtext max-w-2xl">
            Comprehensive display of technical competencies across the full stack
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
              className="group"
            >
              <Card className="bg-white border-2 border-gray-200 h-full rounded-2xl shadow-soft hover:shadow-lift hover:border-accent transition-all duration-300 hover:-translate-y-1 overflow-hidden">
                <CardHeader className="pb-6 pt-8 px-8">
                  <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mb-5 group-hover:bg-accent group-hover:scale-110 transition-all duration-300">
                    <category.icon className="w-7 h-7 text-text" />
                  </div>
                  <CardTitle className="text-xl font-bold text-text group-hover:text-accent transition-colors duration-300">
                    {category.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="px-8 pb-8">
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <Badge
                        key={skill}
                        variant="secondary"
                        className="bg-gray-100 text-text border border-gray-200 hover:bg-accent hover:text-text hover:border-accent font-medium transition-all duration-300 px-3 py-1.5 text-sm rounded-lg"
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
