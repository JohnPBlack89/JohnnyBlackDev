import { motion } from "framer-motion";
import { useRef, useState } from "react";
import Home from "./Home";
import Abilities from "./Abilities";
import Experience from "./Experience";

export default function Nav() {
	const [element, setElement] = useState({
		element: <Home />,
	});
	return (
		<motion.div className="nav">
			<NavBar setElement={setElement} />
			{element.element}
		</motion.div>
	);
}

const NavBar: React.FC<INavBarProps> = (setElement) => {
	const [position, setPosition] = useState({
		left: 0,
		width: 0,
		opacity: 0,
	});

	return (
		<motion.ul
			onMouseLeave={() => {
				setPosition((position) => ({ ...position, opacity: 0 }));
			}}
			className="navbar flex relative"
		>
			{sections.map((section) => (
				<NavbarItems
					name={section.name}
					element={section.element}
					setPosition={setPosition}
					setElement={setElement.setElement}
				/>
			))}
			<Cursor position={position} />
		</motion.ul>
	);
};

const NavbarItems: React.FC<INavBarItem> = ({
	setPosition,
	name,
	element,
	setElement,
}) => {
	const ref = useRef<HTMLLIElement>(null);
	return (
		<motion.li
			ref={ref}
			onClick={() => {
				setElement({ element: element });
			}}
			onMouseEnter={() => {
				if (!ref.current) return;

				const { width } = ref.current.getBoundingClientRect();
				setPosition({
					width,
					opacity: 1,
					left: ref.current.offsetLeft,
				});
			}}
			className="navbar-item relative" /*href={children.element}*/
		>
			{name}
		</motion.li>
	);
};

function Cursor({ position }: { position: ICursorPosition }) {
	return (
		<motion.li
			className="navbar-cursor"
			animate={{
				left: position.left,
				width: position.width,
				opacity: position.opacity,
			}}
		/>
	);
}
interface ICursorPosition {
	left: number;
	width: number;
	opacity: number;
}

interface INavItem {
	name: string;
	element: JSX.Element;
}

interface INavBarProps {
	setElement: React.Dispatch<React.SetStateAction<{ element: JSX.Element }>>;
}

interface INavBarItem extends INavItem {
	setPosition: React.Dispatch<
		React.SetStateAction<{
			left: number;
			width: number;
			opacity: number;
		}>
	>;
	setElement: React.Dispatch<React.SetStateAction<{ element: JSX.Element }>>;
}

const home: INavItem = { name: "Home", element: <Home /> };
const abilities: INavItem = { name: "Abilities", element: <Abilities /> };
const experience: INavItem = { name: "Experience", element: <Experience /> };
const sections = [home, experience, abilities];
