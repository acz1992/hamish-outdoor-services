import React from "react";

interface PastWorkExampleProps {
	img?: string;
	title: string;
	description: string;
}

const PastWorkExample: React.FC<PastWorkExampleProps> = ({
	img,
	title,
	description,
}) => {
	return (
		<div className="bg-white transition-all ease-in-out duration-400  overflow-hidden text-gray-700 hover:scale-105 rounded-lg shadow-2xl p-3">
			<div className="m-2 text-justify flex flex-col items-center text-sm">
				<img
					alt="card img"
					className="rounded-t group-hover:scale-[1.15] transition duration-1000 ease-in-out"
					src={img}
				/>
				<h4 className="font-semibold my-4 text-lg md:text-2xl text-center mb-4 h-12">
					{title}
				</h4>
				<p className="text-md font-medium leading-5 h-auto md:h-48">
					{description}
				</p>
				<div className="flex justify-center my-4"></div>
			</div>
		</div>
	);
};

export default PastWorkExample;
