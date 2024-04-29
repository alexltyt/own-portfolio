import React from "react";
import ownImage from "../assets/heroImage3.jpeg";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-scroll";
import { useEffect, useState } from "react";

const Home = () => {
	const [showLine0, setShowLine0] = useState(false); // <-- Here
	const [showLine1, setShowLine1] = useState(false);
	const [showLine2, setShowLine2] = useState(false);
	const [showLine3, setShowLine3] = useState(false);
	const [showLine4, setShowLine4] = useState(false);
	const [hideLine, setHideLine] = useState(false);

	useEffect(() => {
		setTimeout(() => {
			setShowLine0(true);
		}, 0); // Delay for the first line
		setTimeout(() => {
			setShowLine1(true);
		}, 1000); // Delay for the first line

		setTimeout(() => {
			setShowLine2(true);
		}, 2000); // Delay for the second line

		setTimeout(() => {
			setShowLine3(true);
		}, 3000); // Delay for the third line

		setTimeout(() => {
			setShowLine4(true);
		}, 4000); // Delay for the fourth line

		setTimeout(() => {
			setHideLine(true);
		}, 4000);
	}, []);

	return (
		<div name="home" className="mt-10 h-screen w-full bg-iDarkBlue ">
			<div className="w-screen ms-auto flex flex-col md:flex-row items-center h-full justify-center px-4 ">
				<div className="flex flex-col justify-center items-center md:ml-20 md:w-2/3 ">
					<div className="flex flex-row md:hidden justify-center">
						<img src={ownImage} alt="my profile" className="rounded-2xl w-1/2 mb-14" />
					</div>
					<div className="flex flex-col">
						<div className="text-center font-tiltWrap">
							<div className={`intro-line ${showLine0 ? "showStay" : ""}`} id="line1">
								<span className="md:text-4xl  text-iGray max-w-lg text-3xl md:mb-5">
									Hey, I'm Alex,
								</span>
							</div>
							<div className={`intro-line  ${showLine1 ? "showStay" : ""} `} id="line1">
								<span className="md:text-4xl  text-iGray max-w-lg text-3xl md:mb-5">a</span>
							</div>
							<div
								className={`intro-line  ${showLine2 ? "show" : ""} ${hideLine ? "shrink-text" : ""}`}
								id="line2">
								<span className="text-iGray text-xs md:text-2xl">
									&nbsp; Taekwondo Coach &nbsp; | &nbsp; Student &nbsp; | &nbsp; Singer Song-writer
									&nbsp; |
								</span>
							</div>
							<div
								className={`intro-line  ${showLine3 ? "show" : ""} ${hideLine ? "shrink-text" : ""}`}
								id="line3">
								<span className="text-iGray text-lg md:text-2xl">with a primary focus on &nbsp;</span>
							</div>
							<div
								className={`intro-line ${showLine4 ? "showStay" : ""} my-10 md:mt-20 md:mb-14`}
								id="line4">
								<span
									className={`text-lg md:text-2xl  text-iGray max-w-lg md:max-w-2xl  ${
										showLine4 ? "md:md-grow-text grow-text" : ""
									}`}>
									Full Stack Developer
								</span>
							</div>
						</div>
					</div>
					{/* <h2 className=" text-3xl md:text-6xl font-bold text-iGray max-w-lg md:max-w-2xl md:mb-5 ">
            Full Stack Developer
          </h2> */}
					{/* <p className="text-gray-400 py-4 max-w-lg md:max-w-3xl md:mt-5 ">
            Dedicated software development student with a 4.0 GPA, passionate
            about creating impactful technology solutions. Demonstrated
            leadership as Vice President of SAIT’s Web Development Club, with a
            proven ability to innovate as evidenced by a top placement in P-Hack
            2022. Seeking to leverage my skills and experience to contribute to
            the tech industry.
          </p> */}
					<div className="md:mt-10">
						<Link
							to="portfolio"
							smooth
							duration={500}
							offset={-80}
							className=" group text-iGray w-fit px-6 py-3 my-2 flex items-center rounded-md bg-iOrange">
							Portfolio
							<span className="group-hover:rotate-90 duration-300">
								<FaArrowRight size={20} className="ml-2" />
							</span>
						</Link>
					</div>
				</div>
				<div className="hidden md:flex">
					<img src={ownImage} alt="my profile" className="rounded-2xl mx-auto w-1/3 md:w-6/12 2xl:-ml-10" />
				</div>
			</div>
		</div>
	);
};

export default Home;
