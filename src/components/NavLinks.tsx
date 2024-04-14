import React from "react";
import { HashLink } from "react-router-hash-link";

interface NavLink {
	text: string;
	to: string;
	smooth?: boolean;
}

const NavLinks: React.FC = () => {
	const links: NavLink[] = [
		{ text: "About Me", to: "/#about", smooth: true },
		{ text: "Services", to: "/#services", smooth: true },
		{ text: "Past Work", to: "/#past-work", smooth: true },
		{ text: "Testimonials", to: "/#testimonials", smooth: true },
		{ text: "Contact Me", to: "/contact#contact" },
	];

	return (
		<>
			{links.map(({ text, to, smooth }) => (
				<HashLink
					key={to}
					className="px-4 bg-lightText font-bold  hover:text-green-500"
					smooth={smooth}
					to={to}
				>
					{text}
				</HashLink>
			))}
		</>
	);
};

export default NavLinks;
