import PastWorkExample from "../components/PastWorkExample";
import Carpark from "../assets/pastWorkSection/carpark.jpg";
import Hut from "../assets/pastWorkSection/hut.png";
import TreeRemoval from "../assets/pastWorkSection/tree-removal.jpg";
import Hedge from "../assets/pastWorkSection/hedge-trimming.jpg";

interface PastWork {
	img: string;
	title: string;
	description: string;
}

const pastWorkData: PastWork[] = [
	{
		img: Carpark,
		title: "Carpark Resurfacing",
		description:
			"Carpark of a local business resurfaced using an exacavator to dig up the uneven ground, and a steamroller to even it out.",
	},
	{
		img: Hut,
		title: "Shepherds Hut",
		description:
			"Handmade-produced shepherds hut for a Glamping company - as per the requested specs of the client - using the best sourced materials",
	},
	{
		img: TreeRemoval,
		title: "Tree Removal",
		description:
			"We used a mobile eleveated work platform to prune the upper branches, before using a chainsaw to fell multiple trees from a property.",
	},
	{
		img: Hedge,
		title: "Hedge Trimming",
		description:
			"Using a mounted industrial hedge trimmer, we were able to give the hedges of a local squash club the tidy up they needed.",
	},
];

const PastWork = () => {
	return (
		<div className="my-4 py-10 bg-primaryGreen" id="past-work">
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
							img={pastWork.img}
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
