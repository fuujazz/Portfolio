import { BsInstagram } from "react-icons/bs";
import { TbBrandTwitter } from "react-icons/tb";
import { AiOutlineLinkedin } from "react-icons/ai";
import "./footer.css";
const Footer = () => {
	return (
		<footer>
			<a href="" className="footer__logo">
				Y Kagan
			</a>

			<ul className="permalinks">
				<li>
					<a href="#">Home</a>
				</li>
				<li>
					<a href="#about">About</a>
				</li>
				<li>
					<a href="#experience">Experience</a>
				</li>
				<li>
					<a href="#contact">Contact</a>
				</li>
			</ul>

			<div className="footer__socials">
				<a href="https://www.instagram.com/kaganercelik/" target="_blank">
					<BsInstagram size="36px" />
				</a>
				<a href="https://twitter.com/fuufumee" target="_blank">
					<TbBrandTwitter size="36px" />
				</a>
				<a
					href="https://www.linkedin.com/in/yusuf-ka%C4%9Fan-er%C3%A7elik-8027b976/"
					target="_blank"
				>
					<AiOutlineLinkedin size="36px" />
				</a>
			</div>
			<div className="footer__copyright">
				<small>&copy; Y Kagan. All rights reserved.</small>
			</div>
		</footer>
	);
};

export default Footer;
