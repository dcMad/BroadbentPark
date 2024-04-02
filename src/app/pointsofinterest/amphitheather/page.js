"use client";
import React, { useState } from "react";
import InformationSect from "@/ui/InformationSect/InformationSect";
import PoiFooter from "@/ui/PoiFooter/PoiFooter";
import PoiSlide from "@/ui/PoiSlide/PoiSlide";
import SliderButtons from "@/ui/SliderButtons/SliderButtons";
import poiData, { basePath } from "@/lib/poiData.js";
import styles from "../page.module.css";

export default function AmphitheaterPage() {
	const info = poiData[0].pages.filter((page) => page.type === "information");

	const [currentIndex, setCurrentIndex] = useState(0);

	return (
		<>
			<PoiSlide
				className={styles.slide}
				imgSrc={info[currentIndex].bannerImage}
				imgAlt={info[currentIndex].alt}
				dotsIndex={currentIndex}
				dotsLength={info.length}
			>
				<InformationSect
					header={poiData[0].title}
					body={info[currentIndex].body}
					audioSrc={info[currentIndex].audio}
				/>
			</PoiSlide>
			<SliderButtons
				currentIndex={currentIndex}
				setCurrentIndex={setCurrentIndex}
				info={info}
			/>
			<PoiFooter
				arLink={`${basePath}/pointsofinterest/amphitheather/ar`}
				hasGallery
				galleryLink={`${basePath}/pointsofinterest/amphitheather/amphitheatherGallery`}
			/>
		</>
	);
}
