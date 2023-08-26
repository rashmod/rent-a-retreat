import { RefObject } from 'react';
import Map, { MapRef, Marker, MarkerDragEvent } from 'react-map-gl';
import {
	FieldValues,
	FieldErrors,
	UseFormRegister,
	UseFormSetValue,
} from 'react-hook-form';

import { useFormState } from '../../store/store';
import jumpLocation from './Steps/utils/jumpLocation';

const DisplayMap = ({
	mapRef,
	register,
	errors,
	setValue,
}: {
	mapRef: RefObject<MapRef>;
	register: UseFormRegister<FieldValues>;
	errors: FieldErrors;
	setValue: UseFormSetValue<FieldValues>;
}) => {
	const {
		formData: { latitude, longitude },
		setFormData,
	} = useFormState();
	const initLongitude = (longitude as number)
		? (longitude as number)
		: -122.4;
	const initLatitude = (latitude as number) ? (latitude as number) : 37.8;

	const onMarkerDrag = (e: MarkerDragEvent) => {
		const { lat, lng } = e.lngLat;
		setFormData((prev) => ({ ...prev, latitude: lat, longitude: lng }));
		setValue('longitude', lng, { shouldValidate: true });
		setValue('latitude', lat, { shouldValidate: true });
		jumpLocation({ lat, lng, mapRef, zoom: mapRef.current?.getZoom() });
	};

	console.log(errors);

	return (
		<div>
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
			<input
				{...register('latitude', { valueAsNumber: true })}
				type='number'
				name='latitude'
				step='any'
				className='hidden'
				value={latitude}
			/>
			<input
				{...register('longitude', { valueAsNumber: true })}
				type='number'
				name='longitude'
				step='any'
				className='hidden'
				value={longitude}
			/>
			{errors && errors['latitude'] && (
				<p className='mt-2 text-sm text-red-400'>
					{/* {(errors['latitude'] as FieldError).message} */}
					Please search a location or pick a point on the map
				</p>
			)}
		</div>
	);
};

export default DisplayMap;
