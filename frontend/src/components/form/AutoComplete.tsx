import { Loader2 } from 'lucide-react';
import { useLoadScript } from '@react-google-maps/api';
import ComboboxPopover, { ComboboxPopoverProps } from './ComboboxPopover';

const AutoComplete = (props: ComboboxPopoverProps) => {
	const { isLoaded } = useLoadScript({
		googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAP_API_KEY,
		libraries: ['places'],
	});

	if (!isLoaded)
		return (
			<div className='relative'>
				<input
					type='text'
					id='loading'
					className='block px-3 pb-2.5 border-2 rounded-xl border-black/50 pt-4 duration-300 w-full text-sm text-gray-900 bg-white appearance-none focus:outline-none focus:ring-0 peer placeholder-shown:placeholder:opacity-0 focus:placeholder:opacity-100 placeholder:transition-all disabled:bg-my-primary-100 disabled:cursor-not-allowed'
					disabled
				/>
				<div className='absolute z-10 -translate-y-1/2 top-1/2 left-3'>
					<Loader2 className='animate-spin' height={16} width={16} />
				</div>
				<label
					htmlFor='loading'
					className='absolute px-2 text-sm duration-300 transform origin-[0] -translate-y-1/2 top-1/2 text-gray-500 left-8 bg-my-primary-100 cursor-not-allowed'>
					Loading...
				</label>
			</div>
		);
	return <ComboboxPopover {...props} />;
};

export default AutoComplete;
