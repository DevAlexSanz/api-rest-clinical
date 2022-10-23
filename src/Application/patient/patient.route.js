import express from 'express';
import validateMiddleware from 'middlewares/validate';
import {
  getAllPatient,
  createPatient,
  deletePatient,
  updatePatient,
} from './patient.controller';

import {
  createPatientsSchema,
  updatePatientsSchema,
} from './patient.validate';

const router = express.Router();

router.get('/', getAllPatient); // get all
router.post('/', validateMiddleware(createPatientsSchema), createPatient); // create user
router.put('/:patientId', validateMiddleware(updatePatientsSchema), updatePatient); // update user
router.delete('/:patientId', deletePatient); // delete user

export default router;
