import React from 'react'
import heroImage from '../assets/heroImage3.jpeg'
import {FaArrowRight} from 'react-icons/fa'
import { Link } from 'react-scroll'

const Home = () => {
  return (
    <div name="home" className="mt-10 h-screen w-full bg-gradient-to-b from-black to-gray-800 ">
      <div className=" ms-auto flex flex-col items-center h-full justify-center px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full ">
          <h2 className=" md:text-7xl font-bold text-white w-fit text-3xl  ">
            I'm a Full Stack Developer
          </h2>
          <p className="text-gray-500 py-4 max-w-md">
          Enthusiastic and highly motivated software development student with a 4.0 GPA, passionate about building innovative software solutions. Equipped with soft skills such as communication, problem-solving, and the ability to work collaboratively in a team setting. Demonstrated leadership and organizational skills as the Initiator and Vice President of the Web Development Club, successfully hosting full-house MERN workshops. Won second place in the P-Hack 2022 Hackathon at SAIT
          </p>
          <div>
            <Link to="portfolio" smooth duration={500} className=" group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer">
              Portfolio
              <span className="group-hover:rotate-90 duration-300">
                <FaArrowRight size={20} className="ml-2"/>
                </span>
            </Link>
          </div>
        </div>
        <div>
          <img src={heroImage} alt="my profile" className="rounded-2xl mx-auto w-1/3 md:w-2/3"/>
        </div>
      </div>
    </div>
  )
}

export default Home