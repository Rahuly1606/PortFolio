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
    <section id="experience" className="py-20 relative bg-[#F8F9FA]">
      <div className="w-full px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 font-['Montserrat']" style={{ color: '#212529' }}>
            Work <span style={{ color: '#E53935' }}>Experience</span>
          </h2>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: '#6C757D' }}>
            Professional background and consulting experience
          </p>
        </motion.div>

        <div className="w-full max-w-7xl mx-auto relative">
          {/* Vertical Timeline Line */}
          <div
            className="absolute left-0 top-0 bottom-0 hidden md:block"
            style={{
              width: '2px',
              background: 'linear-gradient(to bottom, #E53935, rgba(229, 57, 53, 0.3))'
            }}
          />

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
                <div
                  className="absolute left-0 top-8 w-4 h-4 rounded-full border-4 hidden md:block transform -translate-x-[7px]"
                  style={{
                    backgroundColor: '#E53935',
                    borderColor: '#F8F9FA'
                  }}
                />

                <Card
                  className="w-full bg-white border-0 transition-all duration-300 hover:-translate-y-2 group"
                  style={{
                    borderRadius: '12px',
                    boxShadow: '0 4px 8px rgba(0,0,0,0.05)',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.boxShadow = '0 12px 24px rgba(0,0,0,0.12)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.boxShadow = '0 4px 8px rgba(0,0,0,0.05)';
                  }}
                >
                  <CardHeader>
                    <div className="flex items-start justify-between flex-wrap gap-4">
                      <div className="flex-1">
                        <div className="w-16 h-16 flex items-center justify-center mb-4 bg-white rounded-lg p-2">
                          <img
                            src={exp.logo}
                            alt={`${exp.company} logo`}
                            className="w-full h-full object-contain"
                          />
                        </div>
                        <CardTitle className="text-2xl mb-2 font-bold font-['Montserrat']" style={{ color: '#212529' }}>
                          {exp.title}
                        </CardTitle>
                        <p className="text-lg font-semibold mb-1" style={{ color: '#E53935' }}>{exp.role}</p>
                        <p className="text-base" style={{ color: '#6C757D' }}>{exp.company}</p>
                      </div>
                      <div className="text-right">
                        <div className="flex items-center gap-2 text-sm mb-1" style={{ color: '#6C757D' }}>
                          <Calendar className="w-4 h-4" />
                          <span>{exp.duration}</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm" style={{ color: '#6C757D' }}>
                          <MapPin className="w-4 h-4" />
                          <span>{exp.location}</span>
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <h4 className="font-bold mb-3 text-base font-['Montserrat']" style={{ color: '#212529' }}>Key Achievements:</h4>
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
                          <span className="mt-1 text-lg" style={{ color: '#E53935' }}>•</span>
                          <span className="text-sm" style={{ color: '#6C757D' }}>
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
