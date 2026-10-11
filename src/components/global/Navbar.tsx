import { useEffect, useState } from "react";
import navStyles from "../../Styling/global/navStyles.module.scss";
const displayTextOptions = [
	"Now Boaring",
	"Software Developer",
	"Looking for work",
];

function Navbar() {
	const [open, setOpen] = useState(false);
	const closeMenu = () => setOpen(false);

	const [index, setIndex] = useState(0);

	useEffect(() => {
		const id = setInterval(() => {
			setIndex((i) => (i + 1) % displayTextOptions.length);
		}, 2000);
		return () => clearInterval(id);
	}, []);

	const displayText = displayTextOptions[index];

	return (
		<nav className={navStyles.navContainer}>
			<div className={navStyles.navBadge}>K1</div>
			<div className={navStyles.navSign}>{displayText}</div>

			<div
				className={`${navStyles.navLinks} ${open ? navStyles.navLinksOpen : ""}`}
			>
				<a href="#home" className={navStyles.navLink} onClick={closeMenu}>
					Home
				</a>
				<a
					href="#mainprojects"
					className={navStyles.navLink}
					onClick={closeMenu}
				>
					Main Projects
				</a>
				<a href="#projects" className={navStyles.navLink} onClick={closeMenu}>
					Projects
				</a>
				<a href="#about" className={navStyles.navLink} onClick={closeMenu}>
					About
				</a>
			</div>

			<button
				className={navStyles.navBurger}
				aria-label="Toggle menu"
				aria-expanded={open}
				onClick={() => setOpen(!open)}
			>
				{open ? "✕" : "☰"}
			</button>
		</nav>
	);
}

export default Navbar;
