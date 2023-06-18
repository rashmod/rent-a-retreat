import { Router } from 'express';
import { postAddress, deleteAddress } from '../controllers/AddressController';

const router = Router();

router.post('/:ownerId', postAddress);

router.delete('/:ownerId/:addressId', deleteAddress);

export default router;
