"use client";
import { basePath } from "@/lib/poiData";
import nextConfig from "../../../next.config.mjs";
import Button from "../PoiFooterButton/PoiFooterButton";
import styles from "./poiFooter.module.css";

export default function PoiFooter({ hasGallery, galleryLink, noAr, center, arLink,}) {
	return (
		<footer className={`${styles.footer} ${center ? styles.center : ""}`}>
			<Button imgSrc={`${basePath}/assets/location.svg`} link={`../`} altText="Points of interest menu page button"/>
			{hasGallery ? (
				<Button imgSrc={`${basePath}/assets/pictures.svg`} link={galleryLink} altText="Gallery page button"/>
			) : undefined}
			{noAr ? undefined : <Button imgSrc={`${basePath}/assets/ar.svg`} link={arLink} altText="Augmented Reality page button"/>}
		</footer>
	);
}
