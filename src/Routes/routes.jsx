import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../LayOut/MainLayout";
import HomePage from "../pages/Home/HomePage";
import About from "../Components/AboutMe/About";

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
       }
     ]
  }
])

export default routes