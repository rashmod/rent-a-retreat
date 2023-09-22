import { PutObjectCommand, PutObjectCommandInput } from '@aws-sdk/client-s3';

import generateRandomImageName from './generateRandomImageName';
import s3 from '../config/s3Config';

const uploadImageToS3 = async (
	imageArray: Express.Multer.File[] | undefined
) => {
	if (!imageArray) return [];

	const AWS_BUCKET_NAME = process.env.AWS_BUCKET_NAME;
	if (!AWS_BUCKET_NAME) {
		throw new Error('Please add AWS_BUCKET_NAME to environment variables');
	}

	const s3ImageArray = await Promise.all(
		imageArray.map(async (image, index) => {
			const listingImageName = await generateRandomImageName();
			const putObjectCommandParams = {
				Bucket: AWS_BUCKET_NAME,
				Key: listingImageName,
				Body: image.buffer,
				ContentType: image.mimetype,
			};
			const command = new PutObjectCommand(putObjectCommandParams);

			// todo add error handling
			// todo add retry function
			await s3.send(command);
			return { listingImageName, position: index + 1 };
		})
	);

	return s3ImageArray;
};

export default uploadImageToS3;
