import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';

import connectDB from './db/prisma';

import UserRoutes from './routes/UserRoutes';
import ListingRoutes from './routes/ListingRoutes';
import CategoryRoutes from './routes/CategoryRoutes';
import AmenityRoutes from './routes/AmenityRoutes';
import HouseRuleRoutes from './routes/HouseRuleRoutes';
import ListingPhotoRoutes from './routes/ListingPhotoRoutes';
import ProfilePhotoRoutes from './routes/ProfilePhotoRoutes';
import EmergencyContactRoutes from './routes/EmergencyContactRoutes';
import AddressRoutes from './routes/AddressRoutes';
import ReservationRoutes from './routes/ReservationRoutes';

dotenv.config();

const app = express();

app.use(express.json());
app.use(cors());

app.use('/api/users', UserRoutes);
app.use('/api/listings', ListingRoutes);
app.use('/api/categories', CategoryRoutes);
app.use('/api/amenities', AmenityRoutes);
app.use('/api/houseRules', HouseRuleRoutes);
app.use('/api/listing', ListingPhotoRoutes);
app.use('/api/user', ProfilePhotoRoutes);
app.use('/api/host', EmergencyContactRoutes);
app.use('/api/address', AddressRoutes);
app.use('/api/reservation', ReservationRoutes);

connectDB();

app.listen(process.env.PORT, () => {
	console.log(`server running on port: ${process.env.PORT}`);
});
