import nextConfig from "../../next.config.mjs";

export const basePath = process.env.NODE_ENV === "production" ? nextConfig.basePath : "";

const pointsOfInterest = [
	// AMPHITHEATRE
	{
		title: "AMPHITHEATRE",
		lat: "",
		long: "",
		pinIcon: `${basePath}/assets/pins/amphitheatre.svg`,
		pages: [
			{
				type: "information",
				bannerImage: `${basePath}/assets/images/amphitheatre1.png`,
				alt: "amphitheatre with a blue sky",
				audio: `${basePath}/assets/audio/AmpN1.mp3`,
				body:
					"Welcome to Ed Broadbent Waterfront Park's Amphitheater, a haven of nature and culture. Find your seat and immerse yourself in the magic of live performances and shared moments.",
				arLink: "",
			},
			{
				type: "information",
				bannerImage: `${basePath}/assets/images/amphitheatre2.png`,
				alt: "close up of the amphitheatre stage",
				audio: `${basePath}/assets/audio/AmpN2.mp3`,
				body:
					"Experience the beauty of our accessible amphitheater, designed for everyone. It's a space where diverse performances and connections flourish, embracing the essence of community.",
				arLink: "",
			},
			{
				type: "gallery",
				images: [
					{
						bannerImage: `${basePath}/assets/images/amphitheatre3.png`,
						alt: "birds eye view of the amphitheatre",
					},
					{
						bannerImage: `${basePath}/assets/images/amphitheatre4.png`,
						alt: "far view of the amphitheatre stage",
					},
				],
				arLink: "",
			},
			{
				type: "booking",
				eventsLink: "",
				hostingLink: "",
				facilityBookingsLink: "",
			},
		],
	},
	// EVERY CHILD MATTERS GARDEN
	{
		title: "Every Child Matters Garden (2024)",
		lat: "",
		long: "",
		pinIcon: `${basePath}/assets/pins/indigenousGarden.svg`,
		pages: [
			{
				type: "information",
				bannerImage: `${basePath}/assets/images/indigenousGarden1.png`,
				alt: "every child matters garden ",
				audio: "",
				body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec purus feugiat, molestie ipsum et, fermentum nunc. Nullam sit amet felis ac nunc posuere tincidunt",
				arLink: "",
			},
			{
				type: "gallery",
				images: [
					{
						bannerImage: `${basePath}/assets/images/indigenousGarden2.png`,
						alt: "green plants in a garden ",
					},
					{
						bannerImage: `${basePath}/assets/images/indigenousGarden3.png`,
						alt: "young sprouts in a garden",
					},
					{
						bannerImage: `${basePath}/assets/images/indigenousGarden4.png`,
						alt: "someone planting in a garden",
					},
					{
						bannerImage: `${basePath}/assets/images/indigenousGarden5.png`,
						alt: "red flowers surrounded by green plants",
					},
				],
				arLink: "",
			},
		],
	},
	// GARDEN OF HUMAN RIGHTS
	{
		title: "GARDEN OF HUMAN RIGHTS",
		lat: "",
		long: "",
		pinIcon: `${basePath}/assets/pins/humanRightsGarden.svg`,
		pages: [
			{
				type: "information",
				bannerImage: `${basePath}/assets/images/humanRightsGarden1.png`,
				alt: "garden of human rights sign",
				audio: `${basePath}/assets/audio/GardenN1.mp3`,
				body:
					"As you explore this park, you'll come across the Garden of Human Rights, a fitting tribute to the values cherished by Mr. Broadbent. Thirteen garden beds stand tall, symbolizing the forbidden territories of prejudice within the Canadian Human Rights Act.",
				arLink: "",
			},
			{
				type: "information",
				bannerImage: `${basePath}/assets/images/humanRightsGarden2.png`,
				alt: "birds eye view of the garden of human rights",
				audio: `${basePath}/assets/audio/GardenN2.mp3`,
				body:
					"Every bed represents a dedication to equality, embracing diversity in race, colour, gender, and sexual orientation.  The garden's location is proudly marked by the United Nations Human Rights flag, and the space will be adorned with community flags during important months. ",
				arLink: "",
			},
			{
				type: "information",
				bannerImage: `${basePath}/assets/images/humanRightsGarden3.png`,
				audio: `${basePath}/assets/audio/GardenN2.mp3`,
				alt: "garden of human rights seating",
				body:
					"Featuring a variety of seating options, this space offers a one-of-a-kind environment for deep thought and introspection. Discover more about The Canadian Human Rights Act to enhance your knowledge.",
				arLink: "",
			},
			{
				type: "gallery",
				images: [
					{
						bannerImage: `${basePath}/assets/images/humanRightsGarden4.png`,
						alt: "a path surrounded by trees and pink flowers",
					},
					{
						bannerImage: `${basePath}/assets/images/humanRightsGarden5.png`,
						alt: "a field of yellow tulips",
					},
					{
						bannerImage: `${basePath}/assets/images/humanRightsGarden6.png`,
						alt: "a close up of pink flowers",
					},
					{
						bannerImage: `${basePath}/assets/images/humanRightsGarden7.png`,
						alt: "a pond with trees in the background and flowers in the foreground",
					},
					{
						bannerImage: `${basePath}/assets/images/humanRightsGarden8.png`,
						alt: "a closeup of different coloured flowers in a garden",
					},
					{
						bannerImage: `${basePath}/assets/images/humanRightsGarden9.png`,
						alt: "white flowers",
					},
				],
				arLink: "",
			},
		],
	},
	// ED BROADBENT
	{
		title: "ED BROADBENT",
		lat: "",
		long: "",
		pinIcon: "${basePath}/assets/pins/edBroadbent.svg",
		pages: [
			{
				type: "information",
				bannerImage: `${basePath}/assets/images/edBroadbent1.png`,
				alt: "Ed Broadbent standing in front of the park sign",
				audio: `${basePath}/assets/audio/TributeN1.mp3`,
				body:
					"This park is a tribute to the remarkable public servant, Ed Broadbent, who dedicated himself tirelessly to serving Canadians and, particularly, the people of Oshawa.",
				arLink: "",
			},
			{
				type: "information",
				bannerImage: `${basePath}/assets/images/edBroadbent2.png`,
				atl: "young Ed Broadbent speaking at a podium",
				audio: `${basePath}/assets/audio/TributeN2.mp3`,
				body:
					"A passionate advocate for human rights, Mr. Broadbent tirelessly worked towards advancing Indigenous rights, promoting women's equality, addressing child poverty, advocating for ethics in government, and striving for tax equality. ",
				arLink: "",
			},
			{
				type: "information",
				bannerImage: `${basePath}/assets/images/edBroadbent3.png`,
				atl: "young Ed Broadbent surrounded by reporters and photographers",
				audio: `${basePath}/assets/audio/TributeN3.mp3`,
				body:
					"Mr. Broadbent, hailing from Oshawa, had the honour of representing the NDP in his hometown from 1968 to 1989. Additionally, he held the position of leader of the New Democratic Party from 1975 to 1989.",
				arLink: "",
			},
			{
				type: "information",
				bannerImage: `${basePath}/assets/images/edBroadbent4.png`,
				alt: "Ed Broadbent standing in front of people sitting",
				audio: `${basePath}/assets/audio/TributeN4.mp3`,
				body:
					"His impact reached far and wide, serving as a Vice-President of the Socialist International and as the founding President of the International Centre for Human Rights and Democratic Development in Montreal.",
				arLink: "",
			},
			{
				type: "information",
				bannerImage: `${basePath}/assets/images/edBroadbent5.png`,
				alt: "Ed Broadbent portrait",
				audio: `${basePath}/assets/audio/TributeN5.mp3`,
				body:
					"We pay tribute to the late Mr. Ed Broadbent, whose peaceful departure on January 11, 2024, has left a lasting impact on the community of Oshawa.",
				arLink: "",
			},
		],
	},
	// PARK
	{
		title: "Park",
		lat: "",
		long: "",
		pinIcon: `${basePath}/assets/pins/park.svg`,
		pages: [
			{
				type: "information",
				bannerImage: `${basePath}/assets/images/park1.png`,
				alt: "park sign with 3 flags",
				audio: `${basePath}/assets/audio/ParkN1.mp3`,
				body:
					"Nestled at 169 Harbour Road, Ed Broadbent Waterfront Park stands as Oshawa's newest jewel along the waterfront parks system. Connected to the scenic Joseph Kolodzie Oshawa Creek Bike Path, the Waterfront Trail, and Lakeview Park, it provides a breathtaking vantage point of the lively Port of Oshawa. ",
				arLink: "",
			},
			{
				type: "information",
				bannerImage: `${basePath}/assets/images/park2.png`,
				alt: "birds eye view of the park",
				audio: "public/assets/audio/ParkN2.mp3",
				body:
					"This haven features an expansive Garden of Human Rights, a network of pathways, and a stage with amphitheater seating. Park amenities include accessible facilities, beautiful gardens, recreational trails, a bike rack, and ample parking. It is not just a park; it is an experience. ",
				arLink: "",
			},
			{
				type: "information",
				bannerImage: `${basePath}/assets/images/park2.png`,
				alt: "birds eye view of the park",
			},
			{
				type: "gallery",
				images: [
					{
						bannerImage: `${basePath}/assets/images/park3.png`,
						alt: "a row of people holding a yellow ribbon",
					},
					{
						bannerImage: `${basePath}/assets/images/park4.png`,
						alt: "Ed Broadbent standing at a podium",
					},
					{
						bannerImage: `${basePath}/assets/images/park5.png`,
						alt: "Ed Broadbent standing in front of the park sign",
					},
					{
						bannerImage: `${basePath}/assets/images/park6.png`,
						alt: "a row of people standing in front of the park sign",
					},
				],
				arLink: "",
			},
		],
	},
];

export default pointsOfInterest;
