'use client';

import * as React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { DayPicker } from 'react-day-picker';

import { cn } from '../../lib/utils';
import { buttonVariants } from './button';

export type CalendarProps = React.ComponentProps<typeof DayPicker>;

function Calendar({
	className,
	classNames,
	showOutsideDays = true,
	...props
}: CalendarProps) {
	return (
		<DayPicker
			showOutsideDays={showOutsideDays}
			className={cn('p-3', className)}
			classNames={{
				months: 'flex flex-col sm:flex-row space-y-4 sm:space-x-4 sm:space-y-0',
				month: 'space-y-4',
				caption: 'flex justify-center pt-1 relative items-center',
				caption_label: 'text-sm font-medium',
				nav: 'space-x-1 flex items-center',
				nav_button: cn(
					buttonVariants({ variant: 'outline' }),
					'h-7 w-7 bg-transparent p-0 opacity-50 hover:opacity-100'
				),
				nav_button_previous: 'absolute left-1',
				nav_button_next: 'absolute right-1',
				table: 'w-full border-collapse space-y-1',
				head_row: 'flex',
				head_cell:
					'text-my-primary-300 rounded-md w-9 font-normal text-[0.8rem]',
				row: 'flex w-full mt-2',
				cell: 'text-center text-sm p-0 relative [&:has([aria-selected])]:bg-my-primary-100 first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md focus-within:relative focus-within:z-20',
				day: cn(
					buttonVariants({ variant: 'ghost' }),
					'h-9 w-9 p-0 font-normal opacity-70 aria-selected:opacity-100'
				),
				day_selected:
					'bg-my-primary-500 text-white hover:bg-my-primary-500 hover:text-white focus:bg-my-primary-500 focus:text-white',
				day_today: 'bg-my-accent-200 text-black',
				day_outside: 'text-my-primary-300 opacity-50',
				day_disabled: 'text-my-primary-300 opacity-50',
				day_range_middle:
					'aria-selected:bg-my-primary-100 aria-selected:text-black',
				day_hidden: 'invisible',
				...classNames,
			}}
			components={{
				IconLeft: ({ ...props }) => <ChevronLeft className='w-4 h-4' />,
				IconRight: ({ ...props }) => (
					<ChevronRight className='w-4 h-4' />
				),
			}}
			{...props}
		/>
	);
}
Calendar.displayName = 'Calendar';

export { Calendar };
