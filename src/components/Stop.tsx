import type { ReactNode } from "react";
import styles from "../Styling/stop.module.scss";

type Props = {
	children: ReactNode;
	position?: "first" | "middle" | "last";
	id?: string;
	label?: string;
};

export default function Stop({
	children,
	position = "middle",
	id,
	label,
}: Props) {
	return (
		<section id={id} className={styles.stop}>
			<div className={`${styles.rail} ${styles[position]}`} aria-hidden="true">
				<span className={styles.marker} />
			</div>
			<div className={styles.content}>
				{label && <p className={styles.label}>{label}</p>}
				{children}
			</div>
		</section>
	);
}
