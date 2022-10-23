import Joi from 'joi';

export const createPatientsSchema = Joi.object({
  fullName: Joi.string().required(),
  age: Joi.number().required(),
  address: Joi.string().required(),
  numberPhone: Joi.number().required().error((errors) => {
    errors.forEach((err) => {
      if (err.code === 'any.required') {
        err.message = 'Por favor ingrese todos los campos';
      }
    });
    return errors;
  }),
});

export const updatePatientsSchema = Joi.object({
  fullName: Joi.string().required(),
  age: Joi.number().required(),
  address: Joi.string().required(),
  numberPhone: Joi.number().required(),
}).or('fullName', 'age', 'address', 'numberPhone');
