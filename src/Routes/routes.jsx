import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../LayOut/MainLayout";
import HomePage from "../pages/Home/HomePage";
import About from "../Components/AboutMe/About";
import Skills from "../Components/Skills/Skills";
import MyProject from "../Components/Project/MyProject";

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
       }
     ]
  }
])

export default routes