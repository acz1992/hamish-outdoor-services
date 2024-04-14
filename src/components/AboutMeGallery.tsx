import { useEffect, useRef, useState } from "react";

const images = [
	"https://images.unsplash.com/photo-1549396535-c11d5c55b9df?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
	"https://images.unsplash.com/photo-1550133730-695473e544be?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
	"https://images.unsplash.com/photo-1550167164-1b67c2be3973?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
];

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
		<div className="slideshow max-w-[500px] h-[500px] relative">
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
