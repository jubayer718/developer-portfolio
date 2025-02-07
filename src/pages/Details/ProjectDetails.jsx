import { useLoaderData } from "react-router-dom";

const ProjectDetails = () => {
  const project = useLoaderData();

  return (
     <div className="container mx-auto p-8">
       {/* Project Image */}
       <img 
         src={project?.image} 
         alt={project?.title} 
         className="w-full object-cover mb-6 rounded-lg"
       />
       
       <h2 className="text-4xl font-semibold">{project?.title}</h2>
       <p className="text-lg text-gray-500 my-4">{project?.description}</p>
 
       {/* Main Technology Stack */}
       <div className="my-6">
         <h3 className="text-2xl font-semibold mb-2">Technology Stack</h3>
         <ul className="flex flex-wrap gap-2">
           {project?.technologies.map((tech, idx) => 
             <li key={idx} className="bg-gray-800 text-white px-3 py-1 rounded-lg text-sm">{tech}</li>
           )}
         </ul>
       </div>
 
       {/* Live Link and GitHub Link */}
       <div className="my-6">
         <a 
          href={ project?.liveLink}
           target="_blank" 
           rel="noopener noreferrer" 
           className="btn btn-secondary mr-4"
         >
           Live Link
         </a>
         <a 
           href={project?.githubLink} 
           target="_blank" 
           rel="noopener noreferrer" 
           className="btn btn-secondary"
         >
           GitHub Link
         </a>
       </div>
 
       {/* Detailed Project Description */}
       <div className="my-6">
         <h3 className="text-2xl font-semibold mb-2">Detailed Description</h3>
         <p>{project?.detailedDescription}</p>
       </div>
 
       {/* Challenges Faced */}
       <div className="my-6">
         <h3 className="text-2xl font-semibold mb-2">Challenges Faced</h3>
         <p>{project?.challenges}</p>
       </div>
 
       {/* Improvement Plans */}
       <div className="my-6">
         <h3 className="text-2xl font-semibold mb-2">Future Improvements</h3>
         <p>{project?.improvements}</p>
       </div>
     </div>
  );
};

export default ProjectDetails;