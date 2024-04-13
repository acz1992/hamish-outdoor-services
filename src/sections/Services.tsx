// Services.tsx
import React from "react";
import ServiceCard from "../components/ServiceCard";
/* import img from "../assets/services/xxx.xx";
import img2 from "../assets/services/xxx.xx";
import img3 from "../assets/services/xxx.xx";
import img4 from "../assets/services/xxx.xx"; */

const servicesData = [
	{
		/* img: img, */
		title: "Service One",
		description:
			"Sed egestas egestas fringilla phasellus faucibus scelerisque eleifend donec pretium vulputate sapien nec sagittis aliquam malesuada bibendum arcu vitae elementum.",
	},
	{
		/* img: img2, */
		title: "Service Two",
		description:
			"Sed egestas egestas fringilla phasellus faucibus scelerisque eleifend donec pretium vulputate sapien nec sagittis aliquam malesuada bibendum arcu vitae elementum.",
	},
	{
		/* img: img3, */
		title: "Service Three",
		description:
			"Sed egestas egestas fringilla phasellus faucibus scelerisque eleifend donec pretium vulputate sapien nec sagittis aliquam malesuada bibendum arcu vitae elementum.",
	},
	{
		/* img: img4, */
		title: "Service Four",
		description:
			"Sed egestas egestas fringilla phasellus faucibus scelerisque eleifend donec pretium vulputate sapien nec sagittis aliquam malesuada bibendum arcu vitae elementum.",
	},
];

const Services = () => {
	return (
		<div id="services" className="bg-green-600 py-12">
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
					className="px-12"
					data-aos="fade-down"
					data-aos-delay="600"
				>
					<div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
						{servicesData.map((service, index) => (
							<ServiceCard
								key={index}
								/* img={service.img} */
								title={service.title}
								description={service.description}
							/>
						))}
					</div>
				</div>
			</section>
		</div>
	);
};

export default Services;
