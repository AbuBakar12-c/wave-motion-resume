import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Code, Brain, Database, Cloud, Cpu, Settings } from 'lucide-react';

export const SkillsSection = () => {
  const skillCategories = [
    {
      title: 'Programming Languages',
      icon: Code,
      skills: [
        { name: 'Python', level: 95, description: 'Primary language for AI/ML development' },
        { name: 'C/C++', level: 70, description: 'System programming and algorithms' }
      ]
    },
    {
      title: 'AI & Machine Learning',
      icon: Brain,
      skills: [
        { name: 'Machine Learning', level: 90, description: 'Supervised & unsupervised learning' },
        { name: 'Deep Learning', level: 85, description: 'Neural networks and architectures' },
        { name: 'NLP', level: 88, description: 'Text processing and understanding' },
        { name: 'LLM', level: 92, description: 'Large language model implementation' },
        { name: 'Generative AI', level: 90, description: 'AI content generation systems' },
        { name: 'RAG Systems', level: 87, description: 'Retrieval-augmented generation' }
      ]
    },
    {
      title: 'Frameworks & Libraries',
      icon: Settings,
      skills: [
        { name: 'LangChain', level: 85, description: 'LLM application development' },
        { name: 'LangGraph', level: 80, description: 'Multi-agent workflows' },
        { name: 'TensorFlow/Keras', level: 82, description: 'Deep learning frameworks' },
        { name: 'Flask', level: 88, description: 'Web API development' },
        { name: 'FastAPI', level: 85, description: 'High-performance APIs' },
        { name: 'OpenCV', level: 80, description: 'Computer vision applications' }
      ]
    },
    {
      title: 'Data & Analytics',
      icon: Database,
      skills: [
        { name: 'NumPy', level: 90, description: 'Numerical computing' },
        { name: 'Pandas', level: 88, description: 'Data manipulation and analysis' },
        { name: 'Matplotlib', level: 85, description: 'Data visualization' },
        { name: 'Seaborn', level: 82, description: 'Statistical visualization' },
        { name: 'Scikit-learn', level: 87, description: 'Machine learning algorithms' }
      ]
    },
    {
      title: 'Tools & Platforms',
      icon: Cloud,
      skills: [
        { name: 'Hugging Face', level: 85, description: 'Model hub and transformers' },
        { name: 'Pinecone', level: 80, description: 'Vector database' },
        { name: 'PostgreSQL', level: 75, description: 'Relational database' },
        { name: 'Supabase', level: 78, description: 'Backend as a service' },
        { name: 'n8n', level: 82, description: 'Workflow automation' }
      ]
    },
    {
      title: 'Soft Skills',
      icon: Cpu,
      skills: [
        { name: 'Adaptability', level: 95, description: 'Quick adaptation to new technologies' },
        { name: 'Time Management', level: 90, description: 'Efficient project delivery' },
        { name: 'Quick Learning', level: 92, description: 'Rapid skill acquisition' },
        { name: 'Multitasking', level: 88, description: 'Managing multiple projects' }
      ]
    }
  ];

  return (
    <section id="skills" className="py-24 relative bg-card">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            Technical <span className="text-gradient">Skills</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Expertise across the AI/ML technology stack with hands-on experience
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => {
            const IconComponent = category.icon;
            return (
              <Card 
                key={category.title} 
                className={`card-glass p-6 animate-fade-in-up animate-delay-${categoryIndex * 100}`}
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 bg-gradient-primary rounded-lg">
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold">{category.title}</h3>
                </div>

                <div className="space-y-6">
                  {category.skills.map((skill, skillIndex) => (
                    <div 
                      key={skill.name} 
                      className={`animate-fade-in-up animate-delay-${(categoryIndex * 100) + (skillIndex * 50)}`}
                    >
                      <div className="flex items-center justify-between mb-2">
                        <div>
                          <h4 className="font-medium text-foreground">{skill.name}</h4>
                          <p className="text-sm text-muted-foreground">{skill.description}</p>
                        </div>
                        <Badge 
                          variant="secondary" 
                          className="bg-primary/10 text-primary border-primary/20"
                        >
                          {skill.level}%
                        </Badge>
                      </div>
                      <Progress 
                        value={skill.level} 
                        className="h-2 bg-muted"
                      />
                    </div>
                  ))}
                </div>
              </Card>
            );
          })}
        </div>

        {/* Quick Skills Overview */}
        <Card className="card-glass mt-12 p-8">
          <h3 className="text-2xl font-semibold text-center mb-6">Core Competencies</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              'Python', 'Machine Learning', 'Deep Learning', 'NLP', 'LLM', 
              'LangChain', 'RAG', 'TensorFlow', 'Flask', 'OpenCV', 'Hugging Face'
            ].map((skill) => (
              <Badge
                key={skill}
                className="bg-gradient-accent text-white border-0 hover:scale-105 transition-transform"
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