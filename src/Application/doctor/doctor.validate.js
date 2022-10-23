import Joi from 'joi';

export const createDoctorsSchema = Joi.object({
  fullName: Joi.string().required(),
  age: Joi.number().required(),
  address: Joi.string().required(),
  numberPhone: Joi.number().required().error((errors) => {
    errors.forEach((err) => {
      if (err.code === 'any.required') {
        err.message = 'Ingrese los campos requeridos';
      }
    });
    return errors;
  }),
});

export const updateDoctorsSchema = Joi.object({
  fullName: Joi.string().required(),
  age: Joi.number().required(),
  address: Joi.string().required(),
  numberPhone: Joi.number().required(),
}).or('fullName', 'age', 'address', 'numberPhone');
