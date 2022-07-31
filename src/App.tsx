import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Experience from "./components/experience/Experience";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Nav from "./components/nav/Nav";
import { motion, useScroll } from "framer-motion";

import { FC } from "react";

const App: FC = () => {
	const { scrollYProgress } = useScroll();
	return (
		<>
			<motion.div
				className="progress-bar"
				style={{ scaleX: scrollYProgress }}
			/>
			<Header />
			<Nav />
			<About />
			<Experience />

			<Contact />
			<Footer />
		</>
	);
};

export default App;
