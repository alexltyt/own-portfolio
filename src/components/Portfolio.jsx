import React from "react";
import sunbathgamescore from "../assets/portfolio/sunbathgamescore.png";
import decidophobia from "../assets/portfolio/decidophobia.png";
import portfolioWeb from "../assets/portfolio/portfolioWeb.png";
import sniperAcademy from "../assets/portfolio/sniperAcademy.png";
import xpert from "../assets/portfolio/Xpertucantwin.png";
import wordsOfWesteros from "../assets/portfolio/wordsOfWesteros.png";
import snapsettle from "../assets/portfolio/snapsettle.png";

const Portfolio = () => {
  const portfolio = [
    {
      id: 1,
      src: sunbathgamescore,
      title: "Sunbath Gamescore",
      description: "Score tracking and timer for Rummikub player",
      showDemo: true,
      demoURL: "https://alexltyt.github.io/SunbathGamescore/",
      gitURL:"https://github.com/alexltyt/SunbathGamescore"
    },
    {
      id: 2,
      src: xpert,
      title: "Xpert You Can't Win",
      description: "Tic tac toe game with an unbeatable AI",
      showDemo: false,
      gitURL:"https://github.com/alexltyt/XpertYouCantWin"
    },
    {
      id: 3,
      src: snapsettle,
      title: "SnapSettle",
      description: "Simplify the process of settling bills",
      showDemo: true,
      demoURL: "https://www.sunbathsoft.com/snapsettle/",
      gitURL:"https://github.com/alexltyt/snapsettle"
    },
    {
      id: 4,
      src: sniperAcademy,
      title: "Sniper Academy",
      description: "Sniper game built with Unity",
      showDemo: false,
      gitURL:"https://github.com/alexltyt/sniperAcademy"
    },
    {
      id: 5,
      src: decidophobia,
      title: "Decidophobia",
      description: "Decision making app for indecisive people",
      showDemo: true,
      demoURL: "https://alexltyt.github.io/Decidophobia/",
      gitURL:"https://github.com/alexltyt/Decidophobia"
    },
    {
      id: 6,
      src: portfolioWeb,
      title: "Portfolio Website",
      description: "What you are seeing right now",
      showDemo: false,
      gitURL:"https://github.com/alexltyt/own-portfolio"
    },
    {
      id: 7,
      src: wordsOfWesteros,
      title: "Words of Westeros",
      description: "Game of Thrones quote generator",
      showDemo: true,
      demoURL: "https://words-of-westeros-alexltyt.vercel.app/",
      gitURL:"https://github.com/alexltyt/WordsofWesteros"
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
        {portfolio.map(({ id, src,title,description,showDemo,demoURL,gitURL }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <p className="text-center text-sm font-extrabold p-1 tracking-wider">
                {title}
                </p>
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
              <div>
                <p className="text-center text-sm p-1">
                  {description}
                </p>
                <div className="flex items-center justify-center">
                  {showDemo&& (
                  <button 
                    className=" w-1/2 px-6 py-3 mx-4 duration-200 underline hover:scale-105"
                    onClick={() => window.open(demoURL, '_blank')}>
                    Demo
                  </button>
                  )}
                  <button 
                    className=" w-1/2 px-6 py-3 mx-4 duration-200 underline hover:scale-105"
                    onClick={() => window.open(gitURL, '_blank')}>
                    GitHub
                  </button>
                </div>
              </div>
            </div>
        ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
