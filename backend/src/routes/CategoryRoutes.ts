import { Router } from 'express';
import {
	deleteCategory,
	getAllCategories,
	postCategory,
} from '../controllers/CategoryController';

const router = Router();

router.get('/', getAllCategories);

router.post('/', postCategory);

router.delete('/:categoryId', deleteCategory);

export default router;
