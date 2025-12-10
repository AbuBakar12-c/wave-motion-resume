import { useEffect, useState } from 'react';
import { Github, Linkedin, Mail, Download, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import profilePhoto from '@/assets/profile-photo.jpg';

export const HeroSection = () => {
  const [typedText, setTypedText] = useState('');
  const roles = ['AI/ML Engineer', 'LLM Specialist', 'GenAI Developer', 'RAG Systems Expert'];
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);

  useEffect(() => {
    const currentRole = roles[currentRoleIndex];
    let charIndex = 0;
    let isDeleting = false;

    const typeEffect = () => {
      if (!isDeleting && charIndex < currentRole.length) {
        setTypedText(currentRole.substring(0, charIndex + 1));
        charIndex++;
      } else if (isDeleting && charIndex > 0) {
        setTypedText(currentRole.substring(0, charIndex - 1));
        charIndex--;
      } else if (!isDeleting && charIndex === currentRole.length) {
        setTimeout(() => {
          isDeleting = true;
        }, 2000);
      } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
      }
    };

    const interval = setInterval(typeEffect, isDeleting ? 50 : 100);
    return () => clearInterval(interval);
  }, [currentRoleIndex]);

  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center pt-20 relative">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="space-y-8 animate-fade-in-up">
            <div className="space-y-2">
              <p className="text-primary font-semibold tracking-widest uppercase text-sm">
                AI/ML Engineer
              </p>
            </div>
            
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight">
                Muhammad{' '}
                <span className="text-gradient">Abu Bakar</span>
              </h1>
              <div className="h-12 flex items-center">
                <h2 className="text-xl lg:text-2xl text-muted-foreground font-medium">
                  {typedText}
                  <span className="animate-pulse text-primary ml-1">|</span>
                </h2>
              </div>
            </div>

            <p className="text-lg text-muted-foreground leading-relaxed max-w-xl">
              AI/ML Engineer with <span className="text-primary font-semibold">1+ years</span> of experience specializing in Generative AI, NLP, and Large Language Models. Expert in designing RAG pipelines, LangChain, LangGraph, and Agentic AI for intelligent automation and conversational systems.
            </p>

            {/* Stats */}
            <div className="flex gap-8 py-4">
              <div>
                <p className="text-3xl font-bold text-gradient">1+</p>
                <p className="text-muted-foreground text-sm">Years Exp.</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-gradient">10+</p>
                <p className="text-muted-foreground text-sm">Projects</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-gradient">56+</p>
                <p className="text-muted-foreground text-sm">Pages Automated</p>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="btn-hero text-primary-foreground group px-8 py-6 text-base">
                <Download className="w-5 h-5 mr-2 group-hover:animate-bounce" />
                Download Resume
              </Button>
              <Button variant="outline" className="btn-secondary group px-8 py-6 text-base">
                <Mail className="w-5 h-5 mr-2" />
                Get In Touch
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-6 pt-4">
              <span className="text-muted-foreground text-sm">Connect:</span>
              <div className="flex gap-4">
                <a
                  href="https://github.com/AbuBakar12-c"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-muted rounded-lg text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all border border-border hover:border-primary/30"
                >
                  <Github className="w-5 h-5" />
                </a>
                <a
                  href="https://www.linkedin.com/in/muhammad-abu-bakar--ai"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-muted rounded-lg text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all border border-border hover:border-primary/30"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href="mailto:mabubakr.pro@gmail.com"
                  className="p-3 bg-muted rounded-lg text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all border border-border hover:border-primary/30"
                >
                  <Mail className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Profile Image */}
          <div className="flex justify-center lg:justify-end animate-slide-in-right">
            <div className="relative">
              {/* Decorative elements */}
              <div className="absolute -inset-4 border-2 border-primary/20 rounded-full" />
              <div className="absolute -inset-8 border border-primary/10 rounded-full" />
              
              {/* Profile image container */}
              <div className="relative w-72 h-72 lg:w-80 lg:h-80 xl:w-96 xl:h-96 rounded-full overflow-hidden border-4 border-card shadow-2xl">
                <img
                  src={profilePhoto}
                  alt="Muhammad Abu Bakar - AI/ML Engineer"
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Status badge */}
              <div className="absolute bottom-4 right-4 bg-card border border-border rounded-full px-4 py-2 shadow-lg">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                  <span className="text-sm font-medium">Available</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden lg:block">
          <button 
            onClick={scrollToAbout}
            className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
          >
            <span className="text-sm">Scroll Down</span>
            <ChevronDown className="w-5 h-5 animate-bounce" />
          </button>
        </div>
      </div>
    </section>
  );
};