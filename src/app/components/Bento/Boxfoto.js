import React from "react";

const Boxfoto = ({ items }) => {
  return (
    <div className="mx-32">
      <div className="grid sm:grid-cols-1 md:grid-cols-6 lg:grid-cols-12 gap-3 px-5 py-0 ">
        {items.map((photo, index) => (
          <div
            key={index}
            className={`bg-white opacity-100 rounded-tl-[30px] rounded-tr-[10px] rounded-br-[30px] 
            rounded-bl-[10px] p-4 text-center col-start-9 col-end-13 -translate-y-full
            grid-cols-12 `}
          >
            <img
              src={photo.image}
              className="w-[210px] h-auto rounded-3xl content-center"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Boxfoto;
