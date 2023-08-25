import Map, { MapRef, Marker, MarkerDragEvent } from 'react-map-gl';
import { useFormState } from '../../store/store';
import createOnChangeHandler from './Steps/utils/onChangeHandler';
import jumpLocation from './Steps/utils/jumpLocation';
import { RefObject } from 'react';

const DisplayMap = ({ mapRef }: { mapRef: RefObject<MapRef> }) => {
	const {
		formData: { latitude, longitude },
		setFormData,
	} = useFormState();
	const initLongitude = (longitude as number)
		? (longitude as number)
		: -122.4;
	const initLatitude = (latitude as number) ? (latitude as number) : 37.8;

	const onChangeHandler = createOnChangeHandler(setFormData);

	const onMarkerDrag = (e: MarkerDragEvent) => {
		const { lat, lng } = e.lngLat;
		onChangeHandler('latitude', lat);
		onChangeHandler('longitude', lng);
		jumpLocation({ lat, lng, mapRef, zoom: mapRef.current?.getZoom() });
	};

	return (
		<Map
			mapboxAccessToken={import.meta.env.VITE_MAPBOX_TOKEN}
			initialViewState={{
				longitude: initLongitude,
				latitude: initLatitude,
				zoom: 14,
			}}
			ref={mapRef}
			style={{
				width: '100%',
				height: 250,
				borderRadius: 12,
			}}
			attributionControl={false}
			// mapStyle='mapbox://styles/mapbox/streets-v9'
			// mapStyle='mapbox://styles/mapbox/light-v11'
			mapStyle='mapbox://styles/mapbox/dark-v10'>
			<Marker
				longitude={initLongitude}
				latitude={initLatitude}
				anchor='bottom'
				draggable
				pitchAlignment='map'
				color='#e966a0'
				onDragEnd={onMarkerDrag}
			/>
		</Map>
	);
};

export default DisplayMap;
