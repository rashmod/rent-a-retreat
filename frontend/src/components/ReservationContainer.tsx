import { IReservationData } from '../types/type';
import { DatePickerWithRange } from './ui/DatePickerWithRange';

const ReservationContainer = ({
	pricePerNight,
	cleaningFee,
	isRefundable,
	percentRefundable,
	daysBeforeCancellation,
}: IReservationData) => {
	return (
		<div className='col-start-5 col-span-2 p-5 [&>*]:mb-4 border-2 border-my-secondary-300 rounded-lg'>
			<div className='text-2xl'>{pricePerNight + 1420} night</div>
			<DatePickerWithRange />
			<button className='w-full bg-my-accent text-my-primary-500 py-3 rounded-lg hover:bg-my-accent/80 transition'>
				Reserve Now
			</button>
			<div className='grid grid-cols-3 gap-1'>
				<span className='col-span-2'>
					{pricePerNight + 1420} x 20 nights
				</span>
				<span className='text-right'>
					{(pricePerNight + 1420) * 20}
				</span>
				<span className='col-span-2'>cleaning fees</span>
				<span className='text-right'>{cleaningFee + 120}</span>
				<span className='col-span-2'>refundable</span>
				<span className='text-right'>{isRefundable} yes</span>
				<span className='col-span-2'>% refundable</span>
				<span className='text-right'>{percentRefundable} 20%</span>
				<span className='col-span-2'>cancel before</span>
				<span className='text-right'>
					{daysBeforeCancellation} 2 days
				</span>
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
