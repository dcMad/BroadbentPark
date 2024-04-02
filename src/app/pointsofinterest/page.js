import Link from "next/link";
import styles from "./page.module.css";
import nextConfig from "../../../next.config.mjs";

export default function Page() {
	return (
		<>
			<img src={`${process.env.NODE_ENV === "production" ? nextConfig.basePath : ""}/assets/poi_background.png`} className={styles.mapBackground}/>
			<ul className={styles.pointsOfInterest}>
				<Link href='/pointsofinterest/edBroadBent'>
					<li className={`${styles.pointOfInterest} ${styles.first}`}>
						<p>ED BROADBENT </p>
					</li>
				</Link>

				<Link href='/pointsofinterest/amphitheather'>
					<li className={`${styles.pointOfInterest} ${styles.second}`}>
						<p className={styles.p}>AMPITHEATHER</p>
					</li>
				</Link>

				<Link href='/pointsofinterest/indigenousGarden'>
					<li className={`${styles.pointOfInterest} ${styles.third}`}>
						<p>INDIGENOUS GARDEN</p>
					</li>
				</Link>

				<Link href='/pointsofinterest/gardenOfHumanRights'>
					<li className={`${styles.pointOfInterest} ${styles.fourth}`}>
						<p>GARDEN OF HUMAN RIGHTS</p>
					</li>
				</Link>
			</ul >
		</>
	);
}
