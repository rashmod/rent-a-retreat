import { S3Client } from '@aws-sdk/client-s3';

const AWS_ACCESS_KEY = process.env.AWS_ACCESS_KEY;
const AWS_SECRET_ACCESS_KEY = process.env.AWS_SECRET_ACCESS_KEY;
const AWS_BUCKET_REGION = process.env.AWS_BUCKET_REGION;

if (!AWS_ACCESS_KEY) {
	throw new Error('Please add AWS_ACCESS_KEY to environment variables');
}
if (!AWS_SECRET_ACCESS_KEY) {
	throw new Error(
		'Please add AWS_SECRET_ACCESS_KEY to environment variables'
	);
}
if (!AWS_BUCKET_REGION) {
	throw new Error('Please add AWS_BUCKET_REGION to environment variables');
}

const s3 = new S3Client({
	credentials: {
		accessKeyId: AWS_ACCESS_KEY,
		secretAccessKey: AWS_SECRET_ACCESS_KEY,
	},
	region: AWS_BUCKET_REGION,
});

export default s3;
