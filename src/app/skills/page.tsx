import { skillCategories } from '@/lib/data';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Code, GanttChartSquare, Wrench, Cloud, Database } from 'lucide-react';

const iconMap: { [key: string]: React.ReactNode } = {
  Languages: <Code className="size-6 text-primary" />,
  'Frameworks & Libraries': <GanttChartSquare className="size-6 text-primary" />,
  'Tools & Platforms': <Wrench className="size-6 text-primary" />,
  'Cloud Services': <Cloud className="size-6 text-primary" />,
  Databases: <Database className="size-6 text-primary" />,
};

export default function SkillsPage() {
  return (
    <div className="container mx-auto px-4 py-16 md:py-24">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-headline font-bold">
          Technical Skills
        </h1>
        <p className="text-lg text-muted-foreground mt-3 max-w-2xl mx-auto">
          A collection of technologies I use to build robust and scalable applications.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {skillCategories.map((category, index) => (
          <Card key={index} className="flex flex-col animate-fade-in-up" style={{ animationDelay: `${index * 150}ms`}}>
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                {iconMap[category.title]}
                <span className="font-headline text-2xl">{category.title}</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="flex-grow">
              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between items-center mb-1">
                      <span className="font-medium">{skill.name}</span>
                      <span className="text-sm text-muted-foreground">
                        {skill.level}%
                      </span>
                    </div>
                    <Progress value={skill.level} aria-label={`${skill.name} proficiency`} />
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
