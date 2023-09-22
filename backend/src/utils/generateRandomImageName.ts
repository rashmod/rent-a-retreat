import bcrypt from 'bcrypt';

const generateRandomImageName = async () => {
	const imageName = await bcrypt.hash(Date.now().toString(), 1);
	return imageName;
};

export default generateRandomImageName;
