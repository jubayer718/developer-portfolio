import useProject from "../../Hooks/useProject";
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const MyProject = () => {
  const [projects] = useProject();
  
  return (
    <div className='pb-4 '>
      {/* Section Title */}
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="text-4xl my-20 text-center"
      >
        Projects
      </motion.h2>

      {/* Projects List */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-7 gap-6">
        {
          projects.map((project) =>
            <div key={project._id} className='w-full '>
              <motion.div
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: -100 }}
                transition={{ duration: 1 }}
                className='bg-white shadow-lg rounded-lg overflow-hidden'>
                
                {/* Project Image */}
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className='w-full h-64 object-cover'
                />

                <div className="p-6">
                  {/* Project Title */}
                  <h3 className='mb-2 font-semibold text-stone-400 text-2xl'>{project.title}</h3>
                  {/* Project Description */}
                  <p className='mb-4 text-stone-400'>{project.description.slice(0,80)}...</p>

                  {/* Project Technologies */}
                  <div className='mb-4 flex flex-wrap '>
                    {project.technologies.map((tech, idx) =>
                      <span 
                        key={idx} 
                        className='mr-2 mt-2 rounded bg-stone-900 p-2 text-sm font-medium text-stone-300'>
                        {tech}
                      </span>
                    )}
                  </div>

                  {/* View More Button */}
                  <Link 
                  to={`/project/details/${project._id}`} 
                    className="btn btn-primary w-full mt-4"
                  >
                    View More
                  </Link>
                </div>
              </motion.div>
            </div>
          )
        }
      </div>
    </div>
  );
};

export default MyProject;