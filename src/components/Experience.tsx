import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Briefcase, Brain, Code, Database, LineChart } from 'lucide-react';

const experiences = [
  {
    company: 'SETV Global',
    position: 'AI/ML Engineer',
    period: 'November 2024- Present',
    description: 'Working on AI-driven solutions, focusing on NLP and Computer Vision applications.',
    icon: Brain,
  },
  {
    company: 'Outlier',
    position: 'Prompt Engineer',
    period: 'October 2024- January 2025',
    description: 'Developing and optimizing prompts for large language models and AI applications.',
    icon: Brain,
  },
  {
    company: 'CodSoft',
    position: 'AI/ML Intern',
    period: 'July 2024- September 2024',
    description: 'Worked on machine learning projects and gained hands-on experience with AI technologies.',
    icon: Database,
  },
  {
    company: 'COSMIC365.AI',
    position: 'Web Development Intern',
    period: ' May 2024- July 2024',
    description: 'Developed web applications using modern technologies and frameworks.',
    icon: Code,
  },
];

const Experience = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <h2 className="text-4xl font-bold mb-4">Experience</h2>
        <div className="w-20 h-1 bg-blue-500 mx-auto" />
      </motion.div>

      <div className="relative">
        <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-blue-500/30" />
        
        {experiences.map((exp, index) => (
          <motion.div
            key={exp.company}
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className={`relative flex ${index % 2 === 0 ? 'justify-start' : 'justify-end'} mb-8`}
          >
            <div className={`w-5/12 ${index % 2 === 0 ? 'pr-8' : 'pl-8'}`}>
              <div className="bg-black/30 backdrop-blur-lg rounded-lg p-6 shadow-xl">
                <div className="absolute top-1/2 transform -translate-y-1/2 w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center z-10"
                     style={{ [index % 2 === 0 ? 'right' : 'left']: '-44px' }}>
                  <exp.icon className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold">{exp.position}</h3>
                  <p className="text-blue-400">{exp.company}</p>
                  <p className="text-sm text-gray-400 mb-2">{exp.period}</p>
                  <p className="text-gray-300">{exp.description}</p>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Experience;