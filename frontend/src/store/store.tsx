import {
	Dispatch,
	ReactElement,
	SetStateAction,
	createContext,
	useContext,
	useState,
} from 'react';

import { STORE_INITIAL_DATA } from '../data/data';
import { TPageOneSchema } from '../schema/PageOneSchema';
import { TPageTwoSchema } from '../schema/PageTwoSchema';
import { TPageThreeSchema } from '../schema/PageThreeSchema';
import { TPageFourSchema } from '../schema/PageFourSchema';
import { TPageFiveSchema } from '../schema/PageFiveSchema';

export type TFormData = TPageOneSchema &
	TPageTwoSchema &
	TPageThreeSchema &
	TPageFourSchema &
	TPageFiveSchema;

type TFormContext = {
	formData: TFormData;
	setFormData: Dispatch<SetStateAction<TFormData>>;
	setFormDataFromContext: (
		name: string,
		value: string | number | boolean
	) => void;
};

const DEFAULT_VALUE = {
	formData: STORE_INITIAL_DATA,
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	setFormData: (formData: TFormData) => {
		return;
	},
	setFormDataFromContext: (name, value) => {
		return;
	},
} as TFormContext;

export const FormContext = createContext<TFormContext>(DEFAULT_VALUE);

export function FormContextProvider({ children }: { children: ReactElement }) {
	const [formData, setFormData] = useState<TFormData>(STORE_INITIAL_DATA);
	const setFormDataFromContext = (
		name: string,
		value: string | number | boolean
	) => {
		setFormData((prev) => ({ ...prev, [name]: value }));
	};

	return (
		<FormContext.Provider
			value={{
				formData,
				setFormData,
				setFormDataFromContext,
			}}>
			{children}
		</FormContext.Provider>
	);
}
// eslint-disable-next-line react-refresh/only-export-components
export function useFormState() {
	const context = useContext(FormContext);
	if (!context) {
		throw new Error(
			'useFormState must be used within the FormContextProvider'
		);
	}
	return context;
}
