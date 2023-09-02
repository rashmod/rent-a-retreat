import {
	ChangeEvent,
	DragEvent,
	useCallback,
	useEffect,
	useState,
} from 'react';
import { Trash2, UploadCloud } from 'lucide-react';

import { TStepProps } from '../../../types/form/steps';
import FormWrapper from '../FormWrapper';
import Navigation from '../Navigation';
import { useFormState } from '../../../store/store';
import { cn } from '../../../lib/utils';
import processFiles from './utils/processFiles';
import useFileReducer from './utils/useFileReducer';
import { FileWithUrl } from '../../../schema/PageSixSchema';

const MAX_FILE_SIZE = 2 * 1024 * 1024; // 2 MB

const PageSix = ({
	isFirstPage,
	isLastPage,
	goToNextPage,
	goToPreviousPage,
}: TStepProps) => {
	// todo show error on image size exceed size or name conflict
	const [dragActive, setDragActive] = useState(false);
	const {
		formData: { images: initialImages },
		setFormData,
	} = useFormState();

	const [input, dispatch] = useFileReducer();
	const noInput = input.length === 0;

	const addFilesToState = useCallback(
		(files: FileWithUrl[]) => {
			dispatch({ type: 'ADD_FILES_TO_INPUT', payload: files });
		},
		[dispatch]
	);

	const removeFileFromState = useCallback(
		(fileName: string) => {
			dispatch({ type: 'REMOVE_FILE_FROM_INPUT', payload: fileName });
		},
		[dispatch]
	);

	useEffect(() => {
		addFilesToState(initialImages);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	const handleChange = useCallback(
		async (event: ChangeEvent<HTMLInputElement>) => {
			if (event.target.files && event.target.files[0]) {
				const files = processFiles(event.target.files, MAX_FILE_SIZE);
				addFilesToState(files);
			}
		},
		[addFilesToState]
	);

	const handleDrag = useCallback((event: DragEvent<HTMLLabelElement>) => {
		event.preventDefault();
		event.stopPropagation();
		if (event.type === 'dragenter' || event.type === 'dragover') {
			setDragActive(true);
		} else if (event.type === 'dragleave') {
			setDragActive(false);
		}
	}, []);

	const handleDrop = useCallback(
		async (event: DragEvent<HTMLLabelElement>) => {
			event.preventDefault();
			event.stopPropagation();

			// validate file type
			if (event.dataTransfer.files && event.dataTransfer.files[0]) {
				const files = processFiles(
					event.dataTransfer.files,
					MAX_FILE_SIZE
				);

				setDragActive(false);
				addFilesToState(files);
				event.dataTransfer.clearData();
			}
		},
		[addFilesToState]
	);

	const onSubmit = () => {
		setFormData((prev) => ({
			...prev,
			images: input,
		}));
		goToNextPage();
	};

	return (
		<FormWrapper>
			<form onSubmit={onSubmit}>
				<div className='mb-5 rounded-xl bg-my-primary-100 min-h-32'>
					{noInput ? (
						<div className='flex flex-col items-center justify-center h-32 p-3 text-center'>
							<p>Added images will be previewed here.</p>
							<p>No images added yet</p>
						</div>
					) : (
						<div className='p-3'>
							<div className='grid w-full grid-cols-3 gap-3 mx-auto'>
								{input.map((image) => (
									<div
										key={image.localURL}
										className='relative group'>
										<img
											src={image.localURL}
											className='object-cover w-full rounded-md aspect-square min-w-32'
											loading='lazy'
										/>
										<div className='absolute inset-0 flex items-center justify-center gap-4 text-white transition duration-200 bg-black rounded-md opacity-0 bg-opacity-70 group-hover:opacity-100'>
											<Trash2
												className='hover:text-red-400'
												onClick={() =>
													removeFileFromState(
														image.image.name
													)
												}
											/>
										</div>
									</div>
								))}
							</div>
						</div>
					)}
				</div>
				<div className='mb-10'>
					<input
						type='file'
						accept='image/jpeg, image/jpg, image/png'
						multiple
						className='hidden'
						onChange={handleChange}
						id='images'
					/>
					<label
						htmlFor='images'
						className={cn(
							'flex flex-col items-center justify-center h-32 transition duration-200 border-2 border-black border-dashed cursor-pointer group rounded-xl hover:bg-my-primary-100',
							{
								'bg-my-primary-100': dragActive,
							}
						)}
						onDragEnter={handleDrag}
						onDragLeave={handleDrag}
						onDragOver={handleDrag}
						onDrop={handleDrop}>
						<UploadCloud height={50} width={50} />
						<span>Click to upload or drag and drop images</span>
						<span className='mt-1 text-xs transition duration-200 text-slate-400 group-hover:text-slate-700'>
							up to 10 images,{' '}
							{(MAX_FILE_SIZE / (1024 * 1024)).toFixed(0)} MB per
							file
						</span>
					</label>
				</div>
				<Navigation
					goToPreviousPage={goToPreviousPage}
					isFirstPage={isFirstPage}
					isLastPage={isLastPage}
				/>
			</form>
		</FormWrapper>
	);
};

export default PageSix;
