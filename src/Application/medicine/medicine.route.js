import express from 'express';
import validateMiddleware from 'middlewares/validate';
import {
  getAllMedicine,
  createMedicine,
  deleteMedicine,
  updateMedicine,
} from './medicine.controller';

import {
  createMedicinesSchema,
  updateMedicinesSchema,
} from './medicine.validate';

const router = express.Router();

router.get('/', getAllMedicine); // get all
router.post('/', validateMiddleware(createMedicinesSchema), createMedicine); // create user
router.put('/:medicineId', validateMiddleware(updateMedicinesSchema), updateMedicine); // update user
router.delete('/:medicineId', deleteMedicine); // delete user

export default router;
