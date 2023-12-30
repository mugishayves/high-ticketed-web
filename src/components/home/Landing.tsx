import React from "react";

const Landing = () => {
  return (
    <div className="px-5 sm:px-8 md:px-10 lg:px-16 py-32">
      <div className="w-[60%]">
        <p className="text-6xl">
          Crafting Your <span className="text-blue-500">Digital Presence</span>{" "}
          : Where <span className="text-blue-500">Ideas</span> Become{" "}
          <span className="text-blue-500">Websites</span>.
        </p>
        <p>
          Welcome to High Ticketed Web, where creativity meets technology. We
          specialize in turning your ideas into visually stunning and highly
          functional websites. Join us on the journey to create a captivating
          online presence that truly reflects the essence of your brand.
        </p>
        <button className="bg-blue-500 text-black px-10 py-2 rounded-full my-2 text-xl   hover:scale-110 transition-all duration-500">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default Landing;