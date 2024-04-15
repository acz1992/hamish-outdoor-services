import TestimonialCarousel from "../components/TestimonialCarousel";

const Testimonials: React.FC = () => {
	return (
		<div className="pb-4 bg-gray-100" id="testimonials">
			<section data-aos="fade-up">
				<div className="mt-4 p-4">
					<h2 className="my-2 text-center text-3xl text-primaryGreen uppercase font-bold">
						Testimonials
					</h2>
					<div className="flex justify-center">
						<div className="w-24 border-b-4 border-primaryGreen"></div>
					</div>
					<h2 className="mt-4 mx-12 text-center text-xl lg:text-2xl font-semibold text-primaryGreen">
						Here is what past clients had to say
					</h2>
				</div>

				<div className="pt-4" data-aos="fade-in" data-aos-delay="600">
					<TestimonialCarousel />
				</div>
			</section>
		</div>
	);
};

export default Testimonials;
