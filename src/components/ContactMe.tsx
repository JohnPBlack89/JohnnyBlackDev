import { motion } from "framer-motion";
import gitLogo from "../assets/images/logos/github-mark-white.svg";
import linkedInLogo from "../assets/images/logos/LinkedIn_icon.svg";
import emailMeLogo from "../assets/images/logos/mail-142.svg";

const git: IContact = {
	imgSrc: gitLogo,
	href: "https://github.com/JohnPBlack89",
};

const linkedIn: IContact = {
	imgSrc: linkedInLogo,
	href: "https://www.linkedin.com/in/john-p-black-ii/",
};

const emailMe: IContact = {
	imgSrc: emailMeLogo,
	href: "mailto:John.P.Black89@gmail.com",
};

const contacts = [git, linkedIn, emailMe];

interface IContact {
	imgSrc: string;
	href: string;
}

export default function ContactMe() {
	return (
		<>
			<br />
			<br />
			{contacts.map((contact) => (
				<motion.a href={contact.href}>
					<motion.img
						initial={{ scale: 0 }}
						animate={{ scale: 1 }}
						transition={{ duration: 1.2 }}
						whileHover={{ scale: 1.2 }}
						src={contact.imgSrc}
						className="logo"
						alt={Object.keys({ contact })[0]}
					/>
				</motion.a>
			))}
		</>
	);
}
