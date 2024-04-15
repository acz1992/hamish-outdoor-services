import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const facebookReviewUrls = [
	"https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fclare.odonoghue3%2Fposts%2Fpfbid0f6mdRXoekhXVq2NDjquQUhwVC2tm6Aw2zyRxP1WNQfL3nLVMwuwbZ5qX9udrzZo6l&show_text=true&width=500",
	"https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fjonny.rae.5876%2Fposts%2Fpfbid02N91CDScYjLEzRBraY2fAXJ5rDxtrS1DPLsrE1gSTwjdtfpVrBGp1kDViutJLBpAHl&show_text=true&width=500",
	"https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fpermalink.php%3Fstory_fbid%3Dpfbid0CLTUoaN14vi7BzbN5bm2rr6ow6VZfXBZRR6ngnz7vXoLxFe6Z7PTzGvdaLm3yE8El%26id%3D100009090249883&show_text=true&width=500",
	"https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fjosh.ord.14%2Fposts%2Fpfbid0YVfH7LZACCE1qdnVhNRLk287cNYUWXSZh67iaQWxCw6i34KWWB8415RDeJZ1YDHEl&show_text=true&width=500",
	"https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Flouis.richards.58%2Fposts%2Fpfbid036H1wzwpviMpJWg1GQPh1P9CvBD7eoJG6F64dm3wRnYE6NK4vrZNTnb2EDYp17fcil&show_text=true&width=500",
];

const TestimonialCarousel = () => {
	return (
		<Carousel
			additionalTransfrom={0}
			arrows={false}
			autoPlay
			autoPlaySpeed={3000}
			centerMode={false}
			customTransition="transform 1000ms ease-in-out"
			containerClass="testimonial-carousel"
			dotListClass=""
			draggable
			focusOnSelect={false}
			infinite
			itemClass=""
			keyBoardControl
			minimumTouchDrag={80}
			pauseOnHover
			renderArrowsWhenDisabled={false}
			renderButtonGroupOutside={false}
			renderDotsOutside={true}
			responsive={{
				desktop: {
					breakpoint: {
						max: 3000,
						min: 1024,
					},
					items: 1,
					partialVisibilityGutter: 40,
				},
				mobile: {
					breakpoint: {
						max: 464,
						min: 0,
					},
					items: 1,
					partialVisibilityGutter: 30,
				},
				tablet: {
					breakpoint: {
						max: 1024,
						min: 464,
					},
					items: 1,
					partialVisibilityGutter: 30,
				},
			}}
			rewind={false}
			rewindWithAnimation={false}
			rtl={false}
			shouldResetAutoplay
			showDots={false}
			sliderClass=""
			slidesToSlide={1}
			swipeable
		>
			{facebookReviewUrls.map((url, index) => (
				<iframe
					key={index}
					src={url}
					className="w-full md:w-1/2"
					height="185"
					/* style={{}} */
					scrolling="no"
					frameBorder="0"
					allowFullScreen={true}
					allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
				></iframe>
			))}
		</Carousel>
	);
};

export default TestimonialCarousel;
