import { LayoutGrid } from 'lucide-react';
import { IPhotoArray } from '../types/type';
import { Link } from 'react-router-dom';

const gridCol = [
	'col-span-2 row-span-2 rounded-l-2xl',
	'',
	'rounded-tr-2xl',
	'',
	'rounded-br-2xl',
];

const arr = new Array(5).fill(null);

const ImageContainer = ({ photoArray }: IPhotoArray) => {
	return (
		<div className='relative grid w-full grid-cols-4 grid-rows-2 gap-3 mb-3 max-h-96'>
			{arr.map((_, i) => {
				const photo = photoArray[i];
				return photo ? (
					<Link
						key={photo.listingPhotoId}
						to={`/listing/${photo.listingId}/${photo.listingPhotoId}`}
						className={`${gridCol[i]} overflow-hidden`}>
						<img
							className={`h-full w-full object-cover`}
							src={photo.photoUrl}
						/>
					</Link>
				) : (
					<div
						key={i}
						className={`flex items-center justify-center bg-black text-my-primary-500 ${gridCol[i]}`}>
						No Image
					</div>
				);
			})}
			{photoArray.length > 5 && (
				<button className='absolute flex gap-1 px-2 py-1 text-xs font-medium text-white rounded-full bottom-5 right-5 bg-my-secondary-II-900 backdrop-filter backdrop-blur-lg bg-opacity-70'>
					<LayoutGrid height={14} width={14} /> See All Photos
				</button>
			)}
		</div>
	);
};

export default ImageContainer;
