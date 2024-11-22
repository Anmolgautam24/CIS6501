import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';

function Header() {
  const location = useLocation();
  const [hovered, setHovered] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false); // State to manage mobile menu

  const links = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About" },
    { path: "/products", label: "Products" },
    { path: "/projectsites", label: "Project Sites" },
    { path: "/contact", label: "Contact" }
  ];

  return (
    <header>
      <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-800">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          <Link to="/" className="flex items-center">
            <img
              src="/logophoenix.png"
              className="mr-3 h-6 sm:h-9"
              alt="Phoenix Energy Logo"
            />
            <span className="self-center text-xl font-bold whitespace-nowrap text-primary">
              Phoenix Energy
            </span>
          </Link>

          {/* Mobile menu button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="inline-flex items-center p-2 ml-3 text-sm text-primary rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="mobile-menu"
            aria-expanded={menuOpen}
          >
            <span className="sr-only">Open main menu</span>
            {/* Hamburger icon */}
            <svg
              className={`w-6 h-6 ${menuOpen ? 'hidden' : 'block'}`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
            {/* Close icon */}
            <svg
              className={`w-6 h-6 ${menuOpen ? 'block' : 'hidden'}`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          <div className={`hidden lg:flex lg:items-center lg:w-auto ${menuOpen ? 'block' : 'hidden'}`} id="mobile-menu">
            <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
              {links.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    onMouseEnter={() => setHovered(true)}
                    onMouseLeave={() => setHovered(false)}
                    className={`block py-2 pr-4 pl-3 font-bold relative text-primary lg:p-0
                      ${
                        location.pathname === link.path
                          ? 'text-accent'  // Active link
                          : `text-primary ${hovered ? 'opacity-50' : 'opacity-100'}` 
                      } 
                      lg:hover:text-accent hover:bg-gray-50 lg:hover:bg-transparent
                      dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent
                    `}
                  >
                    {link.label}
                    {/* Underline effect */}
                    <span className="absolute left-0 bottom-0 w-full h-0.5 bg-accent scale-x-0 transition-transform duration-300 ease-in-out transform origin-left lg:hover:scale-x-100"></span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Mobile menu for smaller screens */}
        <div className={`lg:hidden ${menuOpen ? 'block' : 'hidden'} transition duration-300`}>
          <ul className="flex flex-col mt-4 font-medium">
            {links.map((link) => (
              <li key={link.path}>
                <Link
                  to={link.path}
                  onMouseEnter={() => setHovered(true)}
                  onMouseLeave={() => setHovered(false)}
                  className={`block py-2 pr-4 pl-3 font-bold relative text-primary lg:p-0
                    ${
                      location.pathname === link.path
                        ? 'text-accent'  // Active link
                        : `text-primary ${hovered ? 'opacity-50' : 'opacity-100'}` 
                    } 
                    hover:bg-gray-50 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white
                  `}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Header;
