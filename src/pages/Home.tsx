import HeroSection from "../sections/HeroSection";
import AboutMe from "../sections/AboutMe";
import Footer from "../components/Footer";
import PastWork from "../sections/PastWork";
import Testimonials from "../sections/Testimonials";
import Services from "../sections/Services";
import Navigation from "../components/Navigation";
import Contact from "../components/Contact";

const Home = () => {
	return (
		<>
			<Navigation />
			<HeroSection />
			<AboutMe />
			<Services />
			<PastWork />
			<Testimonials />
			<Contact />
			<Footer />
		</>
	);
};

export default Home;
