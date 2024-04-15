import PastWorkExample from "../components/PastWorkExample";
import pastWorkData from "../data/pastWorkData.json";

const PastWork = () => {
	return (
		<div className="my-4 py-10 bg-primaryGreen" id="past-work">
			<h2 className="my-2 text-center text-3xl uppercase font-bold text-titleTwo">
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
