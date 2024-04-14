import React from "react";
import { HashLink } from "react-router-hash-link";

interface NavLink {
	text: string;
	to: string;
	smooth: boolean;
	onClick?: () => void; // Add onClick prop
}

interface NavLinksProps {
	setIsOpen?: React.Dispatch<React.SetStateAction<boolean>>; // Define prop for setIsOpen
}

const NavLinks: React.FC<NavLinksProps> = ({ setIsOpen }) => {
	const links: NavLink[] = [
		{ text: "About Me", to: "/#about", smooth: true },
		{ text: "Services", to: "/#services", smooth: true },
		{ text: "Past Work", to: "/#past-work", smooth: true },
		{ text: "Testimonials", to: "/#testimonials", smooth: true },
		{ text: "Contact Me", to: "/#contact", smooth: true },
	];

	const handleClick = () => {
		if (setIsOpen) {
			setIsOpen(false);
		}
	};

	return (
		<>
			{links.map(({ text, to, smooth }) => (
				<HashLink
					key={to}
					className="px-4 bg-white font-bold text-2xl lg:text-base hover:text-gray-500"
					smooth={smooth}
					to={to}
					onClick={handleClick}
				>
					{text}
				</HashLink>
			))}
		</>
	);
};

export default NavLinks;
