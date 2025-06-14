import React from "react";

const Empty = () => {
  return (
    <div className="mt-10 md:mt-20 flex flex-col gap-5 md:gap-7 items-center justify-center">
      <img
        src="/empty-box.svg"
        className="h-full w-[100px] md:w-[200px] object-contain"
      />
      <p className="text-black/50">
        Nuk ka asnjë <span className="font-bold text-primary">rezultat</span>
      </p>
    </div>
  );
};

export default Empty;
