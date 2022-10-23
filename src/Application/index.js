import express from 'express';
import medicineRoutes from './medicine/medicine.route';
import patientRoutes from './patient/patient.route';
import doctorRoutes from './doctor/doctor.route';
import consultationRoutes from './consultation/consultation.route';
import publicRoutes from './upload/upload.route';

const router = express.Router();

router.use('/medicines', medicineRoutes);
router.use('/patients', patientRoutes);
router.use('/doctors', doctorRoutes);
router.use('/consultation', consultationRoutes);
router.use('/public', publicRoutes);

export default router;
