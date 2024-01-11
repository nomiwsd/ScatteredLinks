import { useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import Logo from "../../assets/Scatteredlinks.png";
import { FaBars } from "react-icons/fa";
import { MdClose } from "react-icons/md";

const Header = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [cancelClose, setCancelClose] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };
  const closeDropdown = () => {
    if (!cancelClose) {
      setIsDropdownOpen(false);
    }
  };

  const resetCancelClose = () => {
    setCancelClose(false);
  };

  const dropdownItems = [
    {
      title: "Development",
      description:
        "Elevate your business with customized solutions, optimizing operations.",
      link: "/Development",
    },
    {
      title: "BPO",
      description:
        "Maximize efficiency by entrusting us with your business process outsourcing needs.",
      link: "/BPO",
    },
    {
      title: "Design/Creations",
      description:
        "Enhance your brand presence with visually compelling, user-friendly designs.",
      link: "/Design",
    },
    {
      title: "Digital Commerce",
      description:
        "Future of commerce with comprehensive solutions crafted to boost sales.",
      link: "/Digital",
    },
  ];
  const closeNavbar = () => {
    setIsOpen(false);
  };
  const isNavLinkActive = (path) => {
    return location.pathname === path
      ? "text-activecl"
      : "text-linkscolor hover:text-activecl";
  };
  return (
    <nav className="headerbg p-4 shadow-md">
      <div className="container flex flex-col md:flex-row md:justify-between">
        <div className="flex justify-between py-3">
          <img src={Logo} alt="Logo" className="w-[10rem]" />

          <button
            className="md:hidden text-white text-3xl focus:outline-none mb-0"
            onClick={toggleNavbar}
          >
            {isOpen ? <MdClose /> : <FaBars  className='text-black'/>}
          </button>
        </div>

        <div
          className={`md:hidden absolute top-0 left-0 w-full bg-black ${
            isOpen ? "flex  h-screen w-full z-40" : "hidden"
          } flex-col gap-6`}
        >
          <button
            className="text-white focus:outline-none flex justify-end py-10 px-10"
            onClick={toggleNavbar}
          >
            <MdClose className="text-3xl font-bold" />
          </button>
          <ul className="flex flex-col items-center gap-8">
            <li>
              <Link
                to="/"
                className="text-white text-base font-helvetica font-semibold"
                onClick={closeNavbar}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="text-white text-base font-helvetica font-semibold"
                onClick={closeNavbar}
              >
                About
              </Link>
            </li>
            <li
              className={`relative group text-white font-helvetica font-semibold hover:text-gray-300`}
              onClick={toggleDropdown}
            >
              Services
              {/* Dropdown Content */}
              <ul
                className={`absolute bg-white text-black w-48 my-3 z-30 -translate-x-5 ${
                  isDropdownOpen ? "block " : "hidden"
                } bg-gray-700 p-2 space-y-2`}
              >
                <li className="w-full py-1 text-center text-[#111] hover:bg-[#000] hover:text-[#fff]">
                  <Link
                    to="/Development"
                    className=" font-helvetica font-semibold"
                    onClick={closeNavbar}
                  >
                    Development
                  </Link>
                </li>
                <li className="w-full py-1 text-center text-[#111] hover:bg-[#000] hover:text-[#fff]">
                  <Link
                    to="/BPO"
                    className="font-helvetica font-semibold"
                    onClick={closeNavbar}
                  >
                    BPO
                  </Link>
                </li>
                <li className="w-full py-1 text-center text-[#111] hover:bg-[#000] hover:text-[#fff]">
                  <Link
                    to="/Design"
                    className="font-helvetica font-semibold"
                    onClick={closeNavbar}
                  >
                    Design & Creative
                  </Link>
                </li>
                <li className="w-full py-1 text-center text-[#111] hover:bg-[#000] hover:text-[#fff]">
                  <Link
                    to="/Digital"
                    className="font-helvetica font-semibold"
                    onClick={closeNavbar}
                  >
                    Digital Commerce
                  </Link>
                </li>
              </ul>
            </li>
            <li>
              <Link
                to="/project"
                className="text-white text-base font-helvetica font-semibold"
                onClick={closeNavbar}
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                to="/"
                className="text-white text-base font-helvetica font-semibold"
                onClick={closeNavbar}
              >
                Faqs
              </Link>
            </li>
            <li>
              <button className=" bg-white text-black hover:bg-[#81decd] py-2 px-3 rounded-3xl text-base font-helvetica font-semibold">
                <Link
                  onClick={closeNavbar}
                  to="/contact"
                  className="text-black hover:text-gray-300"
                >
                  Contact Us
                </Link>
              </button>
            </li>
          </ul>
        </div>

        <div
          className={`md:flex md:items-center md:w-auto ${
            isOpen ? "hidden" : "block"
          }`}
        >
          <ul className="hidden md:flex md:flex-row items-center md:gap-8 lg:gap-20 ">
            <li>
              <NavLink
                to="/"
                className={`text-base font-helvetica font-bold ${isNavLinkActive(
                  "/"
                )}`}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className={`text-base font-helvetica font-bold ${isNavLinkActive(
                  "/about"
                )}`}
              >
                About Us
              </NavLink>
            </li>
            <li
              className={`relative group text-linkscolor font-helvetica font-bold hover:text-activecl active:text-activecl`}
              onMouseEnter={toggleDropdown}
              onMouseLeave={closeDropdown}
           >
              {/* Dropdown Trigger */}
              <div>
                Services
              </div>

              {/* Dropdown Content */}
              <div
                className={`absolute md:top-3 md:-right-72 lg:top-3 lg:-right-96 xl:-right-[475px] my-3 z-30 ${
                  isDropdownOpen
                    ? "grid grid-cols-2 lg:grid-cols-4 lg:gap-4 lg:px-16 py-20 bg-[#F6F6F6] text-[#111] w-[85vw] "
                    : "hidden"
                } rounded-3xl  dropdownsect`}
                onMouseEnter={resetCancelClose}
                onMouseLeave={closeDropdown}
              >
                {/* Individual Dropdown Items */}
                {dropdownItems.map((item, index) => (
                  <div
                    key={index}
                    className="flex flex-col items-center justify-center text-center lg:h-52"
                  >
                    <div
                      className=" hover:-translate-y-4 transition-transform flex flex-col gap-5 lg:h-52"
                    >
                      <h3 className="text-2xl font-spacegrotesk">
                        {item.title}
                      </h3>
                      <p className="text-sm text-helvetica">
                        {item.description}
                      </p>
                    </div>
                    <button
                      className="bg-[#56096C] hover:-translate-y-2 text-white hover:bg-white hover:text-black rounded-3xl w-32 py-1 px-6"
                    >
                      <Link
                        to={item.link}
                        className="text-sm font-helvetica font-semibold"
                      >
                        View More
                      </Link>
                    </button>
                  </div>
                ))}
              </div>
            </li>
            <li>
              <Link
                to="/project"
                className={`text-base font-helvetica font-bold ${isNavLinkActive(
                  "/project"
                )}`}
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                to="/faq"
                className={`text-base font-helvetica font-bold ${isNavLinkActive(
                  "/faq"
                )}`}
              >
                Faqs
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-gray-300">
                <button className="bg-homebtn text-white hover:bg-white hover:text-black py-2 px-3 rounded-3xl text-base font-helvetica font-bold">
                  Contact Us
                </button>
              </Link>
            </li>
          </ul>
          {/* Your existing desktop navigation */}
          {/* ... */}
        </div>
      </div>
    </nav>
  );
};

export default Header;
