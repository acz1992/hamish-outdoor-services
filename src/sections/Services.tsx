import ServiceCard from "../components/ServiceCard";
import { GiGardeningShears } from "react-icons/gi";
import { IoFlowerSharp } from "react-icons/io5";
import { FaTree } from "react-icons/fa";
import { TbFence } from "react-icons/tb";
import { FaLeaf } from "react-icons/fa";
import { GiSteamBlast } from "react-icons/gi";
import { GiEcology } from "react-icons/gi";
import { GiWoodPile } from "react-icons/gi";

const servicesData = [
	{
		icon: <GiGardeningShears />,
		title: "General Gardening",
		/* description:
			"Sed egestas egestas fringilla phasellus faucibus scelerisque eleifend donec pretium vulputate sapien nec sagittis aliquam malesuada bibendum arcu vitae elementum.", */
	},
	{
		icon: <IoFlowerSharp />,
		title: "Landscaping",
		/* description:
			"Sed egestas egestas fringilla phasellus faucibus scelerisque eleifend donec pretium vulputate sapien nec sagittis aliquam malesuada bibendum arcu vitae elementum.", */
	},
	{
		icon: <FaTree />,
		title: "Tree Removal",
		/* description:
			"Sed egestas egestas fringilla phasellus faucibus scelerisque eleifend donec pretium vulputate sapien nec sagittis aliquam malesuada bibendum arcu vitae elementum.", */
	},
	{
		icon: <TbFence />,
		title: "Fence Repair",
		/* description:
			"Sed egestas egestas fringilla phasellus faucibus scelerisque eleifend donec pretium vulputate sapien nec sagittis aliquam malesuada bibendum arcu vitae elementum.", */
	},
	{
		icon: <FaLeaf />,
		title: "Hedge Trimming",
		/* description:
			"Sed egestas egestas fringilla phasellus faucibus scelerisque eleifend donec pretium vulputate sapien nec sagittis aliquam malesuada bibendum arcu vitae elementum.", */
	},
	{
		icon: <GiSteamBlast />,
		title: "Sandblasting",
		/* description:
			"Sed egestas egestas fringilla phasellus faucibus scelerisque eleifend donec pretium vulputate sapien nec sagittis aliquam malesuada bibendum arcu vitae elementum.", */
	},
	{
		icon: <GiEcology />,
		title: "Compost Delivery",
		/* description:
			"Sed egestas egestas fringilla phasellus faucibus scelerisque eleifend donec pretium vulputate sapien nec sagittis aliquam malesuada bibendum arcu vitae elementum.", */
	},
	{
		icon: <GiWoodPile />,
		title: "Kiln Dried Logs",
		/* description:
			"Sed egestas egestas fringilla phasellus faucibus scelerisque eleifend donec pretium vulputate sapien nec sagittis aliquam malesuada bibendum arcu vitae elementum.", */
	},
];

const Services = () => {
	return (
		<div id="services" className="services py-12">
			<section data-aos="zoom-in-down">
				<div className="my-4 py-4">
					<h2 className="my-2 text-center text-3xl text-white uppercase font-bold">
						Services
					</h2>

					<div className="flex justify-center">
						<div className="w-24 border-b-4 border-white"></div>
					</div>
					<h2 className="mt-4 mx-12 text-center text-xl lg:text-2xl font-semibold text-white">
						Including but not limited to the following...{" "}
					</h2>
				</div>

				<div
					className="px-12 "
					data-aos="fade-down"
					data-aos-delay="600"
				>
					<div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
						{servicesData.map((service, index) => (
							<ServiceCard
								key={index}
								icon={service.icon}
								title={service.title}
								/* description={service.description} */
							/>
						))}
					</div>
				</div>
			</section>
		</div>
	);
};

export default Services;
