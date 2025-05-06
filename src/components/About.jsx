import { motion } from 'framer-motion';
import Footer from './Footer.jsx'
import SkillsAndExperience from './SkillsAndExperience'

const About = () => {
  const skills = [
    'JavaScript',
    'TypeScript',
    'React',
    'Node.js',
    'Python',
    'SQL',
    'Git',
    'AWS',
  ];

  return (
   <> 
    <div className="max-w-4xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-12"
      >
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
          About Me
        </h2>
        <p className="text-gray-600 dark:text-gray-300 mb-6">
          I'm a passionate software engineer with experience in building web applications
          and solving complex problems. I enjoy creating elegant solutions and learning
          new technologies.
        </p>
        <p className="text-gray-600 dark:text-gray-300">
          I specialize in full-stack development.
        </p>
      </motion.div>

      <SkillsAndExperience/>
    </div>
    <Footer/>
  </>  
  );
};

export default About; 