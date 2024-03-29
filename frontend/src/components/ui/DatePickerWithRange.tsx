import * as React from 'react';
import { addDays, format } from 'date-fns';
import { DateRange } from 'react-day-picker';

import { cn } from '../../lib/utils';
import { Button } from './button';
import { Calendar } from './calendar';
import { Popover, PopoverContent, PopoverTrigger } from './popover';

export function DatePickerWithRange({
	className,
}: React.HTMLAttributes<HTMLDivElement>) {
	const [date, setDate] = React.useState<DateRange | undefined>({
		from: new Date(),
		to: addDays(new Date(), 20),
	});

	return (
		<div className={cn('grid gap-2', className)}>
			<Popover>
				<PopoverTrigger asChild>
					<Button
						id='date'
						variant={'outline'}
						className={cn(
							'w-full h-auto justify-start text-left font-normal rounded-xl bg-white text-black py-1.5 px-5',
							!date && 'text-muted-foreground'
						)}>
						{date?.from ? (
							date.to ? (
								<div className='grid w-full grid-cols-2'>
									<div className='flex text-lg'>
										{/* <span className='text-xs'>
											Check In Date
										</span> */}
										{/* <CalendarIcon className='w-4 h-4' /> */}
										<span>
											{format(date.from, 'LLL dd, y')}
										</span>
									</div>
									<div className='flex justify-end text-lg'>
										{/* <span className='text-xs'>
											Check Out Date
										</span> */}
										<span>
											{format(date.to, 'LLL dd, y')}
										</span>
									</div>
								</div>
							) : (
								format(date.from, 'LLL dd, y')
							)
						) : (
							<span>Pick a date</span>
						)}
					</Button>
				</PopoverTrigger>
				<PopoverContent className='w-auto p-0 mr-8' align='start'>
					<Calendar
						initialFocus
						mode='range'
						defaultMonth={date?.from}
						selected={date}
						onSelect={setDate}
						numberOfMonths={2}
					/>
				</PopoverContent>
			</Popover>
		</div>
	);
}
