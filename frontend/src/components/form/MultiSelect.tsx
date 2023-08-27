import { KeyboardEvent, useCallback, useEffect, useRef, useState } from 'react';
import { X } from 'lucide-react';
import { Command as CommandPrimitive } from 'cmdk';
import { Control, useController } from 'react-hook-form';

import { Badge } from '../ui/badge';
import { Command, CommandGroup, CommandItem } from '../ui/command';
import { TPageFiveSchema } from '../../schema/PageFiveSchema';
import { useFormState } from '../../store/store';

type TMultiSelectProps<T> = {
	name: 'categories' | 'amenities' | 'houseRules';
	label: string;
	data: T[];
	isLoading: boolean;
	isError: boolean;
	getId: (item: T) => string;
	getTitle: (item: T) => string;
	control: Control<TPageFiveSchema>;
};

const MultiSelect = <T,>({
	name,
	label,
	data,
	isLoading,
	isError,
	getId,
	getTitle,
	control,
}: TMultiSelectProps<T>) => {
	const { formData, setFormData } = useFormState();

	const inputRef = useRef<HTMLInputElement>(null);
	const [open, setOpen] = useState(false);
	const [selected, setSelected] = useState<T[]>([]);
	const [inputValue, setInputValue] = useState('');
	const { field, fieldState } = useController({ control, name });

	useEffect(() => {
		setSelected(
			// eslint-disable-next-line
			// @ts-ignore
			formData[name].filter((item: T) =>
				data.some((obj) => getId(obj) === getId(item))
			)
		);

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	const handleUnselect = useCallback(
		(option: T) => {
			field.onChange(
				// eslint-disable-next-line
				// @ts-ignore
				field.value.filter((item: T) => getId(item) !== getId(option))
			);
			setSelected((prev) =>
				prev.filter((s) => getId(s) !== getId(option))
			);
			setFormData((prevFormData) => ({
				...prevFormData,
				[name]: (prevFormData[name] as T[]).filter(
					(item: T) => getId(option) !== getId(item)
				),
			}));
		},
		[getId, name, setFormData, field]
	);

	const handleSelect = useCallback(
		(item: T) => {
			setInputValue('');
			// eslint-disable-next-line
			// @ts-ignore
			field.onChange([...field.value, item]);
			setSelected((prev) => [...prev, item]);
			setFormData((prevFormData) => ({
				...prevFormData,
				[name]: [...prevFormData[name], item],
			}));
		},
		[name, setFormData, field]
	);

	const handleKeyDown = useCallback(
		(e: KeyboardEvent<HTMLDivElement>) => {
			const input = inputRef.current;
			if (input) {
				if (e.key === 'Delete' || e.key === 'Backspace') {
					if (input.value === '' && selected.length > 0) {
						field.onChange(field.value.slice(0, -1));
						setSelected((prev) => prev.slice(0, -1));
						setFormData((prevFormData) => ({
							...prevFormData,
							[name]: prevFormData[name].slice(0, -1),
						}));
					}
				}
				// This is not a default behaviour of the <input /> field
				if (e.key === 'Escape') {
					input.blur();
				}
			}
		},
		[selected, name, setFormData, field]
	);

	const selectables = data?.filter((item: T) => !selected.includes(item));

	if (isLoading) return <h1>Loading...</h1>;

	if (isError) return <h1>Error</h1>;

	return (
		<Command
			onKeyDown={handleKeyDown}
			className='overflow-visible bg-transparent'>
			<div>
				<div className='flex mb-2 flex-wrap gap-1.5 border-2 rounded-xl border-black/50 px-3 py-2'>
					{selected.length === 0 ? (
						<div
							className='text-sm text-my-primary-300'
							onClick={() => inputRef.current?.focus()}>
							Select One or more {label} from below input
						</div>
					) : (
						selected.map((item: T) => {
							return (
								<Badge
									key={getId(item)}
									className='text-black transition child bg-my-primary-100 hover:text-white hover:bg-my-primary-700 group'
									// variant='secondary'
									onMouseDown={(e) => {
										e.stopPropagation();
									}}>
									{getTitle(item)}
									<button
										className='ml-1 rounded-full outline-none ring-offset-background focus:ring-2 focus:ring-ring focus:ring-offset-2'
										onKeyDown={(e) => {
											if (e.key === 'Enter') {
												handleUnselect(item);
											}
										}}
										onMouseDown={(e) => {
											e.preventDefault();
											e.stopPropagation();
										}}
										onClick={() => handleUnselect(item)}>
										<X className='w-3 h-3 transition text-muted-foreground group-hover:text-white hover:scale-125' />
									</button>
								</Badge>
							);
						})
					)}
				</div>
				<div className='px-3 py-2 text-sm transition border-2 rounded-xl border-black/50 focus-within:border-black group'>
					{/* Avoid having the "Search" Icon */}
					<CommandPrimitive.Input
						ref={inputRef}
						value={inputValue}
						onValueChange={setInputValue}
						onBlur={() => setOpen(false)}
						onFocus={() => setOpen(true)}
						placeholder={`Select ${name}...`}
						className='flex-1 w-full bg-transparent outline-none placeholder:text-my-primary-300'
					/>
				</div>
				{fieldState.error && !open && (
					<p className='mt-2 text-sm text-red-400'>
						{fieldState.error?.message}
					</p>
				)}
			</div>
			<div className='relative mt-2'>
				{open && selectables.length > 0 ? (
					<div className='absolute top-0 z-50 w-full border rounded-md shadow-md outline-none bg-popover text-popover-foreground animate-in'>
						<CommandGroup className='h-full overflow-auto max-h-52'>
							{selectables.map((item: T) => {
								return (
									<CommandItem
										key={getId(item)}
										onMouseDown={(e) => {
											e.preventDefault();
											e.stopPropagation();
										}}
										onSelect={() => handleSelect(item)}
										className={'cursor-pointer'}>
										{getTitle(item)}
									</CommandItem>
								);
							})}
						</CommandGroup>
					</div>
				) : null}
			</div>
		</Command>
	);
};

export default MultiSelect;
