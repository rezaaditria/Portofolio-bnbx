import React from "react";

const Boxcustom = ({ items }) => {
  return (
    <div className="mx-32">
      <div className="grid sm:grid-cols-4 md:grid-cols-8 lg:grid-cols-12 gap-3 px-5 py-0 ">
        {items.map((intro, index) => (
          <div
            key={index}
            className={`bg-white opacity-80 rounded-tl-[30px] rounded-tr-[10px] rounded-br-[30px] rounded-bl-[10px] p-4 text-center
            ${intro.size}`}
          >
            <img src={intro.image} className="w-full h-auto rounded-3xl" />
            <h1 className="text-md text-black text-start font-bold mt-4 ml-10 ">
              {intro.introduce}
            </h1>
            <h3 className="text-4xl text-[#FF204E] text-start font-bold mt-4 ml-10 ">
              {intro.title}
            </h3>
            <h3 className="text-xl text-black text-start font-semibold mt-6 ml-10">
              {intro.subtitle}
            </h3>
            <p className="text-gray-600 mt-2">{intro.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Boxcustom;
