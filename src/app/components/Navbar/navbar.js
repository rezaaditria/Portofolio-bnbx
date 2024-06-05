"use client";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav>
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-32">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden"></div>
          <div className="flex-1 flex sm:items-stretch sm:justify-start">
            <div className="header ">
              <div className="flex-shrink-0 flex">
                <h1 className="text-white text-4xl font-bold font-sans">
                  Reza
                </h1>
                <h1 className="text-[#FF204E] opacity-80 px-2"> Front-end</h1>
              </div>
            </div>
          </div>
          <div className="hidden sm:block sm:ml-6">
            <div className="flex space-x-4 justify-end">
              <a href="#">
                <div className="hover:text-[#FF204E] text-2xl opacity-80 hover:opacity-100 text-white px-3 py-2">
                  present
                </div>
              </a>
              <a href="#skills">
                <div className="hover:text-[#FF204E] text-2xl opacity-80 hover:opacity-100 text-white px-3 py-2">
                  skills
                </div>
              </a>
              <a href="#">
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
