import { basePath } from "@/lib/poiData";
import AR from "@/ui/AR/AR";

export default function Page() {
	return (
		<>
			<AR imgSrc={`${basePath}/assets/images/indigenousGarden1.png`} />
		</>
	);
}
