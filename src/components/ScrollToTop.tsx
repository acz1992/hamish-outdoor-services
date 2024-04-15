import { useEffect, ReactNode } from "react";

const ScrollToTop: React.FC<{ children: ReactNode }> = (props) => {
	useEffect(() => {
		window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
	}, []);

	return <>{props.children}</>;
};

export default ScrollToTop;
