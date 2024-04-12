import React from "react";
import HeroSection from "../sections/HeroSection";
import AboutMe from "../sections/AboutMe";
import Footer from "../components/Footer";
import PastWork from "../sections/PastWork";
import Testimonials from "../sections/Testimonials";
import Services from "../sections/Services";

const Home = () => {
	return (
		<>
			<HeroSection />
			<AboutMe />
			<Services />
			<PastWork />
			<Testimonials />
			<Footer />
		</>
	);
};

export default Home;
