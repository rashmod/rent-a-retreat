import { Command as CommandPrimitive } from 'cmdk';
import {
	useState,
	useRef,
	useCallback,
	type KeyboardEvent,
	ChangeEvent,
	RefObject,
} from 'react';
import { Check } from 'lucide-react';

import {
	CommandGroup,
	CommandItem,
	CommandList,
	CommandInput,
} from '../ui/command';
import { cn } from '../../lib/utils';
import { TPageFourSchema } from '../../types/form/PageFour';
import usePlacesAutocomplete, {
	getGeocode,
	getLatLng,
} from 'use-places-autocomplete';
import { useFormState } from '../../store/store';
import { MapRef } from 'react-map-gl';
import jumpLocation from './Steps/utils/jumpLocation';

export type Option = Record<'place_id' | 'description', string>;

export type ComboboxPopoverProps = {
	emptyMessage?: string;
	value?: Option;
	onChangeHandler?: (
		name: keyof TPageFourSchema,
		value: string | boolean
	) => void;
	onValueChange?: (value: Option) => void;
	isLoading?: boolean;
	disabled?: boolean;
	placeholder?: string;
	mapRef?: RefObject<MapRef>;
};

const ComboboxPopover = ({
	placeholder,
	emptyMessage,
	value,
	onValueChange,
	// disabled,
	isLoading = false,
	mapRef,
}: ComboboxPopoverProps) => {
	const {
		// value: placesValue,
		setValue: setPlacesValue,
		ready,
		suggestions: { status, data },
		clearSuggestions,
	} = usePlacesAutocomplete();
	const { setFormData } = useFormState();

	const inputRef = useRef<HTMLInputElement>(null);

	const [isOpen, setOpen] = useState(false);
	const [selected, setSelected] = useState<Option>(value as Option);
	const [inputValue, setInputValue] = useState<string>(
		value?.description || ''
	);

	const handleKeyUp = useCallback(() => {
		const input = inputRef.current;
		if (!input) return;

		if (input.value === '') {
			setOpen(false);
		}
	}, []);

	const handleKeyDown = useCallback(
		(event: KeyboardEvent<HTMLDivElement>) => {
			const input = inputRef.current;
			if (!input) return;

			// Keep the options displayed when the user is typing
			if (!isOpen) {
				setOpen(true);
			}

			if (event.key === 'Enter' && input.value !== '') {
				// This is not a default behavior of the <input /> field
				const optionToSelect = data.find(
					(option) => option.description === input.value
				);
				if (optionToSelect) {
					setSelected(optionToSelect);
					onValueChange?.(optionToSelect);
					// onChangeHandler(optionToSelect);
				}
			}

			if (event.key === 'Escape') {
				input.blur();
			}
		},
		[isOpen, onValueChange, data]
	);

	const handleBlur = useCallback(() => {
		setOpen(false);
		setInputValue(selected?.description);
	}, [selected]);

	const handleSelectOption = useCallback(
		async (selectedOption: Option) => {
			setInputValue(selectedOption.description);

			setSelected(selectedOption);
			onValueChange?.(selectedOption);

			setPlacesValue(selectedOption.description, false);
			clearSuggestions();

			const results = await getGeocode({
				address: selectedOption.description,
			});
			const { lat, lng } = getLatLng(results[0]);
			setFormData((prev) => {
				return { ...prev, latitude: lat, longitude: lng };
			});
			if (mapRef) jumpLocation({ lat, lng, mapRef });
			// This is a hack to prevent the input from being focused after the user selects an option
			// We can call this hack: "The next tick"
			setTimeout(() => {
				inputRef?.current?.blur();
			}, 0);
		},
		[onValueChange, clearSuggestions, setFormData, setPlacesValue, mapRef]
	);

	return (
		<CommandPrimitive
			onKeyDown={handleKeyDown}
			onKeyUp={handleKeyUp}
			onChange={(e: ChangeEvent<HTMLInputElement>) =>
				setPlacesValue(e.target.value)
			}>
			<div className='relative border-2 rounded-xl border-black/50'>
				<CommandInput
					ref={inputRef}
					value={inputValue}
					onValueChange={isLoading ? undefined : setInputValue}
					onBlur={handleBlur}
					// onFocus={() => setOpen(true)}
					placeholder={placeholder}
					disabled={!ready}
					className='text-sm px-3 pb-2.5 pt-4'
				/>
			</div>
			{isOpen ? (
				<div className='relative mt-1'>
					<div className='absolute top-0 z-10 w-full outline-none rounded-xl bg-stone-50 animate-in fade-in-0 zoom-in-95'>
						<CommandList className='border border-black rounded-lg ring-1 ring-slate-200'>
							{isLoading ? (
								<CommandPrimitive.Loading>
									<div className='p-1'>skeleton</div>
								</CommandPrimitive.Loading>
							) : null}
							{status === 'OK' &&
							data.length > 0 &&
							!isLoading ? (
								<CommandGroup>
									{data.map(({ place_id, description }) => {
										const isSelected =
											selected?.place_id === place_id;
										return (
											<CommandItem
												key={place_id}
												value={description}
												onMouseDown={(event) => {
													event.preventDefault();
													event.stopPropagation();
												}}
												onSelect={() =>
													handleSelectOption({
														place_id,
														description,
													})
												}
												className={cn(
													'flex items-center gap-2 w-full',
													!isSelected ? 'pl-8' : null
												)}>
												{isSelected ? (
													<Check className='w-4' />
												) : null}
												{description}
											</CommandItem>
										);
									})}
								</CommandGroup>
							) : null}
							{!isLoading ? (
								<CommandPrimitive.Empty className='px-2 py-3 text-sm text-center rounded-sm select-none'>
									{emptyMessage}
								</CommandPrimitive.Empty>
							) : null}
						</CommandList>
					</div>
				</div>
			) : null}
		</CommandPrimitive>
	);
};

export default ComboboxPopover;
