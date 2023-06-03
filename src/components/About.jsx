import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>
        <p className="text-xl mt-20 ">
          Based in Calgary from 2022, full time studying Software Development
          Diploma in SAIT, will graduate on April 2024. Equiped Python, C#,
          JavaScript, HTML, CSS, at SAIT's learning, have so much passion on
          software, web and mobile app development. With 13 years Banking
          industry experience, expert in selling and customer relationship.
          Founded Sunbath Store (online grocery store) and JEFT (Herbal tea
          manufacture) in 2021. Passion in music and sport, over 20 years
          taekwondo couching experience and also singer-songwriter for
          Canton-pop music.
        </p>
        <br />
        {/* <p className="text-xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi
          perferendis optio qui est facere adipisci officia eaque cum harum
          inventore, nulla dolores doloribus obcaecati ex asperiores corporis
          quis deleniti tempora a ullam assumenda commodi repellendus suscipit
          minima? Provident nam, quos laborum, quidem officiis animi culpa
          dolores repudiandae nisi a rerum.
        </p> */}
      </div>
    </div>
  );
};

export default About;
