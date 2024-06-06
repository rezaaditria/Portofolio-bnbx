import React from "react";
import About from "../app/components/About/About";
import Skill from "./components/Skillset/Skill";
import Projek from "./components/projek/Projek";
import Contact from "./components/Contact/contact";

const page = () => {
  return (
    <layout>
      <div className="min-h-screen">
        <About />
        <h1
          id="skills"
          className="text-white text-4xl font-bold font-sans text-center my-14"
        >
          Skills
        </h1>
        <Skill />
        <h1
          id="project"
          className="text-white text-4xl font-bold font-sans text-center my-14"
        >
          Project & Experiences
        </h1>
        <Projek />
        <h1
          id="Contact"
          className="text-white text-4xl font-bold font-sans text-center my-14"
        >
          Contact
        </h1>
        <Contact />
      </div>
    </layout>
  );
};

export default page;
