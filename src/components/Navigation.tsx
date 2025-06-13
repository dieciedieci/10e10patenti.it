import { IoMenu } from "react-icons/io5";
import logo from '../assets/logo.png';
import { routes } from '../data/routes';
import { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);
  const location = useLocation();
  
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  return (
    <nav className='flex flex-col md:flex-row justify-between items-center py-4 md:py-6'>
      <div className="w-full md:w-auto flex flex-row justify-between items-center">
        <a href="/">
          <img className='w-[100px] md:w-[170px]' alt='10e10patenti.it Logo' src={logo} />
        </a>
        <IoMenu onClick={toggleMenu} className={`md:hidden h-6 w-6 cursor-pointer`} />
      </div>

      <ul
        className={`
          w-full md:w-auto flex flex-col md:flex-row gap-2 md:gap-8
          transition-all duration-300 ease-in-out
          overflow-hidden md:overflow-visible
          ${isOpen ? "max-h-96 md:max-h-auto pt-2 md:pt-0 mt-2 md:mt-0" : "max-h-0 md:max-h-96 pt-0 mt-0"}
        `}
      >
        {routes.map((link) => (
          <li key={link.value}>
            <NavLink
              to={link.path}
              className={({ isActive }) =>
                isActive ? "text-xs md:text-sm text-primary underline" : "text-xs md:text-sm text-gray-700 hover:text-primary transition-colors"
              }
            >
              {link.value}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}
