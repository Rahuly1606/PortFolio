import { motion } from 'framer-motion';
import { Code2, Server, Cloud, Brain, Users, Database } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Programming & Core CS',
      icon: Code2,
      skills: ['Java', 'Python', 'JavaScript', 'C', 'SQL', 'Data Structures & Algorithms', 'OOP', 'System Design'],
    },
    {
      title: 'Frontend',
      icon: Code2,
      skills: ['React.js', 'HTML5', 'CSS3', 'Tailwind CSS', 'DaisyUI'],
    },
    {
      title: 'Backend & APIs',
      icon: Server,
      skills: ['Django', 'Node.js/Express', 'Spring Boot', 'RESTful API development'],
    },
    {
      title: 'Cloud, DevOps & Databases',
      icon: Cloud,
      skills: ['AWS (EC2, S3, Lambda, SageMaker)', 'Azure', 'CI/CD', 'MongoDB', 'MySQL', 'SQLite'],
    },
    {
      title: 'Real-Time & AI',
      icon: Brain,
      skills: ['Socket.IO', 'OpenAI APIs', 'NLP', 'SentenceTransformers', 'InsightFace (ArcFace)'],
    },
    {
      title: 'Consulting Skills',
      icon: Users,
      skills: ['Requirements analysis', 'Stakeholder communication', 'Scoping', 'Risk mitigation'],
    },
  ];

  return (
    <section id="skills" className="section-padding">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">
            Technical <span className="gradient-text">Skills</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {skillCategories.map((category, index) => {
              const Icon = category.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="glass-card p-6 shadow-card hover:shadow-card-hover transition-all duration-300"
                >
                  <div className="flex items-center mb-4">
                    <div className="p-3 bg-primary/10 rounded-lg mr-4">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold">{category.title}</h3>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, i) => (
                      <motion.span
                        key={i}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3, delay: index * 0.1 + i * 0.05 }}
                        viewport={{ once: true }}
                        whileHover={{ scale: 1.05 }}
                        className="px-3 py-1.5 bg-secondary text-sm font-medium rounded-lg border border-primary/10 hover:border-primary/30 transition-colors"
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;