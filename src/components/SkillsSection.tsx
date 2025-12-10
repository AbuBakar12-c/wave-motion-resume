import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Code, Brain, Database, Cloud, Cpu, Settings, Wrench } from 'lucide-react';

export const SkillsSection = () => {
  const skillCategories = [
    {
      title: 'Programming',
      icon: Code,
      skills: ['Python (Proficient)', 'C/C++ (Basic)']
    },
    {
      title: 'Artificial Intelligence',
      icon: Brain,
      skills: ['Machine Learning', 'Deep Learning', 'NLP', 'LLM', 'LangChain', 'LangGraph', 'Generative AI', 'RAG', 'LangSmith']
    },
    {
      title: 'Libraries & Frameworks',
      icon: Settings,
      skills: ['Flask', 'FastAPI', 'NumPy', 'Pandas', 'Matplotlib', 'Seaborn', 'Scikit-learn', 'NLTK', 'TensorFlow/Keras', 'OpenCV']
    },
    {
      title: 'Databases & Vector Stores',
      icon: Database,
      skills: ['Pinecone', 'Supabase', 'NeonDB', 'PostgreSQL', 'Faiss', 'Chroma']
    },
    {
      title: 'Tools & Platforms',
      icon: Wrench,
      skills: ['n8n', 'Vapi', 'Retell AI', '11Labs', 'Hugging Face', 'Postman']
    },
    {
      title: 'Development Environment',
      icon: Cloud,
      skills: ['Anaconda', 'Jupyter Notebook', 'Google Colab', 'VS Code', 'Kaggle']
    }
  ];

  const softSkills = ['Adaptability', 'Time Management', 'Quick Learning', 'Effective Multitasking'];

  return (
    <section id="skills" className="py-24 relative bg-card">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-primary font-semibold tracking-widest uppercase text-sm mb-3">Expertise</p>
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            Technical <span className="text-gradient">Skills</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-primary mx-auto rounded-full" />
        </div>

        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-6 mb-12">
          {skillCategories.map((category) => {
            const IconComponent = category.icon;
            return (
              <Card 
                key={category.title} 
                className="card-glass p-6"
              >
                <div className="flex items-center gap-3 mb-5">
                  <div className="p-2.5 bg-primary/10 rounded-lg border border-primary/20">
                    <IconComponent className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="text-lg font-bold">{category.title}</h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <Badge
                      key={skill}
                      variant="secondary"
                      className="bg-muted text-foreground border border-border hover:bg-primary/10 hover:text-primary hover:border-primary/30 transition-all"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </Card>
            );
          })}
        </div>

        {/* Soft Skills */}
        <Card className="card-glass p-8">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="p-2.5 bg-primary/10 rounded-lg border border-primary/20">
              <Cpu className="w-5 h-5 text-primary" />
            </div>
            <h3 className="text-xl font-bold">Soft Skills</h3>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {softSkills.map((skill) => (
              <Badge
                key={skill}
                className="bg-gradient-primary text-primary-foreground px-4 py-2 text-sm"
              >
                {skill}
              </Badge>
            ))}
          </div>
        </Card>
      </div>
    </section>
  );
};