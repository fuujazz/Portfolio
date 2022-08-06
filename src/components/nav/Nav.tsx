import { useState, useEffect } from "react";
import { AiOutlineHome, AiOutlineUser } from "react-icons/ai";
import { BiBook, BiMessageSquareDetail } from "react-icons/bi";
import { useNavigate } from "react-router-dom";

import "./nav.css";

const Nav = () => {
	const [activeNav, setActiveNav] = useState("#");

	const navigate = useNavigate();

	const [scrollPosition, setScrollPosition] = useState(0);
	const handleScroll = () => {
		const position = window.pageYOffset;

		setScrollPosition(position);
	};

	const handleNavigate = () => {
		if (scrollPosition >= 0 && scrollPosition < 200) {
			setActiveNav("#");
		} else if (scrollPosition > 200 && scrollPosition <= 1100) {
			setActiveNav("#about");
		} else if (scrollPosition > 1100 && scrollPosition <= 3500) {
			setActiveNav("#experience");
		} else {
			setActiveNav("#contact");
		}
	};

	useEffect(() => {
		window.addEventListener("scroll", handleScroll);
		handleNavigate();

		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, [scrollPosition]);

	return (
		<nav>
			<a
				href="#"
				className={activeNav === "#" ? "active" : ""}
				onClick={() => setActiveNav("#")}
			>
				<AiOutlineHome />
			</a>
			<a
				href="#about"
				onClick={() => setActiveNav("#about")}
				className={activeNav === "#about" ? "active" : ""}
			>
				<AiOutlineUser />
			</a>
			<a
				href="#experience"
				onClick={() => setActiveNav("#experience")}
				className={activeNav === "#experience" ? "active" : ""}
			>
				<BiBook />
			</a>
			<a
				href="#contact"
				onClick={() => setActiveNav("#contact")}
				className={activeNav === "#contact" ? "active" : ""}
			>
				<BiMessageSquareDetail />
			</a>
		</nav>
	);
};

export default Nav;
