import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github, Bot, Brain, Heart, Car, FileText, Phone, MessageSquare, Mic } from 'lucide-react';

export const ProjectsSection = () => {
  const projects = [
    {
      title: 'RAG Base Chatbot for Sport Unity Club',
      description: 'Implemented an intelligent QnA chatbot using OpenAI API, Pinecone DB, web scraping, and GraphQL services for real-time slot availability checking and booking.',
      icon: Bot,
      technologies: ['OpenAI API', 'Pinecone DB', 'Web Scraping', 'GraphQL'],
      category: 'AI Chatbot',
      featured: true
    },
    {
      title: 'Voice-to-Voice RAG-Based Agent',
      description: 'Developed for InsightSol Technologies using OpenAI, N8N, and VAPI to automate and optimize real-time customer interactions and appointment bookings.',
      icon: Mic,
      technologies: ['OpenAI', 'N8N', 'VAPI', 'RAG'],
      category: 'Voice AI',
      featured: true
    },
    {
      title: 'Brain Tumor Detection',
      description: 'Built a GUI-based brain tumor detection system using Convolutional Neural Networks with over 90% accuracy for medical diagnosis.',
      icon: Brain,
      technologies: ['Deep Learning', 'CNN', 'Python', 'GUI'],
      category: 'Computer Vision',
      featured: true
    },
    {
      title: 'AI-Powered Real-Time Emotion Analysis',
      description: 'Created a real-time facial emotion detection system using computer vision and Gemini AI, delivering empathetic responses through expression analysis.',
      icon: Brain,
      technologies: ['Google Gemini AI', 'OpenCV', 'Streamlit', 'Computer Vision'],
      category: 'Computer Vision'
    },
    {
      title: 'Movie Recommendation System',
      description: 'Designed a content-based movie recommender using machine learning and NLP techniques to provide personalized film suggestions.',
      icon: FileText,
      technologies: ['Machine Learning', 'NLP', 'Python', 'Recommendation Engine'],
      category: 'Machine Learning'
    },
    {
      title: 'Heart Disease Prediction',
      description: 'Developed a Heart Disease Prediction system using Random Forest algorithm for preventive healthcare and early diagnosis.',
      icon: Heart,
      technologies: ['Machine Learning', 'Random Forest', 'Healthcare AI'],
      category: 'Healthcare AI'
    },
    {
      title: 'Real Time Car Speed Tracker',
      description: 'Implemented a real-time vehicle speed monitoring system using YOLOv8 and computer vision for accurate traffic analytics.',
      icon: Car,
      technologies: ['Computer Vision', 'YOLOv8', 'Real-time Processing'],
      category: 'Computer Vision'
    },
    {
      title: 'Resume Matcher System',
      description: 'Developed a Resume Matcher System using Flask, NLP, and TF-IDF for matching resumes with job descriptions efficiently.',
      icon: FileText,
      technologies: ['NLP', 'Flask', 'HTML', 'CSS', 'TF-IDF'],
      category: 'NLP'
    },
    {
      title: 'Voice Agent for Appointment Booking',
      description: 'Built a voice agent with N8N and Retell AI to automate appointment booking via inbound calls and send email confirmations.',
      icon: Phone,
      technologies: ['OpenAI', 'N8N', 'Retell AI', 'Voice Processing'],
      category: 'Voice AI'
    },
    {
      title: 'WhatsApp Agent For Auto Reply',
      description: 'Developed a WhatsApp agent using N8N and Meta services to automate replies on WhatsApp, ensuring efficient and timely responses.',
      icon: MessageSquare,
      technologies: ['OpenAI', 'N8N', 'Meta Services', 'Automation'],
      category: 'Automation'
    }
  ];

  const categories = ['All', 'AI Chatbot', 'Voice AI', 'Computer Vision', 'Machine Learning', 'Healthcare AI', 'NLP', 'Automation'];

  return (
    <section id="projects" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Innovative AI solutions and applications I've built to solve real-world problems
          </p>
        </div>

        {/* Featured Projects */}
        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {projects.filter(p => p.featured).map((project, index) => {
            const IconComponent = project.icon;
            return (
              <Card 
                key={project.title} 
                className={`card-glass group relative overflow-hidden animate-fade-in-up animate-delay-${index * 200}`}
              >
                <div className="p-6 space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="p-3 bg-gradient-primary rounded-xl">
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    <Badge className="bg-gradient-accent text-white">
                      {project.category}
                    </Badge>
                  </div>

                  <div className="space-y-3">
                    <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <Badge
                        key={tech}
                        variant="outline"
                        className="text-xs border-primary/30 text-primary"
                      >
                        {tech}
                      </Badge>
                    ))}
                    {project.technologies.length > 3 && (
                      <Badge variant="outline" className="text-xs">
                        +{project.technologies.length - 3} more
                      </Badge>
                    )}
                  </div>

                  <div className="flex gap-2 pt-2">
                    <Button size="sm" className="btn-hero text-white flex-1">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      View
                    </Button>
                    <Button size="sm" variant="outline" className="btn-secondary">
                      <Github className="w-4 h-4" />
                    </Button>
                  </div>
                </div>

                {/* Hover effect overlay */}
                <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-5 transition-opacity" />
              </Card>
            );
          })}
        </div>

        {/* All Projects Grid */}
        <div>
          <h3 className="text-2xl font-semibold text-center mb-8">All Projects</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => {
              const IconComponent = project.icon;
              return (
                <Card 
                  key={project.title} 
                  className={`card-glass group p-6 animate-fade-in-up animate-delay-${index * 100}`}
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="p-2 bg-gradient-primary rounded-lg">
                        <IconComponent className="w-5 h-5 text-white" />
                      </div>
                      <Badge variant="secondary" className="text-xs">
                        {project.category}
                      </Badge>
                    </div>

                    <div className="space-y-2">
                      <h4 className="font-semibold group-hover:text-primary transition-colors">
                        {project.title}
                      </h4>
                      <p className="text-muted-foreground text-sm line-clamp-3">
                        {project.description}
                      </p>
                    </div>

                    <div className="flex flex-wrap gap-1">
                      {project.technologies.slice(0, 2).map((tech) => (
                        <Badge
                          key={tech}
                          variant="outline"
                          className="text-xs border-primary/20 text-primary"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>

        {/* GitHub CTA */}
        <div className="text-center mt-12">
          <Card className="card-glass p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-semibold mb-4">Explore More Projects</h3>
            <p className="text-muted-foreground mb-6">
              Check out my GitHub profile for more projects and open-source contributions
            </p>
            <Button 
              className="btn-hero text-white"
              onClick={() => window.open('https://github.com/AbuBakar12-c', '_blank')}
            >
              <Github className="w-5 h-5 mr-2" />
              Visit GitHub Profile
            </Button>
          </Card>
        </div>
      </div>
    </section>
  );
};