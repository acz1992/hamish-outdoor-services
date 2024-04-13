import React from "react";

interface ServiceCardProps {
	img?: string;
	title: string;
	description: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
	img,
	title,
	description,
}) => {
	return (
		<div className="bg-white transition-all ease-in-out duration-400 overflow-hidden text-gray-700 hover:bg-gray-500 hover:text-white rounded-lg shadow-2xl p-3 group">
			<div className="m-2 text-justify text-sm">
				<img
					alt="card img"
					className="rounded-t group-hover:scale-[1.15] transition duration-1000 ease-in-out"
					src={img}
				/>
				<h2 className="font-semibold my-4 text-2xl text-center">
					{title}
				</h2>
				<p className="text-md font-medium">{description}</p>
			</div>
		</div>
	);
};

export default ServiceCard;