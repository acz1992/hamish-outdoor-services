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
					className="rounded-t w-full aspect-square object-cover"
					src={img}
				/>
				<h4 className="font-semibold mt-2 text-2xl md:text-2xl text-center h-12">
					{title}
				</h4>
				<p className="text-lg font-medium leading-5 h-auto ">
					{description}
				</p>
				<div className="flex justify-center mb-4"></div>
			</div>
		</div>
	);
};

export default PastWorkExample;
