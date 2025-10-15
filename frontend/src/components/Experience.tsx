import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, MapPin, Briefcase } from "lucide-react";

interface ExperienceItem {
  id: number;
  title: string;
  role: string;
  company: string;
  duration: string;
  location: string;
  achievements: string[];
}

const Experience = () => {
  // Experiences ordered from newest to oldest (new ones will appear at the top)
  const experiences: ExperienceItem[] = [
    // Example: Add new experience here and it will appear above the others
    // {
    //   id: 2,
    //   title: "Senior Software Engineer",
    //   role: "Full Stack Development",
    //   company: "Tech Company Inc.",
    //   duration: "January 2024 - Present",
    //   location: "Hybrid",
    //   achievements: [
    //     "Led development of microservices architecture",
    //     "Improved application performance by 40%",
    //     "Mentored junior developers",
    //   ],
    // },
    {
      id: 1,
      title: "Infosys Springboard Intern",
      role: "AI/ML Track",
      company: "Infosys Limited",
      duration: "June 2023 - August 2023",
      location: "Remote",
      achievements: [
        "Built AI semantic search pipeline for QueryTube",
        "Benchmarked SentenceTransformer models for optimal performance",
        "Improved retrieval metrics (top-1/top-3 recall)",
        "Delivered Gradio demo for stakeholders",
        "Handled scoping, requirements, and reporting",
      ],
    },
    // Add new experiences here - they will appear above
  ];

  return (
    <section id="experience" className="py-20 relative">
      <div className="w-full px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Work <span className="text-gradient">Experience</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Professional background and consulting experience
          </p>
        </motion.div>

        <div className="w-full max-w-7xl mx-auto relative">
          {/* Vertical Timeline Line */}
          <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-primary/50 to-transparent hidden md:block" />

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative md:pl-12"
              >
                {/* Timeline Dot */}
                <div className="absolute left-0 top-8 w-4 h-4 rounded-full bg-primary border-4 border-background hidden md:block transform -translate-x-[7px]" />

                <Card className="glass border-primary/20 hover:shadow-primary transition-all duration-300 w-full">
                  <CardHeader>
                    <div className="flex items-start justify-between flex-wrap gap-4">
                      <div className="flex-1">
                        <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                          <Briefcase className="w-6 h-6 text-primary" />
                        </div>
                        <CardTitle className="text-2xl mb-2">
                          {exp.title}
                        </CardTitle>
                        <p className="text-lg text-primary font-semibold">{exp.role}</p>
                        <p className="text-muted-foreground">{exp.company}</p>
                      </div>
                      <div className="text-right">
                        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-1">
                          <Calendar className="w-4 h-4" />
                          <span>{exp.duration}</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <MapPin className="w-4 h-4" />
                          <span>{exp.location}</span>
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <h4 className="font-semibold mb-3 text-lg">Key Achievements:</h4>
                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, achievementIndex) => (
                        <motion.li
                          key={achievementIndex}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.1 * (achievementIndex + 1) }}
                          className="flex items-start gap-2"
                        >
                          <span className="text-primary mt-1">•</span>
                          <span className="text-muted-foreground">
                            {achievement}
                          </span>
                        </motion.li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
