import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, MapPin, Briefcase } from 'lucide-react';

export const ExperienceSection = () => {
  const experiences = [
    {
      company: 'Software Alliance',
      position: 'AI Internee',
      location: 'Lahore, Pakistan',
      duration: 'Aug 2024 – Oct 2024',
      type: 'Internship',
      achievements: [
        'Developed multiple machine learning models, significantly enhancing prediction accuracy and supporting data-driven decision-making across projects',
        'Designed and implemented large language models (LLMs) and integrated GPT APIs with RAG-based systems',
        'Built intelligent systems enabling advanced language understanding and generation capabilities in various applications'
      ],
      technologies: ['Python', 'Machine Learning', 'LLMs', 'GPT APIs', 'RAG Systems', 'Deep Learning']
    }
  ];

  const certifications = [
    {
      title: 'Programming Essentials in Python',
      issuer: 'Cisco Networking Academy',
      date: 'Aug 2024',
      type: 'Programming'
    },
    {
      title: 'Introduction to Natural Language Processing',
      issuer: 'Great Learning',
      date: 'Sep 2024',
      type: 'AI/ML'
    },
    {
      title: 'Machine Learning',
      issuer: 'Innovista',
      date: 'Sep 2024',
      type: 'AI/ML'
    }
  ];

  return (
    <section id="experience" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            Professional <span className="text-gradient">Experience</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Building AI solutions and gaining valuable industry experience
          </p>
        </div>

        {/* Experience Timeline */}
        <div className="space-y-8 mb-16">
          {experiences.map((exp, index) => (
            <Card 
              key={index} 
              className={`card-glass p-8 animate-fade-in-up animate-delay-${index * 200}`}
            >
              <div className="flex flex-col lg:flex-row gap-6">
                <div className="flex-1">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-gradient mb-2">
                        {exp.position}
                      </h3>
                      <h4 className="text-xl text-primary font-semibold mb-2">
                        {exp.company}
                      </h4>
                      <div className="flex flex-wrap gap-4 text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          <span>{exp.duration}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <MapPin className="w-4 h-4" />
                          <span>{exp.location}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Briefcase className="w-4 h-4" />
                          <span>{exp.type}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-3 mb-6">
                    {exp.achievements.map((achievement, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                        <p className="text-muted-foreground">{achievement}</p>
                      </div>
                    ))}
                  </div>

                  <div className="space-y-2">
                    <h5 className="font-medium">Technologies Used:</h5>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech) => (
                        <Badge
                          key={tech}
                          variant="outline"
                          className="border-primary/30 text-primary hover:bg-primary/10"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Certifications */}
        <div>
          <h3 className="text-3xl font-bold text-center mb-8">
            <span className="text-gradient">Certifications</span>
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <Card 
                key={index} 
                className={`card-glass p-6 animate-fade-in-up animate-delay-${index * 200}`}
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <Badge variant="secondary" className="bg-gradient-accent text-white">
                      {cert.type}
                    </Badge>
                    <span className="text-sm text-muted-foreground">{cert.date}</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary mb-2">{cert.title}</h4>
                    <p className="text-muted-foreground text-sm">{cert.issuer}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};