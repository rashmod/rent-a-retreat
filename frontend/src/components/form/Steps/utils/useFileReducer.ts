import { useReducer } from 'react';

import removeDuplicateFiles from './removeDuplicateFiles';
import { FileWithUrl } from '../PageSix';

// Reducer action(s)
const addFilesToInputAction = () => ({
	type: 'ADD_FILES_TO_INPUT' as const,
	payload: [] as FileWithUrl[],
});

const removeFileFromInputAction = () => ({
	type: 'REMOVE_FILE_FROM_INPUT' as const,
	payload: '',
});

type Action =
	| ReturnType<typeof addFilesToInputAction>
	| ReturnType<typeof removeFileFromInputAction>;

type State = FileWithUrl[];

const useFileReducer = () => {
	return useReducer((state: State, action: Action) => {
		switch (action.type) {
			case 'ADD_FILES_TO_INPUT': {
				const validFiles = removeDuplicateFiles(state, action.payload);
				if (state.length + validFiles.length > 10) {
					return state;
				}
				return [...state, ...validFiles];
			}
			case 'REMOVE_FILE_FROM_INPUT': {
				const fileToRemove = action.payload;
				return state.filter((file) => file.image.name != fileToRemove);
			}
		}
	}, []);
};

export default useFileReducer;
