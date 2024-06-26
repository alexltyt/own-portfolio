import React from 'react';
import html from "../assets/HTMLCSS.png";
// import css from "../assets/css.png";
import javascript from "../assets/javascript.png";
import reactImage from "../assets/reactImage.png";
import nextjs from "../assets/nextjs.png";
import c_sharp from "../assets/c_sharp.png";
import github from "../assets/github.png";
import tailwind from "../assets/tailwind.png";
import java from "../assets/java.png";
import python from "../assets/python.png";
import node from "../assets/node.png";
import unity from "../assets/unity.png";
import firebase from "../assets/firebase.png";

// import reactNative from "../assets/reactNative.png";
const Experience = () => {
    const techs = [
        {
            id: 1,
            src: html,
            title: "HTML & CSS",
            style: "shadow-orange-500"
        },
        {
            id: 2,
            src: javascript,
            title: "JavaScript",
            style: "shadow-yellow-500"
        },
        {
            id: 3,
            src: reactImage,
            title: "React & React Native",
            style: "shadow-blue-600"
        },
        {
            id: 4,
            src: github,
            title: "Github",
            style: "shadow-gray-500"
        },
        {
            id: 5,
            src: tailwind,
            title: "Tailwind",
            style: "shadow-sky-500"
        },
        {
            id: 6,
            src: nextjs,
            title: "Next JS",
            style: "shadow-black"
        },
        {
            id: 7,
            src: c_sharp,
            title: "C#",
            style: "shadow-blue-400"
        },
        {
            id: 8,
            src: java,
            title: "Java",
            style: "shadow-red-500"
        },
        {
            id: 9,
            src: python,
            title: "Python",
            style: "shadow-yellow-500"
        },
        {
            id: 10,
            src: node,
            title: "Node JS",
            style: "shadow-green-500"
        },
        {
            id: 11,
            src: firebase,
            title: "Firebase",
            style: "shadow-yellow-500"
        },
        {
            id: 12,
            src: unity,
            title: "Unity",
            style: "shadow-gray-500"
        },

    ]
  return (
    <div name="experience" className=" bg-iDarkBlue w-full md:h-screen md:my-44">
        <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full md:h-full text-iGray">
            <div>
                <p className=" text-4xl  font-bold border-b-4 border-iOrange py-1 font-tiltWrap inline">Experience</p>
                <p className=" py-6 ">These are the technologies I've worked with</p>
            </div>
            <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">

                {techs.map(({ id, src, title, style }) => (
                <div key={id} className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}>
                <img src={src} alt="" className="w-20 mx-auto"/>
                <p className="mt-4">{title}</p>
            </div>
                ))}


            </div>
        </div>
    </div>
  )
}

export default Experience