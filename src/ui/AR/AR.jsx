import styles from "./AR.module.css";
import nextConfig from "../../../next.config.mjs";

export default function AR({ children, imgSrc }) {
	return (
		<>
			<article
				className={styles.article}
				style={{ backgroundImage: `url('${imgSrc}');` }}
			>
				<div className={styles.background}>
					<h1>Welcome to the AR Experience</h1>
					<button className={styles.button}>
						<img src={`${process.env.NODE_ENV === "production" ? nextConfig.basePath : ""}/assets/ar.svg`} alt='ar icon'/>
						Tap here to start
					</button>

					{children}
				</div>
			</article>
		</>
	);
}
