import express from 'express';
import {
  getAllConsultation,
  createConsultation,
  deleteConsultation,
  updateConsultation,
} from './consultation.controller';

const router = express.Router();

router.get('/', getAllConsultation); // get all
router.post('/', createConsultation); // create user
router.put('/:consultationId', updateConsultation); // update user
router.delete('/:consultationId', deleteConsultation); // delete user

export default router;
