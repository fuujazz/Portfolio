import React, { useRef, useState } from "react";
import { MdOutlineEmail } from "react-icons/md";
import { BsWhatsapp } from "react-icons/bs";
import emailjs from "emailjs-com";
import "./contact.css";

const Contact = () => {
	const formRef = useRef<HTMLFormElement | null>(null);

	const [isLoading, setIsLoading] = useState<true | false>(false);

	const sendEmail = (e: React.SyntheticEvent) => {
		setIsLoading((prevState) => !prevState);
		e.preventDefault();

		if (formRef.current) {
			emailjs
				.sendForm(
					"service_ug25fyr",
					"template_ti4zf7f",
					formRef.current,
					"odPkWuGw6qP0zLPJ4"
				)
				.then(
					(result) => {
						console.log(result.text);
					},
					(error) => {
						console.log(error.text);
					}
				)
				.finally(() => {
					setIsLoading((prevState) => !prevState);
				});
			formRef.current.reset();
		}
	};

	return (
		<section id="contact">
			<h5 id="contact__h5">Get In Touch</h5>
			<h2 id="contact__h2">Contact Me</h2>

			<div className="container contact__container">
				<div className="contact__options">
					<article className="contact__option">
						<MdOutlineEmail className="contact__option-icon" />
						<h4>Email</h4>
						<h5>yusufkaganercelik@gmail.com</h5>
						<a href="mailto:yusufkaganercelik@gmail.com" target="_blank">
							Send A Message
						</a>
					</article>

					{/* <article className="contact__option">
						<BsWhatsapp className="contact__option-icon" />
						<h4>Twitter</h4>

						<a
							href="https://twitter.com/messages/compose?recipient_id=3805104374"
							target="_blank"
						>
							https://twitter.com/fuufumee
						</a>
					</article> */}
				</div>
				{/* End of Contact Options */}

				<form
					ref={formRef}
					onSubmit={(e: React.SyntheticEvent) => sendEmail(e)}
					id="contact-form"
				>
					<input
						type="text"
						name="name"
						placeholder="Your Full Name"
						required
					/>
					<input type="email" name="email" placeholder="Your Email" required />
					<textarea name="message" rows={7} placeholder="Your Message" required>
						{" "}
					</textarea>
					<button type="submit" className="btn-grad-talk">
						Send a Message
					</button>
				</form>
			</div>
		</section>
	);
};

export default Contact;
