import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { GraduationCap, Brain } from 'lucide-react';

const Education = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const educationData = [
    {
      degree: 'B.Tech in Artificial Intelligence',
      school: 'Sage University Indore',
      period: 'September 2022 - September 2026',
      description: 'Specializing in Artificial Intelligence with a focus on machine learning, deep learning, and computer vision.',
      icon: Brain,
    },
    {
      degree: 'Higher Secondary (PCM)',
      school: 'Alpine Academy',
      period: 'June 2014 - July 2022',
      description: 'Completed CBSE board with Physics, Chemistry, and Mathematics specialization.',
      icon: GraduationCap,
    },
  ];

  return (
    <div className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <h2 className="text-4xl font-bold mb-4">Education</h2>
        <div className="w-20 h-1 bg-blue-500 mx-auto" />
      </motion.div>

      <div className="relative">
        <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-blue-500/30" />
        
        {educationData.map((edu, index) => (
          <motion.div
            key={edu.school}
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className={`relative flex ${index % 2 === 0 ? 'justify-start' : 'justify-end'} mb-8`}
          >
            <div className={`w-5/12 ${index % 2 === 0 ? 'pr-8' : 'pl-8'}`}>
              <motion.div
                whileHover={{ scale: 1.05, rotateY: 10 }}
                className="bg-black/30 backdrop-blur-lg rounded-lg p-6 shadow-xl transform hover:rotate-2 transition-all duration-300"
              >
                <div className="absolute top-1/2 transform -translate-y-1/2 w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center z-10"
                     style={{ [index % 2 === 0 ? 'right' : 'left']: '-44px' }}>
                  <edu.icon className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-semibold">{edu.degree}</h3>
                  <p className="text-blue-400">{edu.school}</p>
                  <p className="text-gray-400 mb-4">{edu.period}</p>
                  <p className="text-gray-300">{edu.description}</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Education;