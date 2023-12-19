import React from "react";
import sunbathgamescore from "../assets/portfolio/sunbathgamescore.png";
import decidophobia from "../assets/portfolio/decidophobia.png";
import portfolioWeb from "../assets/portfolio/portfolioWeb.png";
import sniperAcademy from "../assets/portfolio/sniperAcademy.png";
import xpert from "../assets/portfolio/Xpertucantwin.png";
import wordsOfWesteros from "../assets/portfolio/wordsOfWesteros.png";

const Portfolio = () => {
  const portfolio = [
    {
      id: 1,
      src: sunbathgamescore,
      showDemo: true,
      demoURL: "https://alexltyt.github.io/SunbathGamescore/",
      gitURL:"https://github.com/alexltyt/SunbathGamescore"
    },
    {
      id: 2,
      src: xpert,
      showDemo: false,
      gitURL:"https://github.com/alexltyt/XpertYouCantWin"
    },
    {
      id: 3,
      src: wordsOfWesteros,
      showDemo: true,
      demoURL: "https://words-of-westeros-alexltyt.vercel.app/",
      gitURL:"https://github.com/alexltyt/WordsofWesteros"
    },
    {
      id: 4,
      src: sniperAcademy,
      showDemo: false,
      gitURL:"https://github.com/alexltyt/sniperAcademy"
    },
    {
      id: 5,
      src: decidophobia,
      showDemo: true,
      demoURL: "https://alexltyt.github.io/Decidophobia/",
      gitURL:"https://github.com/alexltyt/Decidophobia"
    },
    {
      id: 6,
      src: portfolioWeb,
      showDemo: false,
      gitURL:"https://github.com/alexltyt/own-portfolio"
    },
      
  ];
  return (
    <div
      name="portfolio"
      className=" bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen"
    >
      <div className=" max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full md:h-full">
        <div className="pb-8">
          <p className=" text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
        </div>
        <div  className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
        {portfolio.map(({ id, src,showDemo,demoURL,gitURL }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center">
                {showDemo&& (
                <button 
                  className=" w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105"
                  onClick={() => window.open(demoURL, '_blank')}>
                  Demo
                </button>
                )}
                <button 
                  className=" w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105"
                  onClick={() => window.open(gitURL, '_blank')}>
                  GitHub
                </button>
              </div>
            </div>
        ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
