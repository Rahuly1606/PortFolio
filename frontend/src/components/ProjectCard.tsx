import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  techStack: string[];
  liveUrl?: string;
  githubUrl?: string;
  delay?: number;
}

const ProjectCard = ({
  title,
  description,
  techStack,
  liveUrl,
  githubUrl,
  delay = 0,
}: ProjectCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
      className="group"
    >
      <Card className="bg-card-dark border-none h-full rounded-2xl shadow-soft hover:shadow-lift transition-all duration-300 hover:-translate-y-2 overflow-hidden">
        <CardHeader className="pb-4 pt-8 px-8">
          <CardTitle className="text-2xl font-display font-bold text-white mb-3 group-hover:text-accent transition-colors duration-300">
            {title}
          </CardTitle>
          <CardDescription className="text-gray-400 text-base leading-relaxed">
            {description}
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6 pb-8 px-8">
          <div className="flex flex-wrap gap-2">
            {techStack.map((tech) => (
              <Badge
                key={tech}
                variant="secondary"
                className="bg-white/10 text-white border-white/20 hover:bg-accent hover:text-text hover:border-accent transition-all duration-300 px-3 py-1.5 text-sm font-medium rounded-lg"
              >
                {tech}
              </Badge>
            ))}
          </div>
          <div className="flex gap-3 pt-2">
            {liveUrl && (
              <Button
                size="default"
                className="flex-1 bg-accent hover:bg-accent/90 text-text font-bold rounded-xl py-5 transition-all duration-300 hover:-translate-y-0.5 shadow-accent"
                asChild
              >
                <a href={liveUrl} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2">
                  <ExternalLink className="w-4 h-4" />
                  Live Demo
                </a>
              </Button>
            )}
            {githubUrl && (
              <Button
                size="default"
                variant="outline"
                className="flex-1 border-2 border-white/20 text-white hover:bg-white hover:text-text font-bold rounded-xl py-5 transition-all duration-300"
                asChild
              >
                <a href={githubUrl} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2">
                  <Github className="w-4 h-4" />
                  Code
                </a>
              </Button>
            )}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default ProjectCard;
