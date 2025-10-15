import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ExternalLink, Code2, Trophy } from "lucide-react";
import { Button } from "@/components/ui/button";

const CompetitiveCoding = () => {
  const platforms = [
    {
      name: "LeetCode",
      stats: "330+ Problems Solved",
      badge: "Knight Badge",
      link: "https://leetcode.com/u/klu2300090198/",
      color: "from-orange-500 to-yellow-500",
    },
    {
      name: "CodeChef",
      stats: "3 Star Rating",
      badge: "1600+ Rating",
      link: "https://www.codechef.com/users/klu2300090198",
      color: "from-amber-600 to-orange-500",
    },
    {
      name: "HackerRank",
      stats: "3 Star Gold",
      badge: "Problem Solving",
      link: "https://www.hackerrank.com/profile/kl2300090198",
      color: "from-green-500 to-emerald-500",
    },
    {
      name: "Codeforces",
      stats: "Pupil Rank",
      badge: "900+ Rating",
      link: "https://codeforces.com/profile/klu2300090198",
      color: "from-blue-500 to-cyan-500",
    },
  ];

  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Competitive <span className="text-gradient">Coding</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Showcasing problem-solving skills and algorithmic thinking
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {platforms.map((platform, index) => (
            <motion.div
              key={platform.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -8, scale: 1.02 }}
            >
              <Card className="glass border-primary/20 h-full hover:shadow-primary transition-all duration-300 relative overflow-hidden group">
                <div className={`absolute inset-0 bg-gradient-to-br ${platform.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <Code2 className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{platform.name}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <p className="text-2xl font-bold text-primary">{platform.stats}</p>
                    <div className="flex items-center gap-2 mt-2">
                      <Trophy className="w-4 h-4 text-primary" />
                      <p className="text-sm text-muted-foreground">{platform.badge}</p>
                    </div>
                  </div>
                  <Button
                    size="sm"
                    variant="outline"
                    className="w-full border-primary/30 hover:bg-primary hover:text-primary-foreground"
                    asChild
                  >
                    <a href={platform.link} target="_blank" rel="noopener noreferrer">
                      View Profile
                      <ExternalLink className="ml-2 w-4 h-4" />
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
