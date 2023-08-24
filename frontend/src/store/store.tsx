import {
	Dispatch,
	ReactElement,
	SetStateAction,
	createContext,
	useContext,
	useState,
} from 'react';

import { STORE_INITIAL_DATA } from '../data/data';
import { TPageOneSchema } from '../types/form/PageOne';
import { TPageTwoSchema } from '../types/form/PageTwo';
import { TPageThreeSchema } from '../types/form/PageThree';
import { TPageFourSchema } from '../types/form/PageFour';

export type TFormData = TPageOneSchema &
	TPageTwoSchema &
	TPageThreeSchema &
	TPageFourSchema;

type TFormContext = {
	formData: TFormData;
	setFormData: Dispatch<SetStateAction<TFormData>>;
};

const DEFAULT_VALUE = {
	formData: STORE_INITIAL_DATA,
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	setFormData: (formData: TFormData) => {
		return;
	},
} as TFormContext;

export const FormContext = createContext<TFormContext>(DEFAULT_VALUE);

export function FormContextProvider({ children }: { children: ReactElement }) {
	const [formData, setFormData] = useState<TFormData>(STORE_INITIAL_DATA);
	return (
		<FormContext.Provider value={{ formData, setFormData }}>
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
