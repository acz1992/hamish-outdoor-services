import React from "react";
import TestimonialCarousel from "../components/TestimonialCarousel";
/* const testimonialImage: React.CSSProperties = {
	height: "10rem",
	width: "auto",
	mixBlendMode: "color-burn",
}; */

/* const reviewProfilePics = []; */

const Testimonials: React.FC = () => {
	return (
		<div className="pb-6 bg-gray-100" id="testimonials">
			<section data-aos="fade-up">
				<div className="mt-4 py-4">
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

				<div
					className="pt-4 p-10 "
					data-aos="fade-in"
					data-aos-delay="600"
				>
					{/* {reviewProfilePics.map((reviewProfilePic, index) => (
							<div
								key={index}
								style={testimonialImage}
								className="overflow-hidden flex justify-center transition-all ease-in-out opacity-50 hover:opacity-100"
							>
								<img
									src={reviewProfilePic}
									alt={`client-${index}`}
								/>
							</div>
						))} */}
					<TestimonialCarousel />
				</div>
			</section>
		</div>
	);
};

export default Testimonials;
