import { RefObject } from 'react';
import { MapRef } from 'react-map-gl';

type TJumpLocation = {
	lat: number;
	lng: number;
	mapRef: RefObject<MapRef>;
	zoom?: number;
};

const jumpLocation = ({ lat, lng, mapRef, zoom = 12 }: TJumpLocation) => {
	mapRef?.current?.flyTo({
		center: [lng, lat],
		speed: 4,
		zoom,
	});
};

export default jumpLocation;
