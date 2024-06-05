import React from "react";
import About from "../app/components/About/About";
import Skill from "./components/Skillset/Skill";
import Projek from "./components/projek/Projek";

const page = () => {
  return (
    <layout>
      <div className="min-h-screen">
        <About />
        <Skill />
        <h1 className="text-white text-4xl font-bold font-sans text-center my-10">
          Project & Experiences
        </h1>
        <Projek />
      </div>
    </layout>
  );
};

export default page;
