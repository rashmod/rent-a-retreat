import {
	FieldErrors,
	FieldValues,
	Path,
	UseFormRegister,
	UseFormResetField,
} from 'react-hook-form';

export type TInputProps<TSchema extends FieldValues> = {
	register: UseFormRegister<TSchema>;
	onChangeHandler: (name: Path<TSchema>, value: string | boolean) => void;
	errors?: FieldErrors<TSchema>;
	label: string;
	name: Path<TSchema>;
	connectedFields?: string[];
	resetField?: UseFormResetField<TSchema>;
};

const Toggle = <TSchema extends FieldValues>({
	register,
	onChangeHandler,
	label,
	name,
	connectedFields,
	resetField,
}: TInputProps<TSchema>) => {
	const onChangeHelper = (event: React.ChangeEvent<HTMLInputElement>) => {
		onChangeHandler(name, event.target.checked);
		if (connectedFields && resetField) {
			for (let i = 0; i < connectedFields.length; i++) {
				resetField(connectedFields[i] as Path<TSchema>);
				onChangeHandler(connectedFields[i] as Path<TSchema>, '');
			}
		}
	};

	return (
		<label
			htmlFor={name}
			className='relative inline-flex items-center gap-5 cursor-pointer'>
			<input
				{...register(name, { onChange: onChangeHelper })}
				type='checkbox'
				className='sr-only peer'
				id={name}
				name={name}
			/>
			<span className='text-sm text-gray-900'>{label}</span>
			<div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-my-accent-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-my-accent-600" />
		</label>
	);
};

export default Toggle;
