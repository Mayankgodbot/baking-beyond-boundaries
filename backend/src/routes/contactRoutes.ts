import { Router } from 'express';
import { submitContact, getAllContacts, deleteContact } from '../controllers/contactController';

const router = Router();

router.post('/', submitContact);
router.get('/', getAllContacts);
router.delete('/:id', deleteContact);

export default router;