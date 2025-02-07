import { useQuery } from "@tanstack/react-query";



const useProject = () => {
  const { data: projects = [] } = useQuery({
    queryKey: ['project'],
    queryFn:() => 
      fetch('https://developer-portfolio-server-peach.vercel.app/projects')
        .then(res => res.json())
        .then(data => {
        return data
      })
    
  })
  return [projects];
};

export default useProject;




// import { useQuery } from "@tanstack/react-query";



// const useProject = () => {
//   const {  data:cart=[] } = useQuery({
//     queryKey: ['cart'],
//     queryFn: () =>
//       fetch('https://developer-portfolio-server-peach.vercel.app/projects')
//       .then((res) =>
//         res.json(),
//       ).then(data => {
//         return data
//       })
//   })
// return [cart]
// };

// export default useProject;