import React from 'react';
import { Database, FileSpreadsheet, BarChart4, BookOpen } from 'lucide-react';

const SkillBar = ({ skill, percentage }: { skill: string; percentage: number }) => {
  return (
    <div className="mb-6">
      <div className="flex justify-between mb-1">
        <span className="text-gray-700 font-medium">{skill}</span>
        <span className="text-gray-600">{percentage}%</span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2.5">
        <div
          className="bg-blue-600 h-2.5 rounded-full transition-all duration-1000 ease-out"
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
    </div>
  );
};

const SkillCard = ({ icon: Icon, title, description }: { icon: any; title: string; description: string }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
      <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
        <Icon className="w-6 h-6 text-blue-600" />
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

const Skills = () => {
  const skills = [
    { name: 'Financial Accounting', percentage: 95 },
    { name: 'Tax Accounting', percentage: 90 },
    { name: 'QuickBooks', percentage: 85 },
    { name: 'Excel & Data Analysis', percentage: 92 },
    { name: 'SAP', percentage: 80 },
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16">Professional Skills</h2>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Skills Bars */}
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold mb-6">Technical Proficiency</h3>
            {skills.map((skill) => (
              <SkillBar key={skill.name} skill={skill.name} percentage={skill.percentage} />
            ))}
          </div>

          {/* Expertise Areas */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <SkillCard
              icon={Database}
              title="Data Management"
              description="Expert in financial database management and data integrity maintenance"
            />
            <SkillCard
              icon={FileSpreadsheet}
              title="Financial Analysis"
              description="Advanced Excel modeling and financial statement analysis"
            />
            <SkillCard
              icon={BarChart4}
              title="Reporting"
              description="Comprehensive financial reporting and visualization"
            />
            <SkillCard
              icon={BookOpen}
              title="Regulations"
              description="Up-to-date knowledge of GAAP and IFRS standards"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;