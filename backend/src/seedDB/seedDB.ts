import connectDB, { prisma } from '../db/prisma';
import addUsersToDB from './addUsersToDB';
import deleteAllUsers from './deleteAllUsers';
import { seedCallback } from './utils';

connectDB();

// seedCallback(seedHouseRules, 'house rules');
// seedCallback(seedCategories, 'categories');
// seedCallback(seedAmenities, 'amenities');

seedCallback(() => addUsersToDB(1), 'user');
// seedCallback(deleteAllUsers, 'delete users');
