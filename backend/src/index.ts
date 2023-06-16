import express from 'express';
import dotenv from 'dotenv';
import connectDB from './db/prisma';

dotenv.config();

const app = express();

connectDB();

app.listen(process.env.PORT, () => {
	console.log(`server running on port: ${process.env.PORT}`);
});
