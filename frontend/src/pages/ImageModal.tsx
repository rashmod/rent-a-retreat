import { ArrowLeftCircle, ArrowRightCircle, XCircleIcon } from 'lucide-react';
import { Link, useParams } from 'react-router-dom';

const ARROW_SIZE = 60;

// todo add slider function
const ImageModal = () => {
	const params = useParams();
	return (
		<div className='absolute inset-0 z-50 flex flex-col justify-center bg-black'>
			<div className='flex justify-between w-10/12 mx-auto text-white'>
				<div className='text-5xl'>
					<span>1</span>/<span>40</span>
				</div>
				<Link to={`/listing/${params.listingId}`}>
					<XCircleIcon
						className='text-white transition duration-300 hover:text-my-accent-500 hover:animate-icons'
						height={ARROW_SIZE}
						width={ARROW_SIZE}
						strokeWidth={1}
					/>
				</Link>
			</div>
			<div className='flex items-center justify-between w-10/12 mx-auto'>
				<ArrowLeftCircle
					className='text-white transition duration-300 hover:text-my-accent-500 hover:animate-icons'
					height={ARROW_SIZE}
					width={ARROW_SIZE}
					strokeWidth={1}
				/>
				<img
					src={'https://picsum.photos/seed/34flOuQ/640/480'}
					alt=''
					className='object-contain max-h-96'
				/>
				<ArrowRightCircle
					className='text-white transition duration-300 hover:text-my-accent-500 hover:animate-icons'
					height={ARROW_SIZE}
					width={ARROW_SIZE}
					strokeWidth={1}
				/>
			</div>
		</div>
	);
};

export default ImageModal;
