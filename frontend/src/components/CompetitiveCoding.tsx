import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ExternalLink, Trophy } from "lucide-react";
import { Button } from "@/components/ui/button";

const CompetitiveCoding = () => {
  const platforms = [
    {
      name: "LeetCode",
      stats: "330+ Problems Solved",
      badge: "Knight Badge",
      link: "https://leetcode.com/u/klu2300090198/",
      logo: "https://upload.wikimedia.org/wikipedia/commons/1/19/LeetCode_logo_black.png",
      brandColor: "#FFA116",
    },
    {
      name: "CodeChef",
      stats: "3 Star Rating",
      badge: "1600+ Rating",
      link: "https://www.codechef.com/users/klu2300090198",
      logo: "https://img.icons8.com/?size=100&id=vAtJFm3hwtQw&format=png&color=000000",
      brandColor: "#5B4638",
    },
    {
      name: "HackerRank",
      stats: "3 Star Gold",
      badge: "Problem Solving",
      link: "https://www.hackerrank.com/profile/kl2300090198",
      logo: "https://hrcdn.net/fcore/assets/brand/logo-new-white-green-a5cb16e0ae.svg",
      brandColor: "#00EA64",
    },
    {
      name: "Codeforces",
      stats: "Pupil Rank",
      badge: "900+ Rating",
      link: "https://codeforces.com/profile/klu2300090198",
      logo: "https://sta.codeforces.com/s/86650/images/codeforces-logo-with-upper-beta.png",
      brandColor: "#1F8ACB",
    },
  ];

  return (
    <section className="py-32 relative bg-background">
      <div className="container mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <h2 className="text-5xl md:text-7xl font-display font-bold text-text tracking-tight mb-6">
            COMPETITIVE CODING
          </h2>
          <p className="text-xl text-subtext max-w-2xl">
            Showcasing problem-solving skills and algorithmic thinking
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {platforms.map((platform, index) => (
            <motion.div
              key={platform.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
              className="group"
            >
              <Card className="h-full bg-card-dark border-none rounded-2xl shadow-soft hover:shadow-lift transition-all duration-300 hover:-translate-y-1 overflow-hidden">
                <CardHeader className="pb-4 pt-8 px-6">
                  <div className="w-20 h-20 flex items-center justify-center mb-5 bg-white/10 rounded-xl p-3 border border-white/20">
                    <img
                      src={platform.logo}
                      alt={`${platform.name} logo`}
                      className="w-full h-full object-contain"
                      style={{ filter: 'brightness(1.1)' }}
                    />
                  </div>
                  <CardTitle className="text-xl font-display font-bold text-white group-hover:text-accent transition-colors duration-300">
                    {platform.name}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-5 px-6 pb-8">
                  <div>
                    <p className="text-2xl md:text-3xl font-bold text-white mb-3">
                      {platform.stats}
                    </p>
                    <div className="flex items-center gap-2">
                      <Trophy className="w-5 h-5 text-accent" />
                      <p className="text-sm text-gray-400 font-medium">{platform.badge}</p>
                    </div>
                  </div>
                  <Button
                    size="sm"
                    className="w-full bg-accent hover:bg-accent/90 text-text font-bold rounded-xl py-5 transition-all duration-300 hover:-translate-y-0.5 shadow-accent"
                    asChild
                  >
                    <a href={platform.link} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2">
                      View Profile
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CompetitiveCoding;
