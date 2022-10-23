import MedicineModel from './medicine.model';

export const getAllMedicine = async (req, res) => {
  try {
    const data = await MedicineModel.find({ status: 'active' });
    return res.status(200).json(data);
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      message: 'Error al obtener los datos',
      code: 500,
    });
  }
};

export const createMedicine = async (req, res) => {
  const { nameMedicine, description, sideEffect } = req.body;

  if (!nameMedicine || !description || !sideEffect) {
    return res.status(400).json({
      message:
        'Faltan datos, la consulta debe contener nameMedicine, description y sideEffect',
      code: 400,
    });
  }

  try {
    const data = await MedicineModel.create({
      nameMedicine,
      description,
      sideEffect,
    });
    return res.status(200).json(data);
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      message: 'Error al crear un nuevo Medicamento',
      code: 500,
    });
  }
};

export const updateMedicine = async (req, res) => {
  const payload = req.body;
  const { medicineId } = req.params;

  if (Object.keys(payload).length === 0) {
    return res.status(400).json({
      message: 'Faltan datos o no a enviado el ID, Intentelo nuevamente!',
      code: 400,
    });
  }

  try {
    const data = await MedicineModel.findByIdAndUpdate(medicineId, payload);
    return res.status(200).json({
      ...data,
      ...payload
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      message: 'Error al actualizar el Medicamento',
      code: 500,
    });
  }
};

export const deleteMedicine = async (req, res) => {
  const { medicineId } = req.params;

  if (!medicineId) {
    return res.status(400).json({
      message: 'Por favor envie el id del Medicamento que desea eliminar',
      code: 400,
    });
  }

  try {
    await MedicineModel.findByIdAndUpdate(medicineId, { status: 'inactive' });
    return res.status(200).json({
      message: 'Medicamento eliminado satisfactoriamente!',
      code: 200,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      message: 'Error al eliminar el medicamento',
      code: 500,
    });
  }
};
