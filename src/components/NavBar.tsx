import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="flex md:justify-evenly md:mx-auto md:max-w-6xl justify-between items-center py-10 px-5 md:px-10">
      <div>
        <h1 className="uppercase text-xl font-bold">Marketim</h1>
      </div>
      <div className="hidden md:flex space-x-5 list-none">
        <a href="#">
          <li>Home</li>
        </a>
        <a href="#">
          <li>About us</li>
        </a>
        <a href="#">
          <li>Download</li>
        </a>
        <a href="#">
          <li>Features</li>
        </a>
        <a href="#">
          <li>Pricing</li>
        </a>
      </div>
      <div className="hidden md:flex space-x-4 items-center">
        <button>Log in</button>
        <button className="border-2 border-gray-400 rounded-md py-2 px-5">
          Register
        </button>
      </div>
      <div className="md:hidden flex items-center">
        <button onClick={toggleMenu}>
          {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>
      {isOpen && (
        <div className="absolute top-0 list-none left-0 w-full h-full bg-black flex flex-col items-center justify-center space-y-5 z-10">
          <a href="#">
            <li className="text-xl" onClick={toggleMenu}>
              Home
            </li>
          </a>
          <a href="#">
            <li className="text-xl" onClick={toggleMenu}>
              About us
            </li>
          </a>
          <a href="#">
            <li className="text-xl" onClick={toggleMenu}>
              Download
            </li>
          </a>
          <a href="#">
            <li className="text-xl" onClick={toggleMenu}>
              Features
            </li>
          </a>
          <a href="#">
            <li className="text-xl" onClick={toggleMenu}>
              Pricing
            </li>
          </a>
          <div className="flex flex-col items-center space-y-4">
            <button onClick={toggleMenu}>Log in</button>
            <button
              className="border-2 border-gray-400 rounded-md py-2 px-5"
              onClick={toggleMenu}
            >
              Register
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
