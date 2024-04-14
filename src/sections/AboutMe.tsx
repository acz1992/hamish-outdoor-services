import { HashLink } from "react-router-hash-link";
import AboutMeGallery from "../components/AboutMeGallery";
/* import HamishWorking from "../assets/aboutMeSection/hamish-working.png";
 */
const AboutMe = () => {
	return (
		<>
			<div
				className="m-auto my-10 max-w-6xl p-2 md:p-12 h-5/6"
				id="about"
			>
				<div
					className="flex flex-col-reverse lg:flex-row d:mb-8 lg:py-8 justify-between lg:text-left"
					data-aos="fade-up"
				>
					<div className="lg:w-1/2 aspect-square flex flex-col items-center lg:mx-4 justify-center overflow-hidden">
						{/* <img
							alt="card img"
							className=" rounded-t float-right object-cover h-full hover:scale-110 transition-all duration-500 "
							src={HamishWorking}
						/> */}
						<AboutMeGallery />
					</div>
					<div
						className="flex-col my-4 text-center lg:text-left lg:my-0 lg:justify-end w-full lg:w-1/2 px-8"
						data-aos="zoom-in"
						data-aos-delay="500"
					>
						<h3 className="text-3xl text-primaryGreen font-bold">
							Orci eu lobortis elementum nibh tellus molestie nunc
							non blandit massa enim nec dui
						</h3>
						<div>
							<p className="my-3 text-xl text-main font-semibold">
								Pretium vulputate sapien nec sagittis aliquam
								malesuada bibendum arcu vitae elementum
								curabitur vitae nunc sed velit dignissim sodales
								ut
							</p>
						</div>
						<div>
							<p className="my-3 text-xl text-main font-semibold">
								Amet mattis vulputate enim nulla aliquet
								porttitor lacus luctus accumsan tortor posuere
								ac ut consequat semper viverra nam libero
							</p>
						</div>
						<HashLink
							to="/#contact"
							className="button-one text-white inline-flex items-center justify-center w-full px-6 py-2 my-4 text-lg shadow-xl rounded-2xl sm:w-auto sm:mb-0 group"
						>
							Get in touch
							<svg
								className="w-4 h-4 ml-1 group-hover:translate-x-2"
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 20 20"
								fill="currentColor"
							>
								<path
									fillRule="evenodd"
									d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
									clipRule="evenodd"
								></path>
							</svg>
						</HashLink>
					</div>
				</div>
			</div>
		</>
	);
};

export default AboutMe;
