import express from 'express';
import dotenv from 'dotenv';

import connectDB from './db/prisma';

import UserRoutes from './routes/UserRoutes';
import ListingRoutes from './routes/ListingRoutes';

dotenv.config();

const app = express();

app.use(express.json());

app.use('/api/users', UserRoutes);
app.use('/api/listings', ListingRoutes);

connectDB();

app.listen(process.env.PORT, () => {
	console.log(`server running on port: ${process.env.PORT}`);
});
