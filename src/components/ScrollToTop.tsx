import React, { useEffect, ReactNode } from "react";
// import { useLocation } from "react-router-dom";

const ScrollToTop: React.FC<{ children: ReactNode }> = (props) => {
	// const location = useLocation();
	useEffect(() => {
		window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
	}, []);

	return <>{props.children}</>;
};

export default ScrollToTop;
