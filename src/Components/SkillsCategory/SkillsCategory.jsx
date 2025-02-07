
import { motion } from "framer-motion";

import PropTypes from "prop-types";
const SkillsCategory = ({ title, skills }) => {
   const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.4 } }
  };
  return (
    <div>
      <h3 className="text-2xl font-semibold mb-4 text-primary">{title}</h3>
      <motion.div className="flex flex-wrap justify-center gap-4" variants={itemVariants}>
        {skills.map((skill, index) => (
          <motion.img
            key={index}
            src={`https://img.shields.io/badge/-${skill.name}-${skill.color}?style=for-the-badge&logo=${skill.logo}&logoColor=white`}
            alt={skill.name}
            className="shadow-lg rounded-lg"
            variants={{
              hidden: { opacity: 0, scale: 0.8 },
              visible: { opacity: 1, scale: 1, transition: { duration: 0.3 } }
            }}
          />
        ))}
      </motion.div>
    </div>
  );
};
SkillsCategory.propTypes = {
  title: PropTypes.string,
  skills:PropTypes.array
}
export default SkillsCategory;