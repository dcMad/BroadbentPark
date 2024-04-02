"use client";
import React, { useState } from "react";
import InformationSect from "@/ui/InformationSect/InformationSect";
import PoiFooter from "@/ui/PoiFooter/PoiFooter";
import PoiSlide from "@/ui/PoiSlide/PoiSlide";
import SliderButtons from "@/ui/SliderButtons/SliderButtons";
import poiData from "@/lib/poiData.js";

export default function EdBroadBentPage() {
	const info = poiData[3].pages;

	const [currentIndex, setCurrentIndex] = useState(0);

	return (
		<>
			<PoiSlide
				imgSrc={info[currentIndex].bannerImage}
				imgAlt={info[currentIndex].alt}
				dotsIndex={currentIndex}
				dotsLength={info.length}
			>
				<InformationSect
					header={poiData[3].title}
					body={info[currentIndex].body}
					audioSrc={info[currentIndex].audio}
				/>
			</PoiSlide>
			<SliderButtons
				currentIndex={currentIndex}
				setCurrentIndex={setCurrentIndex}
				info={info}
			/>
			<PoiFooter arLink={"./ar"} hasGallery={false} />
		</>
	);
}
