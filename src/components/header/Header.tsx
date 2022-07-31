import React from "react";
import CTA from "./CTA";
import "./header.css";
import ME from "../../assets/miakagan.png";
import HeaderSocials from "./HeaderSocials";
import { motion } from "framer-motion";

const container = {
	hidden: { opacity: 0 },
	show: {
		opacity: 1,
		transition: {
			when: "beforeChildren",
			staggerChildren: 0.2,
		},
	},
};

const item = {
	hidden: { opacity: 0 },
	show: { opacity: 1 },
};

const Header = () => {
	return (
		<header id="#">
			<motion.div
				className="container header__container"
				variants={container}
				initial="hidden"
				animate="show"
			>
				<motion.h5 variants={item}>Hello I'm</motion.h5>
				<motion.h1 variants={item}>Yusuf Kagan ERCELIK</motion.h1>
				<motion.h5 className="text-light" variants={item}>
					Front End Developer for Web and DAPP
				</motion.h5>
				<motion.div variants={item}>
					<CTA />
					<HeaderSocials />
				</motion.div>
				<motion.div className="me" variants={item}>
					<img src={ME} alt="" />
				</motion.div>

				<motion.a href="#contact" className="scroll__down" variants={item}>
					Scroll Down
				</motion.a>
			</motion.div>
		</header>
	);
};

export default Header;
