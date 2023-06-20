interface IPhoto {
	listingPhotoId: string;
	photoUrl: string;
	position: number;
	listingId: string;
}
interface IPhotoArray {
	photoArray: IPhoto[];
}

const gridCol = [
	'col-span-2 row-span-2 rounded-l-2xl',
	'',
	'rounded-tr-2xl',
	'',
	'rounded-br-2xl',
];

const ImageContainer = ({ photoArray }: IPhotoArray) => {
	return (
		<div className='w-full grid grid-cols-4 grid-rows-2 gap-2 max-h-96 mb-3 relative'>
			{photoArray.map((photo, i) => (
				<img
					className={`h-full object-cover ${gridCol[i]}`}
					src={photo.photoUrl}
				/>
			))}
			<button className='absolute bottom-4 right-4 bg-my-primary px-2 py-1 rounded-full text-secondary text-xs backdrop-filter backdrop-blur-lg bg-opacity-60'>
				See All Photos
			</button>
		</div>
	);
};

export default ImageContainer;
