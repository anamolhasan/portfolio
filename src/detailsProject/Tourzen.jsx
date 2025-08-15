import React from "react";
import smallTourzen from "../assets/tourzenlightmode.jpg";

const Tourzen = () => {
  return (
    <div>
      <section className="caveat-write">
        <div className="container flex flex-col justify-center p-6 mx-auto md:px-16  lg:flex-row lg:justify-between">
          <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
            <div class="flex items-center gap-2">
              <span class="w-3 h-3 bg-black rounded-full"></span>
              <span class="text-lg font-light tracking-wide">PROJECT</span>
            </div>

            <h1 className="text-5xl font-bold leading-none sm:text-6xl">
              Overview
            </h1>
            <p className="mt-6 mb-8 text-lg sm:mb-12">Tourzen is a dynamic tour service application designed to help users explore and book trips to various destinations. The app provides an easy-to-use platform where users can discover different places, view detailed information about attractions, and plan their tours efficiently. By offering interactive features and a streamlined booking system, Tourzen makes trip planning simple, informative, and enjoyable.</p>
            <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
              <a
                rel="noopener noreferrer"
                href="https://tourzen-b2ebf.web.app/"
                className="px-8 py-3 text-lg font-semibold rounded bg-black text-gray-50"
              >
                Live View
              </a>
              <a
                rel="noopener noreferrer"
                href="https://github.com/anamolhasan/tourzen-client?tab=readme-ov-file"
                className="px-8 py-3 text-lg font-semibold rounded bg-black text-gray-50"
              >
              Source Code
              </a>
            </div>
          </div>
          <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128 ">
            <img
              src={smallTourzen}
              alt=""
              className="object-contain   h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128 "
            />
          </div>
        </div>
      </section>
      <div>2</div>
    </div>
  );
};

export default Tourzen;
