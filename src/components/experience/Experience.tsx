import { BsPatchCheckFill } from "react-icons/bs";
import "./experience.css";
import { motion } from "framer-motion";

const container = {
	hidden: { opacity: 0 },
	show: {
		opacity: 1,
		transition: {
			duration: 1,
			when: "beforeChildren",
			staggerChildren: 0.3,
		},
	},
};

const item = {
	hidden: { opacity: 0 },
	show: { opacity: 1 },
};

const Experience = () => {
	return (
		<motion.section
			id="experience"
			initial="hidden"
			variants={container}
			whileInView="show"
			viewport={{ once: true }}
		>
			<h5>What Skills I Have</h5>
			<h2>My Experience</h2>

			<motion.div className="container experience__container" variants={item}>
				<motion.div
					className="experience__frontend"
					variants={container}
					initial="hidden"
					whileInView="show"
					viewport={{ once: true }}
				>
					<h3>Frontend Development</h3>
					<div className="experience__content">
						<motion.article className="experience__details" variants={item}>
							<BsPatchCheckFill className="experience__details-icons" />
							<div>
								<h4>HTML</h4>
								<small className="text-light">Experienced</small>
							</div>
						</motion.article>
						<motion.article className="experience__details" variants={item}>
							<BsPatchCheckFill className="experience__details-icons" />
							<div>
								<h4>CSS</h4>
								<small className="text-light">Experienced</small>
							</div>
						</motion.article>
						<motion.article className="experience__details" variants={item}>
							<BsPatchCheckFill className="experience__details-icons" />
							<div>
								<h4>Javascript</h4>
								<small className="text-light">Experienced</small>
							</div>
						</motion.article>
						<motion.article className="experience__details" variants={item}>
							<BsPatchCheckFill className="experience__details-icons" />
							<div>
								<h4>React</h4>
								<small className="text-light">Experienced</small>
							</div>
						</motion.article>
						<motion.article className="experience__details" variants={item}>
							<BsPatchCheckFill className="experience__details-icons" />
							<div>
								<h4>Redux</h4>
								<small className="text-light">Basic</small>
							</div>
						</motion.article>
						<motion.article className="experience__details" variants={item}>
							<BsPatchCheckFill className="experience__details-icons" />
							<div>
								<h4>Context/Reducer</h4>
								<small className="text-light">Experienced</small>
							</div>
						</motion.article>
						<motion.article className="experience__details" variants={item}>
							<BsPatchCheckFill className="experience__details-icons" />
							<div>
								<h4>Tailwind/DaisyUI</h4>
								<small className="text-light">Experienced</small>
							</div>
						</motion.article>
						<motion.article className="experience__details" variants={item}>
							<BsPatchCheckFill className="experience__details-icons" />
							<div>
								<h4>Three Fiber</h4>
								<small className="text-light">Basic</small>
							</div>
						</motion.article>
						<motion.article className="experience__details" variants={item}>
							<BsPatchCheckFill className="experience__details-icons" />
							<div>
								<h4>Framer Motion</h4>
								<small className="text-light">Basic</small>
							</div>
						</motion.article>
					</div>
				</motion.div>

				<motion.div
					className="experience__backend"
					variants={container}
					initial="hidden"
					whileInView="show"
					viewport={{ once: true }}
				>
					<h3>Backend Development</h3>
					<div className="experience__content">
						<motion.article className="experience__details" variants={item}>
							<BsPatchCheckFill className="experience__details-icons" />
							<div>
								<h4>NodeJS</h4>
								<small className="text-light">Experienced</small>
							</div>
						</motion.article>
						<motion.article className="experience__details" variants={item}>
							<BsPatchCheckFill className="experience__details-icons" />
							<div>
								<h4>Solidity</h4>
								<small className="text-light">Experienced</small>
							</div>
						</motion.article>
						<motion.article className="experience__details" variants={item}>
							<BsPatchCheckFill className="experience__details-icons" />
							<div>
								<h4>Chai/Mocha</h4>
								<small className="text-light">Basic</small>
							</div>
						</motion.article>
						<motion.article className="experience__details" variants={item}>
							<BsPatchCheckFill className="experience__details-icons" />
							<div>
								<h4>Truffle</h4>
								<small className="text-light">Experienced</small>
							</div>
						</motion.article>
						<motion.article className="experience__details" variants={item}>
							<BsPatchCheckFill className="experience__details-icons" />
							<div>
								<h4>Hardhat</h4>
								<small className="text-light">Mid-Level</small>
							</div>
						</motion.article>
						<motion.article className="experience__details" variants={item}>
							<BsPatchCheckFill className="experience__details-icons" />
							<div>
								<h4>PHP/Laravel</h4>
								<small className="text-light">Mid-Level</small>
							</div>
						</motion.article>
						<motion.article className="experience__details" variants={item}>
							<BsPatchCheckFill className="experience__details-icons" />
							<div>
								<h4>MySQL</h4>
								<small className="text-light">Mid-Level</small>
							</div>
						</motion.article>
						<motion.article className="experience__details" variants={item}>
							<BsPatchCheckFill className="experience__details-icons" />
							<div>
								<h4>MongoDB</h4>
								<small className="text-light">Mid-Level</small>
							</div>
						</motion.article>
					</div>
				</motion.div>
				<motion.div
					className="experience__soft"
					variants={container}
					initial="hidden"
					whileInView="show"
					viewport={{ once: true }}
				>
					<h3>Soft Skills</h3>
					<div className="experience__content">
						<motion.article className="experience__details" variants={item}>
							<BsPatchCheckFill className="experience__details-icons" />
							<div>
								<h4>Documentation</h4>
							</div>
						</motion.article>
						<motion.article className="experience__details" variants={item}>
							<BsPatchCheckFill className="experience__details-icons" />
							<div>
								<h4>Problem solving</h4>
							</div>
						</motion.article>
						<motion.article className="experience__details" variants={item}>
							<BsPatchCheckFill className="experience__details-icons" />
							<div>
								<h4>Communication</h4>
							</div>
						</motion.article>
						<motion.article className="experience__details" variants={item}>
							<BsPatchCheckFill className="experience__details-icons" />
							<div>
								<h4>Approachability and Helpfulness</h4>
							</div>
						</motion.article>
						<motion.article className="experience__details" variants={item}>
							<BsPatchCheckFill className="experience__details-icons" />
							<div>
								<h4>Adaptability</h4>
							</div>
						</motion.article>
						<motion.article className="experience__details" variants={item}>
							<BsPatchCheckFill className="experience__details-icons" />
							<div>
								<h4>Self Learning</h4>
							</div>
						</motion.article>
					</div>
				</motion.div>
				<motion.div
					className="experience__others"
					variants={container}
					initial="hidden"
					whileInView="show"
					viewport={{ once: true }}
				>
					<h3>Others</h3>
					<div className="experience__content">
						<motion.article className="experience__details" variants={item}>
							<BsPatchCheckFill className="experience__details-icons" />
							<div>
								<h4>Git</h4>
								<small className="text-light">Mid-Level</small>
							</div>
						</motion.article>
						<motion.article className="experience__details" variants={item}>
							<BsPatchCheckFill className="experience__details-icons" />
							<div>
								<h4>Docker</h4>
								<small className="text-light">Mid-Level</small>
							</div>
						</motion.article>
						<motion.article className="experience__details" variants={item}>
							<BsPatchCheckFill className="experience__details-icons" />
							<div>
								<h4>Firebase</h4>
								<small className="text-light">Mid-Level</small>
							</div>
						</motion.article>
						<motion.article className="experience__details" variants={item}>
							<BsPatchCheckFill className="experience__details-icons" />
							<div>
								<h4>Ganache</h4>
								<small className="text-light">Experienced</small>
							</div>
						</motion.article>
						<motion.article className="experience__details" variants={item}>
							<BsPatchCheckFill className="experience__details-icons" />
							<div>
								<h4>TDD</h4>
								<small className="text-light">Basic</small>
							</div>
						</motion.article>
						<motion.article className="experience__details" variants={item}>
							<BsPatchCheckFill className="experience__details-icons" />
							<div>
								<h4>SOLID</h4>
								<small className="text-light">Mid-Level</small>
							</div>
						</motion.article>
						<motion.article className="experience__details" variants={item}>
							<BsPatchCheckFill className="experience__details-icons" />
							<div>
								<h4>Clean Code</h4>
								<small className="text-light">Experienced</small>
							</div>
						</motion.article>
						<motion.article className="experience__details" variants={item}>
							<BsPatchCheckFill className="experience__details-icons" />
							<div>
								<h4>Design Patterns</h4>
								<small className="text-light">Basic</small>
							</div>
						</motion.article>
						<motion.article className="experience__details" variants={item}>
							<BsPatchCheckFill className="experience__details-icons" />
							<div>
								<h4>Agile Methodologies</h4>
								<small className="text-light">Mid-Level</small>
							</div>
						</motion.article>
					</div>
				</motion.div>
			</motion.div>
		</motion.section>
	);
};

export default Experience;
