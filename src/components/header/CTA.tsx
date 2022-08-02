import CV from "../../assets/resume.pdf";

const CTA = () => {
	return (
		<div className="cta">
			<a href={CV} className="btn-grad-download" target="_blank">
				Download CV
			</a>
			<a href="#contact" className="btn-grad-talk">
				Let's Talk
			</a>
		</div>
	);
};

export default CTA;
