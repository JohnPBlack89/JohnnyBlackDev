import { ReactNode } from "react";
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
		<motion.ul className="navbar">
			{sections.map((section) => (
				<NavbarItems>{section}</NavbarItems>
			))}
		</motion.ul>
	);
}

function NavbarItems({ children }: { children: ReactNode }) {
	return <motion.button className="navbar-item">{children}</motion.button>;
}

const sections = ["Home", "Experience", "Projects", "Abilities"];
