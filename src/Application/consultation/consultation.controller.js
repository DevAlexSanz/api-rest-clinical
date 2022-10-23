import ConsultationModel from './consultation.model';

export const getAllConsultation = async (req, res) => {
  try {
    const data = await ConsultationModel.find({ status: 'active' }).populate(['patient', 'doctor', 'medicine']);
    return res.status(200).json(data);
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      message: 'Error al obtener los datos',
      code: 500,
    });
  }
};

export const createConsultation = async (req, res) => {
  const {
    description,
    patient,
    doctor,
    medicine,
  } = req.body;
  if (!description || !patient || !doctor || !medicine) {
    return res.status(400).json({
      message:
        'Faltan datos, la consulta debe contener description, medicine, patient y doctor',
      code: 400,
    });
  }

  try {
    const data = await ConsultationModel.create({
      description,
      patient,
      doctor,
      medicine,
    });
    return res.status(200).json(data);
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      message: 'Error al crear una nueva Consulta',
      code: 500,
    });
  }
};

export const updateConsultation = async (req, res) => {
  const payload = req.body;
  const { consultationId } = req.params;

  if (Object.keys(payload).length === 0) {
    return res.status(400).json({
      message: 'Faltan datos o no a enviado el ID, Intentelo nuevamente!',
      code: 400,
    });
  }

  try {
    const data = await ConsultationModel.findByIdAndUpdate(consultationId, payload, {
      new: true,
    }).populate(['patient', 'doctor', 'medicine']);
    return res.status(200).json({
      ...data,
      ...payload
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      message: 'Error al actualizar la Consulta',
      code: 500,
    });
  }
};

export const deleteConsultation = async (req, res) => {
  const { consultationId } = req.params;

  if (!consultationId) {
    return res.status(400).json({
      message: 'Por favor envie el id de la Consulta que desea eliminar',
      code: 400,
    });
  }

  try {
    await ConsultationModel.findByIdAndUpdate(consultationId, { status: 'inactive' });
    return res.status(200).json({
      message: 'Consulta eliminada satisfactoriamente!',
      code: 200,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      message: 'Error al eliminar la consulta',
      code: 500,
    });
  }
};
