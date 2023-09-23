const createValidArray = (ids: string | string[]) => {
	if (!Array.isArray(ids)) ids = [ids];
	return ids;
};

export default createValidArray;
