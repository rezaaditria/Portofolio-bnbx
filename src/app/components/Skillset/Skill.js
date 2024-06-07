import React from "react";
import BentoBox from "../Bento/Box";

const Skill = () => {
  const skill = [
    {
      skill1: "/images/Skills/html.png",
      skill2: "/images/Skills/css.png",
      skill3: "/images/Skills/js.png",
      skill4: "/images/Skills/react.png",
      skill5: "/images/Skills/njs.png",
      skill6: "/images/Skills/tailwind.png",
      skill7: "/images/Skills/C.png",
      skill8: "/images/Skills/py.png",
      skill9: "/images/Skills/ts.png",
      skill10: "/images/Skills/Apexchart.png",
      skill11: "/images/Skills/mongo.png",
      skill12: "/images/Skills/node.png",
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
