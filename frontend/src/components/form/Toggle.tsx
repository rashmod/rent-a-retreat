import {
	FieldValues,
	Path,
	PathValue,
	UseFormRegister,
	UseFormResetField,
	UseFormSetValue,
	UseFormUnregister,
} from 'react-hook-form';
import { useFormState } from '../../store/store';

export type TInputProps<TSchema extends FieldValues> = {
	register: UseFormRegister<TSchema>;
	label: string;
	name: Path<TSchema>;
};

type TToggleProps<TSchema extends FieldValues> = TInputProps<TSchema> & {
	connectedFields: string[];
	resetField: UseFormResetField<TSchema>;
	unregister: UseFormUnregister<TSchema>;
	setValue: UseFormSetValue<TSchema>;
};

const Toggle = <TSchema extends FieldValues>({
	register,
	label,
	name,
	connectedFields,
	resetField,
	unregister,
	setValue,
}: TToggleProps<TSchema>) => {
	const { setFormDataFromContext, setFormData } = useFormState();

	const onChangeHelper = (event: React.ChangeEvent<HTMLInputElement>) => {
		setFormDataFromContext(name, event.target.checked);

		for (let i = 0; i < connectedFields.length; i++) {
			resetField(connectedFields[i] as Path<TSchema>);
			// setFormDataFromContext(connectedFields[i] as Path<TSchema>, '');
		}
		if (!event.target.checked) {
			setFormData((prev) => ({
				...prev,
				percentRefundable: undefined,
				daysBeforeCancellation: undefined,
			}));
			unregister('percentRefundable' as Path<TSchema>);
			unregister('daysBeforeCancellation' as Path<TSchema>);
		} else {
			setFormData((prev) => ({
				...prev,
				percentRefundable: '',
				daysBeforeCancellation: '',
			}));

			setValue(
				'percentRefundable' as Path<TSchema>,
				'' as PathValue<TSchema, Path<TSchema>>
			);
			setValue(
				'daysBeforeCancellation' as Path<TSchema>,
				'' as PathValue<TSchema, Path<TSchema>>
			);
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
