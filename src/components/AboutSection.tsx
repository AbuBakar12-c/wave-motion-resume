import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

export const AboutSection = () => {
  const highlights = [
    'AI/ML Engineering',
    'Generative AI',
    'Large Language Models',
    'Natural Language Processing',
    'Deep Learning',
    'Computer Vision'
  ];

  const stats = [
    { number: '1+', label: 'Years Experience' },
    { number: '10+', label: 'Projects Completed' },
    { number: '5+', label: 'Technologies Mastered' },
    { number: '100%', label: 'Client Satisfaction' }
  ];

  return (
    <section id="about" className="py-24 relative bg-card">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            About <span className="text-gradient">Me</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Passionate about creating intelligent solutions that make a difference
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-6">
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold">My Journey</h3>
              <p className="text-muted-foreground leading-relaxed">
                I'm a dedicated AI/ML Engineer with over 1 year of hands-on experience in building 
                cutting-edge AI solutions. My expertise spans across Generative AI, Natural Language 
                Processing, and Large Language Models, with a strong focus on creating scalable, 
                data-driven systems.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Currently based in Lahore, Punjab, Pakistan, I specialize in LangChain, LangGraph, 
                RAG systems, and Deep Learning. My passion lies in automating complex workflows 
                and developing innovative AI applications that solve real-world problems.
              </p>
            </div>

            {/* Specializations */}
            <div className="space-y-3">
              <h4 className="text-lg font-medium">Specializations</h4>
              <div className="flex flex-wrap gap-2">
                {highlights.map((skill) => (
                  <Badge
                    key={skill}
                    variant="secondary"
                    className="bg-gradient-primary text-white border-0 hover:scale-105 transition-transform"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => (
              <Card
                key={stat.label}
                className={`card-glass p-6 text-center animate-fade-in-up animate-delay-${index * 200}`}
              >
                <div className="text-3xl lg:text-4xl font-bold text-gradient mb-2">
                  {stat.number}
                </div>
                <div className="text-muted-foreground text-sm lg:text-base">
                  {stat.label}
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Additional Info Card */}
        <Card className="card-glass mt-12 p-8">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <h4 className="font-semibold text-primary mb-2">Location</h4>
              <p className="text-muted-foreground">Lahore, Punjab, Pakistan</p>
            </div>
            <div>
              <h4 className="font-semibold text-primary mb-2">Contact</h4>
              <p className="text-muted-foreground">mabubakr.pro@gmail.com</p>
            </div>
            <div>
              <h4 className="font-semibold text-primary mb-2">Phone</h4>
              <p className="text-muted-foreground">+92 3290262101</p>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};