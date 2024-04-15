import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./index.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";

import ScrollToTop from "./components/ScrollToTop";

function App() {
	useEffect(() => {
		const aos_init = () => {
			AOS.init({
				once: true,
				duration: 1000,
				easing: "ease-out-cubic",
				disable: window.innerWidth < 1024,
			});
		};

		aos_init(); // Call it directly, no need to wait for window load event

		// Clean up on component unmount
		return () => {
			AOS.refresh(); // Reset AOS when component unmounts
		};
	}, []);

	return (
		<>
			<Router>
				<ScrollToTop>
					<Routes>
						<Route path="/" element={<Home />} />
					</Routes>
				</ScrollToTop>
			</Router>
		</>
	);
}

export default App;
