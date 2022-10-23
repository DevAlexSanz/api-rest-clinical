import Joi from 'joi';

export const createMedicinesSchema = Joi.object({
  nameMedicine: Joi.string().required(),
  description: Joi.string().required(),
  sideEffect: Joi.string().required().error((errors) => {
    errors.forEach((err) => {
      if (err.code === 'any.required') {
        err.message = 'Por favor ingrese todos los campos';
      }
    });
    return errors;
  }),
});

export const updateMedicinesSchema = Joi.object({
  nameMedicine: Joi.string().required(),
  description: Joi.number().required(),
  sideEffect: Joi.string().required(),
}).or('nameMedicine', 'description', 'sideEffect');
