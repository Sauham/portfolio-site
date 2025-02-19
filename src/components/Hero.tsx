import React from 'react';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { Github, Linkedin, Code2 } from 'lucide-react';

const Hero = () => {
  const splitText = "Hi, I'm  Sauham".split('').map((char, index) => (
    <motion.span
      key={index}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="inline-block"
    >
      {char}
    </motion.span>
  ));

  return (
    <div className="min-h-screen flex flex-col-reverse md:flex-row items-center justify-between px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto py-20 md:py-0">
      <div className="flex-1 pr-0 md:pr-8 text-center md:text-left mt-8 md:mt-0">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <div className="relative">
            <h1 className="text-4xl md:text-6xl font-bold mb-4 blur-[1px] opacity-75 absolute">
              {splitText}
            </h1>
            <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent relative">
              {splitText}
            </h1>
          </div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.5 }}
            className="text-2xl md:text-3xl text-blue-300 font-light mb-6"
          >
            Nice to meet you!
          </motion.p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-xl sm:text-2xl text-blue-400 mb-8"
        >
          <TypeAnimation
            sequence={[
              'AI Engineer',
              2000,
              'Machine Learning Developer',
              2000,
              'Full Stack Developer',
              2000,
              'Data Analyst',
              2000,
              'Data Scientist',
              2000,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="flex justify-center md:justify-start space-x-6"
        >
          <a
            href="https://github.com/Sauham"
            target="_blank"
            rel="noopener noreferrer"
            className="transform hover:scale-110 transition-transform"
          >
            <Github className="w-8 h-8" />
          </a>
          <a
            href="https://www.linkedin.com/in/sauham-vyas/"
            target="_blank"
            rel="noopener noreferrer"
            className="transform hover:scale-110 transition-transform"
          >
            <Linkedin className="w-8 h-8" />
          </a>
          <a
            href="https://leetcode.com/u/Sauham_Vyas/"
            target="_blank"
            rel="noopener noreferrer"
            className="transform hover:scale-110 transition-transform"
          >
            <Code2 className="w-8 h-8" />
          </a>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="relative"
      >
        <div className="w-64 h-64 md:w-96 md:h-96 relative">
          <div className="absolute inset-0 bg-blue-500/20 rounded-full animate-pulse"></div>
          <div className="absolute inset-4 bg-blue-500/20 rounded-full animate-pulse delay-75"></div>
          <div className="absolute inset-8 bg-blue-500/20 rounded-full animate-pulse delay-150"></div>
          <img
            src="https://avatars.githubusercontent.com/Sauham"
            alt="Profile"
            className="absolute inset-0 w-full h-full object-cover rounded-full border-4 border-blue-500 shadow-lg"
          />
          <div className="absolute -inset-4 border-2 border-blue-500/50 rounded-full animate-spin-slow"></div>
        </div>
      </motion.div>
    </div>
  );
};

export default Hero;