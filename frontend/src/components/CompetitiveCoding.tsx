import { motion } from 'framer-motion';
import { Code, Trophy, TrendingUp, Target } from 'lucide-react';

const CompetitiveCoding = () => {
  const platforms = [
    {
      name: 'LeetCode',
      icon: Code,
      url: 'https://leetcode.com/u/klu2300090198/',
      stats: '330+ Problems Solved',
      rating: 'Knight Badge',
      color: 'from-orange-400 to-orange-600',
    },
    {
      name: 'CodeChef',
      icon: Trophy,
      url: 'https://www.codechef.com/users/klu2300090198',
      stats: '3 Star Rating',
      rating: '1600+ Rating',
      color: 'from-amber-400 to-amber-600',
    },
    {
      name: 'HackerRank',
      icon: TrendingUp,
      url: 'https://www.hackerrank.com/profile/kl2300090198',
      stats: '3 Star Gold',
      rating: 'Problem Solving',
      color: 'from-green-400 to-green-600',
    },
    {
      name: 'Codeforces',
      icon: Target,
      url: 'https://codeforces.com/profile/klu2300090198',
      stats: 'Pupil',
      rating: '900+ Rating',
      color: 'from-blue-400 to-blue-600',
    },
  ];

  return (
    <section id="competitive-coding" className="section-padding bg-secondary/30">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4">
            Competitive <span className="gradient-text">Coding</span>
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Active participant in competitive programming platforms, constantly improving problem-solving skills
          </p>

          {/* Platform Cards */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {platforms.map((platform, index) => {
              const Icon = platform.icon;
              return (
                <motion.a
                  key={index}
                  href={platform.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -8, scale: 1.02 }}
                  className="group relative overflow-hidden glass-card p-6 shadow-card hover:shadow-card-hover transition-all duration-300"
                >
                  {/* Background Gradient */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${platform.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />

                  {/* Platform Icon */}
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${platform.color} p-3 mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-full h-full text-white" />
                  </div>

                  {/* Platform Name */}
                  <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
                    {platform.name}
                  </h3>

                  {/* Stats */}
                  <p className="text-sm font-medium text-foreground mb-1">
                    {platform.stats}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {platform.rating}
                  </p>

                  {/* Hover Effect Arrow */}
                  <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <svg
                      className="w-5 h-5 text-primary"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </div>
                </motion.a>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CompetitiveCoding;