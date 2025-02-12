import { motion } from "framer-motion";

export default function Nav() {
	return (
		<motion.div className="nav">
			<NavBar />
		</motion.div>
	);
}

function NavBar() {
	return (
		<motion.ul className="navbar flex relative">
			{sections.map((section) => (
				<NavbarItems>{section}</NavbarItems>
			))}
		</motion.ul>
	);
}

function NavbarItems({ children }: { children: INavItem }) {
	return (
		<motion.a className="navbar-item relative" href={children.link}>
			{children.name}
		</motion.a>
	);
}
interface INavItem {
	name: string;
	link: string;
}
const home: INavItem = { name: "Home", link: "/" };
const abilities: INavItem = { name: "Abilities", link: "/abilities" };
const experience: INavItem = { name: "Experience", link: "/experience" };
const qr: INavItem = { name: "QR Code", link: "/qrcode" };
const sections = [home, experience, abilities, qr];
