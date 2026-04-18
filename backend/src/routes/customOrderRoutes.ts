import { Router } from 'express';
import { 
  createCustomOrder,
  getAllCustomOrders,
  getCustomOrderById,
  updateCustomOrderStatus,
  deleteCustomOrder
} from '../controllers/customOrderController';

const router = Router();

router.post('/', createCustomOrder);
router.get('/', getAllCustomOrders);
router.get('/:id', getCustomOrderById);
router.patch('/:id', updateCustomOrderStatus);
router.delete('/:id', deleteCustomOrder);

export default router;