import React from "react";
import PastWorkExample from "../components/PastWorkExample";
/* import img from "../assets/services/xxx.xx";
import img2 from "../assets/services/xxx.xx";
import img3 from "../assets/services/xxx.xx";
import img4 from "../assets/services/xxx.xx"; */

interface PastWork {
	title: string;
	description: string;
}

const pastWorkData: PastWork[] = [
	{
		/* img: img, */
		title: "Example One of Past Work",
		description:
			"Our Business Management System is a robust and easily scalable system that streamlines business operations, increase efficiency, and ultimately drive growth and profitability for your business. With features such as employee management, finance control, and many more modules to effectively manage all aspects of a business. All data is stored in the cloud and as such it is easily accessible from all devices and from any location.",
	},
	{
		/* img: img, */
		title: "Example Two of Past Work",
		description:
			"Fermentum et sollicitudin ac orci phasellus egestas tellus rutrum tellus pellentesque eu tincidunt tortor aliquam nulla facilisi cras fermentum odio eu feugiat pretium nibh ipsum consequat nisl vel pretium lectus quam id leo in vitae turpis massa sed elementum tempus egestas sed sed risus pretium quam vulputate dignissim suspendisse in est ante in nibh mauris cursus mattis molestie a iaculis.",
	},
	{
		/* img: img, */
		title: "Example Three of Past Work",
		description:
			"Fermentum et sollicitudin ac orci phasellus egestas tellus rutrum tellus pellentesque eu tincidunt tortor aliquam nulla facilisi cras fermentum odio eu feugiat pretium nibh ipsum consequat nisl vel pretium lectus quam id leo in vitae turpis massa sed elementum tempus egestas sed sed risus pretium quam vulputate dignissim suspendisse in est ante in nibh mauris cursus mattis molestie a iaculis.",
	},
	{
		/* img: img, */
		title: "Example Four of Past Work",
		description:
			"Fermentum et sollicitudin ac orci phasellus egestas tellus rutrum tellus pellentesque eu tincidunt tortor aliquam nulla facilisi cras fermentum odio eu feugiat pretium nibh ipsum consequat nisl vel pretium lectus quam id leo in vitae turpis massa sed elementum tempus egestas sed sed risus pretium quam vulputate dignissim suspendisse in est ante in nibh mauris cursus mattis molestie a iaculis.",
	},
];

const PastWork = () => {
	return (
		<div className="my-4 py-4 bg-primaryGreen" id="past-work">
			<h2 className="my-2 text-center text-3xl  uppercase font-bold text-titleTwo">
				Examples of Past Work
			</h2>
			<div className="flex justify-center">
				<div className="w-24 border-b-4 border-titleTwo mb-8"></div>
			</div>

			<div className="px-4" data-aos="fade-down" data-aos-delay="600">
				<div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
					{pastWorkData.map((pastWork, index) => (
						<PastWorkExample
							/* img={pastWork.img} */
							key={index}
							title={pastWork.title}
							description={pastWork.description}
						/>
					))}
				</div>
			</div>
		</div>
	);
};

export default PastWork;
