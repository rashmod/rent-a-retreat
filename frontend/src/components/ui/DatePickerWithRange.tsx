// import * as React from 'react';
// import { addDays, format } from 'date-fns';
// import { Calendar as CalendarIcon } from 'lucide-react';
// import { DateRange } from 'react-day-picker';

// import { cn } from '../../lib/utils';
// import { Button } from './button';
// import { Calendar } from './calendar';
// import { Popover, PopoverContent, PopoverTrigger } from './popover';

// export function DatePickerWithRange({
// 	className,
// }: React.HTMLAttributes<HTMLDivElement>) {
// 	const [date, setDate] = React.useState<DateRange | undefined>({
// 		from: new Date(2022, 0, 20),
// 		to: addDays(new Date(2022, 0, 20), 20),
// 	});

// 	return (
// 		<div className={cn('grid gap-2', className)}>
// 			<Popover>
// 				<PopoverTrigger asChild>
// 					<Button
// 						id='date'
// 						variant={'outline'}
// 						className={cn(
// 							'w-[300px] justify-start text-left font-normal',
// 							!date && 'text-muted-foreground'
// 						)}>
// 						<CalendarIcon className='mr-2 h-4 w-4' />
// 						{date?.from ? (
// 							date.to ? (
// 								<>
// 									{format(date.from, 'LLL dd, y')} -{' '}
// 									{format(date.to, 'LLL dd, y')}
// 								</>
// 							) : (
// 								format(date.from, 'LLL dd, y')
// 							)
// 						) : (
// 							<span>Pick a date</span>
// 						)}
// 					</Button>
// 				</PopoverTrigger>
// 				<PopoverContent className='w-auto p-0' align='start'>
// 					<Calendar
// 						initialFocus
// 						mode='range'
// 						defaultMonth={date?.from}
// 						selected={date}
// 						onSelect={setDate}
// 						numberOfMonths={2}
// 					/>
// 				</PopoverContent>
// 			</Popover>
// 		</div>
// 	);
// }

import * as React from 'react';
import { addDays, format } from 'date-fns';
import { Calendar as CalendarIcon } from 'lucide-react';
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
							'w-full h-auto border-2 border-my-secondary justify-start text-left font-normal',
							!date && 'text-muted-foreground'
						)}>
						{date?.from ? (
							date.to ? (
								<div className='grid grid-cols-2 w-full divide-x-2 divide-my-secondary'>
									<div className='flex flex-col'>
										<span className='text-xs'>
											Check In Date
										</span>
										{/* <CalendarIcon className='h-4 w-4' /> */}
										<span>
											{format(date.from, 'LLL dd, y')}
										</span>
									</div>
									<div className='flex flex-col pl-4'>
										<span className='text-xs'>
											Check Out Date
										</span>
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
