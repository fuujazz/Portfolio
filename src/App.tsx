import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Experience from "./components/experience/Experience";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Nav from "./components/nav/Nav";
import { motion, useScroll } from "framer-motion";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { FC } from "react";

const App: FC = () => {
	const { scrollYProgress } = useScroll();

	return (
		<Router>
			<Routes>
				<Route
					path="/"
					element={
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
					}
				/>
			</Routes>
		</Router>
	);
};

export default App;
