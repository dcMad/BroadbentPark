import styles from "./page.module.css";
import Link from "next/link";
import Image from "next/image";
import dynamic from "next/dynamic";
import nextConfig from "../../next.config.mjs";

export default function Home() {
	const MovingMap = dynamic(()=> import("../ui/Map/Map"), {
		ssr: false
	})

	return (
		<main>
			<MovingMap />
			<Image
				className='mainLogo'
				src={`${process.env.NODE_ENV === "production" ? nextConfig.basePath : ""}/assets/header_logo.svg`}
				alt='logo'
				width={51.76}
				height={61}
			/>

			<section className='menu'>
				<Link href='/pointsofinterest' className=''>
					<button className='btn orange'>
						<Image src={`${process.env.NODE_ENV === "production" ? nextConfig.basePath : ""}/point_of_interest.svg`} alt='Points of interest page button' width={50} height={50} />
					</button>
				</Link>

				<Link href='/info'>
					<button className='btn orange'>
						<Image src={`${process.env.NODE_ENV === "production" ? nextConfig.basePath : ""}/info.svg`} alt='Info page button' width={50} height={50} />
					</button>
				</Link>
			</section>
		</main>
	);
}
