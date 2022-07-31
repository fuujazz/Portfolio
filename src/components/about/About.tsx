import "./about.css";
import ME from "../../assets/archery1.png";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";
import { ReactComponent as ArrowIcon } from "../../assets/arrow1.svg";
import { useEffect, useState } from "react";

const About = () => {
	const [color, setColor] = useState("#fff");
	const colors = ["#ad6daa", "#1f2559", "#FFFFF0", "#ad6daa"];

	useEffect(() => {
		setInterval(() => {
			getRandomColor();
		}, 500);
	}, []);

	const getRandomColor = () => {
		colors.forEach((item) => {
			setColor(item);
		});
	};

	return (
		<section id="about">
			<div id="about__title">
				<h5>Get To Know</h5>
				<h2>About me</h2>
			</div>

			<div className="container about__container">
				<div className="about__me">
					<img src={ME} alt="" className="about__me-image" />
					<div className="arrow_container">
						<ArrowIcon fill={color} stroke="black" className="arrow_icon" />
					</div>
				</div>

				<div className="about__content">
					<div className="about__cards">
						<article className="about__card">
							<FaAward className="about__icon" />
							<h5>Experience</h5>
							<small>1 year experience</small>
						</article>
						<article className="about__card">
							<FiUsers className="about__icon" />
							<h5>Clients</h5>
							<small>10+ worldwide on Freelance</small>
						</article>
						<article className="about__card">
							<VscFolderLibrary className="about__icon" />
							<h5>Projects</h5>
							<small>2 Ongoing 5+ Completed</small>
						</article>
					</div>

					<p>
						I'm a fresh graduate computer engineering bachelor. I've worked for
						many clients on freelance websites like Upwork and Sahibinden. I'm
						currently working on a project called Transparent Charity
						Application on Blockchain with an option to Earn NFT. I think of
						myself who can learn and adapt fast.
					</p>
					<div
						style={{ width: "20rem", display: "flex", justifyContent: "end" }}
					>
						<a href="#contact" className="btn-grad-talk">
							Let's Talk
						</a>
					</div>
				</div>
			</div>
		</section>
	);
};

export default About;
