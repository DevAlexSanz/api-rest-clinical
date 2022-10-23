import express from 'express';
import validateMiddleware from 'middlewares/validate';
import {
  getAllDoctor,
  createDoctor,
  deleteDoctor,
  updateDoctor,
} from './doctor.controller';

import {
  createDoctorsSchema,
  updateDoctorsSchema,
} from './doctor.validate';

const router = express.Router();

router.get('/', getAllDoctor); // get all
router.post('/', validateMiddleware(createDoctorsSchema), createDoctor); // create user
router.put('/:doctorId', validateMiddleware(updateDoctorsSchema), updateDoctor); // update user
router.delete('/:doctorId', deleteDoctor); // delete user

export default router;
