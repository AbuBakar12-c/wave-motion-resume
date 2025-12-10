import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github, Bot, Brain, Heart, Car, FileText, Phone, Mic, Facebook, FileSearch, MessageCircle } from 'lucide-react';

export const ProjectsSection = () => {
  const projects = [
    {
      title: 'AI-Powered Facebook Post Scheduler',
      description: 'Developed an AI-powered Facebook Scheduling System to automate publishing of posts, reels, and videos across 56+ pages within minutes. Integrated intelligent commenting workflows to enhance engagement.',
      icon: Facebook,
      technologies: ['Meta Services', 'Flask', 'NeonDB', 'HTML', 'CSS'],
      category: 'Automation',
      featured: true
    },
    {
      title: 'OCR Automation using AWS Textract',
      description: 'Developed an OCR automation system leveraging AWS Textract to extract structured text and data from PDF documents, enabling automated data processing and conversion into organized Excel reports.',
      icon: FileSearch,
      technologies: ['Python', 'AWS Textract', 'Pandas', 'Flask'],
      category: 'Document AI',
      featured: true
    },
    {
      title: 'AI Price Prediction Telegram Bot',
      description: 'Developed an AI-driven Telegram chatbot integrated with ML and n8n to predict and validate client-specific pricing with real-time feedback loop for continuous learning.',
      icon: MessageCircle,
      technologies: ['Python', 'n8n', 'Telegram API', 'Scikit-learn', 'Flask'],
      category: 'AI Chatbot',
      featured: true
    },
    {
      title: 'RAG Chatbot for Sport Unity Club',
      description: 'Intelligent Q&A chatbot leveraging OpenAI API, Pinecone DB, web scraping, and GraphQL for real-time slot availability checks and seamless booking functionality.',
      icon: Bot,
      technologies: ['OpenAI API', 'Pinecone DB', 'GraphQL', 'Web Scraping'],
      category: 'AI Chatbot'
    },
    {
      title: 'AI-Driven Inbound Call System',
      description: 'Engineered an AI-driven inbound call management system to automate real-time voice-to-voice client interactions with Retell AI and Twilio integration.',
      icon: Phone,
      technologies: ['OpenAI', 'Retell AI', 'Twilio', 'n8n'],
      category: 'Voice AI'
    },
    {
      title: 'Real-Time Emotion Analysis',
      description: 'Built a real-time facial emotion recognition system using Computer Vision and Gemini AI to analyze expressions and generate context-aware, empathetic responses.',
      icon: Brain,
      technologies: ['Google Gemini AI', 'OpenCV', 'Streamlit'],
      category: 'Computer Vision'
    },
    {
      title: 'Heart Disease Prediction',
      description: 'Advanced Heart Disease Prediction System using Random Forest algorithm achieving over 90% accuracy through hyperparameter tuning and cross-validation.',
      icon: Heart,
      technologies: ['Machine Learning', 'Random Forest', 'Streamlit'],
      category: 'Healthcare AI'
    },
    {
      title: 'Movie Recommendation System',
      description: 'Content-based movie recommendation system leveraging ML and NLP techniques with TF-IDF and cosine similarity achieving over 90% accuracy.',
      icon: FileText,
      technologies: ['Machine Learning', 'NLP', 'Cosine Similarity'],
      category: 'Machine Learning'
    },
    {
      title: 'Brain Tumor Detection',
      description: 'GUI-based Brain Tumor Detection System using CNNs, achieving over 92% accuracy in MRI image classification for medical professionals.',
      icon: Brain,
      technologies: ['Deep Learning', 'CNN', 'Streamlit'],
      category: 'Computer Vision'
    },
    {
      title: 'Real Time Car Speed Tracker',
      description: 'Real-time vehicle speed monitoring system using YOLOv8 and Computer Vision for accurate traffic analytics and law enforcement support.',
      icon: Car,
      technologies: ['YOLOv8', 'Computer Vision', 'Python'],
      category: 'Computer Vision'
    }
  ];

  return (
    <section id="projects" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-primary font-semibold tracking-widest uppercase text-sm mb-3">Portfolio</p>
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-primary mx-auto rounded-full mb-4" />
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Innovative AI solutions solving real-world problems
          </p>
        </div>

        {/* Featured Projects */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {projects.filter(p => p.featured).map((project, index) => {
            const IconComponent = project.icon;
            return (
              <Card 
                key={project.title} 
                className="card-glass group relative overflow-hidden"
              >
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-primary" />
                <div className="p-6 space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="p-3 bg-primary/10 rounded-xl border border-primary/20">
                      <IconComponent className="w-6 h-6 text-primary" />
                    </div>
                    <Badge className="bg-secondary text-secondary-foreground font-medium">
                      {project.category}
                    </Badge>
                  </div>

                  <div className="space-y-3">
                    <h3 className="text-xl font-bold group-hover:text-primary transition-colors">
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
                        className="text-xs border-border text-muted-foreground"
                      >
                        {tech}
                      </Badge>
                    ))}
                    {project.technologies.length > 3 && (
                      <Badge variant="outline" className="text-xs border-border text-muted-foreground">
                        +{project.technologies.length - 3}
                      </Badge>
                    )}
                  </div>

                  <div className="flex gap-2 pt-2">
                    <Button size="sm" className="btn-hero text-primary-foreground flex-1">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Details
                    </Button>
                    <Button size="sm" variant="outline" className="btn-secondary">
                      <Github className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>

        {/* All Projects Grid */}
        <div>
          <h3 className="text-2xl font-bold text-center mb-10">More Projects</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {projects.filter(p => !p.featured).map((project) => {
              const IconComponent = project.icon;
              return (
                <Card 
                  key={project.title} 
                  className="card-glass group p-5"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="p-2 bg-primary/10 rounded-lg border border-primary/20">
                        <IconComponent className="w-5 h-5 text-primary" />
                      </div>
                      <Badge variant="secondary" className="text-xs bg-muted text-muted-foreground">
                        {project.category}
                      </Badge>
                    </div>

                    <h4 className="font-semibold group-hover:text-primary transition-colors leading-tight">
                      {project.title}
                    </h4>
                    <p className="text-muted-foreground text-sm line-clamp-2">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-1 pt-1">
                      {project.technologies.slice(0, 2).map((tech) => (
                        <Badge
                          key={tech}
                          variant="outline"
                          className="text-xs border-border text-muted-foreground"
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
        <div className="text-center mt-16">
          <Card className="card-glass p-10 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">View All Projects</h3>
            <p className="text-muted-foreground mb-6">
              Explore my complete portfolio of AI/ML projects and open-source contributions
            </p>
            <Button 
              className="btn-hero text-primary-foreground"
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