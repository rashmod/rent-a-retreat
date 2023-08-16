import {
	FieldValues,
	FieldErrors,
	UseFormRegister,
	Path,
	FieldError,
} from 'react-hook-form';

type TFloatingLabelInputProps<TSchema extends FieldValues> = {
	register: UseFormRegister<TSchema>;
	onChangeHandler: (name: Path<TSchema>, value: string) => void;
	errors: FieldErrors<TSchema>;
	label: string;
	placeholder: string;
	name: Path<TSchema>;
	autofocus?: boolean;
};
const FloatingLabelInput = <TSchema extends FieldValues>({
	register,
	onChangeHandler,
	label,
	placeholder,
	errors,
	name,
	autofocus = false,
}: TFloatingLabelInputProps<TSchema>) => {
	return (
		<div className='mt-5'>
			<div className='relative'>
				<input
					{...register(name, {
						onChange(event) {
							onChangeHandler(name, event.target.value);
						},
					})}
					autoFocus={autofocus}
					type='text'
					id={name as string}
					className='block px-3 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-white rounded-xl border-2 border-black/50 appearance-none focus:outline-none focus:ring-0 peer placeholder-shown:placeholder:opacity-0 focus:placeholder:opacity-100 placeholder:transition-all'
					placeholder={placeholder}
				/>
				{/* <label
						htmlFor='floating_outlined'
						className='absolute z-10 px-2 text-base peer-focus:text-base peer-placeholder-shown:text-sm text-black duration-300 origin-[0] transform -translate-y-4 left-2 top-2 peer-focus:px-2 peer-focus:left-2 peer-focus:text-black peer-focus:top-2 peer-focus:-translate-y-4 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-gray-500 peer-placeholder-shown:left-1'>
						<span className='z-10'>Label</span>
						<span className='absolute h-0.5 w-full bg-white left-0 top-2 -z-10' />
				</label> */}
				<label
					htmlFor={name as string}
					className='absolute cursor-text text-black z-10 px-2 text-sm duration-300 transform -translate-y-4 bg-white top-2 left-6 origin-[0] peer-focus:px-2 peer-focus:text-black peer-focus:-translate-y-4 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-gray-500 peer-placeholder-shown:left-3 peer-focus:top-2 peer-focus:left-6'>
					{label}
				</label>
			</div>
			{errors && errors[name] && (
				<p className='mt-2 text-sm text-red-400'>
					{(errors[name] as FieldError).message}
				</p>
			)}
		</div>
	);
};

export default FloatingLabelInput;
