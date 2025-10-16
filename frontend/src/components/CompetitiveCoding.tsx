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
    <section className="py-20 relative bg-[#F8F9FA]">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 font-['Montserrat']" style={{ color: '#212529' }}>
            Competitive <span style={{ color: '#E53935' }}>Coding</span>
          </h2>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: '#6C757D' }}>
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
              className="group"
            >
              <Card
                className="h-full bg-white border-0 transition-all duration-300 hover:-translate-y-2"
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
                <CardHeader className="pb-3">
                  <div className="w-16 h-16 flex items-center justify-center mb-4 bg-white rounded-lg p-2">
                    <img
                      src={platform.logo}
                      alt={`${platform.name} logo`}
                      className="w-full h-full object-contain"
                      style={{ filter: 'brightness(0.9)' }}
                    />
                  </div>
                  <CardTitle className="text-xl font-bold font-['Montserrat']" style={{ color: '#212529' }}>
                    {platform.name}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <p className="text-2xl font-bold mb-2" style={{ color: '#212529' }}>
                      {platform.stats}
                    </p>
                    <div className="flex items-center gap-2">
                      <Trophy className="w-4 h-4" style={{ color: platform.brandColor }} />
                      <p className="text-sm" style={{ color: '#6C757D' }}>{platform.badge}</p>
                    </div>
                  </div>
                  <Button
                    size="sm"
                    className="w-full font-semibold transition-all duration-300 border-0"
                    style={{
                      backgroundColor: '#E53935',
                      color: 'white',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = '#CC3333';
                      e.currentTarget.style.transform = 'scale(1.02)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = '#E53935';
                      e.currentTarget.style.transform = 'scale(1)';
                    }}
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
