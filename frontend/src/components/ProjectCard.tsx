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
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      whileHover={{ y: -10 }}
    >
      <Card className="glass border-primary/20 h-full hover:shadow-[0_20px_50px_rgba(139,92,246,0.25)] shadow-[0_8px_30px_rgba(0,0,0,0.12)] transition-all duration-500 group">
        <CardHeader className="pb-4 pt-6">
          <CardTitle className="text-2xl mb-3 group-hover:text-primary transition-colors duration-300">{title}</CardTitle>
          <CardDescription className="text-muted-foreground text-base leading-relaxed">
            {description}
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-5 pb-6">
          <div className="flex flex-wrap gap-2.5">
            {techStack.map((tech) => (
              <Badge key={tech} variant="secondary" className="bg-primary/10 text-primary border-primary/20 hover:bg-primary hover:text-white transition-colors duration-300 px-3 py-1.5 text-sm">
                {tech}
              </Badge>
            ))}
          </div>
          <div className="flex gap-3 pt-2">
            {liveUrl && (
              <Button
                size="default"
                className="flex-1 bg-primary/10 hover:bg-primary text-primary hover:text-primary-foreground border border-primary/30 shadow-md hover:shadow-xl transform hover:scale-[1.02] transition-all duration-300 relative overflow-hidden group/btn py-5"
                asChild
              >
                <a href={liveUrl} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2">
                  <ExternalLink className="w-4 h-4 group-hover/btn:rotate-12 transition-transform duration-300" />
                  <span className="relative">
                    Live Demo
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-current group-hover/btn:w-full transition-all duration-300"></span>
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover/btn:translate-x-full transition-transform duration-700"></div>
                </a>
              </Button>
            )}
            {githubUrl && (
              <Button
                size="default"
                className="flex-1 bg-primary/10 hover:bg-primary text-primary hover:text-primary-foreground border border-primary/30 shadow-md hover:shadow-xl transform hover:scale-[1.02] transition-all duration-300 relative overflow-hidden group/btn py-5"
                asChild
              >
                <a href={githubUrl} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2">
                  <Github className="w-4 h-4 group-hover/btn:rotate-12 transition-transform duration-300" />
                  <span className="relative">
                    GitHub
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-current group-hover/btn:w-full transition-all duration-300"></span>
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover/btn:translate-x-full transition-transform duration-700"></div>
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
