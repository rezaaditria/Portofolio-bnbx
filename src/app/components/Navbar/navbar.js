"use client";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleLinkClick = (event, targetId) => {
    event.preventDefault();

    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop,
        behavior: "smooth", // Smooth scrolling behavior
      });
      setIsOpen(false); // Close the navbar when a link is clicked
    }
  };

  return (
    <nav>
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-32">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden"></div>
          <div className="flex-1 flex sm:items-stretch sm:justify-start">
            <div className="header">
              <a href="/" className="flex-shrink-0 flex ml-[30px] sm:ml-0">
                <h1 className="text-white text-4xl font-bold font-sans  ">
                  Reza
                </h1>
                <h2 className="text-[#FF204E] opacity-80 px-2 hover:text-white">
                  Front-end
                </h2>
              </a>
            </div>
          </div>
          <div className="hidden sm:block sm:ml-6">
            <div className="flex space-x-4 justify-end">
              <a href="#skills" onClick={(e) => handleLinkClick(e, "skills")}>
                <div className="hover:text-[#FF204E] text-2xl opacity-80 hover:opacity-100 text-white px-3 py-2">
                  Skills
                </div>
              </a>
              <a
                href="#experience"
                onClick={(e) => handleLinkClick(e, "experience")}
              >
                <div className="hover:text-[#FF204E] text-2xl opacity-80 hover:opacity-100 text-white px-3 py-2">
                  Experiences
                </div>
              </a>
              <a href="#project" onClick={(e) => handleLinkClick(e, "project")}>
                <div className="hover:text-[#FF204E] text-2xl opacity-80 hover:opacity-100 text-white px-3 py-2">
                  Projects
                </div>
              </a>
              <a href="#Contact" onClick={(e) => handleLinkClick(e, "Contact")}>
                <div className="hover:text-[#FF204E] text-2xl opacity-80 hover:opacity-100 text-white px-3 py-2">
                  Contact
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
