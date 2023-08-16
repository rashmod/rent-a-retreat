import {
	Dispatch,
	ReactElement,
	SetStateAction,
	createContext,
	useContext,
	useState,
} from 'react';

const INITIAL_DATA = {
	firstname: '',
	lastname: '',
	email: '',
};

type TFormData = {
	firstname: string;
	lastname: string;
	email: string;
};

type TFormContext = {
	formData: TFormData;
	setFormData: Dispatch<SetStateAction<TFormData>>;
};

const DEFAULT_VALUE = {
	formData: INITIAL_DATA,
	setFormData: (formData: TFormData) => {
		return;
	},
} as TFormContext;

export const FormContext = createContext(DEFAULT_VALUE);

export function FormContextProvider({ children }: { children: ReactElement }) {
	const [formData, setFormData] = useState<TFormData>(INITIAL_DATA);
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
