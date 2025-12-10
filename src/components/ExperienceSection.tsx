import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, MapPin, Briefcase, Award } from 'lucide-react';

export const ExperienceSection = () => {
  const experiences = [
    {
      company: 'FlintSol',
      position: 'AI Developer',
      location: 'Lahore, Pakistan',
      duration: 'July 2025 – Present',
      type: 'Full-Time',
      current: true,
      achievements: [
        'Designed and implemented LLM/GPT-based RAG systems and chatbots to enhance language understanding, automate workflows, and support customer knowledge retrieval',
        'Developed AI-driven automation solutions, including social media auto-posting and n8n workflows, reducing manual effort and improving operational efficiency'
      ],
      technologies: ['LLM', 'GPT', 'RAG', 'LangChain', 'n8n', 'Python']
    },
    {
      company: 'Software Alliance',
      position: 'AI Developer Intern',
      location: 'Lahore, Pakistan',
      duration: 'Feb 2025 – May 2025',
      type: 'Internship',
      current: false,
      achievements: [
        'Designed and implemented LLM- and GPT-based RAG systems to enhance language understanding and automate complex workflows',
        'Developed machine learning models to improve prediction accuracy and support data-driven decision-making'
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

  const education = {
    degree: 'Bachelor of Science in Data Science',
    institution: 'Virtual University',
    location: 'Lahore, Pakistan',
    duration: '2024 – 2028'
  };

  return (
    <section id="experience" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-primary font-semibold tracking-widest uppercase text-sm mb-3">Career Journey</p>
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            Professional <span className="text-gradient">Experience</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-primary mx-auto rounded-full" />
        </div>

        {/* Experience Timeline */}
        <div className="space-y-8 mb-20">
          {experiences.map((exp, index) => (
            <Card 
              key={index} 
              className={`card-glass p-8 relative overflow-hidden ${exp.current ? 'border-primary' : ''}`}
            >
              {exp.current && (
                <div className="absolute top-0 right-0 bg-primary text-primary-foreground px-4 py-1 text-sm font-semibold rounded-bl-lg">
                  Current
                </div>
              )}
              
              <div className="flex flex-col lg:flex-row gap-6">
                <div className="flex-1">
                  <div className="mb-6">
                    <h3 className="text-2xl font-bold mb-1">
                      {exp.position}
                    </h3>
                    <h4 className="text-xl text-primary font-semibold mb-4">
                      {exp.company}
                    </h4>
                    <div className="flex flex-wrap gap-6 text-muted-foreground text-sm">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4 text-primary" />
                        <span>{exp.duration}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4 text-primary" />
                        <span>{exp.location}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Briefcase className="w-4 h-4 text-primary" />
                        <span>{exp.type}</span>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-3 mb-6">
                    <h5 className="font-semibold text-foreground">Key Achievements</h5>
                    {exp.achievements.map((achievement, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                        <p className="text-muted-foreground leading-relaxed">{achievement}</p>
                      </div>
                    ))}
                  </div>

                  <div className="space-y-3">
                    <h5 className="font-semibold text-foreground">Technologies</h5>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech) => (
                        <Badge
                          key={tech}
                          variant="outline"
                          className="border-primary/30 text-primary hover:bg-primary/10 transition-colors"
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

        {/* Education Section */}
        <div className="mb-20">
          <div className="text-center mb-10">
            <h3 className="text-3xl font-bold">
              <span className="text-gradient">Education</span>
            </h3>
          </div>
          <Card className="card-glass p-8 max-w-2xl mx-auto text-center">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Award className="w-8 h-8 text-primary" />
            </div>
            <h4 className="text-xl font-bold mb-2">{education.degree}</h4>
            <p className="text-primary font-semibold mb-2">{education.institution}</p>
            <p className="text-muted-foreground">{education.location} • {education.duration}</p>
          </Card>
        </div>

        {/* Certifications */}
        <div>
          <div className="text-center mb-10">
            <h3 className="text-3xl font-bold">
              <span className="text-gradient">Certifications</span>
            </h3>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <Card 
                key={index} 
                className="card-glass p-6 text-center"
              >
                <Badge className="bg-gradient-accent text-secondary-foreground mb-4">
                  {cert.type}
                </Badge>
                <h4 className="font-semibold text-foreground mb-2">{cert.title}</h4>
                <p className="text-muted-foreground text-sm mb-2">{cert.issuer}</p>
                <p className="text-primary text-sm font-medium">{cert.date}</p>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};