import { FileWithUrl } from '../../../../schema/PageSixSchema';

function removeDuplicateFiles(
	originalFiles: FileWithUrl[],
	filesToAdd: FileWithUrl[]
) {
	const idMap = new Set(originalFiles.map((obj) => obj.image.name));
	return filesToAdd.filter((obj) => !idMap.has(obj.image.name));
}

export default removeDuplicateFiles;
