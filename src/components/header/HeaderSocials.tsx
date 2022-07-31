import { BsLinkedin, BsGithub, BsTwitter } from "react-icons/bs";

const HeaderSocials = () => {
	return (
		<div className="header__socials">
			<a
				href="https://www.linkedin.com/in/yusuf-ka%C4%9Fan-er%C3%A7elik-8027b976/"
				target="_blank"
			>
				<BsLinkedin size="36px" />
			</a>
			<a href="https://github.com/fuujazz" target="_blank">
				<BsGithub size="36px" />
			</a>
			<a href="https://twitter.com/fuufumee" target="_blank">
				<BsTwitter size="36px" />
			</a>
		</div>
	);
};

export default HeaderSocials;
