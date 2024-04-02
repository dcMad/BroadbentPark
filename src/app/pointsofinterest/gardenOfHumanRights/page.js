"use client";
import React, { useState } from "react";
import InformationSect from "@/ui/InformationSect/InformationSect";
import PoiFooter from "@/ui/PoiFooter/PoiFooter";
import PoiSlide from "@/ui/PoiSlide/PoiSlide";
import SliderButtons from "@/ui/SliderButtons/SliderButtons";
import poiData, { basePath } from "@/lib/poiData.js";

export default function HumanRightsPage() {
	const info = poiData[2].pages.filter((page) => page.type === "information");

	const [currentIndex, setCurrentIndex] = useState(0);

	return (
		<>
			<PoiSlide
				imgSrc={info[currentIndex].bannerImage}
				imgAlt={info[currentIndex].alt}
				dotsLength={info.length}
				dotsIndex={currentIndex}
			>
				<InformationSect
					header={poiData[2].title}
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
				arLink={`${basePath}/pointsofinterest/gardenOfHumanRights/ar`}
				hasGallery
				galleryLink={`${basePath}/pointsofinterest/gardenOfHumanRights/gardenOfHumanRightsGallery`}
			/>
		</>
	);
}
