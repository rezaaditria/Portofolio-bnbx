import React from "react";
import BentoBox from "../Bento/Box";

const Skill = () => {
  const skill = [
    {
      skill1: "/images/html.png",
      skill2: "/images/css.png",
      skill3: "/images/js.png",
      skill4: "/images/react.png",
      skill5: "/images/njs.png",
      skill6: "/images/tailwind.png",
      skill7: "/images/C.png",
      skill8: "/images/py.png",
      skill9: "/images/ts.png",
      description: "This is the third item.",
      size: " col-span-12",
    },
  ];
  return (
    <div className="container mx-auto p-1 grid-cols-12 mt-4">
      <BentoBox items={skill} />
    </div>
  );
};

export default Skill;