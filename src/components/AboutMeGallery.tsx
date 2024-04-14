import { useEffect, useRef, useState } from "react";
import Working from "../assets/aboutMeSection/hamish-working.png";
import Planting from "../assets/aboutMeSection/hamish-planting.png";
import HarvestTwo from "../assets/aboutMeSection/harverst2.png";
import HarvestOne from "../assets/aboutMeSection/harvest.png";
import Sheep from "../assets/aboutMeSection/sheep.png";

const images = [Working, Sheep, HarvestTwo, Planting, HarvestOne];

function AboutMeGallery() {
	const [index, setIndex] = useState(0);
	const timeoutRef = useRef<number | null>(null);

	useEffect(() => {
		const nextIndex = (index + 1) % images.length;
		timeoutRef.current = window.setTimeout(() => {
			setIndex(nextIndex);
		}, 5000);
		return () => clearTimeout(timeoutRef.current!);
	}, [index]);

	return (
		<div className="slideshow max-w-[500px] h-[500px] relative ">
			{images.map((image, i) => (
				<img
					key={i}
					src={image}
					alt={`Slideshow image ${i}`}
					className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-1000 ${
						i === index ? "opacity-100" : "opacity-0"
					}`}
				/>
			))}
		</div>
	);
}

export default AboutMeGallery;
