import React from "react";

const BentoBox = ({ items }) => {
  return (
    <div className="mx-32">
      <div className="grid sm:grid-cols-4 md:grid-cols-8 lg:grid-cols-12 gap-3 px-5 py-3 ">
        {items.map((item, index) => (
          <div
            key={index}
            className={`  rounded-3xl p-4 text-center ${item.size}`}
            style={{
              backgroundColor: "rgba(255, 255, 255, 0.2)", // Transparent white background
              backdropFilter: "blur(10px)", // Blurry effect
            }}
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-auto rounded-md"
            />
            <h3 className="text-lg text-black font-semibold mt-4">
              {item.title}
            </h3>
            <p className="text-gray-600 mt-2">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BentoBox;
