import Styles from "../Styling/global/footer.module.scss";

function Footer() {
	return (
		<div className={Styles.footerContainer}>
			<div className={Styles.footerWarning}>THIS SERVICE TERMINATES HERE</div>
			<div>Kevin Glennon | Dublin | Built with React + TypeScript</div>
		</div>
	);
}

export default Footer;
