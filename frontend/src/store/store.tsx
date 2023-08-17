import {
	Dispatch,
	ReactElement,
	SetStateAction,
	createContext,
	useContext,
	useState,
} from 'react';
import { TPageOneSchema } from '../components/form/Steps/PageOne';
import { TPageTwoSchema } from '../components/form/Steps/PageTwo';
import { TPageThreeSchema } from '../components/form/Steps/PageThree';
import { STORE_INITIAL_DATA } from '../data/data';

export type TFormData = TPageOneSchema & TPageTwoSchema & TPageThreeSchema;

type TFormContext = {
	formData: TFormData;
	setFormData: Dispatch<SetStateAction<TFormData>>;
};

const DEFAULT_VALUE = {
	formData: STORE_INITIAL_DATA,
	setFormData: (formData: TFormData) => {
		return;
	},
} as TFormContext;

export const FormContext = createContext(DEFAULT_VALUE);

export function FormContextProvider({ children }: { children: ReactElement }) {
	const [formData, setFormData] = useState<TFormData>(STORE_INITIAL_DATA);
	return (
		<FormContext.Provider value={{ formData, setFormData }}>
			{children}
		</FormContext.Provider>
	);
}

export function useFormState() {
	const context = useContext(FormContext);
	if (!context) {
		throw new Error(
			'useFormState must be used within the FormContextProvider'
		);
	}
	return context;
}
