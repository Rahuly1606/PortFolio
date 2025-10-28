import { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Github, Linkedin, Twitter, Instagram } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Web3Forms Configuration
    // Get your access key from https://web3forms.com
    const ACCESS_KEY = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY || 'YOUR_WEB3FORMS_ACCESS_KEY';

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({
          access_key: ACCESS_KEY,
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
          from_name: formData.name,
          replyto: formData.email,
        }),
      });

      const result = await response.json();

      if (result.success) {
        console.log('Email sent successfully via Web3Forms');

        toast({
          title: "Message Sent! ✉️",
          description: "Thank you for reaching out. I'll get back to you soon.",
        });

        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        throw new Error(result.message || 'Failed to send message');
      }
    } catch (error) {
      console.error('Failed to send email:', error);

      toast({
        title: "Failed to Send Message ❌",
        description: "Something went wrong. Please try again or email me directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const socialLinks = [
    { icon: Github, label: "GitHub", href: "https://github.com/Rahuly1606" },
    { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/rahuly1606/" },
    { icon: Twitter, label: "Twitter", href: "https://x.com/ALEX_RAHUL_07" },
    { icon: Instagram, label: "Instagram", href: "https://www.instagram.com/rahul.ftz/" },
  ];

  return (
    <section id="contact" className="py-20 md:py-32 relative bg-background">
      <div className="container mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="mb-12 md:mb-20"
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-bold text-text tracking-tight mb-4 md:mb-6">
            LET'S CONNECT
          </h2>
          <p className="text-lg md:text-xl text-subtext max-w-2xl">
            Have a project in mind? Let's work together to create something amazing
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
          >
            <Card className="bg-white border-2 border-gray-200 rounded-2xl shadow-soft">
              <CardHeader className="px-8 pt-8 pb-6">
                <CardTitle className="text-2xl font-bold text-text">Send a Message</CardTitle>
              </CardHeader>
              <CardContent className="px-8 pb-8">
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <Input
                      name="name"
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="bg-gray-50 border-2 border-gray-200 focus:border-accent focus:ring-0 rounded-xl h-12 px-4 font-medium"
                    />
                  </div>
                  <div>
                    <Input
                      name="email"
                      type="email"
                      placeholder="Your Email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="bg-gray-50 border-2 border-gray-200 focus:border-accent focus:ring-0 rounded-xl h-12 px-4 font-medium"
                    />
                  </div>
                  <div>
                    <Input
                      name="subject"
                      placeholder="Subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="bg-gray-50 border-2 border-gray-200 focus:border-accent focus:ring-0 rounded-xl h-12 px-4 font-medium"
                    />
                  </div>
                  <div>
                    <Textarea
                      name="message"
                      placeholder="Your Message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="bg-gray-50 border-2 border-gray-200 focus:border-accent focus:ring-0 rounded-xl px-4 py-3 resize-none font-medium"
                    />
                  </div>
                  <Button
                    type="submit"
                    className="w-full bg-accent hover:bg-accent/90 text-text font-bold rounded-xl py-6 shadow-accent hover:shadow-lift transition-all duration-300 hover:-translate-y-1"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <Card className="bg-card-dark border-none rounded-2xl shadow-soft">
              <CardHeader className="px-8 pt-8 pb-6">
                <CardTitle className="text-2xl font-bold text-white">Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="px-8 pb-8 space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-accent/20 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400 mb-1 font-medium">Email</p>
                    <a href="mailto:alexrahul9576@gmail.com" className="text-white hover:text-accent transition-colors font-medium">
                      alexrahul9576@gmail.com
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-accent/20 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400 mb-1 font-medium">Phone</p>
                    <p className="text-white font-medium">+91 8789988xxx</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-accent/20 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400 mb-1 font-medium">Location</p>
                    <p className="text-white font-medium">Bihar, India</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card-dark border-none rounded-2xl shadow-soft">
              <CardHeader className="px-8 pt-8 pb-6">
                <CardTitle className="text-2xl font-bold text-white">Social Media</CardTitle>
              </CardHeader>
              <CardContent className="px-8 pb-8">
                <div className="flex gap-4">
                  {socialLinks.map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center text-white hover:bg-accent hover:text-text hover:border-accent transition-all duration-300 hover:-translate-y-1 shadow-soft hover:shadow-lift"
                      aria-label={social.label}
                    >
                      <social.icon className="w-5 h-5" />
                    </a>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
