import React from "react";

const About = () => {

  return (
    <div
      name="about"
      className="w-full md:h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full md:h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>
        <p className="text-lg md:text-base md:leading-8">
          I bring with me over a decade of front-line experience in Hong Kong’s
          banking sector and a twenty-year tenure as a Taekwondo coach, during
          which I honed a diverse set of soft skills. In 2022, I embarked on a
          new chapter in Calgary, eager to demonstrate my adaptability and
          thirst for learning. I chose to dive into the realm of Software
          Development—a field completely new to me. The diploma program has been
          an intensive journey, offering a comprehensive grasp of various
          programming languages spanning from back-end to front-end development.
          This leap into IT as a beginner has been a significant challenge, yet
          my enthusiasm for technology and a strategic learning approach have
          earned me a perfect 4.0 GPA across all subjects for three consecutive
          semesters. 
          <br/><br/>
          My time at SAIT has been more than academic; I took the initiative to
          establish a Student Web Development Club named 'The Web Wizard,' where
          I proudly serve as Vice President. 'The Web Wizard' orchestrates a
          variety of events, including JavaScript and MERN workshops, and
          Hackathon competitions, enriching my understanding of North American
          work culture and fostering connections with fellow students and
          faculty.
          <br/><br/>
          I am eager to transition into the North American tech industry,
          where I intend to further my learning and make substantial
          contributions. My journey so far has proven my ability to quickly
          master new skills and adapt to various challenges. I am open and
          enthusiastic about working with any technology stack, confident in my
          capacity as a fast learner to thrive in diverse tech environments.
          This flexibility, coupled with a foundation in multiple programming
          languages, prepares me to meet the evolving needs of the industry with
          both skill and a willingness to continually grow.
        </p>
      </div>
    </div>
  );
};

export default About;
