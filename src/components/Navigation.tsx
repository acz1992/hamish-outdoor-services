import React, { useState, useEffect } from "react";
import NavLinks from "./NavLinks";
import { HashLink } from "react-router-hash-link";

const Navigation: React.FC = () => {
	const [top, setTop] = useState<boolean>(true);
	const [showHashLink, setShowHashLink] = useState<boolean>(true);
	const [isOpen, setIsOpen] = useState<boolean>(false);

	const handleClick = () => {
		setIsOpen(!isOpen);
	};

	useEffect(() => {
		const scrollHandler = () => {
			const heroSection = document.getElementById("hero-section");
			if (heroSection) {
				const offset = heroSection.getBoundingClientRect().bottom;
				setShowHashLink(window.pageYOffset > offset);
				setTop(window.pageYOffset > 10);
			}
		};
		window.addEventListener("scroll", scrollHandler);
		return () => window.removeEventListener("scroll", scrollHandler);
	}, []);

	return (
		<nav
			className={`fixed top-0 w-full z-30 transition duration-300 ease-in-out mb-16 ${
				!top && "shadow-lg"
			}`}
		>
			<div className="flex flex-row bg-lightText justify-between items-center py-2">
				<div className="flex flex-row justify-center md:px-12 md:mx-12 items-center text-center ">
					{showHashLink && (
						<HashLink
							smooth
							to="/#hero-section"
							data-aos="fade"
							data-aos-duration="800"
						>
							<h1 className="font-semibold text-left md:text-2xl text-darkText">
								Hamish's Outdoor Services
							</h1>
						</HashLink>
					)}
				</div>
				<div className="group flex flex-col items-center">
					<button
						className="p-2 rounded-lg lg:hidden text-darkText"
						onClick={handleClick}
					>
						<svg
							className="h-6 w-6 fill-current"
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 24 24"
						>
							{isOpen ? (
								<path
									fillRule="evenodd"
									clipRule="evenodd"
									d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
								/>
							) : (
								<path
									fillRule="evenodd"
									d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
								/>
							)}
						</svg>
					</button>
					<div className="hidden space-x-6 lg:inline-block p-5">
						<NavLinks />
					</div>
					<div
						className={`bg-lightText fixed transition-transform duration-300 ease-in-out transit flex justify-center left-0 w-full h-auto rounded-md p-24 bg-white lg:hidden shadow-xl top-14  ${
							isOpen ? "block" : "hidden"
						}`}
					>
						<div className="flex flex-col space-y-6">
							<NavLinks />
						</div>
					</div>
				</div>
			</div>
		</nav>
	);
};

export default Navigation;
