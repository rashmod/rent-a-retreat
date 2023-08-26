import { FieldValues, FieldError, RegisterOptions } from 'react-hook-form';
import { TInputProps } from './Toggle';
import { useFormState } from '../../store/store';

type TFloatingLabelInputProps<TSchema extends FieldValues> =
	TInputProps<TSchema> & {
		registerOptions?: RegisterOptions;
		placeholder: string;
		autofocus?: boolean;
		disabled?: boolean;
	};
const FloatingLabelInput = <TSchema extends FieldValues>({
	register,
	// onChangeHandler,
	label,
	placeholder,
	errors,
	name,
	autofocus = false,
	disabled = false,
	registerOptions = {},
}: TFloatingLabelInputProps<TSchema>) => {
	const { setFormDataFromContext } = useFormState();

	return (
		<div className='w-full'>
			<div className='relative'>
				<input
					{...register(name, {
						onChange(event) {
							setFormDataFromContext(name, event.target.value);
						},
						...registerOptions,
					})}
					autoFocus={autofocus}
					disabled={disabled}
					type='text'
					id={name as string}
					className='block px-3 pb-2.5 pt-4 duration-300 w-full text-sm text-gray-900 bg-white rounded-xl border-2 border-black/50 appearance-none focus:outline-none focus:ring-0 peer placeholder-shown:placeholder:opacity-0 focus:placeholder:opacity-100 placeholder:transition-all disabled:bg-my-primary-100 disabled:cursor-not-allowed'
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
					className='absolute cursor-text text-black z-10 px-2 text-sm duration-300 transform -translate-y-4 bg-white top-2 left-6 origin-[0] peer-focus:px-2 peer-focus:text-black peer-focus:-translate-y-4 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-gray-500 peer-placeholder-shown:left-3 peer-focus:top-2 peer-focus:left-6 peer-disabled:bg-my-primary-100 peer-disabled:cursor-not-allowed'>
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
