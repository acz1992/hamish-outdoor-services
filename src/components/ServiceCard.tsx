import { ReactNode } from "react";

interface ServiceCardProps {
	icon: ReactNode;
	title: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title }) => {
	return (
		<div className="bg-white transition-all ease-in-out duration-400 overflow-hidden text-gray-700 hover:bg-primaryGreen hover:text-white rounded-lg shadow-2xl p-3 group">
			<div className="m-2 text-justify text-sm">
				<div className="flex justify-center group-hover:scale-[1.50] transition duration-1000 ease-in-out text-2xl">
					{icon}
				</div>
				<h2 className="font-semibold my-4 text-2xl text-center">
					{title}
				</h2>
			</div>
		</div>
	);
};

export default ServiceCard;
