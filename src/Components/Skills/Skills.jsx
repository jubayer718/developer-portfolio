import { motion } from "framer-motion";
import SkillsCategory from "../SkillsCategory/SkillsCategory";


const Skills = () => {
  

 const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, staggerChildren: 0.2 } }
  };

 
  return (
      <section id="skills" className="text-center py-10 my-12">
      <motion.h2
        className="text-4xl font-bold mb-6"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        🚀 Skills & Technologies
      </motion.h2>

      {/* Skill Categories */}
      <motion.div
        className="space-y-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
      >
        {/* Frontend */}
        <SkillsCategory title="🖥️ Frontend Development" skills={[
          { name: "HTML5", color: "E34F26", logo: "html5" },
          { name: "CSS3", color: "1572B6", logo: "css3" },
          { name: "JavaScript", color: "F7DF1E", logo: "javascript" },
          { name: "React", color: "61DAFB", logo: "react" },
          { name: "Next", color: "4FC08D", logo: "Next.js" }
        ]} />

        {/* Backend */}
        <SkillsCategory title="⚙️ Backend Development" skills={[
          { name: "Node.js", color: "339933", logo: "node.js" },
          { name: "Express.js", color: "000000", logo: "express" }
        ]} />

        {/* Databases */}
        <SkillsCategory title="🗄️ Databases" skills={[
          { name: "SQL", color: "4479A1", logo: "mysql" },
          { name: "MongoDB", color: "47A248", logo: "mongodb" },
          { name: "PostgreSQL", color: "336791", logo: "postgresql" }
        ]} />

        {/* DevOps & Tools */}
        <SkillsCategory title="🔧 DevOps & Tools" skills={[
          { name: "Git", color: "F05032", logo: "git" },
        ]} />
      </motion.div>
    </section>
  );
};

export default Skills;