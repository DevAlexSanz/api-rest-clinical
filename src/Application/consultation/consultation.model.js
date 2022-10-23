import mongoose from 'mongoose';
import getModelName from 'Utils/getModelName';
import { pluralName as patientModelName } from '../patient/patient.model';
import { pluralName as doctorModelName } from '../doctor/doctor.model';
import { pluralName as medicineModelName } from '../medicine/medicine.model';

const { Schema } = mongoose;
export const { singularName, pluralName } = getModelName('consultation');

const schema = new Schema(
  {
    description: {
      type: String,
      required: true,
    },
    patient: {
      type: Schema.Types.ObjectId,
      ref: patientModelName,
      required: true,
    },
    doctor: {
      type: Schema.Types.ObjectId,
      ref: doctorModelName,
      required: true,
    },
    medicine: {
      type: Schema.Types.ObjectId,
      ref: medicineModelName,
      required: true,
    },
    status: {
      type: String,
      enum: ['active', 'inactive'],
      default: 'active',
    },
    created_at: {
      type: Date,
      default: Date.now,
    },
  },
  {
    versionKey: false,
  }
);

// Ensure virtual fields are serialised.
schema.set('toJSON', {
  virtuals: true,
  versionKey: false,
  transform(_doc, ret) {
    delete ret._id;
  },
});

// rename name Example to singular Model
export default mongoose.models[singularName]
  || mongoose.model(pluralName, schema);
