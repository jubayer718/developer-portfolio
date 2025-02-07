import { MdOutlineFileDownload } from "react-icons/md";
import { NavLink } from "react-router-dom";

const logo = './favicon.png';

const Navbar = () => {
  const navOptions = <>
    <li><NavLink className="hover:text-cyan-500 font-semibold hover:bg-black px-4 py-2 rounded-lg" to='/'>Home</NavLink></li>
    <li><NavLink className="hover:text-cyan-500 font-semibold hover:bg-black px-4 py-2 rounded-lg" to='/about'>About</NavLink></li>
    <li><NavLink className="hover:text-cyan-500 font-semibold hover:bg-black px-4 py-2 rounded-lg" to='/skills'>Skills</NavLink></li>
   
    <li><NavLink className="hover:text-cyan-500 font-semibold hover:bg-black px-4 py-2 rounded-lg" to='/project'>Project</NavLink></li>
    <li><NavLink className="hover:text-cyan-500 font-semibold hover:bg-black px-4 py-2 rounded-lg" to='/contact'>Contact</NavLink></li>
  </>
  return (
    <div className=" fixed w-full top-0 mx-auto z-40 ">
      <div className="navbar bg-stone-800 shadow-sm">
        <div className="navbar-start flex-1">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
              {navOptions}
            </ul>
          </div>
          <img className="rounded-full" src={logo} alt="" />
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {navOptions}
          </ul>
        </div>
        <div className="">
          <a
            href="https://drive.google.com/file/d/1GNF1BSQfgmxMm4JqmOcvrzI4wxUHCsJc/view?usp=drive_link"
            target='_blank'
            rel='noopener noreferrer'
            download className="btn">Download Resume <MdOutlineFileDownload></MdOutlineFileDownload></a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;