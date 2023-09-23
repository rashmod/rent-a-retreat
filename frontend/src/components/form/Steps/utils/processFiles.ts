import { FileWithUrl } from '../../../../schema/PageSixSchema';

function processFiles(
	fileList: FileList,
	MAX_FILE_SIZE: number
): FileWithUrl[] {
	const files: FileWithUrl[] = Array.from(fileList).reduce(
		(acc: FileWithUrl[], file: File) => {
			if (file.size <= MAX_FILE_SIZE) {
				acc.push({
					image: file,
					localURL: URL.createObjectURL(file),
				});
			}
			return acc;
		},
		[]
	);
	return files;
}

export default processFiles;
