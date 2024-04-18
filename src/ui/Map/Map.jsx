//? quick notes here
//? search for "forPresentation" to go to the codes used for presentation, and comment or uncomment based on the next word to "forPresentation"
//? this code is missing the prompts for - out of area and not able to fetch location but the logic code exsists (red comments)

"use client";

import { useEffect, useRef, useState } from 'react';
import { MapContainer, Marker, Popup, CircleMarker, ImageOverlay, useMapEvents, TileLayer } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import styles from './map.module.css';
import { useRouter } from 'next/navigation'
import { basePath } from '@/lib/poiData';

// this function contains deafult coords based on QR code scanned
function getDeafultCoordinates(QR) {
    let deafultLat;
    let deafultLong;

    switch(QR) {
        case "qrCode1":
            deafultLat = 43.868218580191865;
            deafultLong = -78.83328502864111;
            break;
        case "qrCode2":
            deafultLat = 43.868574420057485;
            deafultLong = -78.8331032965125;
            break;
        case "qrCode3":
            deafultLat = 43.8677074404313;
            deafultLong = -78.83218554260746;
            break;
        }

        return { deafultLat: deafultLat, deafultLong: deafultLong };
}


const Map = () => {
	// map center coords
	const centerCoords = [43.86840827632318, -78.83264798842656]

	// getting deafult QR coordinates
	const deafultPosition = getDeafultCoordinates("qrCode1");

	// Initializing map
	const mapRef = useRef(null);

	// Initializing router for page redirections
	const router = useRouter()

	// Initializing overlay map image boundaries
	const imageBounds = [
		[43.86952276125331, -78.83558173242115],
		[43.86580168132025, -78.82651005840965]
	];

	// Initializing custom navigator icon
	const navigatorIcon = L.icon({
		iconUrl: `${basePath}/assets/marker.png`,
		iconSize: [65, 70],
		iconAnchor: [32, 61],
		popupAnchor: [2, -40]
	});

	// function for handling point-of-interest page redirections
	const handleMarkerClick = (link) => {
		router.push(link)
	};

	// component for gps tracking and navigation marker
	function LocationMarker() {
		const [position, setPosition] = useState(null)
		const [lastPosition, setLastPosition] = useState(null)

		//? Live Location Fetching Code ****
		useEffect(() => {
				if (mapRef.current) {
					mapRef.current.locate({
						setView: false,
						maxZoom: 15,
						watch: true,
						timeout: 2000,
						enableHighAccuracy: true,
						maximumAge: Infinity,
					});
				}
		}, []);


		// this code handles the gps events
		const map = useMapEvents({
			locationfound(e) {
				// this code sets the boundaries of location fetching
				if((e.latlng.lat>=43.86580168132025 && e.latlng.lat<=43.86952276125331) && (e.latlng.lng>=-78.83558173242115 && e.latlng.lng<=-78.82651005840965)){
					console.log("in area")
					setPosition(e.latlng)
					// forPresentation - <uncomment> - this code takes the map view to the current location
					// map.flyTo(e.latlng)
				}
				else{
					//! code here for out of area prompt
					console.log("out of area")
					// stops the gps location fetching
					mapRef.current.stopLocate();
				}
			},
			locationerror(e){
				//! code here for handling location error
				//when you have continous location watching ON, there will be some errors popping up in the console log
				// such as error code:2, message:"position unavailable", is due to user staying at same coordinates, which is okay, don't have to really worry about at this project scale
				// however, error such as code:1, message: "user denied geolocation", is when user denied the location permission access by browerser or phone
				//! so error message code 1 is where we can prompt user for allowing the loaction permission, ex- if(error.code==1){}
				console.log(e)
			}
		});

		return position === null ?
		<Marker position={[deafultPosition.deafultLat, deafultPosition.deafultLong]} icon={navigatorIcon}>
			<Popup>You are here</Popup>
		</Marker>
		:(
		<Marker position={position} icon={navigatorIcon}>
			<Popup>You are here</Popup>
		</Marker>
		)
	}

	return (
		<section className='mapWrapper'>
			<MapContainer
				ref={mapRef}
				center={centerCoords}
				attributionControl= {false}
				zoom={18}
				scrollWheelZoom={false}
				style={{ height: '100%', width: '100%' }}
				touchZoom={false}
				minZoom={18}
				maxZoom={19}
				//forPresentation - <comment this> - this code sets the boundaries for the map view only
				maxBounds={imageBounds}
			>

			{/* forPresentation - <uncomment this> - open street map tile, this code be used to show realtime tracking for presentation, by displaying current location, eg-college */}
			{/* note - maxBounds property on MapContainer needs to be commented out for this to work properly, since it keeps view to image boundaries*/}

			{/*<TileLayer
			url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
			/>*/}

			{/* custom map image overlay */}
			<ImageOverlay
				url={`${basePath}/assets/map-custom.png`}
				bounds={imageBounds}
				zIndex={10}
			/>

			{/* creating points of interests */}
			<CircleMarker center={[43.86879686674433, -78.8326127728734]} radius={15} >
				<Popup>
					<p className={styles.popup} onClick={()=>{handleMarkerClick(`/pointsofinterest/gardenOfHumanRights`)}}>
						Visit
						<span className={styles.popupTxt} >Garden Of Human Rights</span>
						page
					</p>
				</Popup>
			</CircleMarker>

			<CircleMarker center={[43.868574420057485, -78.8331032965125]} radius={15} >
				<Popup>
					<p className={styles.popup} onClick={()=>{handleMarkerClick(`/pointsofinterest/amphitheather`)}}>
						Visit
						<span className={styles.popupTxt} >Amphitheather</span>
						page
					</p>
				</Popup>
			</CircleMarker>

			<CircleMarker center={[43.8677074404313, -78.83218554260746]} radius={15} >
				<Popup>
					<p className={styles.popup} onClick={()=>{handleMarkerClick(`/pointsofinterest/edBroadBent`)}}>
						Visit
						<span className={styles.popupTxt} >EdBroadBent</span>
						page
					</p>
				</Popup>
			</CircleMarker>

			{/* gps navigation component */}
			<LocationMarker />

		</MapContainer>
		</section>
	);
};

export default Map;