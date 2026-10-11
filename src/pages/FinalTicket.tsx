import styles from "../Styling/pages/finalticketStyles.module.scss";

function FinalTicket() {
	return (
		<div className={styles.finalTicketContainer}>
			<h2 className={styles.finalTicketTitle}>All change here</h2>

			<div className={styles.finalTicketWrapper}>
				<div className={styles.finalTicketMain}>
					<div className={styles.finalTicketHeader}>
						<span className={styles.finalTicketHeaderItem}>Single Journey</span>
						<span className={styles.finalTicketHeaderItem}>
							From: Your team
						</span>
						<span className={styles.finalTicketHeaderItem}>To: Kevin</span>
					</div>

					<p className={styles.finalTicketInfo}>
						Hiring for frontend developer or full stack? I'm looking for my next
						opportunity, based in Dublin!
					</p>

					<a
						href="mailto:kevinglennon01@gmail.com"
						className={styles.finalTicketEmail}
					>
						kevinglennon01@gmail.com
					</a>

					<div className={styles.finalTicketButtons}>
						<a
							href="https://github.com/KevinG2001"
							target="_blank"
							rel="noopener noreferrer"
							className={styles.finalTicketButton}
						>
							GitHub
						</a>
						<a
							href="https://www.linkedin.com/in/kevinglennon01/"
							target="_blank"
							rel="noopener noreferrer"
							className={styles.finalTicketButton}
						>
							LinkedIn
						</a>
						<a
							href="/Kevin-Glennon-CV.pdf"
							download
							className={styles.finalTicketButton}
						>
							Download CV
						</a>
					</div>
				</div>

				<div className={styles.finalTicketStub}>
					<div className={styles.stubText}>
						<span className={styles.stubLabel}>Valid on</span>
						<span className={styles.stubTitle}>All routes</span>
					</div>
					<div className={styles.barcode} aria-hidden="true" />
				</div>
			</div>
		</div>
	);
}

export default FinalTicket;
