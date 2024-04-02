import Gallery from "@/ui/Gallery/Gallery";
import poiData from "@/lib/poiData.js";

export default function indigenousGardenGalleryPage() {

    const images = poiData[1].pages.filter(page => page.type === 'gallery')[0].images.map(image => image.bannerImage);

    return <>
        <Gallery header={poiData[1].title} images={images} backPath="../" arLink={`../ar`} numberOfImages={images.length} />
    </>
}