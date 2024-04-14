import React from "react";
import { HashLink } from "react-router-hash-link";

/* interface NavLink {
	text: string;
	to: string;
	smooth: boolean;
	onClick?: () => void; // Add onClick prop
} */

interface NavLinksProps {
	setIsOpen?: React.Dispatch<React.SetStateAction<boolean>>; // Define prop for setIsOpen
}

const NavLinks: React.FC<NavLinksProps> = ({ setIsOpen }) => {
	/* 	const links: NavLink[] = [
		{ text: "About Me", to: "/#about", smooth: true },
		{ text: "Services", to: "/#services", smooth: true },
		{ text: "Past Work", to: "/#past-work", smooth: true },
		{ text: "Testimonials", to: "/#testimonials", smooth: true },
		{ text: "Contact Me", to: "/#contact", smooth: true },
	]; */

	const handleClick = () => {
		if (setIsOpen) {
			setIsOpen(false);
		}
	};

	return (
		<>
			{/* 		{links.map(({ text, to, smooth }) => (
				<HashLink
					key={to}
					className="px-4 bg-white font-bold text-2xl lg:text-base relative w-max group"
					smooth={smooth}
					to={to}
					onClick={handleClick}
				>
					{text}
					<span className="absolute left-0 -bottom-1 w-full h-1 transition-all bg-primaryGreen block group=-hover:h-full"></span>
				</HashLink>
			))} */}

			<HashLink
				key={"/#about"}
				className="bg-white font-bold text-2xl lg:text-base relative w-max group/about "
				smooth={true}
				to={"/#about"}
				onClick={handleClick}
			>
				{"About Me"}
				<span className="absolute left-0 -bottom-1 w-full h-1 transition-all bg-primaryGreen block group-hover/about:h-full"></span>
			</HashLink>
			<HashLink
				key={"/#services"}
				className="bg-white font-bold text-2xl lg:text-base relative w-max group/services "
				smooth={true}
				to={"/#services"}
				onClick={handleClick}
			>
				{"Services"}
				<span className="absolute left-0 -bottom-1 w-full h-1 transition-all bg-primaryGreen block group-hover/services:h-full"></span>
			</HashLink>
			<HashLink
				key={"/#past-work"}
				className="bg-white font-bold text-2xl lg:text-base relative w-max group/past-work "
				smooth={true}
				to={"/#past-work"}
				onClick={handleClick}
			>
				{"Past Work"}
				<span className="absolute left-0 -bottom-1 w-full h-1 transition-all bg-primaryGreen block group-hover/past-work:h-full"></span>
			</HashLink>
			<HashLink
				key={"/#testimonials"}
				className="bg-white font-bold text-2xl lg:text-base relative w-max group/testimonials"
				smooth={true}
				to={"/#testimonials"}
				onClick={handleClick}
			>
				{"Testimonials"}
				<span className="absolute left-0 -bottom-1 w-full h-1 transition-all bg-primaryGreen block group-hover/testimonials:h-full"></span>
			</HashLink>
			<HashLink
				key={"/#tcontact"}
				className="bg-white font-bold text-2xl lg:text-base relative w-max group/contact "
				smooth={true}
				to={"/#contact"}
				onClick={handleClick}
			>
				{"Contact Me"}
				<span className="absolute left-0 -bottom-1 w-full h-1 transition-all bg-primaryGreen block group-hover/contact:h-full"></span>
			</HashLink>
		</>
	);
};

export default NavLinks;
