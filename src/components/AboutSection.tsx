import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { MapPin, Mail, Phone, Briefcase } from 'lucide-react';

export const AboutSection = () => {
  const highlights = [
    'Generative AI',
    'Large Language Models',
    'Natural Language Processing',
    'RAG Pipelines',
    'LangChain & LangGraph',
    'Agentic AI',
    'Deep Learning',
    'Computer Vision'
  ];

  return (
    <section id="about" className="py-24 relative bg-card">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-primary font-semibold tracking-widest uppercase text-sm mb-3">Introduction</p>
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            About <span className="text-gradient">Me</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-primary mx-auto rounded-full" />
        </div>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-3 space-y-6">
            <div className="space-y-5">
              <p className="text-lg text-muted-foreground leading-relaxed">
                AI/ML Engineer with <span className="text-primary font-semibold">1+ years</span> of experience specializing in Generative AI, NLP, and Large Language Models (LLMs). Skilled in designing and deploying RAG pipelines, LangChain, LangGraph and Agentic AI for intelligent automation and conversational systems.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Proficient in deep learning, Python (Flask, FastAPI), and AI automation platforms like n8n, with proven ability to build scalable, data-driven applications and streamline complex workflows. Strong focus on delivering innovative, real-world AI solutions that enhance efficiency and user experience.
              </p>
            </div>

            {/* Specializations */}
            <div className="space-y-4 pt-4">
              <h4 className="text-lg font-semibold">Core Specializations</h4>
              <div className="flex flex-wrap gap-2">
                {highlights.map((skill) => (
                  <Badge
                    key={skill}
                    variant="secondary"
                    className="bg-muted text-foreground border border-border px-3 py-1.5"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Info Cards */}
          <div className="lg:col-span-2 space-y-4">
            <Card className="card-glass p-5">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-primary/10 rounded-lg border border-primary/20">
                  <Briefcase className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Current Role</p>
                  <p className="font-semibold">AI Developer at FlintSol</p>
                </div>
              </div>
            </Card>

            <Card className="card-glass p-5">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-primary/10 rounded-lg border border-primary/20">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Location</p>
                  <p className="font-semibold">Lahore, Punjab, Pakistan</p>
                </div>
              </div>
            </Card>

            <Card className="card-glass p-5">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-primary/10 rounded-lg border border-primary/20">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Email</p>
                  <a href="mailto:mabubakr.pro@gmail.com" className="font-semibold hover:text-primary transition-colors">
                    mabubakr.pro@gmail.com
                  </a>
                </div>
              </div>
            </Card>

            <Card className="card-glass p-5">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-primary/10 rounded-lg border border-primary/20">
                  <Phone className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Phone</p>
                  <a href="tel:+923290262101" className="font-semibold hover:text-primary transition-colors">
                    +92 3290262101
                  </a>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};