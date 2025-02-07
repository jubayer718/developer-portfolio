import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../LayOut/MainLayout";
import HomePage from "../pages/Home/HomePage";
import About from "../Components/AboutMe/About";
import Skills from "../Components/Skills/Skills";
import MyProject from "../Components/Project/MyProject";
import ProjectDetails from "../pages/Details/ProjectDetails";
import Contact from "../pages/ContactMe/Contact";

 const routes = createBrowserRouter([
   {
     path: '/',
     element: <MainLayout></MainLayout>,
     children: [
       {
         path: '/',
         element:<HomePage></HomePage>
       }, {
         path: '/about',
         element:<About></About>
       }, {
         path: '/skills',
         element:<Skills></Skills>
       }, {
         path: '/project',
         element:<MyProject></MyProject>
       }, {
       }, {
         path: '/contact',
         element:<Contact></Contact>
       }, {
         path: '/project/details/:id',
         element: <ProjectDetails></ProjectDetails>,
         loader:({params})=>fetch(`http://localhost:3000/projects/${params.id}`)
       }
     ]
  }
])

export default routes