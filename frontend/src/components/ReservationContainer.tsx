import { MinusCircle, PlusCircle } from 'lucide-react';
import { TReservationData } from '../types/type';
import { DatePickerWithRange } from './ui/DatePickerWithRange';

const ReservationContainer = ({
	pricePerNight,
	cleaningFee,
	isRefundable,
	percentRefundable,
	daysBeforeCancellation,
}: TReservationData) => {
	return (
		<div className='col-span-5 col-start-8 px-8 py-5 text-white bg-my-primary-900 rounded-xl'>
			<div className='flex gap-2.5 items-end mb-4'>
				<span className='text-3xl'>${pricePerNight + 1420}</span>
				<span className='text-lg opacity-70'>night</span>
			</div>
			<div className='mb-3'>
				<div className='flex justify-between mb-1'>
					<span>check in</span>
					<span>check out</span>
				</div>
				<DatePickerWithRange />
			</div>
			<div className='flex items-center justify-between px-5 py-2 mb-3 text-lg text-black bg-white rounded-xl'>
				<MinusCircle />
				<div>
					<input
						type='number'
						name=''
						id=''
						min={0}
						defaultValue={0}
						className='w-5 bg-transparent outline-none [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none'
					/>
					<span className='ml-1'>guest</span>
				</div>
				<PlusCircle />
			</div>
			<button className='w-full py-4 mb-3 font-medium text-white transition rounded-xl bg-my-accent-500 hover:bg-my-accent/80'>
				Reserve Now
			</button>
			<div className='grid grid-cols-3 gap-1 text-sm'>
				<span className='col-span-2'>
					${pricePerNight + 1420} x 20 nights
				</span>
				<span className='text-right'>
					${(pricePerNight + 1420) * 20}
				</span>
				<span className='col-span-2'>cleaning fees</span>
				<span className='text-right'>${cleaningFee + 120}</span>
				<span className='col-span-2'>refundable?</span>
				<span className='text-right'>{isRefundable} yes</span>
				<span className='col-span-2'>% refundable</span>
				<span className='text-right'>{percentRefundable} 20%</span>
				<span className='col-span-2'>cancel before</span>
				<span className='flex flex-col text-right'>
					{daysBeforeCancellation} <span>15 June</span>
					<span className='-mt-1.5 opacity-50'>Thursday</span>
				</span>
				<span className='col-span-2 text-lg'>Total</span>
				<span className='text-lg text-right'>${2000000}</span>
			</div>
			{/* <div>
						reservation
						{reservation.map((res) => (
							<>
								<div>checkInDate {res.checkInDate}</div>
								<div>checkOutDate {res.checkOutDate}</div>
							</>
						))}
					</div> */}
		</div>
	);
};

export default ReservationContainer;
