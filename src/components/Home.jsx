import React from "react";
import ownImage from "../assets/heroImage3.jpeg";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div
      name="home"
      className="mt-10 h-screen w-full bg-gradient-to-b from-black to-gray-800 "
    >
      <div className=" ms-auto flex flex-col items-center h-full justify-center px-4 md:flex-row">
        <div className="flex flex-col justify-center items-center md:ml-20">
        <div className="flex md:hidden justify-center">
          <img
            src={ownImage}
            alt="my profile"
            className="rounded-2xl w-1/2 mb-14"
          />
        </div>
          <h2 className=" md:text-6xl font-bold text-white max-w-lg text-3xl md:mb-5 ">
            I'm a Full Stack Developer
          </h2>
          <p className="text-gray-400 py-4 max-w-lg md:mt-5">
            Dedicated software development student with a 4.0 GPA, passionate
            about creating impactful technology solutions. Demonstrated
            leadership as Vice President of SAIT’s Web Development Club, with a
            proven ability to innovate as evidenced by a top placement in P-Hack
            2022. Seeking to leverage my skills and experience to contribute to
            the tech industry.
          </p>
          <div className="md:mt-10">
            <Link
              to="portfolio"
              smooth
              duration={500}
              offset={-80}
              className=" group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
            >
              Portfolio
              <span className="group-hover:rotate-90 duration-300">
                <FaArrowRight size={20} className="ml-2" />
              </span>
            </Link>
          </div>
        </div>
        <div className="hidden md:flex">
          <img
            src={ownImage}
            alt="my profile"
            className="rounded-2xl mx-auto w-1/3 md:w-6/12"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
