import React from "react";
import contact from "../assets/contact.jpeg";

const Contact = () => {
	return (
		// <div name="contact" className="w-full md:h-screen bg-iDarkBlue text-iGray">
		//     <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto md:h-full">
		//         <div className="pb-8">
		//             <p className=" text-4xl font-bold inline border-b-4 border-gray-500">Contact</p>
		//             <p className="py-6">Submit the form below to get in touch with me</p>
		//         </div>

		//         <div className="flex justify-center items-center">
		//             <form action="https://getform.io/f/aa8fe967-2d8d-45df-bf17-96a3022578e9"  method="POST" className="flex flex-col w-full md:w-1/2">
		//                 <input type="text" name="name" placeholder="Enter your name" className="p-2 bg-transparent border-2 rounded-md text-iGray focus:outline-none"/>
		//                 <input type="text" name="email" placeholder="Enter your email" className="my-4 p-2 bg-transparent border-2 rounded-md text-iGray focus:outline-none"/>
		//                 <textarea name="message" placeholder="Enter your message" rows="10" className=" p-2 bg-transparent border-2 rounded-md text-iGray focus:outline-none"></textarea>
		//                 <button className="text-iGray bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300"> Let's talk</button>
		//             </form>
		//         </div>
		//     </div>
		// </div>
		<section class="ezy__contact1 light py-10 md:py-14 bg-iDarkBlue flex flex-row justify-center text-white overflow-hidden">
			<div class="container px-4 relative">
				<div class="grid grid-cols-12 py-12">
					<div class="col-span-12 lg:col-span-6 mb-4 lg:mb-0">
						<div class="h-full flex items-center">
							<img
								// src="https://cdn.easyfrontend.com/pictures/contact/contact_1.png"
                                src={contact}
								alt=""
								class="max-w-full h-[90%] relative z-[2] rounded-tr-[100px] rounded-br rounded-bl-[100px] mx-auto"
							/>
						</div>
					</div>
					<div class="col-span-12 lg:col-span-6 xl:col-span-5 px-6 relative">
						<div class="absolute top-0 left-0 lg:-left-[20%] right-0 bottom-0 bg-iGreen rounded-tl rounded-tr-[30px] rounded-br-[150px] rounded-bl-[50px]"></div>

						<div class="relative rounded my-12 py-6">
							<div class="mb-12">
								<h2 class="text-2xl leading-none font-bold md:text-[45px] mb-4">Contact Us</h2>
								<p class="text-lg mb-0">We list your menu online, help you process orders.</p>
							</div>
							<form action="https://getform.io/f/aa8fe967-2d8d-45df-bf17-96a3022578e9"  method="POST" class="md:pr-12">
								<div class="mb-4">
									<input
										type="text"
                                        name="name"
										class="min-h-[48px] leading-[48px] bg-iDarkBlue border border-transparent rounded-xl focus:outline-none focus:border focus:border-[#86b7fe] w-full px-5"
										placeholder="Enter Name"
									/>
								</div>
								<div class="mb-4">
									<input
										type="email"
                                        name="email"
										class="min-h-[48px] leading-[48px] bg-iDarkBlue border border-transparent rounded-xl focus:outline-none focus:border focus:border-[#86b7fe] w-full px-5"
										placeholder="Enter Email"
									/>
								</div>
								<div class="mb-4">
									<textarea
										name="message"
										class="min-h-[48px] leading-[48px] bg-iDarkBlue border border-transparent rounded-xl focus:outline-none focus:border focus:border-[#86b7fe] w-full px-5"
										placeholder="Enter Message"
										rows="4"></textarea>
								</div>
								<div class="text-end">
									<button
										type="submit"
										class="bg-iOrange hover:bg-opacity-90 px-10 py-3 rounded-md mb-4">
										Send
									</button>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Contact;
