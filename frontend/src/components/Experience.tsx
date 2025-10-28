import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, MapPin } from "lucide-react";

interface ExperienceItem {
  id: number;
  title: string;
  role: string;
  company: string;
  duration: string;
  location: string;
  achievements: string[];
  logo: string;
}

const Experience = () => {
  // Experiences ordered from newest to oldest (new ones will appear at the top)
  const experiences: ExperienceItem[] = [
    {
      id: 1,
      title: "Infosys Springboard Intern",
      role: "AI/ML Track",
      company: "Infosys Limited",
      duration: "June 2023 - August 2023",
      location: "Remote",
      logo: "https://upload.wikimedia.org/wikipedia/commons/9/95/Infosys_logo.svg",
      achievements: [
        "Built and deployed AI semantic search pipeline for QueryTube by benchmarking SentenceTransformer models to achieve optimal performance",
        "Improved retrieval accuracy metrics (top-1/top-3 recall) through systematic model evaluation and fine-tuning processes",
        "Delivered comprehensive Gradio demo for stakeholders while handling end-to-end scoping, requirements analysis, and project reporting",
      ],
    },
  ];

  return (
    <section id="experience" className="py-20 md:py-32 relative bg-background">
      <div className="container mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="mb-12 md:mb-20"
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-bold text-text tracking-tight mb-4 md:mb-6">
            WORK EXPERIENCE
          </h2>
          <p className="text-lg md:text-xl text-subtext max-w-2xl">
            Professional background and consulting experience
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto relative">
          {/* Vertical Timeline Line */}
          <div className="absolute left-0 top-0 bottom-0 hidden md:block w-0.5 bg-gray-200" />

          <div className="space-y-8 md:space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative md:pl-16"
              >
                {/* Timeline Dot */}
                <div className="absolute left-0 top-10 w-3 h-3 rounded-full bg-accent border-4 border-background hidden md:block transform -translate-x-[5px]" />

                <Card className="bg-white border-2 border-gray-200 rounded-2xl shadow-soft hover:shadow-lift hover:border-accent transition-all duration-300 hover:-translate-y-1 overflow-hidden group">
                  <CardHeader className="px-8 pt-8 pb-6">
                    <div className="flex items-start justify-between flex-wrap gap-6">
                      <div className="flex-1">
                        <div className="w-20 h-20 flex items-center justify-center mb-6 bg-gray-50 rounded-xl p-3 border border-gray-200">
                          <img
                            src={exp.logo}
                            alt={`${exp.company} logo`}
                            className="w-full h-full object-contain"
                          />
                        </div>
                        <CardTitle className="text-2xl md:text-3xl mb-3 font-display font-bold text-text group-hover:text-accent transition-colors duration-300">
                          {exp.title}
                        </CardTitle>
                        <p className="text-lg font-bold text-subtext mb-2">{exp.role}</p>
                        <p className="text-base text-gray-600 font-medium">{exp.company}</p>
                      </div>
                      <div className="text-right">
                        <div className="flex items-center gap-2 text-sm mb-2 text-subtext font-medium">
                          <Calendar className="w-4 h-4" />
                          <span>{exp.duration}</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-subtext font-medium">
                          <MapPin className="w-4 h-4" />
                          <span>{exp.location}</span>
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="px-8 pb-8">
                    <h4 className="font-bold mb-4 text-base text-text uppercase tracking-wide">Key Achievements:</h4>
                    <ul className="space-y-3">
                      {exp.achievements.map((achievement, achievementIndex) => (
                        <motion.li
                          key={achievementIndex}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.1 * (achievementIndex + 1) }}
                          className="flex items-start gap-3"
                        >
                          <span className="mt-0.5 w-2 h-2 rounded-full bg-accent flex-shrink-0" />
                          <span className="text-sm text-subtext leading-relaxed font-medium">
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
