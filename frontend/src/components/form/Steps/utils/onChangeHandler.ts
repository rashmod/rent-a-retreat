import { Dispatch, SetStateAction } from 'react';
import { TFormData } from '../../../../store/store';

type TOnChangeHandler<T> = (name: keyof T, value: string | boolean) => void;

const createOnChangeHandler =
	<T extends TFormData>(
		setFormData: Dispatch<SetStateAction<T>>
	): TOnChangeHandler<T> =>
	(name, value) => {
		setFormData((prev) => {
			return {
				...prev,
				[name]: value,
			};
		});
	};

export default createOnChangeHandler;
