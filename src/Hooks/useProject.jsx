import { useQuery } from "@tanstack/react-query";



const useProject = () => {
  const { data: projects = [] } = useQuery({
    queryKey: ['project'],
    queryFn:() => 
      fetch('http://localhost:3000/projects')
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
//       fetch('http://localhost:3000/projects')
//       .then((res) =>
//         res.json(),
//       ).then(data => {
//         return data
//       })
//   })
// return [cart]
// };

// export default useProject;