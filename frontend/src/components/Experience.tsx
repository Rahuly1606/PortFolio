import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: 'Infosys Springboard Intern (AI/ML Track)',
      company: 'Infosys Limited',
      location: 'Remote',
      duration: 'Jun 2023 - Aug 2023',
      responsibilities: [
        'Built an end-to-end AI semantic search pipeline for QueryTube (YouTube data + transcript → embeddings → index).',
        'Benchmarked SentenceTransformer models and similarity metrics; tuned top k / thresholds to boost retrieval (top-1/top-3 recall).',
        'Delivered a Gradio demo for stakeholders and handled scoping, requirement translation, and progress reporting.',
      ],
    },
  ];

  return (
    <section id="experience" className="section-padding bg-secondary/30">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">
            Work <span className="gradient-text">Experience</span>
          </h2>

          {/* Timeline */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-primary/20" />

            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="relative mb-12 ml-16"
              >
                {/* Timeline Dot */}
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.4, delay: index * 0.2 + 0.2 }}
                  viewport={{ once: true }}
                  className="absolute -left-[3.25rem] top-2 w-4 h-4 bg-primary rounded-full border-4 border-background"
                />

                {/* Experience Card */}
                <div className="glass-card p-6 shadow-card hover:shadow-card-hover transition-shadow">
                  <div className="flex flex-wrap items-start justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-semibold mb-1">{exp.title}</h3>
                      <p className="text-primary font-medium">{exp.company}</p>
                    </div>
                    <div className="flex flex-col gap-1 text-sm text-muted-foreground mt-2 sm:mt-0">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        {exp.duration}
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4" />
                        {exp.location}
                      </div>
                    </div>
                  </div>

                  <ul className="space-y-2">
                    {exp.responsibilities.map((resp, i) => (
                      <motion.li
                        key={i}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: index * 0.2 + i * 0.1 + 0.3 }}
                        viewport={{ once: true }}
                        className="flex items-start"
                      >
                        <span className="text-primary mr-2 mt-1.5">•</span>
                        <span className="text-muted-foreground">{resp}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;