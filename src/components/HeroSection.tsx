import { useEffect, useState } from 'react';
import { Github, Linkedin, Mail, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import profilePhoto from '@/assets/profile-photo.jpg';

export const HeroSection = () => {
  const [typedText, setTypedText] = useState('');
  const roles = ['AI/ML Engineer', 'LLM Specialist', 'GenAI Developer', 'Python Developer'];
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

  return (
    <section className="min-h-screen flex items-center justify-center pt-20 relative">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8 animate-fade-in-up">
            <div className="space-y-4">
              <p className="text-accent font-medium tracking-wider uppercase text-sm">
                Welcome to my portfolio
              </p>
              <h1 className="text-5xl lg:text-7xl font-bold">
                Hi, I'm{' '}
                <span className="text-gradient">Abu Bakar</span>
              </h1>
              <div className="h-16 flex items-center">
                <h2 className="text-2xl lg:text-3xl text-muted-foreground">
                  {typedText}
                  <span className="animate-pulse text-primary">|</span>
                </h2>
              </div>
            </div>

            <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
              A dedicated AI/ML Engineer specializing in Generative AI, Natural Language Processing, 
              and Large Language Models. With 1+ years of experience building innovative AI solutions 
              and automating complex workflows.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="btn-hero text-white group">
                <Download className="w-5 h-5 mr-2 group-hover:animate-bounce" />
                Download Resume
              </Button>
              <Button variant="outline" className="btn-secondary group">
                <Mail className="w-5 h-5 mr-2 group-hover:animate-pulse" />
                Get In Touch
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex space-x-6 pt-4">
              <a
                href="https://github.com/AbuBakar12-c"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-110"
              >
                <Github className="w-6 h-6" />
              </a>
              <a
                href="https://www.linkedin.com/in/muhammad-abu-bakar--ai"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-110"
              >
                <Linkedin className="w-6 h-6" />
              </a>
              <a
                href="mailto:mabubakr.pro@gmail.com"
                className="text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-110"
              >
                <Mail className="w-6 h-6" />
              </a>
            </div>
          </div>

          {/* Profile Image */}
          <div className="flex justify-center lg:justify-end animate-slide-in-right">
            <div className="relative">
              {/* Glowing background */}
              <div className="absolute inset-0 bg-gradient-primary rounded-full blur-3xl opacity-30 scale-110 animate-pulse" />
              
              {/* Profile image container */}
              <div className="relative w-80 h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-primary/20 shadow-elegant">
                <img
                  src={profilePhoto}
                  alt="Abu Bakar - AI/ML Engineer"
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                />
                
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 via-transparent to-accent/20" />
              </div>
              
              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-accent rounded-full animate-bounce" style={{ animationDelay: '0s' }} />
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-secondary rounded-full animate-bounce" style={{ animationDelay: '1s' }} />
              <div className="absolute top-1/4 -left-6 w-4 h-4 bg-primary-glow rounded-full animate-bounce" style={{ animationDelay: '0.5s' }} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};