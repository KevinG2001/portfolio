import navStyles from "../../Styling/global/navStyles.module.scss";

function Navbar() {
	return (
		<nav className={navStyles.navContainer}>
			<div className={navStyles.navBadge}>K1</div>
			<div className={navStyles.navSign}>Now Boarding</div>
			<div className={navStyles.navLinks}>
				<div className={navStyles.navLink}>Home</div>
				<div className={navStyles.navLink}>About</div>
				<div className={navStyles.navLink}>Projects</div>
				<div className={navStyles.navLink}>Another</div>
			</div>
		</nav>
	);
}

export default Navbar;
