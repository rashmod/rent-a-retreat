import christ from '../assets/christ_min.jpg';
import colosseum from '../assets/colosseum_min.jpg';
import taj from '../assets/taj_min.jpg';

const HeroHeading = () => {
	return (
		<div className='w-full h-[420px] relative flex isolate'>
			<div className='absolute left-0 z-20 w-[240px] h-[300px] overflow-hidden -rotate-[40deg] top-24 rounded-xl'>
				<img src={taj} alt='' className='object-cover w-full h-full' />
				<div className='absolute top-0 w-full h-full bg-black bg-opacity-40' />
			</div>
			{/* <ImgContainer
				height='300'
				width='240'
				position='left-0 top-24'
				img={taj}
				rotate='-40'
				z='20'
			/> */}
			<div className='absolute z-10 w-[630px] h-[320px] overflow-hidden -translate-x-1/2 rotate-[10deg] left-1/2 top-4 rounded-xl'>
				<img
					src={christ}
					alt=''
					className='object-cover w-full h-full'
				/>
				<div className='absolute top-0 w-full h-full bg-black bg-opacity-40' />
			</div>
			<div className='absolute right-0 w-[240px] h-[300px] overflow-hidden rotate-45 top-12 rounded-xl'>
				<img
					src={colosseum}
					alt=''
					className='object-cover w-full h-full'
				/>
				<div className='absolute top-0 w-full h-full bg-black bg-opacity-40' />
			</div>

			<h1 className='absolute z-50 w-1/2 font-bold text-center text-white -translate-x-1/2 -translate-y-1/2 text-8xl top-1/2 left-1/2'>
				{/* Explore Your Place To Stay */}
				Explore a new world
			</h1>
		</div>
	);
};

// const ImgContainer = ({
// 	height,
// 	width,
// 	rotate,
// 	img,
// 	z,
// 	position,
// }: {
// 	height: string;
// 	width: string;
// 	rotate: string;
// 	img: string;
// 	z: string;
// 	position: string;
// }) => {
// 	return (
// 		<div
// 			className={`absolute ${position} ${z} w-[${width}px] h-[${height}px] overflow-hidden ${
// 				Number(rotate) > 0 ? '' : '-'
// 			}rotate-[${Math.abs(Number(rotate))}deg] rounded-xl`}>
// 			<img src={img} alt='' className='object-cover w-full h-full ' />
// 			<div className='absolute top-0 w-full h-full bg-black bg-opacity-40' />
// 		</div>
// 	);
// };

export default HeroHeading;
