import PatientModel from './patient.model';

export const getAllPatient = async (req, res) => {
  try {
    const data = await PatientModel.find({ status: 'active' });
    return res.status(200).json(data);
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      message: 'Error al obtener los datos',
      code: 500,
    });
  }
};

export const createPatient = async (req, res) => {
  const {
    fullName,
    age,
    address,
    numberPhone
  } = req.body;

  if (!fullName || !age || !address || !numberPhone) {
    return res.status(400).json({
      message:
        'Faltan datos, la consulta debe contener fullName, age y address y numberPhone',
      code: 400,
    });
  }

  try {
    const data = await PatientModel.create({
      fullName,
      age,
      address,
      numberPhone,
    });
    return res.status(200).json(data);
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      message: 'Error al crear un nuevo Usuario',
      code: 500,
    });
  }
};

export const updatePatient = async (req, res) => {
  const payload = req.body;
  const { patientId } = req.params;

  if (Object.keys(payload).length === 0) {
    return res.status(400).json({
      message: 'Faltan datos o no a enviado el ID, Intentelo nuevamente!',
      code: 400,
    });
  }

  try {
    const data = await PatientModel.findByIdAndUpdate(patientId, payload);
    return res.status(200).json({
      ...data,
      ...payload
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      message: 'Error al actualizar al Paciente',
      code: 500,
    });
  }
};

export const deletePatient = async (req, res) => {
  const { patientId } = req.params;

  if (!patientId) {
    return res.status(400).json({
      message: 'Por favor envie el id del Paciente que desea eliminar',
      code: 400,
    });
  }

  try {
    await PatientModel.findByIdAndUpdate(patientId, { status: 'inactive' });
    return res.status(200).json({
      message: 'Paciente eliminado satisfactoriamente!',
      code: 200,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      message: 'Error al eliminar al paciente',
      code: 500,
    });
  }
};
