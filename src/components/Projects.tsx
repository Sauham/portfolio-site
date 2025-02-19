import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    title: 'Data Extraction from URLs',
    description: 'A sophisticated web scraping tool that extracts structured data from various URLs using Python. Features automated data collection, cleaning, and export capabilities.',
    url: 'https://github.com/Sauham/Data-Extraction-from-URLs',
    tags: ['Python', 'Web Scraping', 'Data Analysis']
  },
  {
    title: 'Exploratory Data Analysis',
    description: 'Comprehensive data analysis project showcasing statistical analysis, data visualization, and insights generation from complex datasets using Python and its data science ecosystem.',
    url: 'https://github.com/Sauham/Exploratory-data-analysis',
    tags: ['Data Science', 'Python', 'Visualization']
  },
  {
    title: 'Hotel Website',
    description: 'Modern, responsive hotel website built with React and Tailwind CSS. Features dynamic content management, booking system integration, and optimized user experience.',
    url: 'https://github.com/Sauham/Hotel_Website',
    tags: ['React', 'Tailwind CSS', 'Frontend']
  },
  {
    title: 'Web Development',
    description: 'Collection of web development projects showcasing various technologies and frameworks. Includes responsive designs, interactive UIs, and modern web development practices.',
    url: 'https://github.com/Sauham/Web-development',
    tags: ['Web Dev', 'JavaScript', 'React']
  },
  {
    title: 'Codsoft Infotech',
    description: 'Projects completed during internship at Codsoft, demonstrating practical implementation of software development concepts and industry best practices.',
    url: 'https://github.com/Sauham/Codsoft-Infotech',
    tags: ['Internship', 'Full Stack', 'Development']
  }
];

const Projects = () => {
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
        <h2 className="text-4xl font-bold mb-4">Projects</h2>
        <div className="w-20 h-1 bg-blue-500 mx-auto" />
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group relative bg-black/30 backdrop-blur-lg rounded-lg overflow-hidden transform hover:scale-105 transition-all duration-300"
          >
            {/* Spotlight effect */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 animate-gradient" />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent_50%)] group-hover:scale-150 transition-transform duration-500" />
            </div>

            <div className="relative p-6 h-full flex flex-col">
              <h3 className="text-xl font-semibold mb-3 text-blue-400">{project.title}</h3>
              <p className="text-gray-300 mb-4 flex-grow">{project.description}</p>
              
              <div className="space-y-4">
                <div className="flex flex-wrap gap-2">
                  {project.tags.map(tag => (
                    <span key={tag} className="text-xs bg-blue-500/20 text-blue-300 px-2 py-1 rounded">
                      {tag}
                    </span>
                  ))}
                </div>
                
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center w-full px-4 py-2 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 rounded-lg text-white font-medium transition-all duration-300 group"
                >
                  <Github className="w-5 h-5 mr-2" />
                  <span>View Project</span>
                  <ExternalLink className="w-4 h-4 ml-2 opacity-0 group-hover:opacity-100 transform translate-x-[-10px] group-hover:translate-x-0 transition-all" />
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Projects;