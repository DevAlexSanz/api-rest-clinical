import express from 'express';
import clinical from '../Application';

const router = express.Router();

router.use('/clinical', clinical);
export default router;
