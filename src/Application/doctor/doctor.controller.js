import DoctorModel from './doctor.model';

export const getAllDoctor = async (req, res) => {
  try {
    const data = await DoctorModel.find({ status: 'active' });
    return res.status(200).json(data);
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      message: 'Error al obtener los datos',
      code: 500,
    });
  }
};

export const createDoctor = async (req, res) => {
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
    const data = await DoctorModel.create({
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

export const updateDoctor = async (req, res) => {
  const payload = req.body;
  const { doctorId } = req.params;

  if (Object.keys(payload).length === 0) {
    return res.status(400).json({
      message: 'Faltan datos o no a enviado el ID, Intentelo nuevamente!',
      code: 400,
    });
  }

  try {
    const data = await DoctorModel.findByIdAndUpdate(doctorId, payload);
    return res.status(200).json({
      ...data,
      ...payload
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      message: 'Error al actualizar al Doctor',
      code: 500,
    });
  }
};

export const deleteDoctor = async (req, res) => {
  const { doctorId } = req.params;

  if (!doctorId) {
    return res.status(400).json({
      message: 'Por favor envie el id del Doctor que desea eliminar',
      code: 400,
    });
  }

  try {
    await DoctorModel.findByIdAndUpdate(doctorId, { status: 'inactive' });
    return res.status(200).json({
      message: 'Doctor eliminado satisfactoriamente!',
      code: 200,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      message: 'Error al eliminar al Doctor',
      code: 500,
    });
  }
};
