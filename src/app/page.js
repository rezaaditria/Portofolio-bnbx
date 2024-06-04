import React from "react";
import About from "../app/components/About/About";
import Navbar from "./components/Navbar/navbar";

const page = () => {
  return (
    <layout>
      <div className="scrollable-container overflow-y-auto">
        <About />
      </div>
    </layout>
  );
};

export default page;
