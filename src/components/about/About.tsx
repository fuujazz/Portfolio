import "./about.css";
import ME from "../../assets/archery1.png";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";
import { ReactComponent as ArrowIcon } from "../../assets/arrow1.svg";
import { motion, Variants } from "framer-motion";

const container = {
	hidden: { opacity: 0 },
	show: {
		opacity: 1,
		transition: {
			duration: 1,
			when: "beforeChildren",
			staggerChildren: 1,
		},
	},
};

const item = {
	hidden: { opacity: 0 },
	show: { opacity: 1 },
};
const containerP = {
	hidden: { opacity: 0 },
	show: {
		opacity: 1,
		transition: {
			when: "beforeChildren",
			staggerChildren: 0.02,
		},
	},
};

const itemP = {
	hidden: { opacity: 0 },
	show: { opacity: 1 },
};

const About = () => {
	const letter =
		Array.from(`I'm a fresh graduate computer engineering bachelor. I've worked
							for many clients on freelance websites like Upwork and Sahibinden.
							I'm currently working on a project called Transparent Charity
							Application on Blockchain with an option to Earn NFT. I think of
							myself who can learn and adapt fast.`);
	return (
		<motion.section
			id="about"
			initial={{ opacity: 0 }}
			whileInView={{
				opacity: 1,
				transition: {
					type: "spring",
					bounce: 0.4,
				},
			}}
			viewport={{ once: true }}
		>
			<motion.div
				className="container about__container"
				variants={container}
				initial="hidden"
				animate="show"
			>
				<motion.div className="about__me" variants={item}>
					<img src={ME} alt="" className="about__me-image " />
					<div className="arrow_container">
						<ArrowIcon fill="#ad6daa" stroke="black" className="arrow_icon" />
					</div>
				</motion.div>

				<div className="about__content">
					<div id="about__title">
						<h5>Get To Know</h5>
						<h2>About me</h2>
					</div>
					<motion.div
						className="about__cards"
						variants={container}
						initial="hidden"
						animate="show"
					>
						<motion.article className="about__card" variants={item}>
							<FaAward className="about__icon" />
							<h5>Experience</h5>
							<small>1 year experience</small>
						</motion.article>
						<motion.article className="about__card" variants={item}>
							<FiUsers className="about__icon" />
							<h5>Clients</h5>
							<small>10+ worldwide on Freelance</small>
						</motion.article>
						<motion.article className="about__card" variants={item}>
							<VscFolderLibrary className="about__icon" />
							<h5>Projects</h5>
							<small>2 Ongoing 5+ Completed</small>
						</motion.article>
					</motion.div>

					<motion.div
						variants={containerP}
						initial="hidden"
						animate="show"
						id="paragraph__div"
					>
						{letter.map((letter, index) => (
							<motion.span key={index} variants={itemP}>
								{letter === " " ? "\u00A0" : letter}
							</motion.span>
						))}
					</motion.div>

					<motion.div
						style={{ width: "27rem", display: "flex", justifyContent: "end" }}
					>
						<a href="#contact" className="btn-grad-talk">
							Let's Talk
						</a>
					</motion.div>
				</div>
			</motion.div>
		</motion.section>
	);
};

export default About;
